
import React from 'react';
import { cn } from '@/lib/utils';
import { Book } from 'lucide-react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo = ({ className, showText = true }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-education-primary text-white">
        <Book className="w-6 h-6" />
      </div>
      {showText && (
        <span className="font-display text-xl font-bold text-education-primary">
          Saber em Ação
        </span>
      )}
    </div>
  );
};

export default Logo;
