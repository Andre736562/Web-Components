import { useState } from "react";
import "./App.css";
import FormularioPuntos from "./components/FormularioPuntos";
import Resultados from "./components/Resultados";

function App() {
  const [puntos, setPuntos] = useState({
    x1: "",
    y1: "",
    x2: "",
    y2: "",
  });

  const [resultado, setResultado] = useState({
    distancia: "",
    puntoMedio: "",
    pendiente: "",
  });

  const cambiarDato = (e) => {
    setPuntos({
      ...puntos,
      [e.target.name]: e.target.value,
    });
  };

  const calcular = () => {
    const x1 = parseFloat(puntos.x1);
    const y1 = parseFloat(puntos.y1);
    const x2 = parseFloat(puntos.x2);
    const y2 = parseFloat(puntos.y2);

    if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
      alert("Ingrese todos los datos.");
      return;
    }

    const distancia = Math.sqrt(
      Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)
    ).toFixed(2);

    const puntoMedio = `(${((x1 + x2) / 2).toFixed(2)}, ${(
      (y1 + y2) /
      2
    ).toFixed(2)})`;

    const pendiente =
      x2 - x1 === 0
        ? "Indefinida"
        : ((y2 - y1) / (x2 - x1)).toFixed(2);

    setResultado({
      distancia,
      puntoMedio,
      pendiente,
    });
  };

  const limpiarDatos = () => {
    setPuntos({
      x1: "",
      y1: "",
      x2: "",
      y2: "",
    });

    setResultado({
      distancia: "",
      puntoMedio: "",
      pendiente: "",
    });
  };

  return (
    <div className="contenedor">
      <div className="tarjeta">
        <h1>Calculadora de Puntos</h1>
        <p>Ingrese las coordenadas de dos puntos del plano cartesiano.</p>

        <FormularioPuntos
          puntos={puntos}
          cambiarDato={cambiarDato}
          calcular={calcular}
          limpiarDatos={limpiarDatos}
        />

        <Resultados
          distancia={resultado.distancia}
          puntoMedio={resultado.puntoMedio}
          pendiente={resultado.pendiente}
        />
      </div>
    </div>
  );
}

export default App;