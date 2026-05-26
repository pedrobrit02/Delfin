import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import Section from "./section";
import Card from "./card";

export default function Estudios() {
  const [proyectos, setProyectos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function buscarProyectos() {
      const { data, error } = await supabase
        .from("proyectos")
        .select("*")
        .order("titulo", { ascending: true });

      if (error) {
        console.error("Error al buscar proyectos:", error);
      } else {
        setProyectos(data);
      }

      setLoading(false);
    }

    buscarProyectos();
  }, []);

  if (loading) {
    return (
      <p className="text-center text-sm text-gray-500">
        Cargando estudios...
      </p>
    );
  }

  if (!proyectos.length) return null;

  return (
    <Section
      titulo="Estudios"
      id="estudios"
      tipo="projeto"
    >
      {proyectos.map((proyecto) => (
        <Card
          key={proyecto.id}
          item={proyecto}
        />
      ))}
    </Section>
  );
}
