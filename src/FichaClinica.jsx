import { useState } from "react";

export default function FichaClinica() {
  return <FichaClinicaTable consultas={CONSULTAS} />;
}

function FichaClinicaTable({ consultas }) {
  const [keyEditing, setkeyEditing] = useState("");

  return (
    <table>
      <tbody>
        {consultas.map((consulta) => {
          return consulta.key === keyEditing ? (
            <FichaFormulario key={consulta.key} consulta={consulta} onSuccess={() => setkeyEditing("")} />
          ) : (
            <tr key={consulta.key}>
              <td>{consulta.fecha}</td>
              <td>
                {consulta.texto}
                {keyEditing === "" && <button onClick={() => setkeyEditing(consulta.key)}>Editar</button>}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function FichaFormulario({ consulta, onSuccess }) {
  console.log(Object.entries(consulta.campos));

  return (
    <tr>
      <td>{consulta.fecha}</td>
      <td>
        {consulta.texto}
        <button onClick={onSuccess}>Ok</button>
      </td>
      {Object.entries(consulta.campos).map(([clave, valor]) => (
        <td key={clave}>
          [{clave} - {valor}]
        </td>
      ))}
    </tr>
  );
}

const CONSULTAS = [
  {
    key: "1",
    fecha: "05/08/23",
    texto: "Apple",
    campos: { mc: "dolor de cabeza", diagnostico: "jaqueca", evolucion: "se le paso el dolor" },
  },
  { key: "2", fecha: "11/10/23", texto: "Dragonfruit" },
  { key: "3", fecha: "15/11/23", texto: "Passionfruit" },
  { key: "4", fecha: "01/12/23", texto: "Spinach" },
  { key: "5", fecha: "12/12/23", texto: "Pumpkin" },
  { key: "6", fecha: "01/01/24", texto: "Peas" },
];

// este cambio

// fecha, clave, valor)

// fecha, (clave, valor), fecha, (calve, valor), fecha

// cunsulta
// 1, pac1, fecha1
// 2, pac1, fecha2

// 4, pac2, fecha1
// 5, pac2, fecha2

// clavevalor
// consultaid, clave, valor
// 1, mc, dolor de cabeza
// 1, diagnostico, jaqueca
// 2, evolucion, se le paso el dolor de cabeza, lo llamo jpara dentro de un MessageChannel

// consultas -> [{ id: string, fecha: Date, campos: { clave: valor } }]
