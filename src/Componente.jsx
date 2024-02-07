import React, {useState} from 'react'

export default function Componente() {

    const [text, setText] = useState()
    const [updated, setUpdated] = useState()


    const textOnChange = (event) => {
        setText(event.target.value)
    }

    const buttonOnClic = () => {
        setUpdated(text)
    }

  return (
    <div>
        <input type="text" value={text} onChange={textOnChange}/>
        <button onClick={buttonOnClic}>Actualizar</button>
        <p>{text}</p>
        <p>{updated}</p>
    </div>
  )
}
