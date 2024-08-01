let numero = prompt(`Ingrese un numero`)
let suma = 0

function sumarN() {
    for ( let i = 1; i <= numero; i++){
      suma += i;
    }
    console.log(`La suma de los primeros ${numero} números naturales es: ${suma}`)
}
sumarN()
