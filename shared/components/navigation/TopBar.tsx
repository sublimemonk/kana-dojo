'use client';

import { Link } from '@/core/i18n/routing';
import { useClick } from '@/shared/hooks/generic/useAudio';
import { cn } from '@/shared/lib/utils';
import clsx from 'clsx';
import { Sparkles, type LucideIcon } from 'lucide-react';

type NavItem = {
  name: string;
  href: string;
  icon?: LucideIcon;
  charIcon?: string;
};

export default function TopBar() {
  const { playClick } = useClick();

  const navItems: NavItem[] = [
    { name: 'Kana', href: '/kana', charIcon: 'あ' },
    { name: 'Kanji', href: '/kanji', charIcon: '字' },
    { name: 'Vocab', href: '/vocabulary', charIcon: '語' },
    { name: 'Preferences', href: '/preferences', icon: Sparkles },
  ];

  return (
    <nav className='fixed top-0 right-0 left-0 z-50 border-b border-(--border-color) bg-(--background-color)'>
      <div className='flex h-20 items-center justify-between px-4 md:px-6'>
        {/* Logo */}
        <Link
          href='/'
          onClick={() => playClick()}
          className='flex items-center gap-3 text-lg font-medium text-(--main-color) transition-opacity hover:opacity-80'
        >
          <span className='text-3xl'>KanaDojo</span>
          <span className='text-3xl text-(--secondary-color)'>かな道場</span>
        </Link>

        {/* Navigation Links */}
        <div className='items-center gap-1 md:flex'>
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => playClick()}
              className={clsx(
                'flex items-center gap-2 rounded-lg px-3 py-2 text-base font-medium transition-colors',
                'text-(--secondary-color) hover:bg-(--border-color) hover:text-(--main-color)',
              )}
            >
              {item.charIcon ? (
                <span
                  className={clsx(
                    'inline-flex h-8 w-8 items-center justify-center rounded-xl text-lg',
                    'bg-(--secondary-color) text-(--background-color)',
                    'border-b-4 border-(--secondary-color-accent)',
                    'transition-all duration-200',
                    'motion-safe:animate-float',
                    index === 0 &&
                      '[--float-distance:-4px] [animation-delay:0ms]',
                    index === 1 &&
                      '[--float-distance:-3px] [animation-delay:800ms]',
                    index === 2 &&
                      '[--float-distance:-5px] [animation-delay:1600ms]',
                  )}
                >
                  {item.charIcon}
                </span>
              ) : (
                item.icon && (
                  <span
                    className={clsx(
                      'inline-flex h-8 w-8 items-center justify-center rounded-xl',
                      'bg-(--main-color) text-(--background-color)',
                      'border-b-4 border-(--main-color-accent)',
                      'transition-all duration-200',
                      'motion-safe:animate-float [--float-distance:-4px] [animation-delay:400ms]',
                    )}
                  >
                    <item.icon className='size-4' />
                  </span>
                )
              )}
              <span className={cn('text-(--main-color)')}>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
