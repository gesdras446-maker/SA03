import { useState, useEffect } from "react";

function Relogio() {
  const [hora, setHora] = useState(() => new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(intervalo);
    };
  }, []);

  return (
    <span className="font-mono text-emerald-300 text-sm bg-black/60 border border-emerald-500/40 px-3 py-1 rounded-lg">
      {hora}
    </span>
  );
}

export default Relogio;