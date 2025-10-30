import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InstitucionalHeader from "@/components/InstitucionalHeader";
import InstitucionalNav from "@/components/InstitucionalNav";
import StatCard from "@/components/StatCard";
import Badge from "@/components/Badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  ClipboardList, 
  BookOpen, 
  Calendar, 
  BarChart3, 
  GraduationCap, 
  Lock,
  FileText,
  History,
  CheckCircle,
  Download,
  Printer,
  Eye
} from "lucide-react";

const Alumno = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("situacion");
  const [activePaymentTab, setActivePaymentTab] = useState("generar");

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const userType = localStorage.getItem("userType");
    
    if (!isAuthenticated || userType !== "alumno") {
      navigate("/");
    }
  }, [navigate]);

  const userName = localStorage.getItem("userName") || "Carlos Ramírez";
  const userInitials = localStorage.getItem("userInitials") || "CR";

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const [currentMainTab, setCurrentMainTab] = useState("control");

  const navItems = [
    { label: "Control Escolar", path: "/alumno" },
    { label: "Cajas o Pagos", path: "/alumno" },
    { label: "Reportes", path: "/alumno" },
  ];

  const handleNavClick = (label: string) => {
    if (label === "Control Escolar") {
      setCurrentMainTab("control");
      setActiveSection("situacion");
    } else if (label === "Cajas o Pagos") {
      setCurrentMainTab("pagos");
      setActivePaymentTab("generar");
    } else if (label === "Reportes") {
      setCurrentMainTab("reportes");
    }
  };

  const renderControlEscolar = () => {
    switch (activeSection) {
      case "situacion":
        return (
          <div className="animate-fade-in">
            {/* === Resumen visual compacto === */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8 items-stretch">
  <div className="hover-lift h-full">
    <StatCard label="Promedio General" value="9.3" />
  </div>
  <div className="hover-lift h-full">
    <StatCard label="Materias Adeudadas" value="0" />
  </div>
  <div className="hover-lift h-full">
    <StatCard label="Grado y Grupo" value="5°A" />
  </div>
  <div className="hover-lift h-full">
    <StatCard label="Plantel" value="CECyTEA Aguascalientes" />
  </div>
</div>

{/* === Información Académica Detallada === */}
<div className="bg-card border border-border rounded-2xl shadow-institucional-lg p-6 space-y-4">
  <h2 className="text-lg font-semibold text-primary mb-2 border-b border-border pb-2">
    Información Académica del Alumno
  </h2>

  <div className="table-institucional overflow-x-auto rounded-xl border border-border shadow-institucional-sm">
    <table className="w-full">
      <thead>
        <tr className="bg-gradient-primary text-primary-foreground">
          <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Número de Control</th>
          <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Nombre</th>
          <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Nivel Educativo</th>
          <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Área</th>
          <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Ciclo Escolar</th>
          <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Situación Académica</th>
        </tr>
      </thead>
      <tbody>
        <tr className="hover:bg-accent/5 transition-all duration-200">
          <td className="px-4 py-4 border-b border-border"><strong className="text-primary">245781</strong></td>
          <td className="px-4 py-4 border-b border-border uppercase">RAMÍREZ CARLOS</td>
          <td className="px-4 py-4 border-b border-border">Bachillerato Tecnológico</td>
          <td className="px-4 py-4 border-b border-border">Electrónica</td>
          <td className="px-4 py-4 border-b border-border">AGO-2020 – JUN-2025</td>
          <td className="px-4 py-4 border-b border-border">
            <Badge variant="success">REGULAR</Badge>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


            
          </div>
        );
      
      case "materias":
        return (
          <div className="animate-fade-in">
            <div className="table-institucional">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-primary text-primary-foreground">
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Materia</th>
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Profesor</th>
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Faltas Permitidas</th>
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Faltas Acumuladas</th>
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Asistencia Restante</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-accent/5 transition-all duration-200">
                    <td className="px-4 py-4 border-b border-border">Matemáticas</td>
                    <td className="px-4 py-4 border-b border-border">Prof. García Martínez</td>
                    <td className="px-4 py-4 border-b border-border">8</td>
                    <td className="px-4 py-4 border-b border-border">2</td>
                    <td className="px-4 py-4 border-b border-border"><Badge variant="success">6</Badge></td>
                  </tr>
                  <tr className="hover:bg-accent/5 transition-all duration-200">
                    <td className="px-4 py-4 border-b border-border">Física</td>
                    <td className="px-4 py-4 border-b border-border">Prof. López Sánchez</td>
                    <td className="px-4 py-4 border-b border-border">8</td>
                    <td className="px-4 py-4 border-b border-border">1</td>
                    <td className="px-4 py-4 border-b border-border"><Badge variant="success">7</Badge></td>
                  </tr>
                  <tr className="hover:bg-accent/5 transition-all duration-200">
                    <td className="px-4 py-4 border-b border-border">Programación</td>
                    <td className="px-4 py-4 border-b border-border">Prof. Hernández Ruiz</td>
                    <td className="px-4 py-4 border-b border-border">8</td>
                    <td className="px-4 py-4 border-b border-border">0</td>
                    <td className="px-4 py-4 border-b border-border"><Badge variant="success">8</Badge></td>
                  </tr>
                  <tr className="hover:bg-accent/5 transition-all duration-200">
                    <td className="px-4 py-4 border-b border-border">Inglés</td>
                    <td className="px-4 py-4 border-b border-border">Prof. Smith Johnson</td>
                    <td className="px-4 py-4 border-b border-border">8</td>
                    <td className="px-4 py-4 border-b border-border">3</td>
                    <td className="px-4 py-4 border-b border-border"><Badge variant="warning">5</Badge></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      case "horario":
        return (
          <div className="animate-fade-in">
            <div className="table-institucional">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-primary text-primary-foreground">
                    <th className="px-3 py-3 text-xs font-semibold uppercase">Hora</th>
                    <th className="px-3 py-3 text-xs font-semibold uppercase">Lunes</th>
                    <th className="px-3 py-3 text-xs font-semibold uppercase">Martes</th>
                    <th className="px-3 py-3 text-xs font-semibold uppercase">Miércoles</th>
                    <th className="px-3 py-3 text-xs font-semibold uppercase">Jueves</th>
                    <th className="px-3 py-3 text-xs font-semibold uppercase">Viernes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-accent/5 transition-all duration-200">
                    <td className="px-3 py-3 border-b border-border font-semibold">7:00-9:00</td>
                    <td className="px-3 py-3 border-b border-border">Matemáticas<br/><span className="text-xs text-muted-foreground">García / A-101</span></td>
                    <td className="px-3 py-3 border-b border-border">-</td>
                    <td className="px-3 py-3 border-b border-border">Matemáticas<br/><span className="text-xs text-muted-foreground">García / A-101</span></td>
                    <td className="px-3 py-3 border-b border-border">-</td>
                    <td className="px-3 py-3 border-b border-border">Matemáticas<br/><span className="text-xs text-muted-foreground">García / A-101</span></td>
                  </tr>
                  <tr className="hover:bg-accent/5 transition-all duration-200">
                    <td className="px-3 py-3 border-b border-border font-semibold">9:00-11:00</td>
                    <td className="px-3 py-3 border-b border-border">Física<br/><span className="text-xs text-muted-foreground">López / B-205</span></td>
                    <td className="px-3 py-3 border-b border-border">Física<br/><span className="text-xs text-muted-foreground">López / B-205</span></td>
                    <td className="px-3 py-3 border-b border-border">-</td>
                    <td className="px-3 py-3 border-b border-border">Física<br/><span className="text-xs text-muted-foreground">López / B-205</span></td>
                    <td className="px-3 py-3 border-b border-border">-</td>
                  </tr>
                  <tr className="hover:bg-accent/5 transition-all duration-200">
                    <td className="px-3 py-3 border-b border-border font-semibold">11:00-13:00</td>
                    <td className="px-3 py-3 border-b border-border">-</td>
                    <td className="px-3 py-3 border-b border-border">Programación<br/><span className="text-xs text-muted-foreground">Hernández / LAB-3</span></td>
                    <td className="px-3 py-3 border-b border-border">Programación<br/><span className="text-xs text-muted-foreground">Hernández / LAB-3</span></td>
                    <td className="px-3 py-3 border-b border-border">-</td>
                    <td className="px-3 py-3 border-b border-border">Programación<br/><span className="text-xs text-muted-foreground">Hernández / LAB-3</span></td>
                  </tr>
                  <tr className="hover:bg-accent/5 transition-all duration-200">
                    <td className="px-3 py-3 border-b border-border font-semibold">15:00-17:00</td>
                    <td className="px-3 py-3 border-b border-border">Inglés<br/><span className="text-xs text-muted-foreground">Smith / C-302</span></td>
                    <td className="px-3 py-3 border-b border-border">-</td>
                    <td className="px-3 py-3 border-b border-border">Inglés<br/><span className="text-xs text-muted-foreground">Smith / C-302</span></td>
                    <td className="px-3 py-3 border-b border-border">Inglés<br/><span className="text-xs text-muted-foreground">Smith / C-302</span></td>
                    <td className="px-3 py-3 border-b border-border">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      case "calificaciones":
        return (
          <div className="animate-fade-in">
            <div className="table-institucional">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-primary text-primary-foreground">
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Materia</th>
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">1er Parcial</th>
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">2do Parcial</th>
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">3er Parcial</th>
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Promedio Actual</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-accent/5 transition-all duration-200">
                    <td className="px-4 py-4 border-b border-border">Matemáticas</td>
                    <td className="px-4 py-4 border-b border-border"><strong className="text-primary">9.5</strong></td>
                    <td className="px-4 py-4 border-b border-border"><strong className="text-primary">9.2</strong></td>
                    <td className="px-4 py-4 border-b border-border"><strong className="text-primary">9.4</strong></td>
                    <td className="px-4 py-4 border-b border-border"><Badge variant="success">9.4</Badge></td>
                  </tr>
                  <tr className="hover:bg-accent/5 transition-all duration-200">
                    <td className="px-4 py-4 border-b border-border">Física</td>
                    <td className="px-4 py-4 border-b border-border"><strong className="text-primary">9.0</strong></td>
                    <td className="px-4 py-4 border-b border-border"><strong className="text-primary">9.3</strong></td>
                    <td className="px-4 py-4 border-b border-border"><strong className="text-primary">9.5</strong></td>
                    <td className="px-4 py-4 border-b border-border"><Badge variant="success">9.3</Badge></td>
                  </tr>
                  <tr className="hover:bg-accent/5 transition-all duration-200">
                    <td className="px-4 py-4 border-b border-border">Programación</td>
                    <td className="px-4 py-4 border-b border-border"><strong className="text-primary">9.8</strong></td>
                    <td className="px-4 py-4 border-b border-border"><strong className="text-primary">9.6</strong></td>
                    <td className="px-4 py-4 border-b border-border"><strong className="text-primary">9.7</strong></td>
                    <td className="px-4 py-4 border-b border-border"><Badge variant="success">9.7</Badge></td>
                  </tr>
                  <tr className="hover:bg-accent/5 transition-all duration-200">
                    <td className="px-4 py-4 border-b border-border">Inglés</td>
                    <td className="px-4 py-4 border-b border-border"><strong className="text-primary">8.8</strong></td>
                    <td className="px-4 py-4 border-b border-border"><strong className="text-primary">9.0</strong></td>
                    <td className="px-4 py-4 border-b border-border"><strong className="text-primary">8.9</strong></td>
                    <td className="px-4 py-4 border-b border-border"><Badge variant="success">8.9</Badge></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      case "kardex":
        return (
          <div className="animate-fade-in space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Semestre 1 (AGO-DIC 2020)</h3>
              <div className="table-institucional">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-primary text-primary-foreground">
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase">Materia</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase">Calificación Final</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-accent/5 transition-all duration-200"><td className="px-4 py-3 border-b border-border">Cálculo Diferencial</td><td className="px-4 py-3 border-b border-border"><strong>9.2</strong></td></tr>
                    <tr className="hover:bg-accent/5 transition-all duration-200"><td className="px-4 py-3 border-b border-border">Introducción a la Programación</td><td className="px-4 py-3 border-b border-border"><strong>9.5</strong></td></tr>
                    <tr className="hover:bg-accent/5 transition-all duration-200"><td className="px-4 py-3 border-b border-border">Química</td><td className="px-4 py-3 border-b border-border"><strong>9.0</strong></td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Semestre 2 (ENE-JUN 2021)</h3>
              <div className="table-institucional">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-primary text-primary-foreground">
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase">Materia</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase">Calificación Final</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-accent/5 transition-all duration-200"><td className="px-4 py-3 border-b border-border">Cálculo Integral</td><td className="px-4 py-3 border-b border-border"><strong>9.3</strong></td></tr>
                    <tr className="hover:bg-accent/5 transition-all duration-200"><td className="px-4 py-3 border-b border-border">Estructuras de Datos</td><td className="px-4 py-3 border-b border-border"><strong>9.6</strong></td></tr>
                    <tr className="hover:bg-accent/5 transition-all duration-200"><td className="px-4 py-3 border-b border-border">Física I</td><td className="px-4 py-3 border-b border-border"><strong>9.1</strong></td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case "password":
        return (
          <div className="animate-fade-in max-w-md mx-auto space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-primary">Contraseña Actual</label>
              <Input type="password" placeholder="Ingresa tu contraseña actual" className="transition-all duration-300 focus:ring-2 focus:ring-primary/20" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-primary">Nueva Contraseña</label>
              <Input type="password" placeholder="Ingresa tu nueva contraseña" className="transition-all duration-300 focus:ring-2 focus:ring-primary/20" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-primary">Confirmar Contraseña</label>
              <Input type="password" placeholder="Confirma tu nueva contraseña" className="transition-all duration-300 focus:ring-2 focus:ring-primary/20" />
            </div>
            <Button className="w-full btn-institucional bg-gradient-primary text-primary-foreground font-semibold group">
              <Lock className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Cambiar Contraseña
            </Button>
          </div>
        );

      default:
        return null;
    }
  };

  const renderPagos = () => {
    switch (activePaymentTab) {
      case "generar":
        return (
          <div className="animate-fade-in max-w-2xl mx-auto space-y-6">
            <div className="bg-muted/30 p-6 rounded-xl border border-border hover-scale">
              <h3 className="text-lg font-semibold text-primary mb-4">Generar Ficha de Pago</h3>
              <div className="space-y-3">
                <div className="flex justify-between"><span className="font-medium">Concepto:</span><span>Mensualidad Marzo 2025</span></div>
                <div className="flex justify-between"><span className="font-medium">Monto Total:</span><span className="text-xl font-bold text-primary">$2,500.00 MXN</span></div>
                <div className="flex justify-between"><span className="font-medium">Fecha Límite:</span><span className="text-destructive font-semibold">15 de Marzo 2025</span></div>
              </div>
            </div>
            <Button className="w-full btn-institucional bg-gradient-primary text-primary-foreground font-semibold group">
              <FileText className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Generar Ficha de Pago
            </Button>
          </div>
        );

      case "historial":
        return (
          <div className="animate-fade-in">
            <div className="table-institucional">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-primary text-primary-foreground">
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Concepto</th>
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Fecha de Pago</th>
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Monto</th>
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Estatus</th>
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Acción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-accent/5 transition-all duration-200">
                    <td className="px-4 py-4 border-b border-border">Reinscripción Sem 9</td>
                    <td className="px-4 py-4 border-b border-border">15 Enero 2025</td>
                    <td className="px-4 py-4 border-b border-border">$3,800.00</td>
                    <td className="px-4 py-4 border-b border-border"><Badge variant="success">PAGADO</Badge></td>
                    <td className="px-4 py-4 border-b border-border">
                      <Button size="sm" variant="outline" className="hover-scale group">
                        <Download className="w-3 h-3 mr-1 group-hover:scale-110 transition-transform" />
                        Descargar
                      </Button>
                    </td>
                  </tr>
                  <tr className="hover:bg-accent/5 transition-all duration-200">
                    <td className="px-4 py-4 border-b border-border">Mensualidad Febrero</td>
                    <td className="px-4 py-4 border-b border-border">10 Febrero 2025</td>
                    <td className="px-4 py-4 border-b border-border">$2,500.00</td>
                    <td className="px-4 py-4 border-b border-border"><Badge variant="success">PAGADO</Badge></td>
                    <td className="px-4 py-4 border-b border-border">
                      <Button size="sm" variant="outline" className="hover-scale group">
                        <Download className="w-3 h-3 mr-1 group-hover:scale-110 transition-transform" />
                        Descargar
                      </Button>
                    </td>
                  </tr>
                  <tr className="hover:bg-accent/5 transition-all duration-200">
                    <td className="px-4 py-4 border-b border-border">Constancia de Estudios</td>
                    <td className="px-4 py-4 border-b border-border">-</td>
                    <td className="px-4 py-4 border-b border-border">$150.00</td>
                    <td className="px-4 py-4 border-b border-border"><Badge variant="warning">PENDIENTE</Badge></td>
                    <td className="px-4 py-4 border-b border-border">
                      <Button size="sm" className="bg-gradient-secondary text-secondary-foreground hover-scale">
                        💳 Pagar
                      </Button>
                    </td>
                  </tr>
                  <tr className="hover:bg-accent/5 transition-all duration-200">
                    <td className="px-4 py-4 border-b border-border">Mensualidad Marzo</td>
                    <td className="px-4 py-4 border-b border-border">-</td>
                    <td className="px-4 py-4 border-b border-border">$2,500.00</td>
                    <td className="px-4 py-4 border-b border-border"><Badge variant="warning">PENDIENTE</Badge></td>
                    <td className="px-4 py-4 border-b border-border">
                      <Button size="sm" className="bg-gradient-secondary text-secondary-foreground hover-scale">
                        💳 Pagar
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      case "reinscripcion":
        return (
          <div className="animate-fade-in max-w-2xl mx-auto space-y-6">
            <div className="bg-muted/30 p-6 rounded-xl border border-border hover-scale">
              <h3 className="text-lg font-semibold text-primary mb-4">Reinscripción - Semestre 10</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between"><span className="font-medium">Periodo:</span><span>ENE-JUN 2025</span></div>
                <div className="flex justify-between"><span className="font-medium">Monto de Reinscripción:</span><span className="text-xl font-bold text-primary">$3,800.00 MXN</span></div>
                <div className="flex justify-between"><span className="font-medium">Estatus de Pago:</span><Badge variant="success">PAGADO</Badge></div>
              </div>
              <div className="bg-card p-4 rounded-lg border-l-4 border-secondary">
                <p className="text-sm text-muted-foreground">Tu pago de reinscripción ha sido confirmado. Puedes proceder a confirmar tu reinscripción para el próximo semestre.</p>
              </div>
            </div>
            <Button className="w-full btn-institucional bg-gradient-primary text-primary-foreground font-semibold group">
              <CheckCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Confirmar Reinscripción
            </Button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen animate-fade-in">
      <InstitucionalHeader userName={userName} userInitials={userInitials} />
      <nav className="bg-card flex justify-center gap-1 px-10 py-2 shadow-institucional-sm sticky top-[72px] z-40">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleNavClick(item.label)}
            className={`
              nav-link
              ${(item.label === "Control Escolar" && currentMainTab === "control") || 
                (item.label === "Cajas o Pagos" && currentMainTab === "pagos") ||
                (item.label === "Reportes" && currentMainTab === "reportes")
                ? 'active text-primary' : 'text-primary'}
            `}
          >
            {item.label}
          </button>
        ))}
        <button
          onClick={handleLogout}
          className="relative px-7 py-3 font-medium rounded-lg transition-all duration-300 text-destructive hover:bg-destructive/10 hover:-translate-y-0.5"
        >
          Salir
        </button>
      </nav>

      <div className="container mx-auto px-10 py-8 max-w-7xl">
        {currentMainTab === "control" && (
          <>
            <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
              <Button 
                onClick={() => setActiveSection("situacion")} 
                className={`
                  btn-institucional transition-all duration-300 group btn-with-icon
                  ${activeSection === "situacion" 
                    ? "bg-gradient-primary text-primary-foreground shadow-institucional-md" 
                    : "bg-gradient-secondary text-secondary-foreground hover:shadow-institucional-sm"
                  }
                `}
              >
                <ClipboardList className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Situación Actual
              </Button>
              <Button 
                onClick={() => setActiveSection("materias")} 
                className={`
                  btn-institucional transition-all duration-300 group btn-with-icon
                  ${activeSection === "materias" 
                    ? "bg-gradient-primary text-primary-foreground shadow-institucional-md" 
                    : "bg-gradient-secondary text-secondary-foreground hover:shadow-institucional-sm"
                  }
                `}
              >
                <BookOpen className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Materias y Faltas
              </Button>
              <Button 
                onClick={() => setActiveSection("horario")} 
                className={`
                  btn-institucional transition-all duration-300 group btn-with-icon
                  ${activeSection === "horario" 
                    ? "bg-gradient-primary text-primary-foreground shadow-institucional-md" 
                    : "bg-gradient-secondary text-secondary-foreground hover:shadow-institucional-sm"
                  }
                `}
              >
                <Calendar className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Horario
              </Button>
              <Button 
                onClick={() => setActiveSection("calificaciones")} 
                className={`
                  btn-institucional transition-all duration-300 group btn-with-icon
                  ${activeSection === "calificaciones" 
                    ? "bg-gradient-primary text-primary-foreground shadow-institucional-md" 
                    : "bg-gradient-secondary text-secondary-foreground hover:shadow-institucional-sm"
                  }
                `}
              >
                <BarChart3 className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Calificaciones
              </Button>
              <Button 
                onClick={() => setActiveSection("kardex")} 
                className={`
                  btn-institucional transition-all duration-300 group btn-with-icon
                  ${activeSection === "kardex" 
                    ? "bg-gradient-primary text-primary-foreground shadow-institucional-md" 
                    : "bg-gradient-secondary text-secondary-foreground hover:shadow-institucional-sm"
                  }
                `}
              >
                <GraduationCap className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Kardex
              </Button>
              <Button 
                onClick={() => setActiveSection("password")} 
                className={`
                  btn-institucional transition-all duration-300 group btn-with-icon
                  ${activeSection === "password" 
                    ? "bg-gradient-primary text-primary-foreground shadow-institucional-md" 
                    : "bg-gradient-secondary text-secondary-foreground hover:shadow-institucional-sm"
                  }
                `}
              >
                <Lock className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Cambiar Contraseña
              </Button>
            </div>
            <main className="main-container">
              <div className="section-header">
                <h2 className="text-2xl font-semibold text-primary">
                  {activeSection === "situacion" && "Situación Académica Actual"}
                  {activeSection === "materias" && "Materias y Faltas"}
                  {activeSection === "horario" && "Horario de Clases"}
                  {activeSection === "calificaciones" && "Calificaciones Parciales"}
                  {activeSection === "kardex" && "Kardex Académico"}
                  {activeSection === "password" && "Cambiar Contraseña"}
                </h2>
              </div>
              {renderControlEscolar()}
            </main>
          </>
        )}

        {currentMainTab === "pagos" && (
          <>
            <div className="flex gap-3 mb-6">
              <Button 
                onClick={() => setActivePaymentTab("generar")} 
                className={`
                  btn-institucional transition-all duration-300 group btn-with-icon
                  ${activePaymentTab === "generar" 
                    ? "bg-gradient-primary text-primary-foreground shadow-institucional-md" 
                    : "bg-gradient-secondary text-secondary-foreground hover:shadow-institucional-sm"
                  }
                `}
              >
                <FileText className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Generar Ficha
              </Button>
              <Button 
                onClick={() => setActivePaymentTab("historial")} 
                className={`
                  btn-institucional transition-all duration-300 group btn-with-icon
                  ${activePaymentTab === "historial" 
                    ? "bg-gradient-primary text-primary-foreground shadow-institucional-md" 
                    : "bg-gradient-secondary text-secondary-foreground hover:shadow-institucional-sm"
                  }
                `}
              >
                <History className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Historial
              </Button>
              <Button 
                onClick={() => setActivePaymentTab("reinscripcion")} 
                className={`
                  btn-institucional transition-all duration-300 group btn-with-icon
                  ${activePaymentTab === "reinscripcion" 
                    ? "bg-gradient-primary text-primary-foreground shadow-institucional-md" 
                    : "bg-gradient-secondary text-secondary-foreground hover:shadow-institucional-sm"
                  }
                `}
              >
                <CheckCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Reinscripción
              </Button>
            </div>
            <main className="main-container">
              <div className="section-header">
                <h2 className="text-2xl font-semibold text-primary">
                  {activePaymentTab === "generar" && "Generar Ficha de Pago"}
                  {activePaymentTab === "historial" && "Historial de Pagos"}
                  {activePaymentTab === "reinscripcion" && "Reinscripción"}
                </h2>
              </div>
              {renderPagos()}
            </main>
          </>
        )}

        {currentMainTab === "reportes" && (
          <main className="main-container animate-fade-in">
            <div className="section-header">
              <h2 className="text-2xl font-semibold text-primary">
                Reportes Académicos
              </h2>
            </div>
            <div className="text-center py-12 text-muted-foreground">
              <p className="text-lg">Sección de reportes en desarrollo</p>
            </div>
          </main>
        )}
      </div>
    </div>
  );
};

export default Alumno;