import { useState, cloneElement, Children } from "react";
import Modal from "./modal";

export default function Section({
  titulo,
  id,
  tipo,
  children,
  compacto = false
}) {
  const [itemSelecionado, setItemSelecionado] = useState(null);

  function abrirModal(item) {
    setItemSelecionado(item);
  }

  function fecharModal() {
    setItemSelecionado(null);
  }

  return (
    <section
      id={id}
      className={`bg-ice px-4 ${compacto ? "py-2" : "py-6"}`}
    >
      <div
        className={`
          max-w-7xl
          mx-auto
          bg-white
          rounded-3xl
          border-[5px] border-indigo-300
          shadow-md
          px-6
          md:px-10
          ${compacto ? "py-4" : "py-5"}
        `}
      >
        <h2 className="text-xl font-bold text-indigoDark text-center mb-4 underline decoration-magenta">
          {titulo}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {Children.map(children, (child) => {
            if (!child) return null;

            const itemComTipo = {
              ...child.props.item,
              __tipo: tipo
            };

            return cloneElement(child, {
              item: itemComTipo,
              onClick: () => abrirModal(itemComTipo)
            });
          })}
        </div>
      </div>

      {itemSelecionado && (
        <Modal
          item={itemSelecionado}
          onClose={fecharModal}
        />
      )}
    </section>
  );
}
