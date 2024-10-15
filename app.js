const diccionarioPalabra = {
    'computadora': 'ordenador',
    'raton': 'mouse',
    'codigo': 'programación',
    'laptop': 'portátil',
    'teclado': 'keyboard',
    'cargador': 'fuente',
    'software': 'programa',
    'hardware': 'equipo',
    'pagina': 'sitio web',
    'proyector': 'beam',
    'silla': 'asiento',
    'mesa': 'escritorio',
    'mochila': 'bolso',
    'cerveza': 'chela',
    'chela': 'cerveza'
};
const diccionario = () => {
    let buscadorPalabra = document.getElementById('buscar_palabra').value.toLowerCase();
    let resultado = document.getElementById('resultado');

    if (buscadorPalabra === '') {
        resultado.innerHTML = "Por favor, ingresa una palabra o letra para buscar.";
        return;
    }

    if (diccionarioPalabra[buscadorPalabra]) {
        resultado.innerHTML = `La palabra "${buscadorPalabra}" tiene como sinónimo: "${diccionarioPalabra[buscadorPalabra]}"`;
    } else {
        resultado.innerHTML = `La palabra "${buscadorPalabra}" NO está en el diccionario.`;
    }
};

const remplazo = () => {
    let remplazador = document.getElementById('remplazar_palabra').value.toLowerCase();
    let buscadorPalabra = document.getElementById('buscar_palabra').value.toLowerCase();
    let resultado = document.getElementById('resultado');

    if (diccionarioPalabra[buscadorPalabra]) {
        // Realizar el reemplazo
        diccionarioPalabra[buscadorPalabra] = remplazador;
        resultado.innerHTML = `La palabra "${buscadorPalabra}" ha sido reemplazada por "${remplazador}", mostrado en consola.`;
        console.log(diccionarioPalabra);
        
    } else {
        resultado.innerHTML = `No se puede reemplazar porque la palabra "${buscadorPalabra}" no está en el diccionario.`;
    }
};