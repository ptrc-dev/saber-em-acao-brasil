
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

const CriarAtividade = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [tipo, setTipo] = useState('');
  const [dataEntrega, setDataEntrega] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!titulo || !descricao || !tipo) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }
    
    // Simulação de salvamento
    toast({
      title: "Atividade criada",
      description: "A atividade foi criada com sucesso!",
    });
    
    // Redirecionamento após salvamento
    navigate('/professor/gerenciar-atividades');
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Criar Nova Atividade</h1>
      </div>
      
      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="titulo">Título da Atividade *</Label>
              <Input 
                id="titulo" 
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Digite o título da atividade"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="descricao">Descrição *</Label>
              <Textarea 
                id="descricao" 
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                placeholder="Descreva a atividade detalhadamente"
                className="min-h-[120px]"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="tipo">Tipo de Atividade *</Label>
                <Select value={tipo} onValueChange={setTipo} required>
                  <SelectTrigger id="tipo">
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="questionario">Questionário</SelectItem>
                    <SelectItem value="teste">Teste</SelectItem>
                    <SelectItem value="leitura">Leitura</SelectItem>
                    <SelectItem value="projeto">Projeto</SelectItem>
                    <SelectItem value="dissertacao">Dissertação</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="dataEntrega">Data de Entrega</Label>
                <Input 
                  id="dataEntrega" 
                  type="date"
                  value={dataEntrega}
                  onChange={(e) => setDataEntrega(e.target.value)}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Adicionar Questões</Label>
              <div className="border rounded-md p-4 bg-gray-50">
                <p className="text-sm text-gray-500">Configure as questões e opções de resposta para esta atividade.</p>
                <Button type="button" variant="outline" className="mt-4 w-full">
                  Configurar Questões
                </Button>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Solução da Atividade</Label>
              <div className="border rounded-md p-4 bg-gray-50">
                <p className="text-sm text-gray-500">Adicione soluções em formato texto ou vídeo.</p>
                <Button type="button" variant="outline" className="mt-4 w-full">
                  Adicionar Soluções
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-end gap-4">
            <Button type="button" variant="outline" onClick={() => navigate('/professor')}>
              Cancelar
            </Button>
            <Button type="submit" className="btn-hover">
              Salvar Atividade
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default CriarAtividade;
