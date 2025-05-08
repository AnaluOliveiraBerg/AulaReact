export default function Exercicio2({peso, altura}){
    let imc = Number (peso/(altura*altura));
    return (
        <div>
            Seu peso é {peso}, sua altura é {altura}<br /> e seu IMC "Índice de massa corporal" é de {imc}.
        </div>
    );
}