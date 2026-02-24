"use client";
import { useEffect, useRef } from "react";

function normalizeColor(hexCode: number): number[] {
    return [
        ((hexCode >> 16) & 255) / 255,
        ((hexCode >> 8) & 255) / 255,
        (255 & hexCode) / 255,
    ];
}

class MiniGl {
    canvas: HTMLCanvasElement;
    gl: WebGLRenderingContext;
    meshes: any[] = [];
    commonUniforms: any;
    width?: number;
    height?: number;
    Material: any;
    Uniform: any;
    PlaneGeometry: any;
    Mesh: any;
    Attribute: any;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        const gl = this.canvas.getContext("webgl", { antialias: true });
        if (!gl) throw new Error("WebGL not supported");
        this.gl = gl;

        const context = this.gl;
        const _miniGl = this;

        this.Uniform = class {
            type: string = "float";
            value: any;
            typeFn: string;
            excludeFrom?: string;
            transpose?: boolean;

            constructor(e: any) {
                Object.assign(this, e);
                const typeMap: Record<string, string> = {
                    float: "1f",
                    int: "1i",
                    vec2: "2fv",
                    vec3: "3fv",
                    vec4: "4fv",
                    mat4: "Matrix4fv",
                };
                this.typeFn = typeMap[this.type] || "1f";
            }

            update(location: any): void {
                if (this.value === undefined || location === null) return;

                const isMatrix = this.typeFn.indexOf("Matrix") === 0;
                const fn = `uniform${this.typeFn}`;

                if (isMatrix) {
                    (context as any)[fn](location, this.transpose || false, this.value);
                } else {
                    (context as any)[fn](location, this.value);
                }
            }

            getDeclaration(name: string, type: string, length?: number): string {
                if (this.excludeFrom === type) return "";

                if (this.type === "array") {
                    return (
                        this.value[0].getDeclaration(name, type, this.value.length) +
                        `
const int ${name}_length = ${this.value.length};`
                    );
                }

                if (this.type === "struct") {
                    let nameNoPrefix = name.replace("u_", "");
                    nameNoPrefix =
                        nameNoPrefix.charAt(0).toUpperCase() + nameNoPrefix.slice(1);
                    const fields = Object.entries(this.value)
                        .map(([n, u]: [string, any]) =>
                            u.getDeclaration(n, type).replace(/^uniform/, "")
                        )
                        .join("");
                    return `uniform struct ${nameNoPrefix} 
{
${fields}
} ${name}${length ? `[${length}]` : ""};`;
                }

                return `uniform ${this.type} ${name}${length ? `[${length}]` : ""};`;
            }
        };

        this.Attribute = class {
            type: number = context.FLOAT;
            normalized: boolean = false;
            buffer: WebGLBuffer;
            target!: number;
            size!: number;
            values?: Float32Array | Uint16Array;

            constructor(e: any) {
                this.buffer = context.createBuffer()!;
                Object.assign(this, e);
            }

            update(): void {
                if (this.values) {
                    context.bindBuffer(this.target, this.buffer);
                    context.bufferData(this.target, this.values, context.STATIC_DRAW);
                }
            }

            attach(e: string, t: WebGLProgram): number {
                const n = context.getAttribLocation(t, e);
                if (this.target === context.ARRAY_BUFFER) {
                    context.bindBuffer(this.target, this.buffer);
                    context.enableVertexAttribArray(n);
                    context.vertexAttribPointer(
                        n,
                        this.size,
                        this.type,
                        this.normalized,
                        0,
                        0
                    );
                }
                return n;
            }

            use(e: number): void {
                context.bindBuffer(this.target, this.buffer);
                if (this.target === context.ARRAY_BUFFER) {
                    context.enableVertexAttribArray(e);
                    context.vertexAttribPointer(
                        e,
                        this.size,
                        this.type,
                        this.normalized,
                        0,
                        0
                    );
                }
            }
        };

        this.Material = class {
            uniforms: any;
            uniformInstances: any[] = [];
            program!: WebGLProgram;

            constructor(
                vertexShaders: string,
                fragments: string,
                uniforms: any = {}
            ) {
                const material = this;

                function getShader(type: number, source: string): WebGLShader {
                    const shader = context.createShader(type)!;
                    context.shaderSource(shader, source);
                    context.compileShader(shader);
                    if (!context.getShaderParameter(shader, context.COMPILE_STATUS)) {
                        console.error(context.getShaderInfoLog(shader));
                        throw new Error("Shader compilation error");
                    }
                    return shader;
                }

                function getUniformDeclarations(uniforms: any, type: string): string {
                    return Object.entries(uniforms)
                        .map(([uniform, value]: [string, any]) =>
                            value.getDeclaration(uniform, type)
                        )
                        .join("\n");
                }

                material.uniforms = uniforms;
                const prefix = "precision highp float;";

                const vertexSource = `
          ${prefix}
          attribute vec4 position;
          attribute vec2 uv;
          attribute vec2 uvNorm;
          ${getUniformDeclarations(_miniGl.commonUniforms, "vertex")}
          ${getUniformDeclarations(uniforms, "vertex")}
          ${vertexShaders}
        `;

                const fragmentSource = `
          ${prefix}
          ${getUniformDeclarations(_miniGl.commonUniforms, "fragment")}
          ${getUniformDeclarations(uniforms, "fragment")}
          ${fragments}
        `;

                material.program = context.createProgram()!;
                context.attachShader(
                    material.program,
                    getShader(context.VERTEX_SHADER, vertexSource)
                );
                context.attachShader(
                    material.program,
                    getShader(context.FRAGMENT_SHADER, fragmentSource)
                );
                context.linkProgram(material.program);

                if (
                    !context.getProgramParameter(material.program, context.LINK_STATUS)
                ) {
                    console.error(context.getProgramInfoLog(material.program));
                    throw new Error("Program linking error");
                }

                context.useProgram(material.program);
                material.attachUniforms(undefined, _miniGl.commonUniforms);
                material.attachUniforms(undefined, material.uniforms);
            }

            attachUniforms(name: string | undefined, uniforms: any): void {
                if (name === undefined) {
                    Object.entries(uniforms).forEach(([n, u]) =>
                        this.attachUniforms(n, u)
                    );
                } else if (uniforms.type === "array") {
                    uniforms.value.forEach((u: any, i: number) =>
                        this.attachUniforms(`${name}[${i}]`, u)
                    );
                } else if (uniforms.type === "struct") {
                    Object.entries(uniforms.value).forEach(([u, i]) =>
                        this.attachUniforms(`${name}.${u}`, i)
                    );
                } else {
                    this.uniformInstances.push({
                        uniform: uniforms,
                        location: context.getUniformLocation(this.program, name),
                    });
                }
            }
        };

        this.PlaneGeometry = class {
            width: number = 1;
            height: number = 1;
            attributes: any;
            vertexCount: number = 0;
            xSegCount: number = 0;
            ySegCount: number = 0;

            constructor() {
                this.attributes = {
                    position: new _miniGl.Attribute({
                        target: context.ARRAY_BUFFER,
                        size: 3,
                    }),
                    uv: new _miniGl.Attribute({ target: context.ARRAY_BUFFER, size: 2 }),
                    uvNorm: new _miniGl.Attribute({
                        target: context.ARRAY_BUFFER,
                        size: 2,
                    }),
                    index: new _miniGl.Attribute({
                        target: context.ELEMENT_ARRAY_BUFFER,
                        size: 3,
                        type: context.UNSIGNED_SHORT,
                    }),
                };
            }

            setTopology(xSegs = 1, ySegs = 1): void {
                this.xSegCount = xSegs;
                this.ySegCount = ySegs;
                this.vertexCount = (this.xSegCount + 1) * (this.ySegCount + 1);
                const quadCount = this.xSegCount * this.ySegCount * 2;

                this.attributes.uv.values = new Float32Array(2 * this.vertexCount);
                this.attributes.uvNorm.values = new Float32Array(2 * this.vertexCount);
                this.attributes.index.values = new Uint16Array(3 * quadCount);

                for (let y = 0; y <= this.ySegCount; y++) {
                    for (let x = 0; x <= this.xSegCount; x++) {
                        const i = y * (this.xSegCount + 1) + x;
                        this.attributes.uv.values[2 * i] = x / this.xSegCount;
                        this.attributes.uv.values[2 * i + 1] = 1 - y / this.ySegCount;
                        this.attributes.uvNorm.values[2 * i] = (x / this.xSegCount) * 2 - 1;
                        this.attributes.uvNorm.values[2 * i + 1] =
                            1 - (y / this.ySegCount) * 2;

                        if (x < this.xSegCount && y < this.ySegCount) {
                            const s = y * this.xSegCount + x;
                            this.attributes.index.values[6 * s] = i;
                            this.attributes.index.values[6 * s + 1] = i + 1 + this.xSegCount;
                            this.attributes.index.values[6 * s + 2] = i + 1;
                            this.attributes.index.values[6 * s + 3] = i + 1;
                            this.attributes.index.values[6 * s + 4] = i + 1 + this.xSegCount;
                            this.attributes.index.values[6 * s + 5] = i + 2 + this.xSegCount;
                        }
                    }
                }

                this.attributes.uv.update();
                this.attributes.uvNorm.update();
                this.attributes.index.update();
            }

            setSize(width = 1, height = 1): void {
                this.width = width;
                this.height = height;
                this.attributes.position.values = new Float32Array(
                    3 * this.vertexCount
                );

                const offsetX = width / -2;
                const offsetY = height / -2;
                const segWidth = width / this.xSegCount;
                const segHeight = height / this.ySegCount;

                for (let y = 0; y <= this.ySegCount; y++) {
                    const posY = offsetY + y * segHeight;
                    for (let x = 0; x <= this.xSegCount; x++) {
                        const posX = offsetX + x * segWidth;
                        const idx = y * (this.xSegCount + 1) + x;
                        this.attributes.position.values[3 * idx] = posX;
                        this.attributes.position.values[3 * idx + 1] = -posY;
                        this.attributes.position.values[3 * idx + 2] = 0;
                    }
                }

                this.attributes.position.update();
            }
        };

        this.Mesh = class {
            geometry: any;
            material: any;
            attributeInstances: any[] = [];

            constructor(geometry: any, material: any) {
                this.geometry = geometry;
                this.material = material;

                Object.entries(this.geometry.attributes).forEach(
                    ([e, attribute]: [string, any]) => {
                        this.attributeInstances.push({
                            attribute: attribute,
                            location: attribute.attach(e, this.material.program),
                        });
                    }
                );

                _miniGl.meshes.push(this);
            }

            draw(): void {
                context.useProgram(this.material.program);
                this.material.uniformInstances.forEach(({ uniform, location }: any) =>
                    uniform.update(location)
                );
                this.attributeInstances.forEach(({ attribute, location }: any) =>
                    attribute.use(location)
                );
                context.drawElements(
                    context.TRIANGLES,
                    this.geometry.attributes.index.values.length,
                    context.UNSIGNED_SHORT,
                    0
                );
            }
        };

        const identityMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
        this.commonUniforms = {
            projectionMatrix: new this.Uniform({
                type: "mat4",
                value: identityMatrix,
            }),
            modelViewMatrix: new this.Uniform({
                type: "mat4",
                value: identityMatrix,
            }),
            resolution: new this.Uniform({ type: "vec2", value: [1, 1] }),
            aspectRatio: new this.Uniform({ type: "float", value: 1 }),
        };
    }

    setSize(w = 640, h = 480): void {
        this.width = w;
        this.height = h;
        this.canvas.width = w;
        this.canvas.height = h;
        this.gl.viewport(0, 0, w, h);
        this.commonUniforms.resolution.value = [w, h];
        this.commonUniforms.aspectRatio.value = w / h;
    }

    setOrthographicCamera(): void {
        this.commonUniforms.projectionMatrix.value = [
            2 / this.width!,
            0,
            0,
            0,
            0,
            2 / this.height!,
            0,
            0,
            0,
            0,
            -0.001,
            0,
            0,
            0,
            0,
            1,
        ];
    }

    render(): void {
        this.gl.clearColor(0, 0, 0, 0);
        this.gl.clearDepth(1);
        this.meshes.forEach((m) => m.draw());
    }
}

class Gradient {
    canvas: HTMLCanvasElement;
    colors: string[];
    minigl: MiniGl;
    mesh: any;
    time = 0;
    last = 0;
    animationId?: number;
    isPlaying = false;

    constructor(canvas: HTMLCanvasElement, colors: string[]) {
        this.canvas = canvas;
        this.colors = colors;
        this.minigl = new MiniGl(canvas);
        this.init();
    }

    init(): void {
        const sectionColors = this.colors.map((hex) =>
            normalizeColor(parseInt(hex.replace("#", "0x"), 16))
        );

        const uniforms = {
            u_time: new this.minigl.Uniform({ value: 0 }),
            u_shadow_power: new this.minigl.Uniform({ value: 5 }),
            u_darken_top: new this.minigl.Uniform({ value: 0 }),
            u_active_colors: new this.minigl.Uniform({
                value: [1, 1, 1, 1],
                type: "vec4",
            }),
            u_global: new this.minigl.Uniform({
                value: {
                    noiseFreq: new this.minigl.Uniform({
                        value: [0.00014, 0.00029],
                        type: "vec2",
                    }),
                    noiseSpeed: new this.minigl.Uniform({ value: 0.000005 }),
                },
                type: "struct",
            }),
            u_vertDeform: new this.minigl.Uniform({
                value: {
                    incline: new this.minigl.Uniform({ value: 0 }),
                    offsetTop: new this.minigl.Uniform({ value: -0.5 }),
                    offsetBottom: new this.minigl.Uniform({ value: -0.5 }),
                    noiseFreq: new this.minigl.Uniform({ value: [3, 4], type: "vec2" }),
                    noiseAmp: new this.minigl.Uniform({ value: 320 }),
                    noiseSpeed: new this.minigl.Uniform({ value: 10 }),
                    noiseFlow: new this.minigl.Uniform({ value: 3 }),
                    noiseSeed: new this.minigl.Uniform({ value: 5 }),
                },
                type: "struct",
                excludeFrom: "fragment",
            }),
            u_baseColor: new this.minigl.Uniform({
                value: sectionColors[0],
                type: "vec3",
                excludeFrom: "fragment",
            }),
            u_waveLayers: new this.minigl.Uniform({
                value: [],
                excludeFrom: "fragment",
                type: "array",
            }),
        };

        for (let i = 0; i < 5; i++) {
            uniforms.u_waveLayers.value.push(
                new this.minigl.Uniform({
                    value: {
                        color: new this.minigl.Uniform({
                            value: sectionColors[i % sectionColors.length],
                            type: "vec3",
                        }),
                        noiseFreq: new this.minigl.Uniform({
                            value: [2 + i / 10, 3 + i / 10],
                            type: "vec2",
                        }),
                        noiseSpeed: new this.minigl.Uniform({ value: 11 + i }),
                        noiseAmp: new this.minigl.Uniform({ value: 1950 + i * 10 }),
                        noiseSeed: new this.minigl.Uniform({ value: i + 10 }),
                    },
                    type: "struct",
                })
            );
        }

        const vertexShader = `
      vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
      vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
      vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

      float cnoise(vec3 P){
        vec3 Pi0 = floor(P);
        vec3 Pi1 = Pi0 + vec3(1.0);
        Pi0 = mod(Pi0, 289.0);
        Pi1 = mod(Pi1, 289.0);
        vec3 Pf0 = fract(P);
        vec3 Pf1 = Pf0 - vec3(1.0);
        vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
        vec4 iy = vec4(Pi0.yy, Pi1.yy);
        vec4 iz0 = Pi0.zzzz;
        vec4 iz1 = Pi1.zzzz;

        vec4 ixy = permute(permute(ix) + iy);
        vec4 ixy0 = permute(ixy + iz0);
        vec4 ixy1 = permute(ixy + iz1);

        vec4 gx0 = ixy0 / 7.0;
        vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
        gx0 = fract(gx0);
        vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
        vec4 sz0 = step(gz0, vec4(0.0));
        gx0 -= sz0 * (step(0.0, gx0) - 0.5);
        gy0 -= sz0 * (step(0.0, gy0) - 0.5);

        vec4 gx1 = ixy1 / 7.0;
        vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
        gx1 = fract(gx1);
        vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
        vec4 sz1 = step(gz1, vec4(0.0));
        gx1 -= sz1 * (step(0.0, gx1) - 0.5);
        gy1 -= sz1 * (step(0.0, gy1) - 0.5);

        vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
        vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
        vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
        vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
        vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
        vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
        vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
        vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

        vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g100, g100), dot(g010, g010), dot(g110, g110)));
        g000 *= norm0.x;
        g100 *= norm0.y;
        g010 *= norm0.z;
        g110 *= norm0.w;
        vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g101, g101), dot(g011, g011), dot(g111, g111)));
        g001 *= norm1.x;
        g101 *= norm1.y;
        g011 *= norm1.z;
        g111 *= norm1.w;

        float n000 = dot(g000, Pf0);
        float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
        float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
        float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
        float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
        float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
        float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
        float n111 = dot(g111, Pf1);

        vec3 fade_xyz = fade(Pf0);
        vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
        vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
        float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
        return 2.2 * n_xyz;
      }

      varying vec3 v_color;

      void main() {
        vec3 pos = position.xyz;
        vec2 noiseFreq = u_vertDeform.noiseFreq;
        float noiseAmp = u_vertDeform.noiseAmp;
        float noiseSpeed = u_vertDeform.noiseSpeed;

        float noise = cnoise(vec3(pos.xy * noiseFreq, u_time * noiseSpeed));
        pos.z += noise * noiseAmp;

        v_color = u_baseColor;
        for (int i = 0; i < u_waveLayers_length; i++) {
          float layerNoise = cnoise(vec3(pos.xy * u_waveLayers[i].noiseFreq, u_time * u_waveLayers[i].noiseSpeed + u_waveLayers[i].noiseSeed));
          v_color = mix(v_color, u_waveLayers[i].color, smoothstep(0.0, 1.0, layerNoise));
        }

        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `;

        const fragmentShader = `
      varying vec3 v_color;
      void main() {
        gl_FragColor = vec4(v_color, 1.0);
      }
    `;

        const geometry = new this.minigl.PlaneGeometry();
        geometry.setTopology(32, 32);
        geometry.setSize(2000, 2000);

        const material = new this.minigl.Material(vertexShader, fragmentShader, uniforms);

        this.mesh = new this.minigl.Mesh(geometry, material);
        this.isPlaying = true;
        this.animate();
    }

    animate(): void {
        if (!this.isPlaying) return;
        const now = Date.now();
        const delta = now - (this.last || now);
        this.last = now;
        this.time += delta * 0.001;

        this.mesh.material.uniforms.u_time.value = this.time;
        this.minigl.render();
        this.animationId = requestAnimationFrame(() => this.animate());
    }

    destroy(): void {
        this.isPlaying = false;
        if (this.animationId) cancelAnimationFrame(this.animationId);
    }
}

export function GradientWave({ className }: { className?: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;
        const gradient = new Gradient(canvasRef.current, [
            "#6366f1",
            "#8b5cf6",
            "#ec4899",
            "#4f46e5",
            "#c026d3",
        ]);
        const handleResize = () => {
            if (canvasRef.current) {
                gradient.minigl.setSize(window.innerWidth, window.innerHeight);
                gradient.minigl.setOrthographicCamera();
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            gradient.destroy();
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={className}
            style={{ width: "100%", height: "100%" }}
        />
    );
}
