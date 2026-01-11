"use client";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative p-2.5 rounded-xl group hover:bg-gradient-to-br hover:from-blue-500/5 hover:to-purple-500/5 dark:hover:from-blue-400/5 dark:hover:to-purple-400/5 hover:shadow-md hover:shadow-blue-500/10 dark:hover:shadow-purple-500/10 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:focus:ring-purple-500/30 focus:ring-offset-1 focus:ring-offset-transparent transition-all duration-300"
            aria-label="Toggle theme"
        >
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-all duration-300 relative z-10 group-hover:scale-105"
            >
                {/* Sun icon - visible in light mode */}
                <g className="dark:hidden">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </g>

                {/* Moon icon - visible in dark mode */}
                <g className="hidden dark:block">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </g>
            </svg>

            {/* Minimal gradient glow */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-all duration-400" />
        </button>
    );
}
