import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InstitucionalHeader from "@/components/InstitucionalHeader";
import InstitucionalNav from "@/components/InstitucionalNav";
import StatCard from "@/components/StatCard";
import Badge from "@/components/Badge";
import { Button } from "@/components/ui/button";

const Alumno = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const userType = localStorage.getItem("userType");
    
    if (!isAuthenticated || userType !== "alumno") {
      navigate("/");
    }
  }, [navigate]);

  const userName = localStorage.getItem("userName") || "César Montoya";
  const userInitials = localStorage.getItem("userInitials") || "CM";

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const navItems = [
    { label: "Control Escolar", path: "/alumno" },
    { label: "Cajas o Pagos", path: "/alumno/pagos" },
    { label: "Reportes", path: "/alumno/reportes" },
  ];

  return (
    <div className="min-h-screen">
      <InstitucionalHeader userName={userName} userInitials={userInitials} />
      <InstitucionalNav items={navItems} />

      <div className="container mx-auto px-10 py-8 max-w-7xl">
        {/* Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <StatCard label="Promedio General" value="10.0" />
          <StatCard label="Materias Adeudadas" value="0" />
          <StatCard label="Situación Académica" value="REGULAR" />
          <StatCard label="Riesgo Académico" value="NO" />
        </div>

        {/* Contenido principal */}
        <main className="bg-card rounded-2xl p-8 shadow-institucional-md">
          <div className="flex justify-between items-center mb-6 pb-4 border-b-2 border-border">
            <h2 className="text-2xl font-semibold text-primary flex items-center gap-3">
              <div className="w-1 h-7 bg-gradient-secondary rounded-full"></div>
              Situación Académica Actual
            </h2>
          </div>

          {/* Tabla */}
          <div className="overflow-x-auto rounded-xl border border-border shadow-institucional-sm mb-6">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-primary text-primary-foreground">
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">ID Personal</th>
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Nombre del Alumno</th>
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Situación</th>
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Promedio</th>
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Riesgo</th>
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Adeudos</th>
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Generación</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="px-4 py-4 border-b border-border">
                    <strong className="text-primary">257207</strong>
                  </td>
                  <td className="px-4 py-4 border-b border-border">MONTOYA ESQUEDA CESAR ARTURO</td>
                  <td className="px-4 py-4 border-b border-border">
                    <Badge variant="success">REGULAR</Badge>
                  </td>
                  <td className="px-4 py-4 border-b border-border">
                    <strong className="text-primary">10.0</strong>
                  </td>
                  <td className="px-4 py-4 border-b border-border">
                    <Badge variant="success">NO</Badge>
                  </td>
                  <td className="px-4 py-4 border-b border-border">0</td>
                  <td className="px-4 py-4 border-b border-border">AGO-2020 – JUN-2025</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-wrap gap-3">
            <Button className="bg-gradient-primary text-primary-foreground font-semibold shadow-institucional-sm hover:shadow-institucional-md transition-all hover:-translate-y-0.5">
              📚 Materias y Faltas
            </Button>
            <Button className="bg-gradient-secondary text-secondary-foreground font-semibold shadow-institucional-sm hover:shadow-institucional-md transition-all hover:-translate-y-0.5">
              🕐 Horario
            </Button>
            <Button className="bg-gradient-primary text-primary-foreground font-semibold shadow-institucional-sm hover:shadow-institucional-md transition-all hover:-translate-y-0.5">
              📊 Calificaciones Parciales
            </Button>
            <Button className="bg-gradient-secondary text-secondary-foreground font-semibold shadow-institucional-sm hover:shadow-institucional-md transition-all hover:-translate-y-0.5">
              📜 Kardex
            </Button>
            <Button className="bg-gradient-primary text-primary-foreground font-semibold shadow-institucional-sm hover:shadow-institucional-md transition-all hover:-translate-y-0.5">
              🔐 Cambiar Contraseña
            </Button>
            <Button 
              onClick={handleLogout}
              variant="destructive"
              className="font-semibold shadow-institucional-sm hover:shadow-institucional-md transition-all hover:-translate-y-0.5"
            >
              🚪 Salir
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Alumno;
