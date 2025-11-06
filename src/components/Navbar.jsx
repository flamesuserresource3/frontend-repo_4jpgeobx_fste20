import React from 'react';
import { Home, Search, Plus, Bell, User, Moon, Sun } from 'lucide-react';

const Navbar = ({ darkMode, onToggleDark }) => {
  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-900/60 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 shadow ring-2 ring-white/60 dark:ring-zinc-800" />
          <span className="font-semibold text-lg tracking-tight text-zinc-900 dark:text-zinc-100">VibeGram</span>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-9 pr-3 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
            />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4 text-zinc-700 dark:text-zinc-200">
          <Home className="h-5 w-5 cursor-pointer hover:text-indigo-500" />
          <Plus className="h-5 w-5 cursor-pointer hover:text-indigo-500" />
          <Bell className="h-5 w-5 cursor-pointer hover:text-indigo-500" />
          <User className="h-5 w-5 cursor-pointer hover:text-indigo-500" />
          <button
            aria-label="Toggle dark mode"
            onClick={onToggleDark}
            className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-30 border-t border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-3 grid grid-cols-5 text-zinc-700 dark:text-zinc-200">
          <button className="flex flex-col items-center gap-1">
            <Home className="h-5 w-5" />
          </button>
          <button className="flex flex-col items-center gap-1">
            <Search className="h-5 w-5" />
          </button>
          <button className="flex flex-col items-center gap-1">
            <Plus className="h-5 w-5" />
          </button>
          <button className="flex flex-col items-center gap-1">
            <Bell className="h-5 w-5" />
          </button>
          <button className="flex flex-col items-center gap-1">
            <User className="h-5 w-5" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
