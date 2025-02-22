import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [toggleThemeSwitcher, setToggleThemeSwitcher] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid hydration mismatch

  const toggleTheme = () => {
    // setTheme(theme === 'light' ? 'dark' : 'light');
    if(!toggleThemeSwitcher) setToggleThemeSwitcher(true);
    else setToggleThemeSwitcher(false);
  };

  return (
    <button
      onClick={() => toggleTheme()}
      className="relative flex items-center justify-between w-20 h-8 bg-gray-800  rounded-full focus:outline-none"
    >
    
      <span  className="flex items-center justify-center w-7 h-7  rounded-full">
        {
            toggleThemeSwitcher ?         
            <Sun className="w-5 h-5 text-white" /> :
            <Moon className="w-5 h-5 ml-auto text-white-800" />
        }
      </span>
      <span className="flex items-center justify-center w-7 h-7  rounded-full">        
      {
            toggleThemeSwitcher ?         
            <Moon className="w-5 h-5 text-white " /> :
            <Sun className="w-5 h-5 ml-auto text-white-800" />
        }
      </span>
    </button>
  );
};

export default ThemeSwitcher;
