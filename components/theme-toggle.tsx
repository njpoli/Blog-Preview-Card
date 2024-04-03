'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  return (
    <>
      {mounted && (
        <button
          aria-label='theme button'
          className='group rounded-lg p-2 focus:outline-yellow-500'
          onClick={() => {
            setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
          }}
          type='button'
        >
          {resolvedTheme === 'dark' && (
            <Moon
              aria-hidden='true'
              className='h-5 w-5 duration-150 group-hover:scale-110 group-hover:fill-foreground'
            />
          )}
          {resolvedTheme === 'light' && (
            <Sun
              aria-hidden='true'
              className='h-5 w-5 duration-150 group-hover:scale-110 group-hover:fill-foreground'
            />
          )}
        </button>
      )}
    </>
  );
}
