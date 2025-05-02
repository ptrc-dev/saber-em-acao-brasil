
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LogOut, User } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  userName?: string;
}

const Header = ({ userName }: HeaderProps) => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    navigate('/');
  };
  
  return (
    <header className="bg-white border-b border-gray-200 py-2 px-4 md:px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        
        {userName && (
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <User className="w-5 h-5 text-education-primary" />
              <span className="font-medium">{userName}</span>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleLogout}
              className="text-gray-500 hover:text-education-primary"
            >
              <LogOut className="w-5 h-5" />
              <span className="ml-2 hidden md:inline">Sair</span>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
