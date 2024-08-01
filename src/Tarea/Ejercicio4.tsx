import { useState } from "react"


export const UseStateContador = () => {
  //hook UseState: se encarga de cambiar el estado de un valor o un componente.

  const [ValorContador, setValorContador] = useState<number>(5);//VALOR INICIAL

  //funcion que se encarue de cambuar el valor contador
  const cambiarContador =(numero:number)=>{
    // llamar a la funcion del useState
    setValorContador(ValorContador + numero);
    
  }
  return (
    <div>
        <h3>contador: <small>{ValorContador}</small></h3>
        <button
         className="btn btn-primary"
         onClick={()=> cambiarContador(5)}
         >+5</button>
        &nbsp;
        <button className="btn btn-primary"
         onClick={()=> cambiarContador(-5)}
        >-5</button>


    </div>
  )
}
