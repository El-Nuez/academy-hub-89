import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InstitucionalHeader from "@/components/InstitucionalHeader";
import StatCard from "@/components/StatCard";
import Badge from "@/components/Badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Users,
  LayoutDashboard,
  Download,
  PlusCircle,
  UserCog,
  Power,
  BookMarked,
  Building2,
  GraduationCap,
  BookOpen,
  Briefcase,
  Search,
  Filter,
  Edit,
  Eye,
  FileText,
  BarChart2,
  TrendingUp,
  Calendar as CalendarIcon,
  FileBarChart
} from "lucide-react";


const Admin = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("panel");
  const [activeCatalogoTab, setActiveCatalogoTab] = useState("planteles");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("todos");
  const [activeReportTab, setActiveReportTab] = useState("estadisticas");

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

  // Datos de planteles
  const planteles = [
  { clave: "PLAN-000", nombre: "Aguascalientes", director: "Mtra. Verónica Herrera", capacidad: 600, ocupacion: 570, telefono: "449-123-4500", estado: "Activo", turnos: "Matutino/Vespertino" },
  { clave: "PLAN-001", nombre: "Asientos", director: "Lic. María González", capacidad: 450, ocupacion: 420, telefono: "449-123-4501", estado: "Activo", turnos: "Matutino/Vespertino" },
  { clave: "PLAN-002", nombre: "Calvillo", director: "Ing. Carlos Pérez", capacidad: 380, ocupacion: 350, telefono: "449-123-4502", estado: "Activo", turnos: "Matutino/Vespertino" },
  { clave: "PLAN-003", nombre: "Cañada Honda", director: "Lic. Ana Martínez", capacidad: 320, ocupacion: 295, telefono: "449-123-4503", estado: "Activo", turnos: "Matutino" },
  { clave: "PLAN-004", nombre: "Cd. Satélite Morelos", director: "Mtro. Juan López", capacidad: 500, ocupacion: 480, telefono: "449-123-4504", estado: "Activo", turnos: "Matutino/Vespertino" },
  { clave: "PLAN-005", nombre: "El Llano", director: "Ing. Laura Sánchez", capacidad: 400, ocupacion: 375, telefono: "449-123-4505", estado: "Activo", turnos: "Matutino/Vespertino" },
  { clave: "PLAN-006", nombre: "Ferrocarriles", director: "Lic. Roberto García", capacidad: 550, ocupacion: 520, telefono: "449-123-4506", estado: "Activo", turnos: "Matutino/Vespertino/Nocturno" },
  { clave: "PLAN-007", nombre: "Jesús María", director: "Mtra. Patricia Ruiz", capacidad: 420, ocupacion: 390, telefono: "449-123-4507", estado: "Activo", turnos: "Matutino/Vespertino" },
  { clave: "PLAN-008", nombre: "Mirador de las Culturas", director: "Ing. Fernando Torres", capacidad: 480, ocupacion: 450, telefono: "449-123-4508", estado: "Activo", turnos: "Matutino/Vespertino" },
  { clave: "PLAN-009", nombre: "Pabellón de Arteaga", director: "Lic. Gabriela Morales", capacidad: 360, ocupacion: 340, telefono: "449-123-4509", estado: "Activo", turnos: "Matutino" },
  { clave: "PLAN-010", nombre: "Rincón de Romos", director: "Ing. Miguel Hernández", capacidad: 390, ocupacion: 370, telefono: "449-123-4510", estado: "Activo", turnos: "Matutino/Vespertino" },
  { clave: "PLAN-011", nombre: "San Francisco de los Romos", director: "Mtra. Sandra Jiménez", capacidad: 410, ocupacion: 385, telefono: "449-123-4511", estado: "Activo", turnos: "Matutino/Vespertino" },
  { clave: "PLAN-012", nombre: "San José de Gracia", director: "Lic. Alberto Ramírez", capacidad: 340, ocupacion: 310, telefono: "449-123-4512", estado: "Activo", turnos: "Matutino" },
  { clave: "PLAN-013", nombre: "Villa Lic. Jesús Terán", director: "Ing. Claudia Díaz", capacidad: 370, ocupacion: 350, telefono: "449-123-4513", estado: "Activo", turnos: "Matutino/Vespertino" },
  { clave: "PLAN-014", nombre: "Villa Montaña", director: "Mtro. Ricardo Castro", capacidad: 430, ocupacion: 400, telefono: "449-123-4514", estado: "Activo", turnos: "Matutino/Vespertino" }
];


  // Datos de programas educativos
  const programas = [
    { clave: "PROG-001", nombre: "Técnico en Sistemas Computacionales", nivel: "Bachillerato Tecnológico", duracion: "6 semestres", modalidad: "Presencial", creditos: 180, grupos: 12, estado: "Vigente" },
    { clave: "PROG-002", nombre: "Técnico en Electrónica", nivel: "Bachillerato Tecnológico", duracion: "6 semestres", modalidad: "Presencial", creditos: 180, grupos: 8, estado: "Vigente" },
    { clave: "PROG-003", nombre: "Técnico en Contabilidad", nivel: "Bachillerato Tecnológico", duracion: "6 semestres", modalidad: "Presencial", creditos: 180, grupos: 10, estado: "Vigente" },
    { clave: "PROG-004", nombre: "Técnico en Enfermería", nivel: "Bachillerato Tecnológico", duracion: "6 semestres", modalidad: "Presencial", creditos: 185, grupos: 6, estado: "Vigente" },
    { clave: "PROG-005", nombre: "Técnico en Mecatrónica", nivel: "Bachillerato Tecnológico", duracion: "6 semestres", modalidad: "Presencial", creditos: 180, grupos: 5, estado: "Vigente" },
    { clave: "PROG-006", nombre: "Técnico en Administración", nivel: "Bachillerato Tecnológico", duracion: "6 semestres", modalidad: "Presencial", creditos: 180, grupos: 9, estado: "Vigente" }
  ];

  // Datos de materias
  const materias = [
    { clave: "MAT-101", nombre: "Matemáticas I", area: "Ciencias Básicas", creditos: 8, horasTeoricas: 4, horasPracticas: 2, semestre: 1, tipo: "Obligatoria", estado: "Activa" },
    { clave: "MAT-102", nombre: "Física I", area: "Ciencias Básicas", creditos: 8, horasTeoricas: 4, horasPracticas: 2, semestre: 1, tipo: "Obligatoria", estado: "Activa" },
    { clave: "MAT-103", nombre: "Química I", area: "Ciencias Básicas", creditos: 8, horasTeoricas: 4, horasPracticas: 2, semestre: 1, tipo: "Obligatoria", estado: "Activa" },
    { clave: "PRG-201", nombre: "Programación I", area: "Tecnológicas", creditos: 10, horasTeoricas: 3, horasPracticas: 4, semestre: 2, tipo: "Obligatoria", estado: "Activa" },
    { clave: "PRG-202", nombre: "Bases de Datos", area: "Tecnológicas", creditos: 10, horasTeoricas: 3, horasPracticas: 4, semestre: 3, tipo: "Obligatoria", estado: "Activa" },
    { clave: "ELE-301", nombre: "Circuitos Eléctricos", area: "Tecnológicas", creditos: 10, horasTeoricas: 4, horasPracticas: 3, semestre: 3, tipo: "Obligatoria", estado: "Activa" },
    { clave: "HUM-101", nombre: "Ética y Valores", area: "Humanidades", creditos: 6, horasTeoricas: 3, horasPracticas: 1, semestre: 1, tipo: "Obligatoria", estado: "Activa" },
    { clave: "ING-201", nombre: "Inglés II", area: "Lenguaje y Comunicación", creditos: 6, horasTeoricas: 3, horasPracticas: 2, semestre: 2, tipo: "Obligatoria", estado: "Activa" },
    { clave: "CON-301", nombre: "Contabilidad Financiera", area: "Económico-Administrativas", creditos: 10, horasTeoricas: 4, horasPracticas: 3, semestre: 3, tipo: "Obligatoria", estado: "Activa" },
    { clave: "ENF-401", nombre: "Anatomía y Fisiología", area: "Ciencias de la Salud", creditos: 12, horasTeoricas: 5, horasPracticas: 4, semestre: 2, tipo: "Obligatoria", estado: "Activa" }
  ];

  // Datos de departamentos
  const departamentos = [
    { clave: "DEPT-001", nombre: "Control Escolar", jefe: "Lic. María Fernández", extension: "101", email: "control@cecytea.edu.mx", personal: 8, plantel: "Ferrocarriles", estado: "Activo" },
    { clave: "DEPT-002", nombre: "Recursos Humanos", jefe: "Lic. Jorge Ramírez", extension: "102", email: "rh@cecytea.edu.mx", personal: 5, plantel: "Ferrocarriles", estado: "Activo" },
    { clave: "DEPT-003", nombre: "Servicios Escolares", jefe: "Mtra. Laura Gómez", extension: "103", email: "servicios@cecytea.edu.mx", personal: 6, plantel: "Ferrocarriles", estado: "Activo" },
    { clave: "DEPT-004", nombre: "Vinculación", jefe: "Ing. Carlos Medina", extension: "104", email: "vinculacion@cecytea.edu.mx", personal: 4, plantel: "Ferrocarriles", estado: "Activo" },
    { clave: "DEPT-005", nombre: "Mantenimiento", jefe: "Ing. Roberto Silva", extension: "105", email: "mantenimiento@cecytea.edu.mx", personal: 10, plantel: "Ferrocarriles", estado: "Activo" },
    { clave: "DEPT-006", nombre: "Biblioteca", jefe: "Lic. Ana Torres", extension: "106", email: "biblioteca@cecytea.edu.mx", personal: 3, plantel: "Ferrocarriles", estado: "Activo" },
    { clave: "DEPT-007", nombre: "Sistemas", jefe: "Ing. Fernando López", extension: "107", email: "sistemas@cecytea.edu.mx", personal: 4, plantel: "Ferrocarriles", estado: "Activo" },
    { clave: "DEPT-008", nombre: "Dirección Académica", jefe: "Dr. Miguel Ángel Pérez", extension: "108", email: "academica@cecytea.edu.mx", personal: 6, plantel: "Ferrocarriles", estado: "Activo" }
  ];

  // Función de filtrado para planteles
const filteredPlanteles = planteles.filter(plantel => {
  const matchSearch = plantel.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      plantel.clave.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      plantel.director.toLowerCase().includes(searchTerm.toLowerCase());
  
  const matchStatus = filterStatus === "todos" || 
                      plantel.estado.toLowerCase() === filterStatus.toLowerCase();
  
  return matchSearch && matchStatus;
});

// Función de filtrado para programas
const [filterNivel, setFilterNivel] = useState("todos");

const filteredProgramas = programas.filter(programa => {
  const matchSearch = programa.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      programa.clave.toLowerCase().includes(searchTerm.toLowerCase());
  
  const matchNivel = filterNivel === "todos" || 
                     programa.nivel.toLowerCase().includes(filterNivel.toLowerCase());
  
  return matchSearch && matchNivel;
});

// Función de filtrado para materias
const [filterArea, setFilterArea] = useState("todos");

const filteredMaterias = materias.filter(materia => {
  const matchSearch = materia.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      materia.clave.toLowerCase().includes(searchTerm.toLowerCase());
  
  const matchArea = filterArea === "todos" || 
                    materia.area.toLowerCase().includes(filterArea.toLowerCase());
  
  return matchSearch && matchArea;
});

// Función de filtrado para departamentos
const filteredDepartamentos = departamentos.filter(depto => {
  return depto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
         depto.clave.toLowerCase().includes(searchTerm.toLowerCase()) ||
         depto.jefe.toLowerCase().includes(searchTerm.toLowerCase());
});

  const renderCatalogo = () => {
    switch (activeCatalogoTab) {
      case "planteles":
  return (
    <div className="animate-fade-in">
      {/* Barra de búsqueda y filtros */}
      <div className="flex flex-wrap gap-3 mb-6 items-center justify-between">
        <div className="flex gap-3 flex-1 min-w-[300px]">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Buscar plantel..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <select 
            className="px-4 py-2 rounded-lg border border-border bg-card text-primary"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="todos">Todos los estados</option>
            <option value="activo">Activos</option>
            <option value="inactivo">Inactivos</option>
          </select>
        </div>
        <Button className="btn-institucional bg-gradient-primary text-primary-foreground group">
          <PlusCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
          Agregar Plantel
        </Button>
      </div>

      {/* Contador de resultados */}
      <div className="mb-4 text-sm text-muted-foreground">
        Mostrando {filteredPlanteles.length} de {planteles.length} planteles
      </div>

      {/* Tabla de planteles */}
      <div className="table-institucional">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-primary text-primary-foreground">
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Clave</th>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Plantel</th>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Director</th>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Capacidad</th>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Ocupación</th>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Turnos</th>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Estado</th>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredPlanteles.length > 0 ? (
              filteredPlanteles.map((plantel) => (
                <tr key={plantel.clave} className="hover:bg-accent/5 transition-all duration-200">
                  <td className="px-4 py-4 border-b border-border"><strong className="text-primary">{plantel.clave}</strong></td>
                  <td className="px-4 py-4 border-b border-border font-medium">{plantel.nombre}</td>
                  <td className="px-4 py-4 border-b border-border">{plantel.director}</td>
                  <td className="px-4 py-4 border-b border-border">{plantel.capacidad}</td>
                  <td className="px-4 py-4 border-b border-border">
                    <span className={plantel.ocupacion / plantel.capacidad > 0.9 ? "text-destructive font-semibold" : "text-primary font-semibold"}>
                      {plantel.ocupacion}
                    </span>
                  </td>
                  <td className="px-4 py-4 border-b border-border text-xs">{plantel.turnos}</td>
                  <td className="px-4 py-4 border-b border-border">
                    <Badge variant={plantel.estado === "Activo" ? "success" : "destructive"}>
                      {plantel.estado.toUpperCase()}
                    </Badge>
                  </td>
                  <td className="px-4 py-4 border-b border-border">
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="hover-scale group">
                        <Eye className="w-3 h-3 group-hover:scale-110 transition-transform" />
                      </Button>
                      <Button size="sm" variant="outline" className="hover-scale group">
                        <Edit className="w-3 h-3 group-hover:scale-110 transition-transform" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="px-4 py-8 text-center text-muted-foreground">
                  No se encontraron planteles con los criterios de búsqueda
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );

      case "programas":
  return (
    <div className="animate-fade-in">
      {/* Barra de búsqueda y filtros */}
      <div className="flex flex-wrap gap-3 mb-6 items-center justify-between">
        <div className="flex gap-3 flex-1 min-w-[300px]">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Buscar programa educativo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <select 
            className="px-4 py-2 rounded-lg border border-border bg-card text-primary"
            value={filterNivel}
            onChange={(e) => setFilterNivel(e.target.value)}
          >
            <option value="todos">Todos los niveles</option>
            <option value="bachillerato">Bachillerato Tecnológico</option>
            <option value="tsu">TSU</option>
          </select>
        </div>
        <Button className="btn-institucional bg-gradient-primary text-primary-foreground group">
          <PlusCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
          Agregar Programa
        </Button>
      </div>

      {/* Contador de resultados */}
      <div className="mb-4 text-sm text-muted-foreground">
        Mostrando {filteredProgramas.length} de {programas.length} programas
      </div>

      {/* Tabla de programas */}
      <div className="table-institucional">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-primary text-primary-foreground">
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Clave</th>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Programa</th>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Nivel</th>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Duración</th>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Créditos</th>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Grupos</th>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Estado</th>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredProgramas.length > 0 ? (
              filteredProgramas.map((programa) => (
                <tr key={programa.clave} className="hover:bg-accent/5 transition-all duration-200">
                  <td className="px-4 py-4 border-b border-border"><strong className="text-primary">{programa.clave}</strong></td>
                  <td className="px-4 py-4 border-b border-border font-medium">{programa.nombre}</td>
                  <td className="px-4 py-4 border-b border-border text-sm">{programa.nivel}</td>
                  <td className="px-4 py-4 border-b border-border">{programa.duracion}</td>
                  <td className="px-4 py-4 border-b border-border"><strong>{programa.creditos}</strong></td>
                  <td className="px-4 py-4 border-b border-border">
                    <Badge variant="info">{programa.grupos}</Badge>
                  </td>
                  <td className="px-4 py-4 border-b border-border">
                    <Badge variant="success">{programa.estado.toUpperCase()}</Badge>
                  </td>
                  <td className="px-4 py-4 border-b border-border">
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="hover-scale group">
                        <Eye className="w-3 h-3 group-hover:scale-110 transition-transform" />
                      </Button>
                      <Button size="sm" variant="outline" className="hover-scale group">
                        <Edit className="w-3 h-3 group-hover:scale-110 transition-transform" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="px-4 py-8 text-center text-muted-foreground">
                  No se encontraron programas con los criterios de búsqueda
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );

     case "materias":
  return (
    <div className="animate-fade-in">
      {/* Barra de búsqueda y filtros */}
      <div className="flex flex-wrap gap-3 mb-6 items-center justify-between">
        <div className="flex gap-3 flex-1 min-w-[300px]">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Buscar materia..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <select 
            className="px-4 py-2 rounded-lg border border-border bg-card text-primary"
            value={filterArea}
            onChange={(e) => setFilterArea(e.target.value)}
          >
            <option value="todos">Todas las áreas</option>
            <option value="ciencias básicas">Ciencias Básicas</option>
            <option value="tecnológicas">Tecnológicas</option>
            <option value="humanidades">Humanidades</option>
            <option value="lenguaje">Lenguaje y Comunicación</option>
            <option value="económico">Económico-Administrativas</option>
            <option value="salud">Ciencias de la Salud</option>
          </select>
        </div>
        <Button className="btn-institucional bg-gradient-primary text-primary-foreground group">
          <PlusCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
          Agregar Materia
        </Button>
      </div>

      {/* Contador de resultados */}
      <div className="mb-4 text-sm text-muted-foreground">
        Mostrando {filteredMaterias.length} de {materias.length} materias
      </div>

      {/* Tabla de materias */}
      <div className="table-institucional">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-primary text-primary-foreground">
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Clave</th>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Materia</th>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Área</th>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Créditos</th>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Hrs. Teóricas</th>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Hrs. Prácticas</th>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Semestre</th>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Tipo</th>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredMaterias.length > 0 ? (
              filteredMaterias.map((materia) => (
                <tr key={materia.clave} className="hover:bg-accent/5 transition-all duration-200">
                  <td className="px-4 py-4 border-b border-border"><strong className="text-primary">{materia.clave}</strong></td>
                  <td className="px-4 py-4 border-b border-border font-medium">{materia.nombre}</td>
                  <td className="px-4 py-4 border-b border-border text-sm">{materia.area}</td>
                  <td className="px-4 py-4 border-b border-border"><strong>{materia.creditos}</strong></td>
                  <td className="px-4 py-4 border-b border-border">{materia.horasTeoricas}</td>
                  <td className="px-4 py-4 border-b border-border">{materia.horasPracticas}</td>
                  <td className="px-4 py-4 border-b border-border">
                    <Badge variant="info">{materia.semestre}°</Badge>
                  </td>
                  <td className="px-4 py-4 border-b border-border">
                    <Badge variant={materia.tipo === "Obligatoria" ? "success" : "warning"}>
                      {materia.tipo}
                    </Badge>
                  </td>
                  <td className="px-4 py-4 border-b border-border">
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="hover-scale group">
                        <Eye className="w-3 h-3 group-hover:scale-110 transition-transform" />
                      </Button>
                      <Button size="sm" variant="outline" className="hover-scale group">
                        <Edit className="w-3 h-3 group-hover:scale-110 transition-transform" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={9} className="px-4 py-8 text-center text-muted-foreground">
                  No se encontraron materias con los criterios de búsqueda
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );

      case "departamentos":
  return (
    <div className="animate-fade-in">
      {/* Barra de búsqueda y filtros */}
      <div className="flex flex-wrap gap-3 mb-6 items-center justify-between">
        <div className="flex gap-3 flex-1 min-w-[300px]">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Buscar departamento..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <Button className="btn-institucional bg-gradient-primary text-primary-foreground group">
          <PlusCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
          Agregar Departamento
        </Button>
      </div>

      {/* Contador de resultados */}
      <div className="mb-4 text-sm text-muted-foreground">
        Mostrando {filteredDepartamentos.length} de {departamentos.length} departamentos
      </div>

      {/* Resto de la tabla igual... */}
      <div className="table-institucional">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-primary text-primary-foreground">
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Clave</th>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Departamento</th>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Jefe</th>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Extensión</th>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Email</th>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Personal</th>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Estado</th>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredDepartamentos.length > 0 ? (
              filteredDepartamentos.map((depto) => (
                <tr key={depto.clave} className="hover:bg-accent/5 transition-all duration-200">
                  <td className="px-4 py-4 border-b border-border"><strong className="text-primary">{depto.clave}</strong></td>
                  <td className="px-4 py-4 border-b border-border font-medium">{depto.nombre}</td>
                  <td className="px-4 py-4 border-b border-border">{depto.jefe}</td>
                  <td className="px-4 py-4 border-b border-border">{depto.extension}</td>
                  <td className="px-4 py-4 border-b border-border text-sm">{depto.email}</td>
                  <td className="px-4 py-4 border-b border-border">
                    <Badge variant="info">{depto.personal}</Badge>
                  </td>
                  <td className="px-4 py-4 border-b border-border">
                    <Badge variant="success">{depto.estado.toUpperCase()}</Badge>
                  </td>
                  <td className="px-4 py-4 border-b border-border">
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="hover-scale group">
                        <Eye className="w-3 h-3 group-hover:scale-110 transition-transform" />
                      </Button>
                      <Button size="sm" variant="outline" className="hover-scale group">
                        <Edit className="w-3 h-3 group-hover:scale-110 transition-transform" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="px-4 py-8 text-center text-muted-foreground">
                  No se encontraron departamentos con los criterios de búsqueda
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
      default:
        return null;
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case "panel":
  return (
    <div className="animate-fade-in">
      {/* Tarjetas de estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <div className="hover-lift">
          <StatCard label="Total Alumnos" value="5,847" />
        </div>
        <div className="hover-lift">
          <StatCard label="Total Profesores" value="389" />
        </div>
        <div className="hover-lift">
          <StatCard label="Planteles" value="14" />
        </div>
        <div className="hover-lift">
          <StatCard label="Programas Activos" value="6" />
        </div>
      </div>

      {/* Información Institucional */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        <div className="bg-card border border-border rounded-xl shadow-institucional-sm p-6 hover-scale">
          <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
            <CalendarIcon className="w-5 h-5" />
            Información del Ciclo Actual
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Periodo:</span>
              <span className="font-semibold text-primary">Enero - Junio 2025</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Ciclo Escolar:</span>
              <span className="font-semibold text-primary">2024 - 2025</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Cierre de Semestre:</span>
              <span className="font-semibold text-primary">30 de Junio 2025</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Inicio Inscripciones:</span>
              <span className="font-semibold text-primary">15 de Julio 2025</span>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl shadow-institucional-sm p-6 hover-scale">
          <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Resumen Rápido
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Índice de Aprobación:</span>
              <Badge variant="success">94.2%</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Pagos Pendientes:</span>
              <Badge variant="warning">23</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Grupos Activos:</span>
              <Badge variant="info">47</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Capacidad Total:</span>
              <span className="font-semibold text-primary">6,180 alumnos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabla de módulos */}
      <div className="table-institucional">
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
            <tr className="hover:bg-accent/5 transition-all duration-200">
              <td className="px-4 py-4 border-b border-border font-medium">Control Escolar</td>
              <td className="px-4 py-4 border-b border-border">Gestión de alumnos y calificaciones</td>
              <td className="px-4 py-4 border-b border-border"><Badge variant="success">ACTIVO</Badge></td>
              <td className="px-4 py-4 border-b border-border"><strong className="text-primary">5,847</strong></td>
              <td className="px-4 py-4 border-b border-border">
                <Button size="sm" className="btn-institucional bg-gradient-primary text-primary-foreground hover-scale group">
                  <Eye className="w-3 h-3 mr-1 group-hover:scale-110 transition-transform" />
                  Gestionar
                </Button>
              </td>
            </tr>
            <tr className="hover:bg-accent/5 transition-all duration-200">
              <td className="px-4 py-4 border-b border-border font-medium">Sistema de Pagos</td>
              <td className="px-4 py-4 border-b border-border">Control de colegiaturas y adeudos</td>
              <td className="px-4 py-4 border-b border-border"><Badge variant="success">ACTIVO</Badge></td>
              <td className="px-4 py-4 border-b border-border"><strong className="text-primary">5,847</strong></td>
              <td className="px-4 py-4 border-b border-border">
                <Button size="sm" className="btn-institucional bg-gradient-primary text-primary-foreground hover-scale group">
                  <Eye className="w-3 h-3 mr-1 group-hover:scale-110 transition-transform" />
                  Gestionar
                </Button>
              </td>
            </tr>
            <tr className="hover:bg-accent/5 transition-all duration-200">
              <td className="px-4 py-4 border-b border-border font-medium">Profesores</td>
              <td className="px-4 py-4 border-b border-border">Gestión de docentes y asignaciones</td>
              <td className="px-4 py-4 border-b border-border"><Badge variant="success">ACTIVO</Badge></td>
              <td className="px-4 py-4 border-b border-border"><strong className="text-primary">389</strong></td>
              <td className="px-4 py-4 border-b border-border">
                <Button size="sm" className="btn-institucional bg-gradient-primary text-primary-foreground hover-scale group">
                  <Eye className="w-3 h-3 mr-1 group-hover:scale-110 transition-transform" />
                  Gestionar
                </Button>
              </td>
            </tr>
            <tr className="hover:bg-accent/5 transition-all duration-200">
              <td className="px-4 py-4 border-b border-border font-medium">Catálogos</td>
              <td className="px-4 py-4 border-b border-border">Planteles, programas, materias y departamentos</td>
              <td className="px-4 py-4 border-b border-border"><Badge variant="success">ACTIVO</Badge></td>
              <td className="px-4 py-4 border-b border-border"><strong className="text-primary">-</strong></td>
              <td className="px-4 py-4 border-b border-border">
                <Button 
                  size="sm" 
                  className="btn-institucional bg-gradient-primary text-primary-foreground hover-scale group"
                  onClick={() => setActiveSection("catalogo")}
                >
                  <Eye className="w-3 h-3 mr-1 group-hover:scale-110 transition-transform" />
                  Gestionar
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex gap-3 mt-6 flex-wrap">
        <Button className="btn-institucional bg-gradient-primary text-primary-foreground group">
          <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
          Exportar Reporte General
        </Button>
        <Button className="btn-institucional bg-gradient-secondary text-secondary-foreground group">
          <FileText className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
          Generar Estadísticas
        </Button>
      </div>
    </div>
  );

      case "usuarios":
        return (
          <div className="animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Buscar usuario..." className="pl-10" />
              </div>
              <Button className="btn-institucional bg-gradient-primary text-primary-foreground group">
                <PlusCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Agregar Usuario
              </Button>
            </div>

            <div className="table-institucional">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-primary text-primary-foreground">
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Nombre</th>
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Correo</th>
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Tipo</th>
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Estado</th>
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-accent/5 transition-all duration-200">
                    <td className="px-4 py-4 border-b border-border">Juan Pérez Martínez</td>
                    <td className="px-4 py-4 border-b border-border">juan.perez@cecytea.edu.mx</td>
                    <td className="px-4 py-4 border-b border-border"><Badge variant="info">Profesor</Badge></td>
                    <td className="px-4 py-4 border-b border-border"><Badge variant="success">Activo</Badge></td>
                    <td className="px-4 py-4 border-b border-border">
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="hover-scale group">
                          <UserCog className="w-3 h-3 mr-1 group-hover:scale-110 transition-transform" />
                          Editar
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-accent/5 transition-all duration-200">
                    <td className="px-4 py-4 border-b border-border">María López García</td>
                    <td className="px-4 py-4 border-b border-border">maria.lopez@cecytea.edu.mx</td>
                    <td className="px-4 py-4 border-b border-border"><Badge variant="info">Alumno</Badge></td>
                    <td className="px-4 py-4 border-b border-border"><Badge variant="success">Activo</Badge></td>
                    <td className="px-4 py-4 border-b border-border">
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="hover-scale group">
                          <UserCog className="w-3 h-3 mr-1 group-hover:scale-110 transition-transform" />
                          Editar
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-accent/5 transition-all duration-200">
                    <td className="px-4 py-4 border-b border-border">Carlos Ramírez Soto</td>
                    <td className="px-4 py-4 border-b border-border">carlos.ramirez@cecytea.edu.mx</td>
                    <td className="px-4 py-4 border-b border-border"><Badge variant="info">Administrativo</Badge></td>
                    <td className="px-4 py-4 border-b border-border"><Badge variant="warning">Pendiente</Badge></td>
                    <td className="px-4 py-4 border-b border-border">
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="hover-scale group">
                          <UserCog className="w-3 h-3 mr-1 group-hover:scale-110 transition-transform" />
                          Revisar
                        </Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      case "reportes":
  return (
    <div className="animate-fade-in">
      {/* Botones de sub-navegación */}
      <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
        <Button 
          onClick={() => setActiveReportTab("estadisticas")} 
          className={`
            btn-institucional transition-all duration-300 group btn-with-icon
            ${activeReportTab === "estadisticas" 
              ? "bg-gradient-primary text-primary-foreground shadow-institucional-md" 
              : "bg-gradient-secondary text-secondary-foreground hover:shadow-institucional-sm"
            }
          `}
        >
          <BarChart2 className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
          Estadísticas Generales
        </Button>
        <Button 
          onClick={() => setActiveReportTab("planteles")} 
          className={`
            btn-institucional transition-all duration-300 group btn-with-icon
            ${activeReportTab === "planteles" 
              ? "bg-gradient-primary text-primary-foreground shadow-institucional-md" 
              : "bg-gradient-secondary text-secondary-foreground hover:shadow-institucional-sm"
            }
          `}
        >
          <Building2 className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
          Por Plantel
        </Button>
        <Button 
          onClick={() => setActiveReportTab("pagos")} 
          className={`
            btn-institucional transition-all duration-300 group btn-with-icon
            ${activeReportTab === "pagos" 
              ? "bg-gradient-primary text-primary-foreground shadow-institucional-md" 
              : "bg-gradient-secondary text-secondary-foreground hover:shadow-institucional-sm"
            }
          `}
        >
          <FileBarChart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
          Pagos
        </Button>
        <Button 
          onClick={() => setActiveReportTab("calendario")} 
          className={`
            btn-institucional transition-all duration-300 group btn-with-icon
            ${activeReportTab === "calendario" 
              ? "bg-gradient-primary text-primary-foreground shadow-institucional-md" 
              : "bg-gradient-secondary text-secondary-foreground hover:shadow-institucional-sm"
            }
          `}
        >
          <CalendarIcon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
          Calendario Escolar
        </Button>
      </div>

      {/* Contenido según la pestaña */}
      {activeReportTab === "estadisticas" && (
        <div className="animate-fade-in space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-card border border-border rounded-xl p-6 hover-scale">
              <h3 className="text-sm text-muted-foreground mb-2">Total de Alumnos Inscritos</h3>
              <p className="text-3xl font-bold text-primary">5,847</p>
              <p className="text-xs text-green-600 mt-2">↑ 8.5% vs semestre anterior</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 hover-scale">
              <h3 className="text-sm text-muted-foreground mb-2">Índice de Aprobación</h3>
              <p className="text-3xl font-bold text-primary">94.2%</p>
              <p className="text-xs text-green-600 mt-2">↑ 2.1% vs semestre anterior</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 hover-scale">
              <h3 className="text-sm text-muted-foreground mb-2">Índice de Deserción</h3>
              <p className="text-3xl font-bold text-primary">3.8%</p>
              <p className="text-xs text-red-600 mt-2">↓ 1.2% vs semestre anterior</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-primary mb-4">Alumnos por Programa Educativo</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Técnico en Sistemas Computacionales</span>
                  <span className="text-sm font-bold text-primary">1,245 (21.3%)</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-gradient-primary h-3 rounded-full" style={{width: '21.3%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Técnico en Contabilidad</span>
                  <span className="text-sm font-bold text-primary">1,089 (18.6%)</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-gradient-primary h-3 rounded-full" style={{width: '18.6%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Técnico en Electrónica</span>
                  <span className="text-sm font-bold text-primary">956 (16.4%)</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-gradient-primary h-3 rounded-full" style={{width: '16.4%'}}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button className="btn-institucional bg-gradient-primary text-primary-foreground group">
              <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Exportar a PDF
            </Button>
            <Button className="btn-institucional bg-gradient-secondary text-secondary-foreground group">
              <FileText className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Exportar a Excel
            </Button>
          </div>
        </div>
      )}

      {activeReportTab === "planteles" && (
        <div className="animate-fade-in">
          <div className="table-institucional">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-primary text-primary-foreground">
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Plantel</th>
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Alumnos</th>
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Capacidad</th>
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Ocupación</th>
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Aprobación</th>
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-accent/5 transition-all duration-200">
                  <td className="px-4 py-4 border-b border-border font-medium">Ferrocarriles</td>
                  <td className="px-4 py-4 border-b border-border">520</td>
                  <td className="px-4 py-4 border-b border-border">550</td>
                  <td className="px-4 py-4 border-b border-border"><Badge variant="success">94.5%</Badge></td>
                  <td className="px-4 py-4 border-b border-border"><Badge variant="success">95.2%</Badge></td>
                  <td className="px-4 py-4 border-b border-border">
                    <Button size="sm" variant="outline" className="hover-scale group">
                      <FileText className="w-3 h-3 mr-1 group-hover:scale-110 transition-transform" />
                      Ver Detalle
                    </Button>
                  </td>
                </tr>
                <tr className="hover:bg-accent/5 transition-all duration-200">
                  <td className="px-4 py-4 border-b border-border font-medium">Cd. Satélite Morelos</td>
                  <td className="px-4 py-4 border-b border-border">480</td>
                  <td className="px-4 py-4 border-b border-border">500</td>
                  <td className="px-4 py-4 border-b border-border"><Badge variant="success">96.0%</Badge></td>
                  <td className="px-4 py-4 border-b border-border"><Badge variant="success">93.8%</Badge></td>
                  <td className="px-4 py-4 border-b border-border">
                    <Button size="sm" variant="outline" className="hover-scale group">
                      <FileText className="w-3 h-3 mr-1 group-hover:scale-110 transition-transform" />
                      Ver Detalle
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeReportTab === "pagos" && (
        <div className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            <div className="bg-card border border-border rounded-xl p-6 hover-scale">
              <h3 className="text-sm text-muted-foreground mb-2">Ingresos del Mes</h3>
              <p className="text-3xl font-bold text-primary">$14,617,500</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 hover-scale">
              <h3 className="text-sm text-muted-foreground mb-2">Pagos Pendientes</h3>
              <p className="text-3xl font-bold text-destructive">23</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 hover-scale">
              <h3 className="text-sm text-muted-foreground mb-2">Monto Pendiente</h3>
              <p className="text-3xl font-bold text-destructive">$57,500</p>
            </div>
          </div>

          <div className="table-institucional">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-primary text-primary-foreground">
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Concepto</th>
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Pagos Realizados</th>
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Monto Total</th>
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Pendientes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-accent/5 transition-all duration-200">
                  <td className="px-4 py-4 border-b border-border font-medium">Mensualidad Marzo</td>
                  <td className="px-4 py-4 border-b border-border">5,824</td>
                  <td className="px-4 py-4 border-b border-border"><strong className="text-primary">$14,560,000</strong></td>
                  <td className="px-4 py-4 border-b border-border"><Badge variant="warning">23</Badge></td>
                </tr>
                <tr className="hover:bg-accent/5 transition-all duration-200">
                  <td className="px-4 py-4 border-b border-border font-medium">Constancias</td>
                  <td className="px-4 py-4 border-b border-border">156</td>
                  <td className="px-4 py-4 border-b border-border"><strong className="text-primary">$23,400</strong></td>
                  <td className="px-4 py-4 border-b border-border"><Badge variant="success">0</Badge></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeReportTab === "calendario" && (
        <div className="animate-fade-in">
          <div className="space-y-4">
            <div className="bg-card border-l-4 border-primary rounded-lg p-5 hover-scale">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-primary mb-1">Exámenes Parciales</h3>
                  <p className="text-sm text-muted-foreground">Aplicación del segundo parcial</p>
                </div>
                <Badge variant="info">15-20 Marzo 2025</Badge>
              </div>
            </div>

            <div className="bg-card border-l-4 border-secondary rounded-lg p-5 hover-scale">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-primary mb-1">Periodo Vacacional</h3>
                  <p className="text-sm text-muted-foreground">Semana Santa</p>
                </div>
                <Badge variant="warning">14-18 Abril 2025</Badge>
              </div>
            </div>

            <div className="bg-card border-l-4 border-primary rounded-lg p-5 hover-scale">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-primary mb-1">Consejo Técnico</h3>
                  <p className="text-sm text-muted-foreground">Reunión mensual de directores</p>
                </div>
                <Badge variant="info">25 Marzo 2025</Badge>
              </div>
            </div>

            <div className="bg-card border-l-4 border-destructive rounded-lg p-5 hover-scale">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-primary mb-1">Fecha Límite de Pagos</h3>
                  <p className="text-sm text-muted-foreground">Último día para pagar sin recargos</p>
                </div>
                <Badge variant="destructive">31 Marzo 2025</Badge>
              </div>
            </div>

            <div className="bg-card border-l-4 border-secondary rounded-lg p-5 hover-scale">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-primary mb-1">Junta de Padres de Familia</h3>
                  <p className="text-sm text-muted-foreground">Entrega de calificaciones segundo parcial</p>
                </div>
                <Badge variant="info">28 Marzo 2025</Badge>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
      case "catalogo":
        return (
          <div className="animate-fade-in">
            {/* Botones de sub-navegación del catálogo */}
            <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
              <Button 
                onClick={() => setActiveCatalogoTab("planteles")} 
                className={`
                  btn-institucional transition-all duration-300 group btn-with-icon
                  ${activeCatalogoTab === "planteles" 
                    ? "bg-gradient-primary text-primary-foreground shadow-institucional-md" 
                    : "bg-gradient-secondary text-secondary-foreground hover:shadow-institucional-sm"
                  }
                `}
              >
                <Building2 className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Planteles
              </Button>
              <Button 
                onClick={() => setActiveCatalogoTab("programas")} 
                className={`
                  btn-institucional transition-all duration-300 group btn-with-icon
                  ${activeCatalogoTab === "programas" 
                    ? "bg-gradient-primary text-primary-foreground shadow-institucional-md" 
                    : "bg-gradient-secondary text-secondary-foreground hover:shadow-institucional-sm"
                  }
                `}
              >
                <GraduationCap className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Programas Educativos
              </Button>
              <Button 
                onClick={() => setActiveCatalogoTab("materias")} 
                className={`
                  btn-institucional transition-all duration-300 group btn-with-icon
                  ${activeCatalogoTab === "materias" 
                    ? "bg-gradient-primary text-primary-foreground shadow-institucional-md" 
                    : "bg-gradient-secondary text-secondary-foreground hover:shadow-institucional-sm"
                  }
                `}
              >
                <BookOpen className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Materias
              </Button>
              <Button 
                onClick={() => setActiveCatalogoTab("departamentos")} 
                className={`
                  btn-institucional transition-all duration-300 group btn-with-icon
                  ${activeCatalogoTab === "departamentos" 
                    ? "bg-gradient-primary text-primary-foreground shadow-institucional-md" 
                    : "bg-gradient-secondary text-secondary-foreground hover:shadow-institucional-sm"
                  }
                `}
              >
                <Briefcase className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Departamentos
              </Button>
            </div>

            {renderCatalogo()}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen animate-fade-in">
      <InstitucionalHeader userName={userName} userInitials={userInitials} />

      {/* Menú superior */}
      <nav className="bg-card flex justify-center gap-1 px-10 py-2 shadow-institucional-sm sticky top-[72px] z-40">
        {[
          { id: "panel", label: "Panel de Control", icon: LayoutDashboard },
          { id: "catalogo", label: "Catálogo", icon: BookMarked },
          { id: "usuarios", label: "Usuarios", icon: Users },
          { id: "reportes", label: "Reportes", icon: BarChart2 },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveSection(tab.id)}
            className={`
              nav-link
              ${activeSection === tab.id ? 'active text-primary' : 'text-primary'}
            `}
          >
            <tab.icon className="w-4 h-4 inline mr-2" />
            {tab.label}
          </button>
        ))}

        <button
          onClick={handleLogout}
          className="relative px-7 py-3 font-medium rounded-lg transition-all duration-300 text-destructive hover:bg-destructive/10 hover:-translate-y-0.5"
        >
          <Power className="w-4 h-4 inline mr-2" />
          Salir
        </button>
      </nav>

      <div className="container mx-auto px-10 py-8 max-w-7xl">
        <main className="main-container">
          <div className="section-header">
            <h2 className="text-2xl font-semibold text-primary">
              {activeSection === "panel" && "Panel de Control Administrativo"}
              {activeSection === "catalogo" && "Gestión de Catálogos Institucionales"}
              {activeSection === "usuarios" && "Gestión de Usuarios"}
              {activeSection === "reportes" && "Reportes y Estadísticas"} 
            </h2>
          </div>
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Admin;