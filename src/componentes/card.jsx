import { memo } from "react";
import {
  GlobeAltIcon,
  AcademicCapIcon,
  BookOpenIcon,
  CalendarDaysIcon,
  BeakerIcon,
  CpuChipIcon
} from "@heroicons/react/24/outline";

// Dicionário com os LINKS INTEIROS E DIRETOS. 
// O lado esquerdo é o que o banco manda. O lado direito é o link real da imagem.
const LINKS_DIRETOS = {
  "delfin.jpg": "https://arfnujtwijrplpasqvhj.supabase.co/storage/v1/object/public/Assets/delfin.jpg",
  "Foto_Maye.jpg": "https://arfnujtwijrplpasqvhj.supabase.co/storage/v1/object/public/Assets/Foto_Maye.jpg",
  "ifmg_ibirite.jpg": "https://arfnujtwijrplpasqvhj.supabase.co/storage/v1/object/public/Assets/ifmgibirite.jpg",
  "ifmg_ibirite (1).jpg": "https://arfnujtwijrplpasqvhj.supabase.co/storage/v1/object/public/Assets/ifmgibirite.jpg",
  "Jorge.jpeg": "https://arfnujtwijrplpasqvhj.supabase.co/storage/v1/object/public/Assets/Jorge.jpeg",
  "JORGE_BALDARRAGO.jpeg": "https://arfnujtwijrplpasqvhj.supabase.co/storage/v1/object/public/Assets/JORGEBALDARRAGO.jpeg",
  "logo_Flui.jpg": "https://arfnujtwijrplpasqvhj.supabase.co/storage/v1/object/public/Assets/logo_Flui.jpg",
  "Nancy.jpg": "https://arfnujtwijrplpasqvhj.supabase.co/storage/v1/object/public/Assets/Nancy.jpg",
  "Paola.jpg": "https://arfnujtwijrplpasqvhj.supabase.co/storage/v1/object/public/Assets/Paola.jpg",
  "pedro.jpeg": "https://arfnujtwijrplpasqvhj.supabase.co/storage/v1/object/public/Assets/pedro.jpeg",
  "UCV.jpg": "https://arfnujtwijrplpasqvhj.supabase.co/storage/v1/object/public/Assets/UCV.jpg"
};

// Função que puxa o link inteiro da lista acima
const getImageUrl = (arquivo) => {
  const fallback = "https://arfnujtwijrplpasqvhj.supabase.co/storage/v1/object/public/Assets/logo_Flui.jpg";
  if (!arquivo) return fallback;
  return LINKS_DIRETOS[arquivo] || fallback;
};

function Icone({ item }) {
  const cls = "w-14 h-14 text-indigoDark";

  if (item.__tipo === "laboratorio") return <CpuChipIcon className={cls} />;

  if (item.__tipo === "projeto") {
    switch (item.tipo) {
      case "COIL":
        return <GlobeAltIcon className={cls} />;
      case "Red de Investigación":
        return <AcademicCapIcon className={cls} />;
      case "Libro":
        return <BookOpenIcon className={cls} />;
      case "Evento académico":
        return <CalendarDaysIcon className={cls} />;
      default:
        return <BeakerIcon className={cls} />;
    }
  }

  return null;
}

const Card = ({ item, onClick }) => {
  const titulo = item.nombre || item.nome || item.titulo;

  const subtitulo =
    item.cargo_actual ||
    item.cargo_atual ||
    item.programa ||
    item.rol_en_proyecto ||
    item.area ||
    item.status ||
    item.estado ||
    "";

  const ehPessoa =
    item.__tipo === "docente" ||
    item.__tipo === "discente";

  const ehInstitucion = item.__tipo === "instituicao";
  const ehLaboratorio = item.__tipo === "laboratorio";

  const arquivoBanco = ehPessoa ? item.imagen : (item.logo || item.imagen);

  return (
    <div
      onClick={() => onClick && onClick(item)}
      className="
        bg-white rounded-2xl shadow-lg cursor-pointer
        transition hover:scale-105
        flex flex-col items-center
        w-[260px] p-6
      "
    >

      {(ehPessoa || ehInstitucion || ehLaboratorio) ? (
        <div className="w-28 h-28 rounded-xl overflow-hidden shadow bg-gray-100 flex items-center justify-center">
          <img
            src={getImageUrl(arquivoBanco)}
            alt={titulo}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="w-24 h-24 rounded-full bg-indigo-50 flex items-center justify-center shadow">
          <Icone item={item} />
        </div>
      )}

      <div className="text-center mt-4">
        <h3 className="font-semibold text-indigoDark text-sm mb-1">
          {titulo}
        </h3>

        {subtitulo && (
          <p className="text-xs text-purpleDark line-clamp-3">
            {subtitulo}
          </p>
        )}
      </div>
    </div>
  );
};

export default memo(Card);