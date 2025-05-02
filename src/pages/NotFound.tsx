
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Usuário tentou acessar rota inexistente:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-education-light to-white p-4">
      <div className="text-center space-y-6 max-w-md animate-fade-in">
        <Logo className="mx-auto" />
        <h1 className="text-4xl font-bold mb-4 text-education-primary">404</h1>
        <p className="text-xl text-gray-600 mb-4">Página não encontrada</p>
        <p className="text-gray-500">A página que você está procurando não existe ou foi movida.</p>
        <Button className="btn-hover mt-6" asChild>
          <a href="/">Voltar para a página inicial</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
