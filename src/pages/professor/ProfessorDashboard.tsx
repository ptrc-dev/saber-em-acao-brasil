
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ActivityCard from '@/components/ActivityCard';
import { useNavigate } from 'react-router-dom';
import { Plus, Users, BookOpen, CheckCircle } from 'lucide-react';

// Dados simulados para demonstração
const recentActivities = [
  {
    id: '1',
    title: 'Equações do segundo grau',
    description: 'Exercícios sobre resolução de equações do segundo grau e aplicações.',
    dueDate: '15/05/2025',
    estimatedTime: '30 min',
    type: 'Matemática'
  },
  {
    id: '2',
    title: 'Análise de texto literário',
    description: 'Leitura e análise de um trecho do conto "A Cartomante" de Machado de Assis.',
    dueDate: '18/05/2025',
    estimatedTime: '45 min',
    type: 'Português'
  }
];

const ProfessorDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Olá, Professor</h1>
        <Button onClick={() => navigate('/professor/criar-atividade')} className="btn-hover">
          <Plus className="mr-2 h-4 w-4" />
          Criar Atividade
        </Button>
      </div>
      
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Atividades</CardTitle>
            <BookOpen className="h-4 w-4 text-education-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">4 pendentes, 8 concluídas</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Alunos Ativos</CardTitle>
            <Users className="h-4 w-4 text-education-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">34</div>
            <p className="text-xs text-muted-foreground">+2 essa semana</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Conclusão</CardTitle>
            <CheckCircle className="h-4 w-4 text-education-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <p className="text-xs text-muted-foreground">+5% do mês anterior</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Atividades Recentes</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recentActivities.map(activity => (
            <ActivityCard 
              key={activity.id}
              id={activity.id}
              title={activity.title}
              description={activity.description}
              dueDate={activity.dueDate}
              estimatedTime={activity.estimatedTime}
              type={activity.type}
              onClick={() => navigate(`/professor/atividade/${activity.id}`)}
            />
          ))}
          <Card className="flex flex-col items-center justify-center p-6 border-dashed border-2 h-[220px]">
            <Button variant="ghost" className="flex flex-col h-full gap-2" onClick={() => navigate('/professor/criar-atividade')}>
              <Plus className="h-8 w-8 text-muted-foreground" />
              <span className="text-muted-foreground">Adicionar nova atividade</span>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfessorDashboard;
