import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-heading font-bold text-foreground">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Страница не найдена</p>
        <Button asChild variant="outline">
          <a href="/">Вернуться на главную</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
