// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

//Encriptar
const btnEncriptar = document.querySelector('.btnEncriptar');
const btnDesencriptar = document.querySelector('.btnDesencriptar');
const imprimirRespuesta = document.querySelector('#imprimirRespuesta')

const textoCaja = document.querySelector('.cajaTexto');

function encriptarFrase() {

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
    console.log({fraseEncriptada})
    imprimirRespuesta.value = fraseEncriptada;
}


//desencriptar
function desencriptarFrase() {

    let frase = textoCaja.value;
    let fraseDesencriptada = frase;

    for (var j = 0; j < fraseDesencriptada.length; j++) {

        if (fraseDesencriptada.indexOf("enter") >= 0) {
            fraseDesencriptada = fraseDesencriptada.replace("enter", "e"); //felimescimesdaidenters
        }
        if (fraseDesencriptada.indexOf("imes") >= 0) {
            fraseDesencriptada = fraseDesencriptada.replace("imes", "i");//felicidaidenters
        }
        if (fraseDesencriptada.indexOf("ai") >= 0) {
            fraseDesencriptada = fraseDesencriptada.replace("ai", "a");//felicidadenters
        }
        if (fraseDesencriptada.indexOf("ober") >= 0) {
            fraseDesencriptada = fraseDesencriptada.replace("ober", "o");//
        }
        if (fraseDesencriptada.indexOf("ufat") >= 0) {
            fraseDesencriptada = fraseDesencriptada.replace("ufat", "u");
        }
    }
    
    console.log({fraseDesencriptada});
    imprimirRespuesta.value = fraseDesencriptada;
}

function ocultarMuneco(){
    document.querySelector('.mensajeError').style.display = 'none';
}

btnEncriptar.addEventListener('click', () =>{
    encriptarFrase();
    ocultarMuneco();
})
btnDesencriptar.addEventListener('click', () =>{
    desencriptarFrase();
})