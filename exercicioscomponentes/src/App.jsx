import Exemplo1 from "./Componentes/Exemplo1"
import Exercicio1 from "./Componentes/Exercicio1"
import Exercicio2 from "./Componentes/Exercicio2"

export default function App(){
  return(
    <div>
      <h1 style={{textAlign : "center"}}>Exercícios de Componentes</h1>

      <h3 style={ {color : "red", textAlign : "center"}}> Chamada para o Exemplo 1</h3>
      <Exemplo1 numero1={7} numero2={7} />


      <h3 style={ {color : "orange", textAlign : "center"}}> Chamada para o Exercicio 1</h3>
      <Exercicio1  temp={70} />


      <h3 style={ {color : "yellow", textAlign : "center"}}> Chamada para o Exercicio 2</h3>
      <Exercicio2  peso={88} altura={1.67} />

    </div>
    
  )
}