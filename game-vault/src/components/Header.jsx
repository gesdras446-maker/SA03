import { useState } from "react";
import Relogio from "./Relogio";

function Header() {
  const [mostrarRelogio, setMostrarRelogio] = useState(true);

  return (
    <header className="bg-[#70003c] text-white px-6 py-4 shadow-md flex items-center justify-between border-b border-rose-950">
      <h1 className="text-2xl md:text-3xl font-bold tracking-wide font-display">
        Kyōkotsu
      </h1>

      <div className="flex items-center gap-3">
        {mostrarRelogio && (
          <span aria-hidden="true">
            <Relogio />
          </span>
        )}
        <button
          type="button"
          onClick={() => setMostrarRelogio(!mostrarRelogio)}
          aria-pressed={mostrarRelogio}
          className="text-xs border border-rose-200/50 hover:border-emerald-400 hover:text-emerald-300 text-white font-medium px-3 py-1.5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          {mostrarRelogio ? "Esconder relógio" : "Mostrar relógio"}
        </button>
      </div>
    </header>
  );
}

export default Header;