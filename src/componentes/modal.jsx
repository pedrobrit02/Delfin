import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";

export default function Modal({ item, onClose }) {
  const [equipos, setEquipos] = useState([]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const SectionBox = ({ title, children }) => (
    <section className="space-y-2">
      <h3 className="text-lg font-semibold text-indigoDark border-l-4 border-orange-500 pl-3">
        {title}
      </h3>

      <div
        className="
          bg-indigo-50
          rounded-xl
          px-4 py-3
          sm:px-5 sm:py-4
          text-sm
          text-gray-700
          leading-relaxed
          whitespace-pre-line
        "
      >
        {children || (
          <span className="italic text-gray-400">
            Información no disponible
          </span>
        )}
      </div>
    </section>
  );

  const Tag = ({ children }) => (
    <span className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigoDark">
      {children}
    </span>
  );

  const Badge = ({ children }) => (
    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-magenta/10 text-magenta">
      {children}
    </span>
  );

  return (
    <div
      className="
        fixed inset-0 z-50
        bg-black/70 backdrop-blur-sm
        flex items-center justify-center
      "
      onClick={onClose}
    >
      <div
        className="
          bg-white
          w-[98vw] h-[95vh]
          sm:w-[96vw] sm:h-[96vh]
          rounded-2xl sm:rounded-[28px]
          shadow-2xl
          relative
        "
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="
            absolute
            top-3 right-4
            sm:top-6 sm:right-8
            text-3xl
            text-gray-400
            hover:text-black
            transition
          "
        >
          ×
        </button>

        <div
          className="
            h-full overflow-y-auto
            px-5 py-6
            sm:px-8 sm:py-8
            lg:px-14 lg:py-12
          "
        >
        {item.__tipo === "docente" && (
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 lg:gap-16">

            <aside className="space-y-6 lg:space-y-8 lg:sticky lg:top-10 self-start">

              <img
                src={item.imagen || "/images/avatar-placeholder.png"}
                alt={item.nombre}
                className="
                  w-40 h-40
                  sm:w-56 sm:h-56
                  lg:w-72 lg:h-72
                  rounded-3xl object-cover shadow-xl bg-gray-200
                "
              />

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-indigoDark">
                  {item.nombre}
                </h2>

                <Badge>{item.cargo_actual}</Badge>

                <p className="text-sm text-gray-600">
                  {item.institucion_actual}
                </p>

                <p className="text-xs text-gray-500">
                  {item.ciudad} · {item.pais}
                </p>
              </div>

              <div className="space-y-6 text-sm">
                {item.email && (
                  <p className="text-sm text-indigoDark">
                    ✉ {item.email}
                  </p>

                )}
                {item.cvlac && (
                  <a
                    href={item.cvlac}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      mt-4
                      inline-flex items-center gap-2
                      bg-indigoDark text-white
                      px-5 py-2.5
                      rounded-xl
                      shadow-md
                      hover:scale-105 hover:shadow-lg
                      transition
                    "
                  >
                    🔗 Ver perfil
                  </a>
                )}
              </div>
            </aside>

            <main className="space-y-8 lg:space-y-10">

              <SectionBox title="Perfil académico">
                {item.biografia}
              </SectionBox>

              <SectionBox title="Formación académica">
                {[
                  item.graduacion && `• Graduación: ${item.graduacion}`,
                  item.especializacion && `• Especialización: ${item.especializacion}`,
                  item.maestria && `• Maestría: ${item.maestria}`,
                  item.doctorado &&
                    `• Doctorado: ${item.doctorado} (${item.estado_doctorado})`
                ].filter(Boolean).join("\n")}
              </SectionBox>

              <SectionBox title="Área de actuación">
                {item.area_actuacion}
              </SectionBox>

              <SectionBox title="Líneas de investigación">
                {item.lineas_investigacion}
              </SectionBox>

              <SectionBox title="Experiencia docente">
                {item.experiencia_docente}
              </SectionBox>

              <SectionBox title="Experiencia profesional">
                {item.experiencia_profesional}
              </SectionBox>

              <SectionBox title="Proyectos destacados">
                {item.proyectos_destacados}
              </SectionBox>

              <SectionBox title="Producción académica">
                {item.publicaciones}
              </SectionBox>

              <SectionBox title="Competencias">
                <div className="flex flex-wrap gap-2">
                  {item.competencias?.split(",").map((c, i) => (
                    <Tag key={i}>{c.trim()}</Tag>
                  ))}
                </div>
              </SectionBox>

              <SectionBox title="Idiomas">
                <div className="flex flex-wrap gap-2">
                  {item.idiomas?.split(",").map((i, idx) => (
                    <Tag key={idx}>{i.trim()}</Tag>
                  ))}
                </div>
              </SectionBox>

            </main>
          </div>
        )}

          {item.__tipo === "discente" && (
            <div
              className="
                max-w-6xl mx-auto
                grid
                grid-cols-1
                lg:grid-cols-[300px_1fr]
                gap-10 lg:gap-16
              "
            >

              <aside
                className="
                  space-y-6 lg:space-y-8
                  lg:sticky lg:top-10
                  self-start
                  flex flex-col items-center lg:items-start
                  text-center lg:text-left
                "
              >
                <img
                  src={item.imagen || "/images/avatar-placeholder.png"}
                  alt={item.nombre}
                  className="
                    w-40 h-40
                    sm:w-52 sm:h-52
                    lg:w-64 lg:h-64
                    rounded-3xl
                    object-cover
                    shadow-xl
                    bg-gray-200
                  "
                />

                <div className="space-y-2">
                  <h2 className="text-2xl lg:text-3xl font-bold text-indigoDark">
                    {item.nombre}
                  </h2>

                  <Badge>{item.nivel}</Badge>

                  <p className="text-sm text-gray-600 mt-2">
                    {item.programa}
                  </p>

                  <p className="text-xs text-gray-500">
                    {item.institucion}
                  </p>

                  <p className="text-xs text-gray-500">
                    {item.ciudad} · {item.pais}
                  </p>
                </div>

                {item.email && (
                  <p className="text-sm text-indigoDark">
                    ✉ {item.email}
                  </p>
                )}
                {(item.lattes || item.linkedin || item.perfil) && (
                  <a
                    href={item.lattes || item.linkedin || item.perfil}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      mt-3
                      inline-block
                      px-4 py-2
                      text-sm font-semibold
                      bg-indigoDark
                      text-white
                      rounded-lg
                      shadow
                      hover:opacity-90
                      transition
                    "
                  >
                    Ver perfil
                  </a>
                  )}
              </aside>
              
              <main className="space-y-8 lg:space-y-10">

                <SectionBox title="Perfil académico">
                  <div className="text-justify leading-relaxed indent-6">
                    {item.biografia}
                  </div>
                </SectionBox>

                <SectionBox title="Formación académica">
                  {item.formacion}
                </SectionBox>

                <SectionBox title="Cursos y certificaciones">
                  {item.cursos}
                </SectionBox>

                <SectionBox title="Premios y reconocimientos">
                  {item.premios}
                </SectionBox>

                <SectionBox title="Eventos académicos">
                  {item.eventos}
                </SectionBox>

                <SectionBox title="Objetivo profesional">
                  <div className="text-justify leading-relaxed indent-6">
                    {item.objetivo_profesional}
                  </div>
                </SectionBox>

                <SectionBox title="Competencias">
                  <div className="flex flex-wrap gap-2">
                    {item.competencias?.split(",").map((c, i) => (
                      <Tag key={i}>{c.trim()}</Tag>
                    ))}
                  </div>
                </SectionBox>

                <SectionBox title="Idiomas">
                  <div className="flex flex-wrap gap-2">
                    {item.idiomas?.split(",").map((i, idx) => (
                      <Tag key={idx}>{i.trim()}</Tag>
                    ))}
                  </div>
                </SectionBox>
                
              </main>
              
            </div>
          )}
          

          {item.__tipo === "projeto" && (
            <div className="max-w-5xl mx-auto space-y-6 lg:space-y-8">

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigoDark">
                {item.titulo}
              </h2>

              <p
                className="
                  text-base sm:text-lg
                  text-justify
                  leading-7 sm:leading-relaxed
                  indent-4 sm:indent-6
                  text-gray-700
                "
              >
                {item.descripcion}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <SectionBox title="Área">{item.area}</SectionBox>
                <SectionBox title="Estado">{item.estado}</SectionBox>
                <SectionBox title="Instituciones">{item.instituciones}</SectionBox>
                <SectionBox title="Países">{item.paises}</SectionBox>
              </div>

              <SectionBox title="Producto esperado">
                {item.producto_esperado}
              </SectionBox>

            </div>
          )}

          {item.__tipo === "instituicao" && (
            <div className="max-w-5xl mx-auto space-y-8 lg:space-y-10">

              <div className="flex flex-col items-center gap-6 lg:gap-8">

                <img
                  src={item.logo || "/images/logo-placeholder.png"}
                  alt={item.nombre}
                  className="
                    max-h-32
                    sm:max-h-48
                    lg:max-h-72
                    w-auto
                    object-contain
                  "
                  onError={(e) => {
                    e.currentTarget.src = "/images/logo-placeholder.png";
                  }}
                />

                <div className="space-y-3 lg:space-y-4 text-center">

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigoDark">
                    {item.nombre}
                  </h2>

                  <Badge>{item.pais}</Badge>

                  <p className="text-base sm:text-lg text-gray-600">
                    {item.rol_en_proyecto}
                  </p>
                    {item.site && (
                      <a
                        href={item.site}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block mt-4 px-5 py-2 bg-indigoDark text-white rounded-lg shadow hover:opacity-90"
                      >
                        Ver institución
                      </a>
                    )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <SectionBox title="País">{item.pais}</SectionBox>
                <SectionBox title="Rol en el proyecto">{item.rol_en_proyecto}</SectionBox>
              </div>

              <SectionBox title="Sobre la institución">
                <div
                  className="
                    text-justify
                    leading-7 sm:leading-relaxed
                    indent-4 sm:indent-6
                    text-gray-700
                  "
                >
                  {item.descripcion}
                </div>
              </SectionBox>

            </div>
          )}

          {item.__tipo === "laboratorio" && (
            <div className="max-w-6xl mx-auto space-y-8 lg:space-y-10">

              <img
                src={item.imagen || "/images/logo-placeholder.png"}
                alt={item.nombre}
                className="
                  max-h-32
                  sm:max-h-48
                  lg:max-h-72
                  w-auto
                  object-contain
                  mx-auto
                "
                onError={(e) => {
                  e.currentTarget.src = "/images/logo-placeholder.png";
                }}
              />

              <div className="space-y-2 lg:space-y-3">

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigoDark">
                  {item.nombre}
                </h2>

                <p className="text-base sm:text-lg text-gray-600">
                  {item.descripcion}
                </p>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <SectionBox title="Área de actuación">{item.area_actuacion}</SectionBox>
                <SectionBox title="Infraestructura">{item.infraestructura}</SectionBox>
                <SectionBox title="Foco de investigación">{item.foco_investigacion}</SectionBox>
                <SectionBox title="Público objetivo">{item.publico_objetivo}</SectionBox>
              </div>

              <SectionBox title="¿Cómo funciona?">
                {item.como_funciona}
              </SectionBox>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}
