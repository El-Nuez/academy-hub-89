import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InstitucionalHeader from "@/components/InstitucionalHeader";
import InstitucionalNav from "@/components/InstitucionalNav";
import StatCard from "@/components/StatCard";
import Badge from "@/components/Badge";
import { Button } from "@/components/ui/button";

const Admin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const userType = localStorage.getItem("userType");
    
    if (!isAuthenticated || userType !== "admin") {
      navigate("/");
    }
  }, [navigate]);

  const userName = localStorage.getItem("userName") || "Administrador";
  const userInitials = localStorage.getItem("userInitials") || "AD";

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const navItems = [
    { label: "Panel de Control", path: "/admin" },
    { label: "Usuarios", path: "/admin/usuarios" },
    { label: "Configuración", path: "/admin/config" },
  ];

  return (
    <div className="min-h-screen">
      <InstitucionalHeader userName={userName} userInitials={userInitials} />
      <InstitucionalNav items={navItems} />

      <div className="container mx-auto px-10 py-8 max-w-7xl">
        {/* Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <StatCard label="Total Alumnos" value="1,247" />
          <StatCard label="Total Profesores" value="89" />
          <StatCard label="Grupos Activos" value="47" />
          <StatCard label="Pagos Pendientes" value="23" />
        </div>

        {/* Contenido principal */}
        <main className="bg-card rounded-2xl p-8 shadow-institucional-md">
          <div className="flex justify-between items-center mb-6 pb-4 border-b-2 border-border">
            <h2 className="text-2xl font-semibold text-primary flex items-center gap-3">
              <div className="w-1 h-7 bg-gradient-secondary rounded-full"></div>
              Panel de Control Administrativo
            </h2>
          </div>

          {/* Tabla */}
          <div className="overflow-x-auto rounded-xl border border-border shadow-institucional-sm mb-6">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-primary text-primary-foreground">
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Módulo</th>
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Descripción</th>
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Estado</th>
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Usuarios</th>
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="px-4 py-4 border-b border-border font-medium">Control Escolar</td>
                  <td className="px-4 py-4 border-b border-border">Gestión de alumnos y calificaciones</td>
                  <td className="px-4 py-4 border-b border-border">
                    <Badge variant="success">ACTIVO</Badge>
                  </td>
                  <td className="px-4 py-4 border-b border-border"><strong className="text-primary">1,247</strong></td>
                  <td className="px-4 py-4 border-b border-border">
                    <Button size="sm" className="bg-gradient-primary text-primary-foreground">Gestionar</Button>
                  </td>
                </tr>
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="px-4 py-4 border-b border-border font-medium">Sistema de Pagos</td>
                  <td className="px-4 py-4 border-b border-border">Control de colegiaturas y adeudos</td>
                  <td className="px-4 py-4 border-b border-border">
                    <Badge variant="success">ACTIVO</Badge>
                  </td>
                  <td className="px-4 py-4 border-b border-border"><strong className="text-primary">1,247</strong></td>
                  <td className="px-4 py-4 border-b border-border">
                    <Button size="sm" className="bg-gradient-primary text-primary-foreground">Gestionar</Button>
                  </td>
                </tr>
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="px-4 py-4 border-b border-border font-medium">Profesores</td>
                  <td className="px-4 py-4 border-b border-border">Gestión de docentes y asignaciones</td>
                  <td className="px-4 py-4 border-b border-border">
                    <Badge variant="success">ACTIVO</Badge>
                  </td>
                  <td className="px-4 py-4 border-b border-border"><strong className="text-primary">89</strong></td>
                  <td className="px-4 py-4 border-b border-border">
                    <Button size="sm" className="bg-gradient-primary text-primary-foreground">Gestionar</Button>
                  </td>
                </tr>
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="px-4 py-4 border-b border-border font-medium">Reportes</td>
                  <td className="px-4 py-4 border-b border-border">Generación de reportes institucionales</td>
                  <td className="px-4 py-4 border-b border-border">
                    <Badge variant="warning">MANTENIMIENTO</Badge>
                  </td>
                  <td className="px-4 py-4 border-b border-border"><strong className="text-primary">12</strong></td>
                  <td className="px-4 py-4 border-b border-border">
                    <Button size="sm" className="bg-gradient-primary text-primary-foreground">Gestionar</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-wrap gap-3">
            <Button className="bg-gradient-primary text-primary-foreground font-semibold shadow-institucional-sm hover:shadow-institucional-md transition-all hover:-translate-y-0.5">
              👥 Gestionar Usuarios
            </Button>
            <Button className="bg-gradient-secondary text-secondary-foreground font-semibold shadow-institucional-sm hover:shadow-institucional-md transition-all hover:-translate-y-0.5">
              📊 Reportes Generales
            </Button>
            <Button className="bg-gradient-primary text-primary-foreground font-semibold shadow-institucional-sm hover:shadow-institucional-md transition-all hover:-translate-y-0.5">
              ⚙️ Configuración
            </Button>
            <Button className="bg-gradient-secondary text-secondary-foreground font-semibold shadow-institucional-sm hover:shadow-institucional-md transition-all hover:-translate-y-0.5">
              💳 Sistema de Pagos
            </Button>
            <Button className="bg-gradient-primary text-primary-foreground font-semibold shadow-institucional-sm hover:shadow-institucional-md transition-all hover:-translate-y-0.5">
              📈 Estadísticas
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

export default Admin;
