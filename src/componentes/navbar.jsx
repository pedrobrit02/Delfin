import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-indigoDark">
      <div className="w-full px-6 md:px-10 py-4">

        <div className="flex items-center justify-between">

          <a
            href="#proyecto"
            className="text-2xl font-extrabold tracking-wide"
            style={{ color: "#F5C26B" }}
          >
            DELFÍN
          </a>

          <ul className="hidden md:flex gap-8 text-white font-medium">
            <li><a href="#proyecto">Proyecto</a></li>
            <li><a href="#estudios">Estudios</a></li>
            <li><a href="#docentes">Docentes</a></li>
            <li><a href="#discentes">Discentes</a></li>
            <li><a href="#instituciones">Instituciones</a></li>
            <li><a href="#laboratorios">Laboratorios</a></li>
          </ul>

          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? "▲" : "▼"}
          </button>
        </div>

        {open && (
          <ul className="md:hidden mt-4 flex flex-col gap-3 text-white font-medium">
            <li><a href="#proyecto" onClick={()=>setOpen(false)}>Proyecto</a></li>
            <li><a href="#estudios" onClick={()=>setOpen(false)}>Estudios</a></li>
            <li><a href="#docentes" onClick={()=>setOpen(false)}>Docentes</a></li>
            <li><a href="#discentes" onClick={()=>setOpen(false)}>Discentes</a></li>
            <li><a href="#instituciones" onClick={()=>setOpen(false)}>Instituciones</a></li>
            <li><a href="#laboratorios" onClick={()=>setOpen(false)}>Laboratorios</a></li>
          </ul>
        )}

      </div>
    </nav>
  );
}
