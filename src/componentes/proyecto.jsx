export default function Proyecto() {
  return (
    <section id="proyecto" className="px-4">
      <div
        className="
          max-w-7xl
          mx-auto
          bg-white
          rounded-3xl
          border-[5px] border-indigo-300
          shadow-md
          px-6
          md:px-10
          py-8
          relative
          lg:pr-[400px]
        "
      >
        <h2 className="text-xl font-bold text-indigoDark text-center mb-6 underline decoration-magenta">
          Proyecto
        </h2>
        <div
          className="
            mb-6 flex justify-center
            lg:absolute lg:inset-y-0 lg:right-6 lg:mb-0 lg:flex lg:items-center
          "
        >
          <img
            src="/images/delfin.jpg"
            alt="Programa Delfín"
            className="w-56 md:w-72 lg:w-[380px] h-auto"
          />
        </div>

        <div
          className="
            space-y-5
            max-w-3xl
            mx-auto
            lg:mx-0
          "
        >
          <h3
            className="
              text-lg
              sm:text-xl
              md:text-2xl
              font-bold
              text-indigoDark
              leading-tight
              text-center
              lg:text-left
            "
          >
            Red Internacional de Investigación y COIL – Programa Delfín
          </h3>

          <p
            className="
              text-base
              md:text-lg
              text-purpleDark
              leading-8
              text-justify
              indent-8
            "
          >
            La Red Internacional de Investigación y COIL – Programa Delfín articula
            instituciones de educación superior de México, Brasil, Colombia y Perú con
            el propósito de fortalecer la formación de estudiantes investigadores y
            emprendedores mediante cooperación académica internacional. El proyecto
            integra metodologías COIL, experiencias colaborativas virtuales y trabajo
            interdisciplinario entre docentes y estudiantes, promoviendo la
            internacionalización del currículo, la movilidad académica y la innovación
            pedagógica. Entre sus acciones estratégicas se incluyen la ejecución de
            módulos COIL de cuatro semanas, la sistematización de experiencias, la
            publicación de un libro académico con resultados, la conformación de un
            semillero internacional de investigación, la producción de working papers y
            la realización de seminarios científicos, consolidando un ecosistema de
            investigación aplicada y cooperación interinstitucional en América Latina.
          </p>
        </div>
      </div>
    </section>
  );
}