function Porcentaje() {
    let num = parseFloat(prompt("Ingresa un numero"));
    let porcentaje = parseFloat(prompt("Ingresa el porcentaje que deseas calcular"));
    let resultado = 0;

    if (!isNaN(num) && !isNaN(porcentaje)) {
        alert("el " + porcentaje + "% " + "de " + num + " es = " + (resultado = (num / 100) * porcentaje));
    } else {
        alert("El valor ingresado no es valido");
    }
}

Porcentaje();
