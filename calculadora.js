$(document).ready(function() {
    let num1 = ""; 
    let num2 = ""; 
    let operacion = "";
  
    function actualizarPantalla() {
      $('[data-operand-1]').text(num1);
      $('[data-operand-2]').text(num2);
    }
  
    $('[data-number]').click(function() {
      const numero = $(this).text();
      
      if (operacion === "") {
        num1 += numero;
      } else {
        num2 += numero;
      }
      actualizarPantalla();
    });
  

    $('[data-operation]').click(function() {
      if (num1 !== "") {
        operacion = $(this).text();
        actualizarPantalla();
      }
    });
  

    $('[data-equals]').click(function() {
      if (num1 !== "" && num2 !== "") {

        let resultado = 0;
        switch (operacion) {
          case '+':
            resultado = parseFloat(num1) + parseFloat(num2);
            break;
          case '-':
            resultado = parseFloat(num1) - parseFloat(num2);
            break;
          case '*':
            resultado = parseFloat(num1) * parseFloat(num2);
            break;
          case '/':
            if (parseFloat(num2) !== 0) {
              resultado = parseFloat(num1) / parseFloat(num2);
            } else {
              alert('No se puede dividir por cero.');
            }
            break;
          default:
            alert('Operación no válida.');
            break;
        }
        
        num1 = resultado.toString();
        num2 = "";
        operacion = "";
        actualizarPantalla();
      }
    });
  
    $('[data-clear]').click(function() {
      num1 = "";
      num2 = "";
      operacion = "";
      actualizarPantalla();
    });
  
    $('[data-delete]').click(function() {
      if (operacion === "") {
        num1 = num1.slice(0, -1);
      } else {
        num2 = num2.slice(0, -1);
      }
      actualizarPantalla();
    });
  });
  