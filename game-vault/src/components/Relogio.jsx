import { useState, useEffect } from "react";
function Relogio() {
const [hora, setHora] = useState(new Date().toLocaleTimeString());


useEffect(() => {
console.log("⏰ Relogio MONTADO — intervalo ligado");
const intervalo = setInterval(() => {
setHora(new Date().toLocaleTimeString());
}, 1000);
// Função de LIMPEZA: roda quando o componente sai da tela
return () => {
console.log("💀 Relogio DESMONTADO — intervalo desligado");
clearInterval(intervalo);
};
}, []); // [] = roda só na montagem
return (
<span
className={`font-mono text-emerald-400 text-sm bg-slate-800
px-3 py-1 rounded-lg`}
>
{hora}
</span>
);
}
export default Relogio;

Atualize Header.jsx para mostrar o relógio com um botão de alternância:
import { useState } from "react";
import Relogio from "./Relogio";
function Header() {
const [mostrarRelogio, setMostrarRelogio] = useState(true);
return (
<header
className={`bg-slate-900 text-white px-8 py-4
flex items-center justify-between`}
>
<h1 className="text-2xl font-bold">
DevLife <span className="text-emerald-400">Dashboard</span>
</h1>


<div className="flex items-center gap-3">
{mostrarRelogio && <Relogio />}
<button
onClick={() => setMostrarRelogio(!mostrarRelogio)}
className={`text-xs border border-slate-600 hover:border-emerald-400 px-3 py-1
rounded-lg transition-colors`}
>
{mostrarRelogio ? "Esconder relógio" : "Mostrar relógio"}
</button>
</div>
</header>
);
}
export default Header;