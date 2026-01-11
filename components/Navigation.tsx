"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ui/theme-toggle";

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const [scrollProgress, setScrollProgress] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const ctaButtonRef = useRef<HTMLAnchorElement>(null);
    const navLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Calculate scroll progress
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            setScrollProgress(scrolled);

            // Update active section based on scroll position
            const sections = ["home", "projects", "experience", "skills", "education", "contact"];
            const current = sections.find((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Reduced magnetic effect for CTA button (80px radius, 0.15 strength)
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (ctaButtonRef.current) {
                const rect = ctaButtonRef.current.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const distanceX = e.clientX - centerX;
                const distanceY = e.clientY - centerY;
                const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

                // Reduced magnetic effect: 80px radius, 0.15 strength
                if (distance < 80) {
                    const strength = (80 - distance) / 80;
                    const moveX = distanceX * strength * 0.15;
                    const moveY = distanceY * strength * 0.15;
                    setMousePosition({ x: moveX, y: moveY });
                } else {
                    setMousePosition({ x: 0, y: 0 });
                }
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Update liquid indicator position with spring animation
    useEffect(() => {
        const updateIndicator = () => {
            const target = hoveredLink || activeSection;
            const element = document.querySelector(`[data-nav="${target}"]`);
            if (element) {
                const rect = element.getBoundingClientRect();
                const container = element.parentElement?.getBoundingClientRect();
                if (container) {
                    setIndicatorStyle({
                        left: rect.left - container.left,
                        width: rect.width,
                    });
                }
            }
        };

        updateIndicator();
    }, [hoveredLink, activeSection]);

    const navLinks = [
        { name: "Home", href: "#home", icon: "●" },
        { name: "Projects", href: "#projects", icon: "◆" },
        { name: "Experience", href: "#experience", icon: "▲" },
        { name: "Skills", href: "#skills", icon: "■" },
        { name: "Education", href: "#education", icon: "★" },
        { name: "Contact", href: "#contact", icon: "◉" },
    ];

    return (
        <>
            {/* Scroll Progress Indicator with Pulse Effect */}
            <div className="fixed top-0 left-0 right-0 h-0.5 z-[60] bg-transparent">
                <div
                    className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg shadow-blue-500/50 relative"
                    style={{
                        width: `${scrollProgress}%`,
                        transition: "width 0.1s ease-out"
                    }}
                >
                    {/* Glowing tip */}
                    <div className="absolute right-0 top-0 w-2 h-full bg-white/80 blur-sm animate-pulse" />
                </div>
            </div>

            <nav
                className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 ${isScrolled ? "top-2" : ""
                    }`}
            >
                <div
                    className={`relative mx-auto ${isScrolled ? "max-w-5xl" : "max-w-7xl"
                        } transition-all duration-500`}
                >
                    {/* Glassmorphism Container with Elevated Border */}
                    <div
                        className={`relative font-display rounded-2xl shadow-lg transition-all duration-500 ${isScrolled
                            ? "backdrop-blur-2xl bg-white/70 dark:bg-[#0A0A0A]/90 border border-gray-300/60 dark:border-gray-600/60 shadow-gray-300/30 dark:shadow-black/40"
                            : "backdrop-blur-xl bg-white/60 dark:bg-[#0A0A0A]/80 border border-gray-200/50 dark:border-gray-700/50 shadow-gray-200/20 dark:shadow-gray-900/40"
                            }`}
                        style={{ willChange: "transform" }}
                    >
                        <div className="px-6 py-3">
                            <div className="flex items-center justify-between">
                                {/* Logo - Code Style with Enhanced Micro-interaction */}
                                <Link
                                    href="#home"
                                    className="relative group flex items-center gap-2"
                                >
                                    <div className="relative flex items-center">
                                        <span className="text-2xl font-mono font-bold text-gray-800 dark:text-gray-200 inline-block group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 origin-center">
                                            {"<"}
                                        </span>
                                        <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent inline-block group-hover:tracking-wider transition-all duration-300">
                                            Rohit
                                        </span>
                                        <span className="text-2xl font-mono font-bold text-gray-800 dark:text-gray-200 inline-block group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 origin-center">
                                            {"/>"}
                                        </span>

                                        {/* Animated cursor with improved visibility */}
                                        <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-0.5 h-7 bg-blue-600 dark:bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                            <span className="absolute inset-0 animate-pulse bg-blue-600 dark:bg-blue-400" />
                                        </span>
                                    </div>
                                </Link>

                                <div className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
                                    <div className="relative flex items-center gap-1 px-2 py-1.5 rounded-2xl bg-gradient-to-r from-gray-50/80 to-gray-100/80 dark:from-white/5 dark:to-white/10 shadow-inner">
                                        {/* Liquid background */}
                                        <div
                                            className="pointer-events-none absolute top-1 bottom-1 rounded-2xl backdrop-blur-sm shadow-xl"
                                            style={{
                                                // ensure it never becomes a thin line
                                                left: `${indicatorStyle.left}px`,
                                                width: `${Math.max(indicatorStyle.width, 60)}px`,
                                                opacity:
                                                    (hoveredLink || activeSection) && indicatorStyle.width > 0 ? 1 : 0,
                                                background:
                                                    "linear-gradient(135deg, rgba(59,130,246,0.25), rgba(147,51,234,0.25), rgba(236,72,153,0.25))",
                                                border: "1px solid rgba(59,130,246,0.4)",
                                                transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
                                                willChange: "transform,width,opacity",
                                            }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/18 to-transparent rounded-2xl" />
                                        </div>

                                        {navLinks.slice(1, -1).map((link, index) => (
                                            <a
                                                key={link.name}
                                                href={link.href}
                                                data-nav={link.href.slice(1)}
                                                ref={(el) => (navLinksRef.current[index] = el)}
                                                onMouseEnter={() => setHoveredLink(link.href.slice(1))}
                                                onMouseLeave={() => setHoveredLink(null)}
                                                className={`relative z-10 px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200 ${activeSection === link.href.slice(1)
                                                        ? "text-gray-900 dark:text-white"
                                                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                                                    }`}
                                            >
                                                {link.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>



                                {/* Right Side - Contact + Theme */}
                                <div className="hidden lg:flex items-center gap-3">
                                    <a
                                        ref={ctaButtonRef}
                                        href="#contact"
                                        className="group relative px-5 py-2.5 text-sm font-semibold text-white dark:text-gray-900 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-gray-900/30 dark:hover:shadow-white/30 hover:scale-[1.02]"
                                        style={{
                                            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(${mousePosition.x !== 0 || mousePosition.y !== 0 ? 1.02 : 1})`,
                                            transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s",
                                            willChange: "transform",
                                        }}
                                    >
                                        {/* Enhanced gradient background with animation */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-black dark:from-white dark:via-gray-100 dark:to-gray-200" />

                                        {/* Animated gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/20 to-pink-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        {/* Enhanced shine effect */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 dark:via-black/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                                        </div>

                                        <span className="relative z-10 flex items-center gap-2">
                                            Get in Touch
                                            <svg
                                                className="w-4 h-4 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2.5}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                                />
                                            </svg>
                                        </span>
                                    </a>
                                    <ThemeToggle />
                                </div>

                                {/* Mobile Menu Button with Enhanced Micro-interaction */}
                                <div className="lg:hidden flex items-center gap-3">
                                    <ThemeToggle />
                                    <button
                                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                                        className="relative w-9 h-9 flex items-center justify-center group rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                                        aria-label="Toggle menu"
                                    >
                                        <div className="w-5 h-4 flex flex-col justify-between">
                                            <span
                                                className={`w-full h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-300 origin-left ${isMobileOpen
                                                    ? "rotate-45 translate-y-1.5"
                                                    : "group-hover:w-4 group-hover:translate-x-0.5"
                                                    }`}
                                            />
                                            <span
                                                className={`w-full h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-200 ${isMobileOpen ? "opacity-0 scale-0" : "group-hover:scale-90"
                                                    }`}
                                            />
                                            <span
                                                className={`w-full h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-300 origin-left ${isMobileOpen
                                                    ? "-rotate-45 -translate-y-1.5"
                                                    : "group-hover:w-3 group-hover:translate-x-1"
                                                    }`}
                                            />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Dropdown Menu with Enhanced Staggered Animation */}
                    <div
                        className={`lg:hidden absolute top-full left-0 right-0 mt-2 transition-all duration-300 ${isMobileOpen
                            ? "opacity-100 translate-y-0 scale-100"
                            : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
                            }`}
                    >
                        <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border border-gray-200/60 dark:border-gray-700/60 rounded-2xl shadow-xl p-4">
                            <div className="flex flex-col gap-2">
                                {navLinks.map((link, index) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className={`group relative px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 flex items-center gap-3 overflow-hidden ${activeSection === link.href.slice(1)
                                            ? "text-gray-900 dark:text-gray-100 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"
                                            : "text-gray-700 dark:text-gray-300"
                                            }`}
                                        style={{
                                            transitionDelay: isMobileOpen ? `${index * 40}ms` : "0ms",
                                            transform: isMobileOpen ? "translateX(0)" : "translateX(-10px)",
                                        }}
                                        onClick={() => setIsMobileOpen(false)}
                                    >
                                        {/* Hover background with gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />

                                        <span className="relative z-10 text-base group-hover:scale-125 transition-transform duration-300">
                                            {link.icon}
                                        </span>
                                        <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                                            {link.name}
                                        </span>

                                        {/* Arrow indicator on hover with bounce */}
                                        <svg
                                            className="relative z-10 w-4 h-4 ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2.5}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
