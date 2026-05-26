import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import Section from "./section";
import Card from "./card";

export default function Instituciones() {
  const [instituciones, setInstituciones] = useState([]);

  useEffect(() => {
    async function fetchInstituciones() {
      const { data, error } = await supabase
        .from("instituciones")
        .select("*")
        .eq("activo", true)
        .order("created_at", { ascending: true });

      if (!error) setInstituciones(data || []);
    }

    fetchInstituciones();
  }, []);

  if (instituciones.length === 0) return null;

  return (
    <Section
      titulo="Instituciones Colaboradoras"
      id="instituciones"
      tipo="instituicao"
      compacto
    >
      {instituciones.map((inst) => (
        <Card key={inst.id} item={inst} />
      ))}
    </Section>
  );
}
