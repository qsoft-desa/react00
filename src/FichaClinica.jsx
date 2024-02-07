import { useState } from 'react'; 

  function FichaClinicaTable({ consultas }) {
    const rows = [];
    const [keyEditing, setkeyEditing] = useState("");
     
    consultas.forEach((consulta) => {
      rows.push(
        consulta.key === keyEditing ?  
          <tr>
            <td>{consulta.fecha}</td>
            <td>{consulta.texto}
                <button onClick={() => setkeyEditing("")}>
                  Ok
                </button>
            </td>
          </tr>
          :
          <tr>
            <td>{consulta.fecha}</td>
            <td>{consulta.texto}
                {keyEditing === "" &&
                <button onClick={() => setkeyEditing(consulta.key)}>
                  Editar
                </button>}
            </td>
        </tr>
      );
    });

    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    );
  }
   
const CONSULTAS = [
    {key: "1", fecha: "05/08/23", texto: "Apple"},
    {key: "2", fecha: "11/10/23", texto: "Dragonfruit"},
    {key: "3", fecha: "15/11/23", texto: "Passionfruit"},
    {key: "4", fecha: "01/12/23", texto: "Spinach"},
    {key: "5", fecha: "12/12/23", texto: "Pumpkin"},
    {key: "6", fecha: "01/01/24", texto: "Peas"}
  ];
  
  export default function FichaClinica() {
    return <FichaClinicaTable consultas={CONSULTAS} />;
  }