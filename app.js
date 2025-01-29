let texto = document.querySelector('h1');
texto.innerHTML = 'Hora del Desafío';

function btnConsola() {
    alert('El botón fue clicado');
}

function btnPrompt (){
    let ciudad = prompt('¿Cuál es el nombre de una ciudad de Brasil?');
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}

function btnAlert (){
    alert('Yo amo JS');
}

function btnSuma () {
    let valor1 = parseInt(prompt('Para la suma indícame 1 número'));
    let valor2 = parseInt(prompt('Ahora el segundo número'));
    let resultado = valor1 + valor2;
    alert(`El resultado final es ${resultado}`);
}