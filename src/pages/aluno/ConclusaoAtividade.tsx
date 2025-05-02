
import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, XCircle } from 'lucide-react';

// Dados simulados para demonstração
const activityData = {
  id: '1',
  title: 'Equações do segundo grau',
  description: 'Exercícios sobre resolução de equações do segundo grau e aplicações.',
  dueDate: '15/05/2025',
  estimatedTime: '30 min',
  type: 'Matemática',
  questions: [
    {
      id: 'q1',
      text: 'Qual é a solução da equação x² - 5x + 6 = 0?',
      options: [
        { id: 'q1-a', text: 'x = 2 e x = 3' },
        { id: 'q1-b', text: 'x = 1 e x = 4' },
        { id: 'q1-c', text: 'x = -2 e x = -3' },
        { id: 'q1-d', text: 'x = -1 e x = -4' }
      ],
      correctAnswer: 'q1-a',
      explanation: 'Aplicando a fórmula de Bhaskara: x = (-b ± √Δ) / 2a, onde Δ = b² - 4ac. Temos a = 1, b = -5, c = 6. Então Δ = (-5)² - 4×1×6 = 25 - 24 = 1. Assim, x = (5 ± 1) / 2, o que nos dá x = 2 ou x = 3.'
    },
    {
      id: 'q2',
      text: 'Em uma equação do segundo grau ax² + bx + c = 0, o que determina se ela tem raízes reais?',
      options: [
        { id: 'q2-a', text: 'O valor de a' },
        { id: 'q2-b', text: 'O valor de c' },
        { id: 'q2-c', text: 'O discriminante (Δ = b² - 4ac)' },
        { id: 'q2-d', text: 'A soma das raízes' }
      ],
      correctAnswer: 'q2-c',
      explanation: 'O discriminante Δ = b² - 4ac determina se a equação tem raízes reais. Se Δ > 0, existem duas raízes reais distintas. Se Δ = 0, existe uma raiz real de multiplicidade 2. Se Δ < 0, não existem raízes reais.'
    },
    {
      id: 'q3',
      text: 'Qual é a fórmula para resolver uma equação do segundo grau?',
      options: [
        { id: 'q3-a', text: 'x = -b ± √Δ / 2a' },
        { id: 'q3-b', text: 'x = -b ± √Δ / a' },
        { id: 'q3-c', text: 'x = b ± √Δ / 2a' },
        { id: 'q3-d', text: 'x = b ± √Δ / a' }
      ],
      correctAnswer: 'q3-a',
      explanation: 'A fórmula de Bhaskara para resolver equações do segundo grau (ax² + bx + c = 0) é x = (-b ± √Δ) / 2a, onde Δ = b² - 4ac.'
    }
  ]
};

const ConclusaoAtividade = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Obter os resultados da página anterior
  const { score, total, percentage, answers } = location.state || { score: 0, total: 0, percentage: 0, answers: {} };
  
  // Simular busca de dados com base no ID
  const activity = activityData;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Atividade Concluída</h1>
      </div>
      
      <Card className="text-center p-6">
        <CardHeader>
          <CardTitle>{activity.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative w-32 h-32 mx-auto">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold">{percentage}%</span>
            </div>
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <circle
                cx="18"
                cy="18"
                r="15.91549430918954"
                fill="transparent"
                stroke="#e9ecef"
                strokeWidth="3"
              ></circle>
              <circle
                cx="18"
                cy="18"
                r="15.91549430918954"
                fill="transparent"
                stroke={percentage >= 70 ? "#24B47E" : percentage >= 40 ? "#F59E0B" : "#EF4444"}
                strokeWidth="3"
                strokeDasharray={`${percentage} ${100 - percentage}`}
                strokeDashoffset="25"
                style={{ transition: "stroke-dasharray 0.8s ease" }}
              ></circle>
            </svg>
          </div>
          
          <div>
            <p className="text-xl font-semibold">Você acertou {score} de {total} questões!</p>
            <p className="text-muted-foreground">
              {percentage >= 70 
                ? "Excelente trabalho! Continue assim." 
                : percentage >= 40 
                ? "Bom trabalho! Mas há espaço para melhorar." 
                : "Você pode melhorar. Reveja o conteúdo."}
            </p>
          </div>
        </CardContent>
      </Card>
      
      <h2 className="text-xl font-semibold">Revisão das Questões</h2>
      
      <div className="space-y-6">
        {activity.questions.map((question, index) => {
          const userAnswer = answers[question.id];
          const isCorrect = userAnswer === question.correctAnswer;
          
          return (
            <Card key={question.id} className={isCorrect ? "border-education-secondary" : "border-education-accent"}>
              <CardHeader className="flex flex-row items-start gap-2">
                <div className="mt-1">
                  {isCorrect 
                    ? <CheckCircle className="h-5 w-5 text-education-secondary" /> 
                    : <XCircle className="h-5 w-5 text-education-accent" />}
                </div>
                <div>
                  <CardTitle className="text-lg">
                    <span className="font-bold mr-2">Questão {index + 1}.</span>
                    {question.text}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="font-medium">Sua resposta:</div>
                  <div className={`p-3 rounded-md ${isCorrect ? "bg-green-50 text-education-secondary" : "bg-red-50 text-education-accent"}`}>
                    {question.options.find(opt => opt.id === userAnswer)?.text || "Sem resposta"}
                  </div>
                </div>
                
                {!isCorrect && (
                  <div className="space-y-2">
                    <div className="font-medium">Resposta correta:</div>
                    <div className="p-3 rounded-md bg-green-50 text-education-secondary">
                      {question.options.find(opt => opt.id === question.correctAnswer)?.text}
                    </div>
                  </div>
                )}
                
                <div className="space-y-2">
                  <div className="font-medium">Explicação:</div>
                  <div className="p-3 rounded-md bg-blue-50 text-education-primary">
                    {question.explanation}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      <div className="flex justify-end space-x-4 pt-4">
        <Button onClick={() => navigate('/aluno')} className="btn-hover">
          Voltar ao Dashboard
        </Button>
      </div>
    </div>
  );
};

export default ConclusaoAtividade;
