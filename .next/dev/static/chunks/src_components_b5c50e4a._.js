(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SterlingGateKineticNavigation",
    ()=>SterlingGateKineticNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$CustomEase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/CustomEase.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// Register GSAP Plugins safely
if ("TURBOPACK compile-time truthy", 1) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$CustomEase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomEase"]);
}
function SterlingGateKineticNavigation() {
    _s();
    // We need a ref for the parent container to scope GSAP
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Initial Setup & Hover Effects
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SterlingGateKineticNavigation.useEffect": ()=>{
            if (!containerRef.current) return;
            // Create custom easing
            try {
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].parseEase("main")) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$CustomEase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomEase"].create("main", "0.65, 0.01, 0.05, 0.99");
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].defaults({
                        ease: "main",
                        duration: 0.7
                    });
                }
            } catch (e) {
                console.warn("CustomEase failed to load, falling back to default.", e);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].defaults({
                    ease: "power2.out",
                    duration: 0.7
                });
            }
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "SterlingGateKineticNavigation.useEffect.ctx": ()=>{
                    // 1. Shape Hover
                    const menuItems = containerRef.current.querySelectorAll(".menu-list-item[data-shape]");
                    const shapesContainer = containerRef.current.querySelector(".ambient-background-shapes");
                    menuItems.forEach({
                        "SterlingGateKineticNavigation.useEffect.ctx": (item)=>{
                            const shapeIndex = item.getAttribute("data-shape");
                            const shape = shapesContainer ? shapesContainer.querySelector(`.bg-shape-${shapeIndex}`) : null;
                            if (!shape) return;
                            const shapeEls = shape.querySelectorAll(".shape-element");
                            const onEnter = {
                                "SterlingGateKineticNavigation.useEffect.ctx.onEnter": ()=>{
                                    if (shapesContainer) {
                                        shapesContainer.querySelectorAll(".bg-shape").forEach({
                                            "SterlingGateKineticNavigation.useEffect.ctx.onEnter": (s)=>s.classList.remove("active")
                                        }["SterlingGateKineticNavigation.useEffect.ctx.onEnter"]);
                                    }
                                    shape.classList.add("active");
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(shapeEls, {
                                        scale: 0.5,
                                        opacity: 0,
                                        rotation: -10
                                    }, {
                                        scale: 1,
                                        opacity: 1,
                                        rotation: 0,
                                        duration: 0.6,
                                        stagger: 0.08,
                                        ease: "back.out(1.7)",
                                        overwrite: "auto"
                                    });
                                }
                            }["SterlingGateKineticNavigation.useEffect.ctx.onEnter"];
                            const onLeave = {
                                "SterlingGateKineticNavigation.useEffect.ctx.onLeave": ()=>{
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(shapeEls, {
                                        scale: 0.8,
                                        opacity: 0,
                                        duration: 0.3,
                                        ease: "power2.in",
                                        onComplete: {
                                            "SterlingGateKineticNavigation.useEffect.ctx.onLeave": ()=>shape.classList.remove("active")
                                        }["SterlingGateKineticNavigation.useEffect.ctx.onLeave"],
                                        overwrite: "auto"
                                    });
                                }
                            }["SterlingGateKineticNavigation.useEffect.ctx.onLeave"];
                            item.addEventListener("mouseenter", onEnter);
                            item.addEventListener("mouseleave", onLeave);
                            item._cleanup = ({
                                "SterlingGateKineticNavigation.useEffect.ctx": ()=>{
                                    item.removeEventListener("mouseenter", onEnter);
                                    item.removeEventListener("mouseleave", onLeave);
                                }
                            })["SterlingGateKineticNavigation.useEffect.ctx"];
                        }
                    }["SterlingGateKineticNavigation.useEffect.ctx"]);
                }
            }["SterlingGateKineticNavigation.useEffect.ctx"], containerRef);
            return ({
                "SterlingGateKineticNavigation.useEffect": ()=>{
                    ctx.revert();
                    if (containerRef.current) {
                        const items = containerRef.current.querySelectorAll(".menu-list-item[data-shape]");
                        items.forEach({
                            "SterlingGateKineticNavigation.useEffect": (item)=>item._cleanup && item._cleanup()
                        }["SterlingGateKineticNavigation.useEffect"]);
                    }
                }
            })["SterlingGateKineticNavigation.useEffect"];
        }
    }["SterlingGateKineticNavigation.useEffect"], []);
    // Menu Open/Close Animation Effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SterlingGateKineticNavigation.useEffect": ()=>{
            if (!containerRef.current) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "SterlingGateKineticNavigation.useEffect.ctx": ()=>{
                    const navWrap = containerRef.current.querySelector(".nav-overlay-wrapper");
                    const menu = containerRef.current.querySelector(".menu-content");
                    const overlay = containerRef.current.querySelector(".overlay");
                    const bgPanels = containerRef.current.querySelectorAll(".backdrop-layer");
                    const menuLinks = containerRef.current.querySelectorAll(".nav-link");
                    const fadeTargets = containerRef.current.querySelectorAll("[data-menu-fade]");
                    const menuButton = containerRef.current.querySelector(".nav-close-btn");
                    const menuButtonTexts = menuButton?.querySelectorAll("p");
                    const menuButtonIcon = menuButton?.querySelector(".menu-button-icon");
                    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
                    if (isMenuOpen) {
                        if (navWrap) navWrap.setAttribute("data-nav", "open");
                        tl.set(navWrap, {
                            display: "block"
                        }).set(menu, {
                            xPercent: 0
                        }, "<").fromTo(menuButtonTexts, {
                            yPercent: 0
                        }, {
                            yPercent: -100,
                            stagger: 0.2
                        }).fromTo(menuButtonIcon, {
                            rotate: 0
                        }, {
                            rotate: 315
                        }, "<").fromTo(overlay, {
                            autoAlpha: 0
                        }, {
                            autoAlpha: 1
                        }, "<").fromTo(bgPanels, {
                            xPercent: 101
                        }, {
                            xPercent: 0,
                            stagger: 0.12,
                            duration: 0.575
                        }, "<").fromTo(menuLinks, {
                            yPercent: 140,
                            rotate: 10
                        }, {
                            yPercent: 0,
                            rotate: 0,
                            stagger: 0.05
                        }, "<+=0.35");
                        if (fadeTargets.length) {
                            tl.fromTo(fadeTargets, {
                                autoAlpha: 0,
                                yPercent: 50
                            }, {
                                autoAlpha: 1,
                                yPercent: 0,
                                stagger: 0.04,
                                clearProps: "all"
                            }, "<+=0.2");
                        }
                    } else {
                        if (navWrap) navWrap.setAttribute("data-nav", "closed");
                        tl.to(overlay, {
                            autoAlpha: 0
                        }).to(menu, {
                            xPercent: 120
                        }, "<").to(menuButtonTexts, {
                            yPercent: 0
                        }, "<").to(menuButtonIcon, {
                            rotate: 0
                        }, "<").set(navWrap, {
                            display: "none"
                        });
                    }
                }
            }["SterlingGateKineticNavigation.useEffect.ctx"], containerRef);
            return ({
                "SterlingGateKineticNavigation.useEffect": ()=>ctx.revert()
            })["SterlingGateKineticNavigation.useEffect"];
        }
    }["SterlingGateKineticNavigation.useEffect"], [
        isMenuOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SterlingGateKineticNavigation.useEffect": ()=>{
            const handleEsc = {
                "SterlingGateKineticNavigation.useEffect.handleEsc": (e)=>{
                    if (e.key === "Escape" && isMenuOpen) {
                        setIsMenuOpen(false);
                    }
                }
            }["SterlingGateKineticNavigation.useEffect.handleEsc"];
            window.addEventListener("keydown", handleEsc);
            return ({
                "SterlingGateKineticNavigation.useEffect": ()=>window.removeEventListener("keydown", handleEsc)
            })["SterlingGateKineticNavigation.useEffect"];
        }
    }["SterlingGateKineticNavigation.useEffect"], [
        isMenuOpen
    ]);
    const toggleMenu = ()=>setIsMenuOpen((prev)=>!prev);
    const closeMenu = ()=>setIsMenuOpen(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "relative z-[9999]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "site-header-wrapper",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "header px-6 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container is--full mx-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "nav-row flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/",
                                    "aria-label": "home",
                                    className: "nav-logo-row font-bold text-2xl tracking-tighter",
                                    children: "CONVERGE"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "nav-row__right flex items-center gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "nav-toggle-label hidden md:block",
                                            onClick: toggleMenu,
                                            style: {
                                                cursor: 'pointer'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "toggle-text uppercase text-xs font-semibold tracking-widest text-muted-foreground hover:text-foreground transition-colors",
                                                children: "Menu"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                                lineNumber: 159,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                            lineNumber: 158,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            role: "button",
                                            className: "nav-close-btn flex items-center gap-3 bg-foreground text-background px-4 py-2 rounded-full overflow-hidden relative group",
                                            onClick: toggleMenu,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "menu-button-text relative h-5 w-12 overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "p-large absolute inset-0 flex items-center justify-center font-medium",
                                                            children: "Menu"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "p-large absolute inset-0 flex items-center justify-center font-medium translate-y-full",
                                                            children: "Close"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                                            lineNumber: 165,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "icon-wrap",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "16",
                                                        height: "16",
                                                        viewBox: "0 0 16 16",
                                                        fill: "none",
                                                        className: "menu-button-icon",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M7.33333 16L7.33333 -3.2055e-07L8.66667 -3.78832e-07L8.66667 16L7.33333 16Z",
                                                                fill: "currentColor"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                                                lineNumber: 176,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M16 8.66667L-2.62269e-07 8.66667L-3.78832e-07 7.33333L16 7.33333L16 8.66667Z",
                                                                fill: "currentColor"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                                                lineNumber: 177,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                            lineNumber: 162,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                    lineNumber: 157,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                            lineNumber: 153,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                        lineNumber: 152,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                    lineNumber: 151,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "fullscreen-menu-container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-nav": "closed",
                    className: "nav-overlay-wrapper fixed inset-0 hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overlay absolute inset-0 bg-black/40 backdrop-blur-sm",
                            onClick: closeMenu
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "menu-content fixed top-0 right-0 h-full w-full md:w-[600px] z-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "menu-bg absolute inset-0 -z-10 bg-background border-l border-border flex",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "backdrop-layer first flex-1 bg-background"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                            lineNumber: 192,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "backdrop-layer second flex-1 bg-background border-l border-border"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "backdrop-layer flex-1 bg-background border-l border-border"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                            lineNumber: 194,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ambient-background-shapes absolute inset-0 overflow-hidden opacity-20 pointer-events-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "bg-shape bg-shape-1 absolute top-20 left-20 w-80 h-80",
                                                    viewBox: "0 0 400 400",
                                                    fill: "none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            className: "shape-element",
                                                            cx: "80",
                                                            cy: "120",
                                                            r: "40",
                                                            fill: "rgba(99,102,241,0.15)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                                            lineNumber: 198,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            className: "shape-element",
                                                            cx: "300",
                                                            cy: "80",
                                                            r: "60",
                                                            fill: "rgba(139,92,246,0.12)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                                            lineNumber: 199,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            className: "shape-element",
                                                            cx: "200",
                                                            cy: "300",
                                                            r: "80",
                                                            fill: "rgba(236,72,153,0.1)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            className: "shape-element",
                                                            cx: "350",
                                                            cy: "280",
                                                            r: "30",
                                                            fill: "rgba(99,102,241,0.15)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                                            lineNumber: 201,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "bg-shape bg-shape-2 absolute bottom-20 right-20 w-80 h-80",
                                                    viewBox: "0 0 400 400",
                                                    fill: "none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            className: "shape-element",
                                                            d: "M0 200 Q100 100, 200 200 T 400 200",
                                                            stroke: "rgba(99,102,241,0.2)",
                                                            strokeWidth: "60",
                                                            fill: "none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                                            lineNumber: 205,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            className: "shape-element",
                                                            d: "M0 280 Q100 180, 200 280 T 400 280",
                                                            stroke: "rgba(139,92,246,0.15)",
                                                            strokeWidth: "40",
                                                            fill: "none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                                            lineNumber: 206,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "bg-shape bg-shape-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full",
                                                    viewBox: "0 0 400 400",
                                                    fill: "none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            className: "shape-element",
                                                            cx: "50",
                                                            cy: "50",
                                                            r: "8",
                                                            fill: "rgba(99,102,241,0.3)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            className: "shape-element",
                                                            cx: "150",
                                                            cy: "50",
                                                            r: "8",
                                                            fill: "rgba(139,92,246,0.3)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                                            lineNumber: 211,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            className: "shape-element",
                                                            cx: "250",
                                                            cy: "50",
                                                            r: "8",
                                                            fill: "rgba(236,72,153,0.3)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                                            lineNumber: 212,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            className: "shape-element",
                                                            cx: "350",
                                                            cy: "50",
                                                            r: "8",
                                                            fill: "rgba(99,102,241,0.3)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                                            lineNumber: 213,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "menu-content-wrapper h-full flex flex-col justify-center px-12 md:px-20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "menu-list space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "menu-list-item overflow-hidden",
                                                "data-shape": "1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "/about",
                                                    className: "nav-link block group py-2",
                                                    onClick: closeMenu,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "nav-link-text text-5xl md:text-7xl font-bold tracking-tighter group-hover:text-primary transition-colors",
                                                        children: "About us"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                                lineNumber: 220,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "menu-list-item overflow-hidden",
                                                "data-shape": "2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "/portfolio",
                                                    className: "nav-link block group py-2",
                                                    onClick: closeMenu,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "nav-link-text text-5xl md:text-7xl font-bold tracking-tighter group-hover:text-primary transition-colors",
                                                        children: "Our work"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                                        lineNumber: 227,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                                lineNumber: 225,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "menu-list-item overflow-hidden",
                                                "data-shape": "3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "/services",
                                                    className: "nav-link block group py-2",
                                                    onClick: closeMenu,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "nav-link-text text-5xl md:text-7xl font-bold tracking-tighter group-hover:text-primary transition-colors",
                                                        children: "Services"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                                lineNumber: 230,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "menu-list-item overflow-hidden",
                                                "data-shape": "4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    className: "nav-link block group py-2",
                                                    onClick: closeMenu,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "nav-link-text text-5xl md:text-7xl font-bold tracking-tighter group-hover:text-primary transition-colors",
                                                        children: "Insight"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                                lineNumber: 235,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "menu-list-item overflow-hidden",
                                                "data-shape": "5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    className: "nav-link block group py-2",
                                                    onClick: closeMenu,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "nav-link-text text-5xl md:text-7xl font-bold tracking-tighter group-hover:text-primary transition-colors",
                                                        children: "Contact us"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                                        lineNumber: 242,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                                lineNumber: 240,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                                    lineNumber: 218,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                    lineNumber: 188,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx",
        lineNumber: 149,
        columnNumber: 5
    }, this);
}
_s(SterlingGateKineticNavigation, "1v8Tgks0b0e2qdCdsRsFPlnMx28=");
_c = SterlingGateKineticNavigation;
var _c;
__turbopack_context__.k.register(_c, "SterlingGateKineticNavigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/DynamicNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DynamicNav",
    ()=>DynamicNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sterling$2d$gate$2d$kinetic$2d$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sterling-gate-kinetic-navigation.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function DynamicNav() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    // Hide the global kinetic navigation on the homepage as requested, 
    // since the ResponsiveHeroBanner has its own integrated navigation.
    // Consolidating to a single global header for award-winning consistency
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sterling$2d$gate$2d$kinetic$2d$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SterlingGateKineticNavigation"], {}, void 0, false, {
        fileName: "[project]/src/components/DynamicNav.tsx",
        lineNumber: 12,
        columnNumber: 12
    }, this);
}
_s(DynamicNav, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = DynamicNav;
var _c;
__turbopack_context__.k.register(_c, "DynamicNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_b5c50e4a._.js.map