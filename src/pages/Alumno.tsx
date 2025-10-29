import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InstitucionalHeader from "@/components/InstitucionalHeader";
import InstitucionalNav from "@/components/InstitucionalNav";
import StatCard from "@/components/StatCard";
import Badge from "@/components/Badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              <StatCard label="Promedio General" value="9.3" />
              <StatCard label="Materias Adeudadas" value="0" />
              <StatCard label="Situación Académica" value="REGULAR" />
              <StatCard label="Riesgo Académico" value="NO" />
            </div>
            <div className="overflow-x-auto rounded-xl border border-border shadow-institucional-sm">
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
                    <td className="px-4 py-4 border-b border-border"><strong className="text-primary">245781</strong></td>
                    <td className="px-4 py-4 border-b border-border">RAMÍREZ CARLOS</td>
                    <td className="px-4 py-4 border-b border-border"><Badge variant="success">REGULAR</Badge></td>
                    <td className="px-4 py-4 border-b border-border"><strong className="text-primary">9.3</strong></td>
                    <td className="px-4 py-4 border-b border-border"><Badge variant="success">NO</Badge></td>
                    <td className="px-4 py-4 border-b border-border">0</td>
                    <td className="px-4 py-4 border-b border-border">AGO-2020 – JUN-2025</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        );
      
      case "materias":
        return (
          <div className="overflow-x-auto rounded-xl border border-border shadow-institucional-sm">
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
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="px-4 py-4 border-b border-border">Matemáticas</td>
                  <td className="px-4 py-4 border-b border-border">Prof. García Martínez</td>
                  <td className="px-4 py-4 border-b border-border">8</td>
                  <td className="px-4 py-4 border-b border-border">2</td>
                  <td className="px-4 py-4 border-b border-border"><Badge variant="success">6</Badge></td>
                </tr>
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="px-4 py-4 border-b border-border">Física</td>
                  <td className="px-4 py-4 border-b border-border">Prof. López Sánchez</td>
                  <td className="px-4 py-4 border-b border-border">8</td>
                  <td className="px-4 py-4 border-b border-border">1</td>
                  <td className="px-4 py-4 border-b border-border"><Badge variant="success">7</Badge></td>
                </tr>
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="px-4 py-4 border-b border-border">Programación</td>
                  <td className="px-4 py-4 border-b border-border">Prof. Hernández Ruiz</td>
                  <td className="px-4 py-4 border-b border-border">8</td>
                  <td className="px-4 py-4 border-b border-border">0</td>
                  <td className="px-4 py-4 border-b border-border"><Badge variant="success">8</Badge></td>
                </tr>
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="px-4 py-4 border-b border-border">Inglés</td>
                  <td className="px-4 py-4 border-b border-border">Prof. Smith Johnson</td>
                  <td className="px-4 py-4 border-b border-border">8</td>
                  <td className="px-4 py-4 border-b border-border">3</td>
                  <td className="px-4 py-4 border-b border-border"><Badge variant="warning">5</Badge></td>
                </tr>
              </tbody>
            </table>
          </div>
        );

      case "horario":
        return (
          <div className="overflow-x-auto rounded-xl border border-border shadow-institucional-sm">
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
                <tr className="hover:bg-accent/5">
                  <td className="px-3 py-3 border-b border-border font-semibold">7:00-9:00</td>
                  <td className="px-3 py-3 border-b border-border">Matemáticas<br/><span className="text-xs text-muted-foreground">García / A-101</span></td>
                  <td className="px-3 py-3 border-b border-border">-</td>
                  <td className="px-3 py-3 border-b border-border">Matemáticas<br/><span className="text-xs text-muted-foreground">García / A-101</span></td>
                  <td className="px-3 py-3 border-b border-border">-</td>
                  <td className="px-3 py-3 border-b border-border">Matemáticas<br/><span className="text-xs text-muted-foreground">García / A-101</span></td>
                </tr>
                <tr className="hover:bg-accent/5">
                  <td className="px-3 py-3 border-b border-border font-semibold">9:00-11:00</td>
                  <td className="px-3 py-3 border-b border-border">Física<br/><span className="text-xs text-muted-foreground">López / B-205</span></td>
                  <td className="px-3 py-3 border-b border-border">Física<br/><span className="text-xs text-muted-foreground">López / B-205</span></td>
                  <td className="px-3 py-3 border-b border-border">-</td>
                  <td className="px-3 py-3 border-b border-border">Física<br/><span className="text-xs text-muted-foreground">López / B-205</span></td>
                  <td className="px-3 py-3 border-b border-border">-</td>
                </tr>
                <tr className="hover:bg-accent/5">
                  <td className="px-3 py-3 border-b border-border font-semibold">11:00-13:00</td>
                  <td className="px-3 py-3 border-b border-border">-</td>
                  <td className="px-3 py-3 border-b border-border">Programación<br/><span className="text-xs text-muted-foreground">Hernández / LAB-3</span></td>
                  <td className="px-3 py-3 border-b border-border">Programación<br/><span className="text-xs text-muted-foreground">Hernández / LAB-3</span></td>
                  <td className="px-3 py-3 border-b border-border">-</td>
                  <td className="px-3 py-3 border-b border-border">Programación<br/><span className="text-xs text-muted-foreground">Hernández / LAB-3</span></td>
                </tr>
                <tr className="hover:bg-accent/5">
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
        );

      case "calificaciones":
        return (
          <div className="overflow-x-auto rounded-xl border border-border shadow-institucional-sm">
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
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="px-4 py-4 border-b border-border">Matemáticas</td>
                  <td className="px-4 py-4 border-b border-border"><strong className="text-primary">9.5</strong></td>
                  <td className="px-4 py-4 border-b border-border"><strong className="text-primary">9.2</strong></td>
                  <td className="px-4 py-4 border-b border-border"><strong className="text-primary">9.4</strong></td>
                  <td className="px-4 py-4 border-b border-border"><Badge variant="success">9.4</Badge></td>
                </tr>
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="px-4 py-4 border-b border-border">Física</td>
                  <td className="px-4 py-4 border-b border-border"><strong className="text-primary">9.0</strong></td>
                  <td className="px-4 py-4 border-b border-border"><strong className="text-primary">9.3</strong></td>
                  <td className="px-4 py-4 border-b border-border"><strong className="text-primary">9.5</strong></td>
                  <td className="px-4 py-4 border-b border-border"><Badge variant="success">9.3</Badge></td>
                </tr>
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="px-4 py-4 border-b border-border">Programación</td>
                  <td className="px-4 py-4 border-b border-border"><strong className="text-primary">9.8</strong></td>
                  <td className="px-4 py-4 border-b border-border"><strong className="text-primary">9.6</strong></td>
                  <td className="px-4 py-4 border-b border-border"><strong className="text-primary">9.7</strong></td>
                  <td className="px-4 py-4 border-b border-border"><Badge variant="success">9.7</Badge></td>
                </tr>
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="px-4 py-4 border-b border-border">Inglés</td>
                  <td className="px-4 py-4 border-b border-border"><strong className="text-primary">8.8</strong></td>
                  <td className="px-4 py-4 border-b border-border"><strong className="text-primary">9.0</strong></td>
                  <td className="px-4 py-4 border-b border-border"><strong className="text-primary">8.9</strong></td>
                  <td className="px-4 py-4 border-b border-border"><Badge variant="success">8.9</Badge></td>
                </tr>
              </tbody>
            </table>
          </div>
        );

      case "kardex":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Semestre 1 (AGO-DIC 2020)</h3>
              <div className="overflow-x-auto rounded-xl border border-border shadow-institucional-sm">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-primary text-primary-foreground">
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase">Materia</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase">Calificación Final</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-accent/5"><td className="px-4 py-3 border-b border-border">Cálculo Diferencial</td><td className="px-4 py-3 border-b border-border"><strong>9.2</strong></td></tr>
                    <tr className="hover:bg-accent/5"><td className="px-4 py-3 border-b border-border">Introducción a la Programación</td><td className="px-4 py-3 border-b border-border"><strong>9.5</strong></td></tr>
                    <tr className="hover:bg-accent/5"><td className="px-4 py-3 border-b border-border">Química</td><td className="px-4 py-3 border-b border-border"><strong>9.0</strong></td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Semestre 2 (ENE-JUN 2021)</h3>
              <div className="overflow-x-auto rounded-xl border border-border shadow-institucional-sm">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-primary text-primary-foreground">
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase">Materia</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase">Calificación Final</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-accent/5"><td className="px-4 py-3 border-b border-border">Cálculo Integral</td><td className="px-4 py-3 border-b border-border"><strong>9.3</strong></td></tr>
                    <tr className="hover:bg-accent/5"><td className="px-4 py-3 border-b border-border">Estructuras de Datos</td><td className="px-4 py-3 border-b border-border"><strong>9.6</strong></td></tr>
                    <tr className="hover:bg-accent/5"><td className="px-4 py-3 border-b border-border">Física I</td><td className="px-4 py-3 border-b border-border"><strong>9.1</strong></td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case "password":
        return (
          <div className="max-w-md mx-auto space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-primary">Contraseña Actual</label>
              <Input type="password" placeholder="Ingresa tu contraseña actual" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-primary">Nueva Contraseña</label>
              <Input type="password" placeholder="Ingresa tu nueva contraseña" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-primary">Confirmar Contraseña</label>
              <Input type="password" placeholder="Confirma tu nueva contraseña" />
            </div>
            <Button className="w-full bg-gradient-primary text-primary-foreground font-semibold shadow-institucional-sm hover:shadow-institucional-md transition-all hover:-translate-y-0.5">
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
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="bg-muted/30 p-6 rounded-xl border border-border">
              <h3 className="text-lg font-semibold text-primary mb-4">Generar Ficha de Pago</h3>
              <div className="space-y-3">
                <div className="flex justify-between"><span className="font-medium">Concepto:</span><span>Mensualidad Marzo 2025</span></div>
                <div className="flex justify-between"><span className="font-medium">Monto Total:</span><span className="text-xl font-bold text-primary">$2,500.00 MXN</span></div>
                <div className="flex justify-between"><span className="font-medium">Fecha Límite:</span><span className="text-destructive font-semibold">15 de Marzo 2025</span></div>
              </div>
            </div>
            <Button className="w-full bg-gradient-primary text-primary-foreground font-semibold shadow-institucional-sm hover:shadow-institucional-md transition-all hover:-translate-y-0.5">
              📄 Generar Ficha de Pago
            </Button>
          </div>
        );

      case "historial":
        return (
          <div className="overflow-x-auto rounded-xl border border-border shadow-institucional-sm">
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
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="px-4 py-4 border-b border-border">Reinscripción Sem 9</td>
                  <td className="px-4 py-4 border-b border-border">15 Enero 2025</td>
                  <td className="px-4 py-4 border-b border-border">$3,800.00</td>
                  <td className="px-4 py-4 border-b border-border"><Badge variant="success">PAGADO</Badge></td>
                  <td className="px-4 py-4 border-b border-border"><Button size="sm" variant="outline">📥 Descargar</Button></td>
                </tr>
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="px-4 py-4 border-b border-border">Mensualidad Febrero</td>
                  <td className="px-4 py-4 border-b border-border">10 Febrero 2025</td>
                  <td className="px-4 py-4 border-b border-border">$2,500.00</td>
                  <td className="px-4 py-4 border-b border-border"><Badge variant="success">PAGADO</Badge></td>
                  <td className="px-4 py-4 border-b border-border"><Button size="sm" variant="outline">📥 Descargar</Button></td>
                </tr>
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="px-4 py-4 border-b border-border">Constancia de Estudios</td>
                  <td className="px-4 py-4 border-b border-border">-</td>
                  <td className="px-4 py-4 border-b border-border">$150.00</td>
                  <td className="px-4 py-4 border-b border-border"><Badge variant="warning">PENDIENTE</Badge></td>
                  <td className="px-4 py-4 border-b border-border"><Button size="sm" className="bg-gradient-secondary text-secondary-foreground">💳 Pagar</Button></td>
                </tr>
                <tr className="hover:bg-accent/5 transition-colors">
                  <td className="px-4 py-4 border-b border-border">Mensualidad Marzo</td>
                  <td className="px-4 py-4 border-b border-border">-</td>
                  <td className="px-4 py-4 border-b border-border">$2,500.00</td>
                  <td className="px-4 py-4 border-b border-border"><Badge variant="warning">PENDIENTE</Badge></td>
                  <td className="px-4 py-4 border-b border-border"><Button size="sm" className="bg-gradient-secondary text-secondary-foreground">💳 Pagar</Button></td>
                </tr>
              </tbody>
            </table>
          </div>
        );

      case "reinscripcion":
        return (
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="bg-muted/30 p-6 rounded-xl border border-border">
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
            <Button className="w-full bg-gradient-primary text-primary-foreground font-semibold shadow-institucional-sm hover:shadow-institucional-md transition-all hover:-translate-y-0.5">
              ✅ Confirmar Reinscripción
            </Button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <InstitucionalHeader userName={userName} userInitials={userInitials} />
      <nav className="bg-card flex justify-center gap-1 px-10 py-2 shadow-institucional-sm">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleNavClick(item.label)}
            className={`
              relative px-7 py-3 font-medium rounded-lg transition-all duration-300
              hover:bg-accent/10 hover:-translate-y-0.5
              ${(item.label === "Control Escolar" && currentMainTab === "control") || 
                (item.label === "Cajas o Pagos" && currentMainTab === "pagos") ||
                (item.label === "Reportes" && currentMainTab === "reportes")
                ? 'bg-accent/10 text-primary' : 'text-primary'}
              after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
              after:w-0 after:h-0.5 after:bg-secondary after:transition-all after:duration-300
              ${(item.label === "Control Escolar" && currentMainTab === "control") || 
                (item.label === "Cajas o Pagos" && currentMainTab === "pagos") ||
                (item.label === "Reportes" && currentMainTab === "reportes")
                ? 'after:w-4/5' : 'hover:after:w-4/5'}
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
              <Button onClick={() => setActiveSection("situacion")} className={activeSection === "situacion" ? "bg-gradient-primary text-primary-foreground" : "bg-gradient-secondary text-secondary-foreground"}>Situación Actual</Button>
              <Button onClick={() => setActiveSection("materias")} className={activeSection === "materias" ? "bg-gradient-primary text-primary-foreground" : "bg-gradient-secondary text-secondary-foreground"}>📚 Materias y Faltas</Button>
              <Button onClick={() => setActiveSection("horario")} className={activeSection === "horario" ? "bg-gradient-primary text-primary-foreground" : "bg-gradient-secondary text-secondary-foreground"}>🕐 Horario</Button>
              <Button onClick={() => setActiveSection("calificaciones")} className={activeSection === "calificaciones" ? "bg-gradient-primary text-primary-foreground" : "bg-gradient-secondary text-secondary-foreground"}>📊 Calificaciones</Button>
              <Button onClick={() => setActiveSection("kardex")} className={activeSection === "kardex" ? "bg-gradient-primary text-primary-foreground" : "bg-gradient-secondary text-secondary-foreground"}>📜 Kardex</Button>
              <Button onClick={() => setActiveSection("password")} className={activeSection === "password" ? "bg-gradient-primary text-primary-foreground" : "bg-gradient-secondary text-secondary-foreground"}>🔐 Contraseña</Button>
            </div>
            <main className="bg-card rounded-2xl p-8 shadow-institucional-md">
              <div className="mb-6 pb-4 border-b-2 border-border">
                <h2 className="text-2xl font-semibold text-primary flex items-center gap-3">
                  <div className="w-1 h-7 bg-gradient-secondary rounded-full"></div>
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
              <Button onClick={() => setActivePaymentTab("generar")} className={activePaymentTab === "generar" ? "bg-gradient-primary text-primary-foreground" : "bg-gradient-secondary text-secondary-foreground"}>📄 Generar Ficha</Button>
              <Button onClick={() => setActivePaymentTab("historial")} className={activePaymentTab === "historial" ? "bg-gradient-primary text-primary-foreground" : "bg-gradient-secondary text-secondary-foreground"}>📋 Historial</Button>
              <Button onClick={() => setActivePaymentTab("reinscripcion")} className={activePaymentTab === "reinscripcion" ? "bg-gradient-primary text-primary-foreground" : "bg-gradient-secondary text-secondary-foreground"}>✅ Reinscripción</Button>
            </div>
            <main className="bg-card rounded-2xl p-8 shadow-institucional-md">
              <div className="mb-6 pb-4 border-b-2 border-border">
                <h2 className="text-2xl font-semibold text-primary flex items-center gap-3">
                  <div className="w-1 h-7 bg-gradient-secondary rounded-full"></div>
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
          <main className="bg-card rounded-2xl p-8 shadow-institucional-md">
            <div className="mb-6 pb-4 border-b-2 border-border">
              <h2 className="text-2xl font-semibold text-primary flex items-center gap-3">
                <div className="w-1 h-7 bg-gradient-secondary rounded-full"></div>
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
