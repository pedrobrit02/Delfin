import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import Section from "./section";
import Card from "./card";

export default function Laboratorios() {
  const [laboratorios, setLaboratorios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function buscarLaboratorios() {
      const { data, error } = await supabase
        .from("laboratorios")
        .select("*")
        .eq("activo", true) 
        .order("nombre", { ascending: true });

      if (error) {
        console.error("Error al buscar laboratorios:", error);
      } else {
        setLaboratorios(data || []);
      }

      setLoading(false);
    }

    buscarLaboratorios();
  }, []);

  if (loading) {
    return (
      <p className="text-center text-gray-500 py-6">
        Cargando laboratorios...
      </p>
    );
  }

  if (!laboratorios.length) return null;

  return (
    <Section
      titulo="Laboratorios"
      id="laboratorios"
      tipo="laboratorio"
      compacto
    >
      {laboratorios.map((lab) => (
        <Card
          key={lab.id}
          item={{
            ...lab,
            logo: lab.imagen
          }}
        />
      ))}
    </Section>
  );
}
