
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import ActivityCard from '@/components/ActivityCard';
import { useNavigate } from 'react-router-dom';
import { BookOpen, CheckCircle, Clock } from 'lucide-react';

// Dados simulados para demonstração
const pendingActivities = [
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
  },
  {
    id: '3',
    title: 'Reações Químicas',
    description: 'Exercícios sobre balanceamento de equações químicas e identificação de reações.',
    dueDate: '20/05/2025',
    estimatedTime: '40 min',
    type: 'Química'
  }
];

const AlunoDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Olá, Estudante</h1>
        <Button onClick={() => navigate('/aluno/atividades-pendentes')} className="btn-hover">
          Ver todas as atividades
        </Button>
      </div>
      
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Atividades Pendentes</CardTitle>
            <BookOpen className="h-4 w-4 text-education-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Prazo mais próximo: 15/05</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Atividades Concluídas</CardTitle>
            <CheckCircle className="h-4 w-4 text-education-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">+2 esta semana</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tempo Dedicado</CardTitle>
            <Clock className="h-4 w-4 text-education-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5h 30min</div>
            <p className="text-xs text-muted-foreground">Últimos 7 dias</p>
          </CardContent>
        </Card>
      </div>
      
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Seu progresso geral</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Matemática</span>
              <span className="text-sm text-muted-foreground">75%</span>
            </div>
            <Progress value={75} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Português</span>
              <span className="text-sm text-muted-foreground">60%</span>
            </div>
            <Progress value={60} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Ciências</span>
              <span className="text-sm text-muted-foreground">85%</span>
            </div>
            <Progress value={85} className="h-2" />
          </div>
        </div>
      </Card>
      
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Atividades Pendentes</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pendingActivities.map(activity => (
            <ActivityCard 
              key={activity.id}
              id={activity.id}
              title={activity.title}
              description={activity.description}
              dueDate={activity.dueDate}
              estimatedTime={activity.estimatedTime}
              type={activity.type}
              onClick={() => navigate(`/aluno/responder-atividade/${activity.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlunoDashboard;
