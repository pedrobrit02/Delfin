import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import Section from "./section";
import Card from "./card";

export default function Docentes() {
  const [docentes, setDocentes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function buscarDocentes() {
      const { data, error } = await supabase
        .from("docentes")
        .select("*")
        .order("nombre", { ascending: true });

      if (error) {
        console.error("Error al buscar docentes:", error);
      } else {
        setDocentes(data);
      }

      setLoading(false);
    }

    buscarDocentes();
  }, []);

  if (loading) {
    return <p className="text-center">Cargando docentes...</p>;
  }

  if (!docentes.length) return null;

  return (
    <Section
      titulo="Equipo Docente"
      id="docentes"
      tipo="docente"
    >
      {docentes.map((docente) => (
        <Card
          key={docente.id}
          item={docente}
        />
      ))}
    </Section>
  );
}
