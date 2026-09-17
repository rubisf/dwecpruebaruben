function calcularFactorial() {
  /**
   * Este ejercicio calcula el factorial de un número introducido por el usuario.
   */
  let factorial = 1;
  let num = 0;
  try {
    //Esta es una forma de obtener el valor del input y convertirlo a un número entero
    const input = document.getElementById("numero").value;
    const numero = parseInt(input);
    num = numero;
    // Validamos que el número sea positivo y que sea un número válido.
    if (numero < 0 || isNaN(numero)) {
      //alert("Por favor, introduce un número positivo");
      throw new Error();
    }

    if (numero === 0) {
      //alert("El factorial de 0 es 1");
    } else {
      // Si el número es positivo calculamos el factorial

      for (let i = 1; i <= numero; i++) {
        factorial *= i;
      }
      // alert(`El factorial de ${numero} es ${factorial}`);
    }
  } catch (error) {
    // Si ocurre un error, mostramos un mensaje de alerta.
    //alert("Por favor, introduce un número válido");
  }
  if (!isNaN(num) && num >= 0) {
    //Muestro el resultado en un div
    /*
    var res = document.getElementById("resultado");
    res.innerHTML = factorial;
    */

    //Creo un nodo y añado el resultado
    var el = document.createElement("p");
    el.textContent = `El factorial de ${num} es ${factorial}`;
    document.body.appendChild(el);

    //Más modos de añadirlo
    /*
    const input = document.getElementById("numero");

    input.insertAdjacentHTML(
    "afterend",
    `<p>El factorial de ${num} es ${factorial}</p>`
    );
    */
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("numero");
  input.addEventListener("input", calcularFactorial);
});
