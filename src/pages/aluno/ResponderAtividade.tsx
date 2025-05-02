
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Clock } from 'lucide-react';

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
      correctAnswer: 'q1-a'
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
      correctAnswer: 'q2-c'
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
      correctAnswer: 'q3-a'
    }
  ]
};

const ResponderAtividade = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [answers, setAnswers] = useState<Record<string, string>>({});

  // Simular busca de dados com base no ID
  const activity = activityData;

  const handleSelectOption = (questionId: string, optionId: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionId }));
  };

  const handleSubmit = () => {
    // Verificar se todas as perguntas foram respondidas
    const allQuestionsAnswered = activity.questions.every(q => !!answers[q.id]);
    
    if (!allQuestionsAnswered) {
      toast({
        title: "Atenção",
        description: "Por favor, responda todas as perguntas antes de enviar.",
        variant: "destructive",
      });
      return;
    }
    
    // Calcular a pontuação
    let score = 0;
    activity.questions.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        score++;
      }
    });
    
    const percentage = Math.round((score / activity.questions.length) * 100);
    
    // Navegar para a página de conclusão com os resultados
    navigate(`/aluno/conclusao-atividade/${id}`, { 
      state: { 
        score,
        total: activity.questions.length,
        percentage,
        answers
      } 
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{activity.title}</h1>
        <div className="flex items-center gap-2 px-3 py-1 bg-education-light rounded-full text-education-primary text-sm">
          <Clock className="h-4 w-4" />
          <span>Tempo estimado: {activity.estimatedTime}</span>
        </div>
      </div>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-lg">Descrição da Atividade</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{activity.description}</p>
        </CardContent>
      </Card>
      
      <div className="space-y-6">
        {activity.questions.map((question, index) => (
          <Card key={question.id} className="animate-slide-in" style={{ animationDelay: `${index * 100}ms` }}>
            <CardHeader>
              <CardTitle className="text-lg">
                <span className="font-bold mr-2">Questão {index + 1}.</span>
                {question.text}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={answers[question.id]}
                onValueChange={(value) => handleSelectOption(question.id, value)}
              >
                <div className="space-y-3">
                  {question.options.map(option => (
                    <div key={option.id} className="flex items-start space-x-2">
                      <RadioGroupItem value={option.id} id={option.id} />
                      <Label className="cursor-pointer" htmlFor={option.id}>
                        {option.text}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="flex justify-end space-x-4 pt-4">
        <Button variant="outline" onClick={() => navigate('/aluno')}>
          Cancelar
        </Button>
        <Button onClick={handleSubmit} className="btn-hover">
          Enviar Respostas
        </Button>
      </div>
    </div>
  );
};

export default ResponderAtividade;
