
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';

interface ActivityCardProps {
  id: string;
  title: string;
  description: string;
  dueDate?: string;
  estimatedTime?: string;
  status?: 'pendente' | 'concluída';
  type?: string;
  className?: string;
  onClick?: () => void;
}

const ActivityCard = ({
  id,
  title,
  description,
  dueDate,
  estimatedTime,
  status = 'pendente',
  type,
  className,
  onClick,
}: ActivityCardProps) => {
  return (
    <Card className={cn("card-hover", className)}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          {type && (
            <Badge variant="outline" className="bg-education-light text-education-primary">
              {type}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{description}</p>
        <div className="flex flex-wrap gap-4 text-xs text-gray-500">
          {dueDate && (
            <div className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              <span>Entrega: {dueDate}</span>
            </div>
          )}
          {estimatedTime && (
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>Duração: {estimatedTime}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={onClick} 
          className="w-full btn-hover" 
          variant={status === 'pendente' ? 'default' : 'outline'}
        >
          {status === 'pendente' ? 'Responder' : 'Ver detalhes'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ActivityCard;
