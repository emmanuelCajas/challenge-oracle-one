// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

//Encriptar
const btnEncriptar = document.querySelector('.btnEncriptar');
const btnDesencriptar = document.querySelector('btnDesencriptar');

const textoCaja = document.querySelector('.cajaTexto');

function encriptarFrase() {

    // frase = document.querySelector('cajaTexto');
    let frase = textoCaja.value;
    console.log({ frase });
    let arregloFrase = frase.split('');
    console.log(arregloFrase);
    let fraseEncriptada = '';

    for (let i = 0; i < arregloFrase.length; i++) {

        let reemplazar = '';

        switch (arregloFrase[i]) {
            case 'a':
                reemplazar = 'ai';
                break;

            case 'e':
                reemplazar = 'enter';
                break;

            case 'i':
                reemplazar = 'imes';
                break;

            case 'o':
                reemplazar = 'ober';
                break;

            case 'u':
                reemplazar = 'ufat';
                break;

            default:
                reemplazar = arregloFrase[i];
                break;

        }

        fraseEncriptada += reemplazar;
    }

    console.log({ fraseEncriptada });
}


//desencriptar
function desencriptar() {

}


encriptarFrase();

// btnDesencriptar.addEventListener('click', () =>{

// })