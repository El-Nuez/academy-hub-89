import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import InstitucionalHeader from "@/components/InstitucionalHeader";
import Badge from "@/components/Badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  BookOpen,
  ClipboardCheck,
  BarChart3,
  Award,
  DollarSign,
  Lock,
  Eye,
  UserCheck,
  FileText,
  CheckSquare,
} from "lucide-react";

type Alumno = { id: string; nombre: string };

type Clase = {
  id: string;
  nombre: string;
  grupo: string;
  aula: string;
  horario: string;
  alumnos: Alumno[];
};

const Profesor = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<
    "horario" | "materias" | "asistencia" | "evaluaciones" | "desempeno" | "nomina" | "password"
  >("horario");

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const userType = localStorage.getItem("userType");
    if (!isAuthenticated || userType !== "profesor") {
      navigate("/");
    }
  }, [navigate]);

  const userName = localStorage.getItem("userName") || "Juan Pérez";
  const userInitials = localStorage.getItem("userInitials") || "JP";

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  // ====== Datos demo coherentes en todas las secciones ======
  const clases: Clase[] = useMemo(
    () => [
      {
        id: "PRG-101-5A",
        nombre: "Programación I",
        grupo: "5A",
        aula: "LAB-3",
        horario: "Lun 08:00–10:00 / Mié 08:00–10:00",
        alumnos: [
          { id: "20231001", nombre: "Ana García Martínez" },
          { id: "20231002", nombre: "Carlos López Sánchez" },
          { id: "20231003", nombre: "María Hernández Ruiz" },
          { id: "20231004", nombre: "Juan Ramírez Torres" },
          { id: "20231005", nombre: "Laura Pérez González" },
        ],
      },
      {
        id: "FIS-202-3B",
        nombre: "Física II",
        grupo: "3B",
        aula: "B-205",
        horario: "Lun 10:00–12:00 / Jue 10:00–12:00",
        alumnos: [
          { id: "20232001", nombre: "Bruno Ortega" },
          { id: "20232002", nombre: "Daniela Salas" },
          { id: "20232003", nombre: "Irene Vázquez" },
        ],
      },
      {
        id: "BDD-301-4C",
        nombre: "Bases de Datos",
        grupo: "4C",
        aula: "LAB-1",
        horario: "Mar 14:00–16:00 / Vie 14:00–17:00",
        alumnos: [
          { id: "20233001", nombre: "Hugo Mendoza" },
          { id: "20233002", nombre: "Ximena Ríos" },
          { id: "20233003", nombre: "Roberto Silva" },
        ],
      },
    ],
    []
  );

  // ====== Estado para asistencia ======
  const [selectedClaseId, setSelectedClaseId] = useState<string>(clases[0].id);
  const selectedClase = useMemo(
    () => clases.find((c) => c.id === selectedClaseId)!,
    [clases, selectedClaseId]
  );
  const [attendanceDate, setAttendanceDate] = useState<string>(() => {
    const d = new Date();
    const pad = (n: number) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  });

  const [attendance, setAttendance] = useState<Record<string, boolean>>(() => {
    const map: Record<string, boolean> = {};
    selectedClase.alumnos.forEach((a) => (map[a.id] = false));
    return map;
  });

  useEffect(() => {
    const map: Record<string, boolean> = {};
    selectedClase.alumnos.forEach((a) => (map[a.id] = false));
    setAttendance(map);
  }, [selectedClase]);

  const toggleAlumno = (id: string) => {
    setAttendance((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const marcarTodos = (valor: boolean) => {
    const map: Record<string, boolean> = {};
    selectedClase.alumnos.forEach((a) => (map[a.id] = valor));
    setAttendance(map);
  };

  const enviarAsistencia = () => {
    const presentes = Object.entries(attendance)
      .filter(([, v]) => v)
      .map(([id]) => id);
    const faltantes = Object.entries(attendance)
      .filter(([, v]) => !v)
      .map(([id]) => id);

    window.alert(
      `Asistencia enviada\n\nClase: ${selectedClase.nombre} (${selectedClase.grupo})\nFecha: ${attendanceDate}\nPresentes: ${presentes.length}\nFaltas: ${faltantes.length}`
    );
  };

  // ====== Estado para evaluaciones ======
  const [selectedClaseEval, setSelectedClaseEval] = useState(clases[0].id);
  const [mostrarCaptura, setMostrarCaptura] = useState(false);
  const [calificaciones, setCalificaciones] = useState<
    Record<string, { p1: number; p2: number; p3: number }>
  >(() => {
    const map: Record<string, { p1: number; p2: number; p3: number }> = {};
    clases.forEach((c) => {
      c.alumnos.forEach((a) => (map[a.id] = { p1: 0, p2: 0, p3: 0 }));
    });
    return map;
  });

  const handleChange = (
    alumnoId: string,
    campo: "p1" | "p2" | "p3",
    valor: string
  ) => {
    setCalificaciones((prev) => ({
      ...prev,
      [alumnoId]: {
        ...prev[alumnoId],
        [campo]: Number(valor),
      },
    }));
  };

  const guardarCalificaciones = () => {
    const clase = clases.find((c) => c.id === selectedClaseEval);
    window.alert(
      `Calificaciones registradas exitosamente para ${clase?.nombre} - ${clase?.grupo}`
    );
  };

  const exportarActa = () => {
    window.alert("Acta exportada correctamente en formato PDF");
  };

  const claseSeleccionadaEval = clases.find((c) => c.id === selectedClaseEval)!;

  // ====== Render dinámico ======
  const renderContent = () => {
    switch (activeSection) {
      case "horario":
        return (
          <div className="animate-fade-in">
            <div className="table-institucional">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-primary text-primary-foreground">
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Día</th>
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Hora</th>
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Materia</th>
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Grupo</th>
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Aula</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-accent/5 transition-all duration-200">
                    <td className="px-4 py-4 border-b border-border font-semibold">Lunes</td>
                    <td className="px-4 py-4 border-b border-border">08:00 - 10:00</td>
                    <td className="px-4 py-4 border-b border-border">Programación I</td>
                    <td className="px-4 py-4 border-b border-border"><Badge variant="info">5A</Badge></td>
                    <td className="px-4 py-4 border-b border-border">LAB-3</td>
                  </tr>
                  <tr className="hover:bg-accent/5 transition-all duration-200">
                    <td className="px-4 py-4 border-b border-border font-semibold">Lunes</td>
                    <td className="px-4 py-4 border-b border-border">10:00 - 12:00</td>
                    <td className="px-4 py-4 border-b border-border">Física II</td>
                    <td className="px-4 py-4 border-b border-border"><Badge variant="info">3B</Badge></td>
                    <td className="px-4 py-4 border-b border-border">B-205</td>
                  </tr>
                  <tr className="hover:bg-accent/5 transition-all duration-200">
                    <td className="px-4 py-4 border-b border-border font-semibold">Martes</td>
                    <td className="px-4 py-4 border-b border-border">14:00 - 16:00</td>
                    <td className="px-4 py-4 border-b border-border">Bases de Datos</td>
                    <td className="px-4 py-4 border-b border-border"><Badge variant="info">4C</Badge></td>
                    <td className="px-4 py-4 border-b border-border">LAB-1</td>
                  </tr>
                </tbody>
              </table>
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
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Clave</th>
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Nombre</th>
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Grupo</th>
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Alumnos</th>
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Aula</th>
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {clases.map((c) => (
                    <tr key={c.id} className="hover:bg-accent/5 transition-all duration-200">
                      <td className="px-4 py-4 border-b border-border">
                        <strong className="text-primary">{c.id.split("-").slice(0, 2).join("-")}</strong>
                      </td>
                      <td className="px-4 py-4 border-b border-border">{c.nombre}</td>
                      <td className="px-4 py-4 border-b border-border"><Badge variant="info">{c.grupo}</Badge></td>
                      <td className="px-4 py-4 border-b border-border">{c.alumnos.length}</td>
                      <td className="px-4 py-4 border-b border-border">{c.aula}</td>
                      <td className="px-4 py-4 border-b border-border">
                        <Button size="sm" className="btn-institucional bg-gradient-primary text-primary-foreground group">
                          <Eye className="w-3 h-3 mr-1 group-hover:scale-110 transition-transform" />
                          Ver
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case "asistencia":
        return (
          <div className="animate-fade-in space-y-4">
            {/* Filtros */}
            <div className="flex flex-wrap gap-3">
              <select
                value={selectedClaseId}
                onChange={(e) => setSelectedClaseId(e.target.value)}
                className="px-4 py-2 rounded-lg border border-border bg-card text-primary"
              >
                {clases.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.nombre} - {c.grupo}
                  </option>
                ))}
              </select>

              <Input
                type="date"
                className="w-auto"
                value={attendanceDate}
                onChange={(e) => setAttendanceDate(e.target.value)}
              />

              <div className="flex gap-2">
                <Button
                  type="button"
                  className="btn-institucional bg-gradient-secondary text-secondary-foreground"
                  onClick={() => marcarTodos(true)}
                >
                  Marcar todos
                </Button>
                <Button
                  type="button"
                  className="btn-institucional bg-gradient-secondary text-secondary-foreground"
                  onClick={() => marcarTodos(false)}
                >
                  Limpiar
                </Button>
              </div>
            </div>

            {/* Info clase */}
            <div className="bg-muted/30 p-4 rounded-xl border border-border">
              <p className="text-sm">
                <span className="font-semibold text-primary">Clase:</span> {selectedClase.nombre} ({selectedClase.grupo}) —{" "}
                <span className="text-muted-foreground">{selectedClase.horario}</span>
              </p>
            </div>

            {/* Lista de alumnos */}
            <div className="table-institucional">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-primary text-primary-foreground">
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase">No. Control</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase">Alumno</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase">Presente</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedClase.alumnos.map((a) => (
                    <tr key={a.id} className="hover:bg-accent/5 transition-all duration-200">
                      <td className="px-4 py-3 border-b border-border"><strong>{a.id}</strong></td>
                      <td className="px-4 py-3 border-b border-border">{a.nombre}</td>
                      <td className="px-4 py-3 border-b border-border">
                        <label className="inline-flex items-center gap-2 cursor-pointer select-none">
                          <input
                            type="checkbox"
                            checked={!!attendance[a.id]}
                            onChange={() => toggleAlumno(a.id)}
                            className="w-4 h-4 accent-[#2E2B75]"
                          />
                          {attendance[a.id] ? (
                            <Badge variant="success">PRESENTE</Badge>
                          ) : (
                            <Badge variant="warning">FALTA</Badge>
                          )}
                        </label>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Acción */}
            <div className="flex justify-end">
              <Button
                onClick={enviarAsistencia}
                className="btn-institucional bg-gradient-primary text-primary-foreground group"
              >
                <CheckSquare className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Enviar asistencia
              </Button>
            </div>
          </div>
        );

           case "evaluaciones":
        return (
          <div className="animate-fade-in space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <select
                className="px-4 py-2 rounded-lg border border-border bg-card text-primary"
                value={selectedClaseEval}
                onChange={(e) => setSelectedClaseEval(e.target.value)}
              >
                {clases.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.nombre} - {c.grupo}
                  </option>
                ))}
              </select>
            </div>

            <div className="table-institucional">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-primary text-primary-foreground">
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase">
                      No. Control
                    </th>
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase">
                      Alumno
                    </th>
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase">
                      Parcial 1
                    </th>
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase">
                      Parcial 2
                    </th>
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase">
                      Parcial 3
                    </th>
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase">
                      Final
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-4 border-b border-border">
                      <strong>20231001</strong>
                    </td>
                    <td className="px-4 py-4 border-b border-border">
                      Ana García
                    </td>
                    <td className="px-4 py-4 border-b border-border">9.5</td>
                    <td className="px-4 py-4 border-b border-border">9.2</td>
                    <td className="px-4 py-4 border-b border-border">9.7</td>
                    <td className="px-4 py-4 border-b border-border">
                      <Badge variant="success">9.5</Badge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex gap-3 mt-4">
              <Button
                className="btn-institucional bg-gradient-primary text-primary-foreground group"
                onClick={() => setMostrarCaptura((prev) => !prev)}
              >
                <BarChart3 className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Capturar Calificaciones
              </Button>
              <Button
                className="btn-institucional bg-gradient-secondary text-secondary-foreground group"
                onClick={exportarActa}
              >
                <FileText className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Exportar Acta
              </Button>
            </div>

            {mostrarCaptura && (
              <div className="table-institucional mt-6 animate-fade-in">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-primary text-primary-foreground">
                      <th className="px-4 py-4 text-left text-xs font-semibold uppercase">
                        No. Control
                      </th>
                      <th className="px-4 py-4 text-left text-xs font-semibold uppercase">
                        Alumno
                      </th>
                      <th className="px-4 py-4 text-left text-xs font-semibold uppercase">
                        Parcial 1
                      </th>
                      <th className="px-4 py-4 text-left text-xs font-semibold uppercase">
                        Parcial 2
                      </th>
                      <th className="px-4 py-4 text-left text-xs font-semibold uppercase">
                        Parcial 3
                      </th>
                      <th className="px-4 py-4 text-left text-xs font-semibold uppercase">
                        Final
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {claseSeleccionadaEval.alumnos
  .filter((a) => a.nombre !== "Ana García Martínez")
  .map((a) => {
                      const notas = calificaciones[a.id];
                      const promedio = ((notas.p1 + notas.p2 + notas.p3) / 3).toFixed(1);
                      return (
                        <tr key={a.id}>
                          <td className="px-4 py-3 border-b border-border">
                            <strong>{a.id}</strong>
                          </td>
                          <td className="px-4 py-3 border-b border-border">
                            {a.nombre}
                          </td>
                          <td className="px-4 py-3 border-b border-border">
                            <Input
                              type="number"
                              min="0"
                              max="10"
                              step="0.1"
                              value={notas.p1}
                              onChange={(e) => handleChange(a.id, "p1", e.target.value)}
                              className="w-20 text-center"
                            />
                          </td>
                          <td className="px-4 py-3 border-b border-border">
                            <Input
                              type="number"
                              min="0"
                              max="10"
                              step="0.1"
                              value={notas.p2}
                              onChange={(e) => handleChange(a.id, "p2", e.target.value)}
                              className="w-20 text-center"
                            />
                          </td>
                          <td className="px-4 py-3 border-b border-border">
                            <Input
                              type="number"
                              min="0"
                              max="10"
                              step="0.1"
                              value={notas.p3}
                              onChange={(e) => handleChange(a.id, "p3", e.target.value)}
                              className="w-20 text-center"
                            />
                          </td>
                          <td className="px-4 py-3 border-b border-border">
                            <Badge variant="success">{promedio}</Badge>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div className="flex justify-end mt-4">
                  <Button
                    onClick={guardarCalificaciones}
                    className="btn-institucional bg-gradient-primary text-primary-foreground group"
                  >
                    <CheckSquare className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Guardar Calificaciones
                  </Button>
                </div>
              </div>
            )}
          </div>
        );

     case "desempeno":
  return (
    <div className="animate-fade-in space-y-4">
   
      {/* Tabla de desempeño */}
      <div className="table-institucional">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-primary text-primary-foreground">
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Periodo</th>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Materia</th>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Grupo</th>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Promedio</th>
              <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Aprobación</th>
            </tr>
          </thead>
          <tbody>
            {/* Periodo ENE–JUN 2025 */}
            <tr className="hover:bg-accent/5 transition-all duration-200">
              <td className="px-4 py-4 border-b border-border font-semibold">ENE–JUN 2025</td>
              <td className="px-4 py-4 border-b border-border">Programación I</td>
              <td className="px-4 py-4 border-b border-border"><Badge variant="info">5A</Badge></td>
              <td className="px-4 py-4 border-b border-border text-primary font-semibold">9.5</td>
              <td className="px-4 py-4 border-b border-border"><Badge variant="success">98%</Badge></td>
            </tr>

            {/* Periodo AGO–DIC 2024 */}
            <tr className="hover:bg-accent/5 transition-all duration-200">
              <td className="px-4 py-4 border-b border-border font-semibold">AGO–DIC 2024</td>
              <td className="px-4 py-4 border-b border-border">Bases de Datos</td>
              <td className="px-4 py-4 border-b border-border"><Badge variant="info">4C</Badge></td>
              <td className="px-4 py-4 border-b border-border text-primary font-semibold">9.1</td>
              <td className="px-4 py-4 border-b border-border"><Badge variant="success">94%</Badge></td>
            </tr>

            <tr className="hover:bg-accent/5 transition-all duration-200">
              <td className="px-4 py-4 border-b border-border font-semibold">AGO–DIC 2024</td>
              <td className="px-4 py-4 border-b border-border">Física II</td>
              <td className="px-4 py-4 border-b border-border"><Badge variant="info">3B</Badge></td>
              <td className="px-4 py-4 border-b border-border text-primary font-semibold">8.9</td>
              <td className="px-4 py-4 border-b border-border"><Badge variant="success">91%</Badge></td>
            </tr>

            {/* Periodo ENE–JUN 2024 */}
            <tr className="hover:bg-accent/5 transition-all duration-200">
              <td className="px-4 py-4 border-b border-border font-semibold">ENE–JUN 2024</td>
              <td className="px-4 py-4 border-b border-border">Programación I</td>
              <td className="px-4 py-4 border-b border-border"><Badge variant="info">5A</Badge></td>
              <td className="px-4 py-4 border-b border-border text-primary font-semibold">9.3</td>
              <td className="px-4 py-4 border-b border-border"><Badge variant="success">96%</Badge></td>
            </tr>

            <tr className="hover:bg-accent/5 transition-all duration-200">
              <td className="px-4 py-4 border-b border-border font-semibold">ENE–JUN 2024</td>
              <td className="px-4 py-4 border-b border-border">Física II</td>
              <td className="px-4 py-4 border-b border-border"><Badge variant="info">3B</Badge></td>
              <td className="px-4 py-4 border-b border-border text-primary font-semibold">8.7</td>
              <td className="px-4 py-4 border-b border-border"><Badge variant="warning">90%</Badge></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );



      case "nomina":
        return (
          <div className="animate-fade-in">
            <div className="table-institucional">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-primary text-primary-foreground">
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Periodo</th>
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Sueldo Base</th>
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Bonificaciones</th>
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Deducciones</th>
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Total Neto</th>
                    <th className="px-4 py-4 text-left text-xs font-semibold uppercase">Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { periodo: "Febrero 2025", base: 18500, bono: 2500, ded: 3150, neto: 17850 },
                    { periodo: "Enero 2025", base: 18500, bono: 2000, ded: 3075, neto: 17425 },
                    { periodo: "Diciembre 2024", base: 18500, bono: 5000, ded: 3525, neto: 19975 },
                  ].map((r) => (
                    <tr key={r.periodo} className="hover:bg-accent/5 transition-all duration-200">
                      <td className="px-4 py-4 border-b border-border font-semibold">{r.periodo}</td>
                      <td className="px-4 py-4 border-b border-border">${r.base.toLocaleString()}</td>
                      <td className="px-4 py-4 border-b border-border">${r.bono.toLocaleString()}</td>
                      <td className="px-4 py-4 border-b border-border">${r.ded.toLocaleString()}</td>
                      <td className="px-4 py-4 border-b border-border">
                        <strong className="text-primary">${r.neto.toLocaleString()}</strong>
                      </td>
                      <td className="px-4 py-4 border-b border-border">
                        <Button size="sm" variant="outline" className="hover-scale group">
                          <FileText className="w-3 h-3 mr-1 group-hover:scale-110 transition-transform" />
                          Descargar
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case "password":
        return (
          <div className="animate-fade-in max-w-md mx-auto space-y-6">
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
            <Button className="w-full btn-institucional bg-gradient-primary text-primary-foreground group">
              <Lock className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Guardar Cambios
            </Button>
          </div>
        );
    }
  };

 return (
    <div className="min-h-screen bg-background text-primary">
      <InstitucionalHeader userName={userName} userInitials={userInitials} />
      <nav className="bg-card flex flex-wrap justify-center gap-3 py-3 border-b border-border shadow-institucional-sm">
        {[
          { id: "horario", label: "Horario Académico", icon: Calendar },
          { id: "materias", label: "Materias Impartidas", icon: BookOpen },
          { id: "asistencia", label: "Registros de Asistencia", icon: UserCheck },
          { id: "evaluaciones", label: "Evaluaciones", icon: ClipboardCheck },
          { id: "desempeno", label: "Desempeño Académico", icon: Award },
          { id: "nomina", label: "Nómina", icon: DollarSign },
          { id: "password", label: "Cambiar Contraseña", icon: Lock },
        ].map(({ id, label, icon: Icon }) => (
          <Button
            key={id}
            onClick={() => setActiveSection(id as any)}
            className={`btn-institucional transition-all duration-300 group btn-with-icon ${
              activeSection === (id as any)
                ? "bg-gradient-primary text-primary-foreground shadow-institucional-md"
                : "bg-gradient-secondary text-secondary-foreground hover:shadow-institucional-sm"
            }`}
          >
            <Icon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            {label}
          </Button>
        ))}
        <Button
          onClick={handleLogout}
          variant="destructive"
          className="font-semibold shadow-institucional-sm hover:shadow-institucional-md transition-all hover:-translate-y-0.5"
        >
          Salir
        </Button>
      </nav>
      <main className="container mx-auto px-6 py-8">{renderContent()}</main>
    </div>
  );
};

export default Profesor;