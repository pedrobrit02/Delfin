import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import Section from "./section";
import Card from "./card";

export default function Discentes() {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    async function fetchAlumnos() {
      const { data, error } = await supabase
        .from("alumnos")
        .select("*")
        .eq("activo", true)
        .order("created_at", { ascending: true });

      if (error) {
        console.error("Erro ao buscar discentes:", error);
      } else {
        setAlumnos(data || []);
      }
    }

    fetchAlumnos();
  }, []);

  if (alumnos.length === 0) return null;

  return (
    <Section
      titulo="Equipo Discente"
      id="discentes"
      tipo="discente"
    >
      {alumnos.map((alumno) => (
        <Card
          key={alumno.id}
          item={alumno}
        />
      ))}
    </Section>
  );
}