
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import ProfessorDashboard from "./pages/professor/ProfessorDashboard";
import CriarAtividade from "./pages/professor/CriarAtividade";
import AlunoDashboard from "./pages/aluno/AlunoDashboard";
import ResponderAtividade from "./pages/aluno/ResponderAtividade";
import ConclusaoAtividade from "./pages/aluno/ConclusaoAtividade";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          
          {/* Rotas do Professor */}
          <Route
            path="/professor"
            element={<Layout userType="professor" userName="Maria Silva" />}
          >
            <Route index element={<ProfessorDashboard />} />
            <Route path="criar-atividade" element={<CriarAtividade />} />
            <Route path="gerenciar-atividades" element={<ProfessorDashboard />} />
            <Route path="relatorios" element={<ProfessorDashboard />} />
            <Route path="configuracoes" element={<ProfessorDashboard />} />
          </Route>
          
          {/* Rotas do Aluno */}
          <Route
            path="/aluno"
            element={<Layout userType="aluno" userName="João Santos" />}
          >
            <Route index element={<AlunoDashboard />} />
            <Route path="atividades-pendentes" element={<AlunoDashboard />} />
            <Route path="atividades-concluidas" element={<AlunoDashboard />} />
            <Route path="calendario" element={<AlunoDashboard />} />
            <Route path="relatorios" element={<AlunoDashboard />} />
          </Route>
          
          {/* Rotas de Atividade do Aluno */}
          <Route path="/aluno/responder-atividade/:id" element={<ResponderAtividade />} />
          <Route path="/aluno/conclusao-atividade/:id" element={<ConclusaoAtividade />} />
          
          {/* Rota de 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
