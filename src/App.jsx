import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Feed from './components/Feed';
import Profile from './components/Profile';

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
      setDark(true);
    }
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 selection:bg-fuchsia-200/60 dark:selection:bg-fuchsia-400/30">
      <Navbar darkMode={dark} onToggleDark={toggleDark} />
      <main className="mx-auto max-w-6xl px-4 pt-4 pb-24 md:pb-10 space-y-6">
        <Hero />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Feed />
          </div>
          <aside className="space-y-6">
            <Profile />
          </aside>
        </div>
      </main>
    </div>
  );
}

export default App;
