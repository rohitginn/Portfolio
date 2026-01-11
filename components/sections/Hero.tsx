"use client";
import Image from "next/image";
import { useState } from "react";

export default function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section
      id="home"
      className="min-h-[100vh] flex items-center justify-center px-4 py-20 bg-white dark:bg-[#0a0a0a] transition-colors duration-300 relative overflow-hidden"
    >

      <div className="max-w-4xl w-full mx-auto relative z-10">
        <div className="grid lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-3">
              {/* Greeting with animated line and wave emoji */}
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium tracking-wide animate-fade-in opacity-0 animation-delay-100 flex items-center gap-2">
                <span className="animate-wave inline-block origin-bottom-right">👋</span>
                Hello, I&apos;m
              </p>

              {/* Name with creative hover effects */}
              <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white leading-tight group cursor-default relative">
                <span className="inline-block hover:scale-110 hover:-rotate-2 transition-transform duration-300 hover:text-amber-600 dark:hover:text-amber-400">
                  R
                </span>
                <span className="inline-block hover:scale-110 hover:rotate-2 transition-transform duration-300 hover:text-orange-600 dark:hover:text-orange-400">
                  o
                </span>
                <span className="inline-block hover:scale-110 hover:-rotate-2 transition-transform duration-300 hover:text-emerald-600 dark:hover:text-emerald-400">
                  h
                </span>
                <span className="inline-block hover:scale-110 hover:rotate-2 transition-transform duration-300 hover:text-amber-600 dark:hover:text-amber-400">
                  i
                </span>
                <span className="inline-block hover:scale-110 hover:-rotate-2 transition-transform duration-300 hover:text-teal-600 dark:hover:text-teal-400">
                  t
                </span>
              </h1>

              {/* Static subtitle with gradient */}
              <h2 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 dark:from-gray-300 dark:via-gray-200 dark:to-white bg-clip-text text-transparent animate-fade-in opacity-0 animation-delay-300">
                Full Stack Developer
              </h2>
            </div>

            {/* Enhanced description with creative layout */}
            <div className="relative animate-fade-in opacity-0 animation-delay-500">


              <div className="pl-0 space-y-3 font-inter">
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  I&apos;m a developer who loves turning <span className="relative inline-block">
                    <span className="font-semibold text-gray-900 dark:text-gray-100">ideas into reality</span>
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-amber-500 to-orange-500" />
                  </span>
                </p>

                <div className="flex items-start gap-2">
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    Crafting <span className="font-medium text-gray-800 dark:text-gray-200">engaging digital experiences</span> with modern technologies
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    Building <span className="font-medium text-gray-800 dark:text-gray-200">responsive full-stack apps</span> that make a difference
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons with enhanced animations */}
            <div className="flex flex-wrap gap-3 pt-2 animate-fade-in opacity-0 animation-delay-700">
              <a
                href="#projects"
                className="group relative px-5 py-2.5 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white text-white dark:text-gray-900 rounded-lg text-sm font-medium hover:scale-105 hover:shadow-xl hover:shadow-amber-500/20 dark:hover:shadow-emerald-500/20 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  View My Work
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                {/* Animated gradient shine */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
              </a>

              <a
                href="#contact"
                className="group px-5 py-2.5 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg text-sm font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 hover:border-transparent transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Get in Touch
                  <svg
                    className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Social Links - no rotation on hover */}
            <div className="flex gap-3 pt-3 items-center">
              <span className="text-xs text-gray-500 dark:text-gray-500 font-medium">Connect →</span>
              <a
                href="https://github.com/rohitginn"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-9 h-9 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:border-gray-900 dark:hover:border-white hover:scale-110 hover:shadow-lg hover:shadow-gray-500/30 transition-all duration-300 overflow-hidden"
                aria-label="GitHub"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-50 dark:to-slate-200 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />
                <svg
                  className="w-4 h-4 relative z-10 group-hover:text-white dark:group-hover:text-slate-900 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.63 0-12 5.37-12 12 0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.24c-3.34.73-4.05-1.42-4.05-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.85 1.25 1.85 1.25 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.31.76-1.61-2.67-.31-5.48-1.34-5.48-5.96 0-1.32.47-2.39 1.24-3.22-.12-.3-.54-1.53.11-3.19 0 0 1.01-.32 3.31 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.89.12 3.19.78.83 1.24 1.9 1.24 3.22 0 4.64-2.81 5.64-5.49 5.94.43.37.82 1.11.82 2.24v3.32c0 .32.2.7.8.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/rohitginnela"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-9 h-9 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:border-sky-600 dark:hover:border-sky-400 hover:scale-110 hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-300 overflow-hidden"
                aria-label="LinkedIn"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-700 to-sky-800 dark:from-sky-400 dark:to-sky-500 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />
                <svg
                  className="w-4 h-4 relative z-10 group-hover:text-white transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.08 1 2.5 1s2.48 1.12 2.48 2.5zM.32 8.03H4.7V24H.32V8.03zM8.34 8.03h4.18v2.17h.06c.58-1.1 2-2.26 4.12-2.26 4.4 0 5.21 2.9 5.21 6.67V24h-4.38v-8.3c0-1.98-.04-4.52-2.76-4.52-2.76 0-3.18 2.16-3.18 4.38V24H8.34V8.03z" />
                </svg>
              </a>
              <a
                href="https://x.com/Rohit52321187"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-9 h-9 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:border-slate-900 dark:hover:border-slate-100 hover:scale-110 hover:shadow-lg hover:shadow-slate-500/30 transition-all duration-300 overflow-hidden"
                aria-label="Twitter"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-100 dark:to-slate-200 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />
                <svg
                  className="w-4 h-4 relative z-10 group-hover:text-white dark:group-hover:text-slate-900 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.95 4.57a10 10 0 0 1-2.82.78 4.93 4.93 0 0 0 2.16-2.72 9.86 9.86 0 0 1-3.12 1.2A4.92 4.92 0 0 0 12 7.03a13.96 13.96 0 0 1-10.15-5.15 4.93 4.93 0 0 0 1.52 6.57A4.9 4.9 0 0 1 .96 8v.06A4.93 4.93 0 0 0 4.9 12a4.96 4.96 0 0 1-2.21.08 4.93 4.93 0 0 0 4.6 3.42A9.88 9.88 0 0 1 0 19.54 13.94 13.94 0 0 0 7.55 21.5c9.05 0 14-7.72 14-14.41 0-.22 0-.43-.02-.65A10.1 10.1 0 0 0 24 4.59z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Image - passport style with creative enhancements */}
          <div className="flex justify-center lg:justify-end animate-fade-in opacity-0 animation-delay-300">
            <div className="relative w-40 h-52 md:w-44 md:h-60 group">
              {/* Rotating gradient border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-2xl blur-md opacity-30 group-hover:opacity-60 transition duration-500 animate-tilt" />

              <div
                className={`relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 shadow-xl transition-all duration-500 group-hover:shadow-2xl ${imageLoaded ? "ring-2 ring-amber-500/20 dark:ring-amber-400/20" : ""
                  }`}
              >
                <Image
                  src="/Photo.JPG"
                  alt="Rohit"
                  fill
                  className={`object-cover transition-all duration-700 group-hover:scale-105 ${imageLoaded ? "scale-100 opacity-100" : "scale-105 opacity-0"
                    }`}
                  sizes="(max-width: 768px) 160px, 180px"
                  priority
                  onLoad={() => setImageLoaded(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent group-hover:from-black/15 transition-all duration-300" />

                {/* Enhanced sparkle effects */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-4 right-4 w-2 h-2 bg-amber-400 rounded-full animate-ping" />
                  <div className="absolute bottom-8 left-6 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping animation-delay-300" />
                  <div className="absolute top-12 left-4 w-1 h-1 bg-orange-400 rounded-full animate-ping animation-delay-700" />
                  <div className="absolute top-1/2 right-8 w-1 h-1 bg-teal-400 rounded-full animate-ping animation-delay-500" />
                  <div className="absolute bottom-1/3 right-6 w-1.5 h-1.5 bg-amber-300 rounded-full animate-ping animation-delay-1000" />
                </div>
              </div>

              {/* Enhanced badge with gradient border */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 group-hover:scale-105 transition-transform duration-200">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg blur-sm opacity-50" />
                  <div className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg shadow-lg px-3 py-1.5 border border-emerald-200/50 dark:border-emerald-800/50">
                    <div className="flex items-center gap-1.5">
                      <div className="relative flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                        <div className="absolute w-3 h-3 bg-emerald-500/30 rounded-full animate-ping" />
                      </div>
                      <p className="text-[10px] font-semibold bg-gradient-to-r from-emerald-700 to-teal-700 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                        Open to work
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
