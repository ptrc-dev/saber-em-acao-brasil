
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import Logo from '@/components/Logo';

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [userType, setUserType] = useState<'aluno' | 'professor'>('aluno');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !senha) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    // Simulando login para demonstração
    if (userType === 'aluno') {
      navigate('/aluno');
    } else {
      navigate('/professor');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-education-light to-white p-4 animate-fade-in">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Logo className="mx-auto mb-4" />
          <h1 className="text-2xl font-semibold text-education-dark">Plataforma de Aprendizagem</h1>
          <p className="text-gray-500 mt-2">Conhecimento que transforma</p>
        </div>

        <Card className="w-full animate-slide-in shadow-lg">
          <CardHeader>
            <CardTitle className="text-center">Acesso à Plataforma</CardTitle>
            <CardDescription className="text-center">
              Entre com seus dados para acessar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Tabs defaultValue="aluno" className="w-full mb-6" onValueChange={(value) => setUserType(value as 'aluno' | 'professor')}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="aluno">Aluno</TabsTrigger>
                  <TabsTrigger value="professor">Professor</TabsTrigger>
                </TabsList>
              </Tabs>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="seu@email.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="senha">Senha</Label>
                  <Input 
                    id="senha" 
                    type="password" 
                    placeholder="••••••••" 
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <Button type="submit" className="w-full mt-6 btn-hover">
                Entrar
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-gray-500">
              Problemas para acessar? Contate o administrador
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
