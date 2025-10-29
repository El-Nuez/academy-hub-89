import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState<"alumno" | "profesor" | "admin">("alumno");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validación de credenciales
    const credentials = {
      alumno: { username: "alumno123", password: "1234", name: "César Montoya", initials: "CM" },
      profesor: { username: "profesor123", password: "1234", name: "Prof. García", initials: "PG" },
      admin: { username: "admin123", password: "1234", name: "Administrador", initials: "AD" }
    };

    setTimeout(() => {
      const validCredentials = credentials[userType];

      if (username === validCredentials.username && password === validCredentials.password) {
        // Guardar datos de sesión
        localStorage.setItem("userType", userType);
        localStorage.setItem("userName", validCredentials.name);
        localStorage.setItem("userInitials", validCredentials.initials);
        localStorage.setItem("isAuthenticated", "true");

        toast.success(`¡Bienvenido, ${validCredentials.name}!`);
        
        // Redirigir según tipo de usuario
        if (userType === "alumno") navigate("/alumno");
        else if (userType === "profesor") navigate("/profesor");
        else navigate("/admin");
      } else {
        toast.error("Credenciales incorrectas. Por favor, verifica tus datos.");
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header institucional */}
        <div className="text-center mb-8">
          <div className="mb-4 text-muted-foreground text-sm">
            {/* Aquí se coloca la dirección del logo institucional */}
          </div>
          <h1 className="text-3xl font-bold text-primary mb-2">Sistema Integral Académico</h1>
          <p className="text-muted-foreground">Ingresa tus credenciales para continuar</p>
        </div>

        {/* Card de login */}
        <div className="bg-card rounded-2xl shadow-institucional-lg p-8 border border-border">
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Selector de tipo de usuario */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">Tipo de cuenta</Label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setUserType("alumno")}
                  className={`py-3 px-4 rounded-lg font-medium text-sm transition-all ${
                    userType === "alumno"
                      ? "bg-gradient-primary text-primary-foreground shadow-institucional-sm"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  Alumno
                </button>
                <button
                  type="button"
                  onClick={() => setUserType("profesor")}
                  className={`py-3 px-4 rounded-lg font-medium text-sm transition-all ${
                    userType === "profesor"
                      ? "bg-gradient-primary text-primary-foreground shadow-institucional-sm"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  Profesor
                </button>
                <button
                  type="button"
                  onClick={() => setUserType("admin")}
                  className={`py-3 px-4 rounded-lg font-medium text-sm transition-all ${
                    userType === "admin"
                      ? "bg-gradient-primary text-primary-foreground shadow-institucional-sm"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  Admin
                </button>
              </div>
            </div>

            {/* Usuario */}
            <div className="space-y-2">
              <Label htmlFor="username" className="text-sm font-medium">Usuario</Label>
              <Input
                id="username"
                type="text"
                placeholder="Ingresa tu usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="h-12 rounded-lg border-2 focus:border-primary"
              />
            </div>

            {/* Contraseña */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">Contraseña</Label>
              <Input
                id="password"
                type="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-12 rounded-lg border-2 focus:border-primary"
              />
            </div>

            {/* Botón de inicio de sesión */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-gradient-primary text-primary-foreground font-semibold rounded-lg shadow-institucional-md hover:shadow-institucional-lg transition-all hover:-translate-y-0.5"
            >
              {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
            </Button>

            {/* Información de credenciales de prueba */}
            <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
              <p className="text-xs text-muted-foreground text-center font-medium mb-2">
                Credenciales de prueba:
              </p>
              <div className="text-xs text-muted-foreground space-y-1">
                <p><strong>Alumno:</strong> alumno123 / 1234</p>
                <p><strong>Profesor:</strong> profesor123 / 1234</p>
                <p><strong>Admin:</strong> admin123 / 1234</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
