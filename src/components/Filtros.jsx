import React from "react";
export default function Filtros({ filtroCpu, setFiltroCpu, filtroRam, setFiltroRam }) {
  return (
    <div className="filtros">
      <label>CPU:</label>
      <select value={filtroCpu} onChange={(e) => setFiltroCpu(e.target.value)}>
        <option value="">Todas</option>
        <option value="Intel">Intel</option>
        <option value="AMD">AMD</option>
      </select>

      <label>RAM:</label>
      <select value={filtroRam} onChange={(e) => setFiltroRam(e.target.value)}>
        <option value="">Todas</option>
        <option value="8GB">8GB</option>
        <option value="16GB">16GB</option>
      </select>
    </div>
  );
}
