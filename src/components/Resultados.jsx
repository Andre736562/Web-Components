function Resultados({ distancia, puntoMedio, pendiente }) {
  return (
    <div className="resultados">
      <h2>Resultados</h2>

      <p>
        <strong>Distancia:</strong> {distancia}
      </p>

      <p>
        <strong>Punto intermedio:</strong> {puntoMedio}
      </p>

      <p>
        <strong>Pendiente:</strong> {pendiente}
      </p>
    </div>
  );
}

export default Resultados;