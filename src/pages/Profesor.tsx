import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InstitucionalHeader from "@/components/InstitucionalHeader";
import InstitucionalNav from "@/components/InstitucionalNav";
import StatCard from "@/components/StatCard";
import Badge from "@/components/Badge";
import { Button } from "@/components/ui/button";

const Profesor = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const userType = localStorage.getItem("userType");
    
    if (!isAuthenticated || userType !== "profesor") {
      navigate("/");
    }
  }, [navigate]);

  const userName = localStorage.getItem("userName") || "Prof. García";
  const userInitials = localStorage.getItem("userInitials") || "PG";

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const navItems = [
    { label: "Mis Grupos", path: "/profesor" },
    { label: "Calificaciones", path: "/profesor/calificaciones" },
    { label: "Asistencias", path: "/profesor/asistencias" },
  ];

  return (
    <div className="min-h-screen">
      <InstitucionalHeader userName={userName} userInitials={userInitials} />
      <InstitucionalNav items={navItems} />

      <div className="container mx-auto px-10 py-8 max-w-7xl">
        {/* Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <StatCard label="Grupos Asignados" value="5" />
          <StatCard label="Total de Alumnos" value="127" />
          <StatCard label="Materias" value="3" />
          <StatCard label="Pendientes" value="12" />
        </div>

        {/* Contenido principal */}
        <main className="bg-card rounded-2xl p-8 shadow-institucional-md">
          <div className="flex justify-between items-center mb-6 pb-4 border-b-2 border-border">
            <h2 className="text-2xl font-semibold text-primary flex items-center gap-3">
              <div className="w-1 h-7 bg-gradient-secondary rounded-full"></div>
              Mis Grupos Activos
            </h2>
          </div>

          {/* Tabla */}
          <div className="overflow-x-auto rounded-xl border border-border shadow-institucional-sm mb-6">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-primary text-primary-foreground">
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Materia</th>
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Grupo</th>
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Horario</th>
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Alumnos</th>
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Estado</th>
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="px-4 py-4 border-b border-border font-medium">Matemáticas Avanzadas</td>
                  <td className="px-4 py-4 border-b border-border"><strong className="text-primary">5A</strong></td>
                  <td className="px-4 py-4 border-b border-border">Lun-Mie 08:00-10:00</td>
                  <td className="px-4 py-4 border-b border-border">28</td>
                  <td className="px-4 py-4 border-b border-border">
                    <Badge variant="success">ACTIVO</Badge>
                  </td>
                  <td className="px-4 py-4 border-b border-border">
                    <Button size="sm" className="bg-gradient-primary text-primary-foreground">Ver</Button>
                  </td>
                </tr>
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="px-4 py-4 border-b border-border font-medium">Física I</td>
                  <td className="px-4 py-4 border-b border-border"><strong className="text-primary">3B</strong></td>
                  <td className="px-4 py-4 border-b border-border">Mar-Jue 10:00-12:00</td>
                  <td className="px-4 py-4 border-b border-border">25</td>
                  <td className="px-4 py-4 border-b border-border">
                    <Badge variant="success">ACTIVO</Badge>
                  </td>
                  <td className="px-4 py-4 border-b border-border">
                    <Button size="sm" className="bg-gradient-primary text-primary-foreground">Ver</Button>
                  </td>
                </tr>
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="px-4 py-4 border-b border-border font-medium">Química Orgánica</td>
                  <td className="px-4 py-4 border-b border-border"><strong className="text-primary">4C</strong></td>
                  <td className="px-4 py-4 border-b border-border">Vie 14:00-17:00</td>
                  <td className="px-4 py-4 border-b border-border">22</td>
                  <td className="px-4 py-4 border-b border-border">
                    <Badge variant="warning">PENDIENTE</Badge>
                  </td>
                  <td className="px-4 py-4 border-b border-border">
                    <Button size="sm" className="bg-gradient-primary text-primary-foreground">Ver</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-wrap gap-3">
            <Button className="bg-gradient-primary text-primary-foreground font-semibold shadow-institucional-sm hover:shadow-institucional-md transition-all hover:-translate-y-0.5">
              📝 Capturar Calificaciones
            </Button>
            <Button className="bg-gradient-secondary text-secondary-foreground font-semibold shadow-institucional-sm hover:shadow-institucional-md transition-all hover:-translate-y-0.5">
              📋 Pasar Lista
            </Button>
            <Button className="bg-gradient-primary text-primary-foreground font-semibold shadow-institucional-sm hover:shadow-institucional-md transition-all hover:-translate-y-0.5">
              📊 Ver Reportes
            </Button>
            <Button className="bg-gradient-secondary text-secondary-foreground font-semibold shadow-institucional-sm hover:shadow-institucional-md transition-all hover:-translate-y-0.5">
              📅 Mi Horario
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

export default Profesor;
