import Navbar from "./componentes/navbar";

import Proyecto from "./componentes/proyecto";
import Estudios from "./componentes/estudios";
import Docentes from "./componentes/docentes";
import Discentes from "./componentes/discentes";
import Instituciones from "./componentes/instituciones";
import Laboratorios from "./componentes/laboratorios";

export default function App() {
  return (
    <>
      <Navbar />

      <main className="bg-ice pt-24 space-y-8">
        <Proyecto />
        <Estudios />
        <Docentes />
        <Discentes />
        <Instituciones />  
        <Laboratorios />
      </main>
    </>
  );
}
