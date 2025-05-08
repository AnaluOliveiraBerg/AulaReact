export default function Exercicio1({temp}){
    let fah = Number ((temp-32)*5/9);
    return (
        <div>
            A temperatura {temp} em fahrenheits é igual a {fah}.
        </div>
    );
}