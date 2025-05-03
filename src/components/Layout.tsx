
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

interface LayoutProps {
  userType: 'aluno' | 'professor';
  userName: string;
}

const Layout = ({ userType, userName }: LayoutProps) => {
  return (
    <div className="app-container min-h-screen flex flex-col">
      <Header userName={userName} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar userType={userType} />
        <main className="flex-1 overflow-auto p-4 md:p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
