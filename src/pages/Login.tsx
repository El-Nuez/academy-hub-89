import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { LogIn, GraduationCap, UserCog, Shield } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState<"alumno" | "profesor" | "admin">("alumno");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const credentials = {
      alumno: { username: "alumno123", password: "1234", name: "Carlos Ramírez", initials: "CR" },
      profesor: { username: "profesor123", password: "1234", name: "Prof. García", initials: "PG" },
      admin: { username: "admin123", password: "1234", name: "Administrador", initials: "AD" },
    };

    setTimeout(() => {
      const valid = credentials[userType];
      if (username === valid.username && password === valid.password) {
        localStorage.setItem("userType", userType);
        localStorage.setItem("userName", valid.name);
        localStorage.setItem("userInitials", valid.initials);
        localStorage.setItem("isAuthenticated", "true");

        toast.success(`¡Bienvenido, ${valid.name}!`);

        if (userType === "alumno") navigate("/alumno");
        else if (userType === "profesor") navigate("/profesor");
        else navigate("/admin");
      } else {
        toast.error("Credenciales incorrectas. Verifica tus datos.");
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-[#2E2B75] via-[#3A378C] to-[#C1D119]"
    >
      <div className="w-full max-w-md bg-white/95 rounded-2xl shadow-2xl p-8 border border-[#000000] backdrop-blur-sm animate-fade-in">
        {/* Header institucional */}
        <div className="text-center mb-8">
          <div className="mb-5">
          <div className="w-20 h-20 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-[##000000]/80 bg-white">
            {/* Aquí se coloca la dirección del logo institucional */}
            <img
              src="logo2.jpeg" // ← cambia esta ruta
              alt="Logo institucional"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

          <h1 className="text-2xl font-bold text-[#2E2B75] mb-1">
            Sistema Integral Académico
          </h1>
          <p className="text-sm text-[#555]">
            Ingresa tus credenciales para continuar
          </p>
        </div>

        {/* Card de login */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Selector de tipo de cuenta */}
          <div>
            <Label className="text-sm font-medium text-[#2E2B75]">
              Tipo de cuenta
            </Label>
            <div className="grid grid-cols-3 gap-3 mt-2">
              {[
                { id: "alumno", label: "Alumno", icon: GraduationCap },
                { id: "profesor", label: "Profesor", icon: UserCog },
                { id: "admin", label: "Admin", icon: Shield },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setUserType(item.id as any)}
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-medium border transition-all duration-300 ${
                    userType === item.id
                      ? "bg-[#2E2B75] text-white border-[#2E2B75] shadow-md"
                      : "bg-white text-[#2E2B75] border-gray-300 hover:bg-[#f5f5f5]"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Usuario */}
          <div>
            <Label htmlFor="username" className="text-sm font-medium text-[#2E2B75]">
              Usuario
            </Label>
            <Input
              id="username"
              type="text"
              placeholder="Ingresa tu usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="h-12 border-2 border-gray-200 focus:border-[#C1D119] rounded-lg"
            />
          </div>

          {/* Contraseña */}
          <div>
            <Label htmlFor="password" className="text-sm font-medium text-[#2E2B75]">
              Contraseña
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="h-12 border-2 border-gray-200 focus:border-[#C1D119] rounded-lg"
            />
          </div>

          {/* Botón */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 bg-[#2E2B75] hover:bg-[#25226A] text-white font-semibold rounded-lg shadow-md transition-all hover:-translate-y-0.5"
          >
            {isLoading ? (
              "Iniciando sesión..."
            ) : (
              <>
                <LogIn className="w-4 h-4 mr-2" /> Iniciar Sesión
              </>
            )}
          </Button>

          {/* Info de prueba */}
          <div className="mt-6 bg-gray-50 p-4 rounded-lg border text-sm text-gray-600">
            <p className="font-semibold text-[#2E2B75] mb-2 text-center">
              Credenciales de prueba:
            </p>
            <ul className="space-y-1 text-center">
              <li><strong>Alumno:</strong> alumno123 / 1234</li>
              <li><strong>Profesor:</strong> profesor123 / 1234</li>
              <li><strong>Admin:</strong> admin123 / 1234</li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
