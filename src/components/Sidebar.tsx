
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  Book,
  Home,
  Calendar,
  CheckSquare,
  BarChart3,
  Settings,
} from 'lucide-react';

interface SidebarItem {
  title: string;
  icon: React.ElementType;
  path: string;
}

interface SidebarProps {
  userType: 'aluno' | 'professor';
}

const Sidebar = ({ userType }: SidebarProps) => {
  const location = useLocation();

  const professorItems: SidebarItem[] = [
    { title: 'Dashboard', icon: Home, path: '/professor' },
    { title: 'Criar Atividade', icon: Book, path: '/professor/criar-atividade' },
    { title: 'Gerenciar Atividades', icon: CheckSquare, path: '/professor/gerenciar-atividades' },
    { title: 'Relatórios', icon: BarChart3, path: '/professor/relatorios' },
    { title: 'Configurações', icon: Settings, path: '/professor/configuracoes' },
  ];

  const alunoItems: SidebarItem[] = [
    { title: 'Dashboard', icon: Home, path: '/aluno' },
    { title: 'Atividades Pendentes', icon: Book, path: '/aluno/atividades-pendentes' },
    { title: 'Atividades Concluídas', icon: CheckSquare, path: '/aluno/atividades-concluidas' },
    { title: 'Calendário', icon: Calendar, path: '/aluno/calendario' },
    { title: 'Relatórios', icon: BarChart3, path: '/aluno/relatorios' },
  ];

  const items = userType === 'professor' ? professorItems : alunoItems;

  return (
    <aside className="h-full bg-sidebar flex flex-col w-64 border-r border-gray-200">
      <div className="flex flex-col flex-1 py-6">
        {items.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center gap-3 px-4 py-3 mx-2 rounded-md text-sidebar-foreground hover:bg-sidebar-accent transition-colors",
              location.pathname === item.path && "bg-sidebar-accent font-medium"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.title}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
