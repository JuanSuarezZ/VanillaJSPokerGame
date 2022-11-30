
const letras = ["C", "D", "H", "S"];
const especiales = ["A", "J", "K", "Q"]
let baraja = [];


const CrearBareja = () => {

    for (let i = 2; i <= 10; i++) {
        for (const letra of letras) {
            baraja.push(i + letra);
        };
    }

    console.log(baraja);
}


CrearBareja();



function PedirCarta() {


}