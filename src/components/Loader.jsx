import React from 'react';
import { Loader2 } from 'lucide-react'; // Ícono animado de carga

function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-900 text-white">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="animate-spin w-12 h-12 text-indigo-1000" />
        <p className="text-lg font-semibold">Cargando JACANA Styles...</p>
      </div>
    </div>
  );
}

export default Loader;
