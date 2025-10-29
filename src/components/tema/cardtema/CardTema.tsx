import { Link } from "react-router-dom";
import type Tema from "../../../models/Tema";

interface CardTemaProps {
  tema: Tema;
}

function CardTema({ tema }: CardTemaProps) {
  return (
    <div className="border flex flex-col rounded-2x1 overflow-hidden justifybetween">
      <header className="py-2 px-6 bg-indigo-800 text-white font-bold text-2x1">
        Tema
      </header>
      <p className="p-8 text-3xl bg-slate-200 h-full">{tema.descricao}</p>
      <div className="flex">
        <Link
          to=""
          className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>
        <Link
          to=""
          className="w-full text-slate-100 bg-red-400 hover:bg-red-700 flex items-center justify-center py-2"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardTema;
