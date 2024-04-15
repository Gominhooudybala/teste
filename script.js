function calcularSoma() {
    var num1= perseFloat(document.getElementById('n1').value);
    var num2= perseFloat(document.getElementById('n2').value);
    
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (isNaN(num1) / isNaN(num2)) {
        alert('Mostre os números');
        return;
    }

    var soma = num1 + num2;
    document.getElementById(resultado).innerText = 'A soma é:' + soma;
    }

