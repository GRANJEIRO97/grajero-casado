document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obter os valores das notas
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);
    
    // Validar se todas as notas foram preenchidas
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert('Por favor, insira todas as notas.');
        return;
    }
    
    // Calcular a média
    let media = (nota1 + nota2 + nota3) / 3;
    
    // Determinar se o aluno foi aprovado ou reprovado
    let resultado = '';
    if (media >= 7) {
        resultado = `Aprovado! Sua média foi: ${media.toFixed(2)}`;
        document.getElementById('resultado').style.color = 'green';
    } else {
        resultado = `Reprovado! Sua média foi: ${media.toFixed(2)}`;
        document.getElementById('resultado').style.color = 'red';
    }
    
    // Exibir o resultado
    document.getElementById('resultado').textContent = resultado;
});
