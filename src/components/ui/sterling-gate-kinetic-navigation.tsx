"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

// Register GSAP Plugins safely
if (typeof window !== "undefined") {
  gsap.registerPlugin(CustomEase);
}

export function SterlingGateKineticNavigation() {
  // We need a ref for the parent container to scope GSAP
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Initial Setup & Hover Effects
  useEffect(() => {
    if (!containerRef.current) return;

    // Create custom easing
    try {
      if (!gsap.parseEase("main")) {
        CustomEase.create("main", "0.65, 0.01, 0.05, 0.99");
        gsap.defaults({ ease: "main", duration: 0.7 });
      }
    } catch (e) {
      console.warn("CustomEase failed to load, falling back to default.", e);
      gsap.defaults({ ease: "power2.out", duration: 0.7 });
    }

    const ctx = gsap.context(() => {
      // 1. Shape Hover
      const menuItems = containerRef.current!.querySelectorAll(".menu-list-item[data-shape]");
      const shapesContainer = containerRef.current!.querySelector(".ambient-background-shapes");

      menuItems.forEach((item) => {
        const shapeIndex = item.getAttribute("data-shape");
        const shape = shapesContainer ? shapesContainer.querySelector(`.bg-shape-${shapeIndex}`) : null;

        if (!shape) return;

        const shapeEls = shape.querySelectorAll(".shape-element");

        const onEnter = () => {
          if (shapesContainer) {
            shapesContainer.querySelectorAll(".bg-shape").forEach((s) => s.classList.remove("active"));
          }
          shape.classList.add("active");

          gsap.fromTo(shapeEls,
            { scale: 0.5, opacity: 0, rotation: -10 },
            { scale: 1, opacity: 1, rotation: 0, duration: 0.6, stagger: 0.08, ease: "back.out(1.7)", overwrite: "auto" }
          );
        };

        const onLeave = () => {
          gsap.to(shapeEls, {
            scale: 0.8, opacity: 0, duration: 0.3, ease: "power2.in",
            onComplete: () => shape.classList.remove("active"),
            overwrite: "auto"
          });
        };

        item.addEventListener("mouseenter", onEnter);
        item.addEventListener("mouseleave", onLeave);

        (item as any)._cleanup = () => {
          item.removeEventListener("mouseenter", onEnter);
          item.removeEventListener("mouseleave", onLeave);
        };
      });

    }, containerRef);

    return () => {
      ctx.revert();
      if (containerRef.current) {
        const items = containerRef.current.querySelectorAll(".menu-list-item[data-shape]");
        items.forEach((item: any) => item._cleanup && item._cleanup());
      }
    };
  }, []);

  // Menu Open/Close Animation Effect
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const navWrap = containerRef.current!.querySelector(".nav-overlay-wrapper");
      const menu = containerRef.current!.querySelector(".menu-content");
      const overlay = containerRef.current!.querySelector(".overlay");
      const bgPanels = containerRef.current!.querySelectorAll(".backdrop-layer");
      const menuLinks = containerRef.current!.querySelectorAll(".nav-link");
      const fadeTargets = containerRef.current!.querySelectorAll("[data-menu-fade]");

      const menuButton = containerRef.current!.querySelector(".nav-close-btn");
      const menuButtonTexts = menuButton?.querySelectorAll("p");
      const menuButtonIcon = menuButton?.querySelector(".menu-button-icon");

      const tl = gsap.timeline();

      if (isMenuOpen) {
        if (navWrap) navWrap.setAttribute("data-nav", "open");

        tl.set(navWrap, { display: "block" })
          .set(menu, { xPercent: 0 }, "<")
          .fromTo(menuButtonTexts, { yPercent: 0 }, { yPercent: -100, stagger: 0.2 })
          .fromTo(menuButtonIcon, { rotate: 0 }, { rotate: 315 }, "<")

          .fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1 }, "<")
          .fromTo(bgPanels, { xPercent: 101 }, { xPercent: 0, stagger: 0.12, duration: 0.575 }, "<")
          .fromTo(menuLinks, { yPercent: 140, rotate: 10 }, { yPercent: 0, rotate: 0, stagger: 0.05 }, "<+=0.35");

        if (fadeTargets.length) {
          tl.fromTo(fadeTargets, { autoAlpha: 0, yPercent: 50 }, { autoAlpha: 1, yPercent: 0, stagger: 0.04, clearProps: "all" }, "<+=0.2");
        }

      } else {
        if (navWrap) navWrap.setAttribute("data-nav", "closed");

        tl.to(overlay, { autoAlpha: 0 })
          .to(menu, { xPercent: 120 }, "<")
          .to(menuButtonTexts, { yPercent: 0 }, "<")
          .to(menuButtonIcon, { rotate: 0 }, "<")

          .set(navWrap, { display: "none" });
      }

    }, containerRef);

    return () => ctx.revert();
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div ref={containerRef} className="relative z-[9999]">
      <div className="site-header-wrapper">
        <header className="header px-6 py-4">
          <div className="container is--full mx-auto">
            <nav className="nav-row flex justify-between items-center">
              <a href="/" aria-label="home" className="nav-logo-row font-bold text-2xl tracking-tighter uppercase">
                ConvergeDigitals
              </a>
              <div className="nav-row__right flex items-center gap-6">
                <div className="nav-toggle-label hidden md:block" onClick={toggleMenu} style={{ cursor: 'pointer' }}>
                  <span className="toggle-text uppercase text-xs font-semibold tracking-widest text-muted-foreground hover:text-foreground transition-colors">Menu</span>
                </div>

                <button role="button" className="nav-close-btn flex items-center gap-3 bg-foreground text-background px-4 py-2 rounded-full overflow-hidden relative group" onClick={toggleMenu}>
                  <div className="menu-button-text relative h-5 w-12 overflow-hidden">
                    <p className="p-large absolute inset-0 flex items-center justify-center font-medium">Menu</p>
                    <p className="p-large absolute inset-0 flex items-center justify-center font-medium translate-y-full">Close</p>
                  </div>
                  <div className="icon-wrap">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="menu-button-icon"
                    >
                      <path d="M7.33333 16L7.33333 -3.2055e-07L8.66667 -3.78832e-07L8.66667 16L7.33333 16Z" fill="currentColor" />
                      <path d="M16 8.66667L-2.62269e-07 8.66667L-3.78832e-07 7.33333L16 7.33333L16 8.66667Z" fill="currentColor" />
                    </svg>
                  </div>
                </button>
              </div>
            </nav>
          </div>
        </header>
      </div>

      <section className="fullscreen-menu-container">
        <div data-nav="closed" className="nav-overlay-wrapper fixed inset-0 hidden">
          <div className="overlay absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={closeMenu}></div>
          <nav className="menu-content fixed top-0 right-0 h-full w-full md:w-[600px] z-50">
            <div className="menu-bg absolute inset-0 -z-10 bg-background border-l border-border flex">
              <div className="backdrop-layer first flex-1 bg-background"></div>
              <div className="backdrop-layer second flex-1 bg-background border-l border-border"></div>
              <div className="backdrop-layer flex-1 bg-background border-l border-border"></div>

              <div className="ambient-background-shapes absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
                <svg className="bg-shape bg-shape-1 absolute top-20 left-20 w-80 h-80" viewBox="0 0 400 400" fill="none">
                  <circle className="shape-element" cx="80" cy="120" r="40" fill="rgba(99,102,241,0.15)" />
                  <circle className="shape-element" cx="300" cy="80" r="60" fill="rgba(139,92,246,0.12)" />
                  <circle className="shape-element" cx="200" cy="300" r="80" fill="rgba(236,72,153,0.1)" />
                  <circle className="shape-element" cx="350" cy="280" r="30" fill="rgba(99,102,241,0.15)" />
                </svg>

                <svg className="bg-shape bg-shape-2 absolute bottom-20 right-20 w-80 h-80" viewBox="0 0 400 400" fill="none">
                  <path className="shape-element" d="M0 200 Q100 100, 200 200 T 400 200" stroke="rgba(99,102,241,0.2)" strokeWidth="60" fill="none" />
                  <path className="shape-element" d="M0 280 Q100 180, 200 280 T 400 280" stroke="rgba(139,92,246,0.15)" strokeWidth="40" fill="none" />
                </svg>

                <svg className="bg-shape bg-shape-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full" viewBox="0 0 400 400" fill="none">
                  <circle className="shape-element" cx="50" cy="50" r="8" fill="rgba(99,102,241,0.3)" />
                  <circle className="shape-element" cx="150" cy="50" r="8" fill="rgba(139,92,246,0.3)" />
                  <circle className="shape-element" cx="250" cy="50" r="8" fill="rgba(236,72,153,0.3)" />
                  <circle className="shape-element" cx="350" cy="50" r="8" fill="rgba(99,102,241,0.3)" />
                </svg>
              </div>
            </div>

            <div className="menu-content-wrapper h-full flex flex-col justify-center px-12 md:px-20 relative">
              {/* Internal Close Button */}
              <button
                onClick={closeMenu}
                className="absolute top-12 right-12 text-sm font-bold uppercase tracking-[0.3em] flex items-center gap-4 hover:text-primary transition-all duration-300 group"
              >
                <span className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-xs">Close Menu</span>
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </div>
              </button>

              <ul className="menu-list space-y-4">
                <li className="menu-list-item overflow-hidden" data-shape="1">
                  <a href="/" className="nav-link block group py-2" onClick={closeMenu}>
                    <p className="nav-link-text text-5xl md:text-7xl font-bold tracking-tighter group-hover:text-primary transition-colors">Home</p>
                  </a>
                </li>
                <li className="menu-list-item overflow-hidden" data-shape="1">
                  <a href="/about" className="nav-link block group py-2" onClick={closeMenu}>
                    <p className="nav-link-text text-5xl md:text-7xl font-bold tracking-tighter group-hover:text-primary transition-colors">About us</p>
                  </a>
                </li>
                <li className="menu-list-item overflow-hidden" data-shape="2">
                  <a href="/portfolio" className="nav-link block group py-2" onClick={closeMenu}>
                    <p className="nav-link-text text-5xl md:text-7xl font-bold tracking-tighter group-hover:text-primary transition-colors">Our work</p>
                  </a>
                </li>
                <li className="menu-list-item overflow-hidden" data-shape="3">
                  <a href="/services" className="nav-link block group py-2" onClick={closeMenu}>
                    <p className="nav-link-text text-5xl md:text-7xl font-bold tracking-tighter group-hover:text-primary transition-colors">Services</p>
                  </a>
                </li>
                <li className="menu-list-item overflow-hidden" data-shape="4">
                  <a href="/careers" className="nav-link block group py-2" onClick={closeMenu}>
                    <p className="nav-link-text text-5xl md:text-7xl font-bold tracking-tighter group-hover:text-primary transition-colors">Careers</p>
                  </a>
                </li>
                <li className="menu-list-item overflow-hidden" data-shape="4">
                  <a href="/insight" className="nav-link block group py-2" onClick={closeMenu}>
                    <p className="nav-link-text text-5xl md:text-7xl font-bold tracking-tighter group-hover:text-primary transition-colors">Insight</p>
                  </a>
                </li>
                <li className="menu-list-item overflow-hidden" data-shape="5">
                  <a href="/contact" className="nav-link block group py-2" onClick={closeMenu}>
                    <p className="nav-link-text text-5xl md:text-7xl font-bold tracking-tighter group-hover:text-primary transition-colors">Contact us</p>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}
