function FormularioPuntos({
  puntos,
  cambiarDato,
  calcular,
  limpiarDatos,
}) {
  return (
    <>
      <div className="formulario">
        <input
          type="number"
          name="x1"
          placeholder="x1"
          value={puntos.x1}
          onChange={cambiarDato}
        />

        <input
          type="number"
          name="y1"
          placeholder="y1"
          value={puntos.y1}
          onChange={cambiarDato}
        />

        <input
          type="number"
          name="x2"
          placeholder="x2"
          value={puntos.x2}
          onChange={cambiarDato}
        />

        <input
          type="number"
          name="y2"
          placeholder="y2"
          value={puntos.y2}
          onChange={cambiarDato}
        />
      </div>

      <div className="botones">
        <button className="btn-calcular" onClick={calcular}>
          Calcular
        </button>

        <button className="btn-limpiar" onClick={limpiarDatos}>
          Limpiar
        </button>
      </div>
    </>
  );
}

export default FormularioPuntos;