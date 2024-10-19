function isFibonacci(num) {
    let a = 0, b = 1, next = 0;

    if (num === 0 || num === 1) {
        return `${num} pertence à sequência de Fibonacci.`;
    }

    while (next < num) {
        next = a + b;
        a = b;
        b = next;
    }

    if (next === num) {
        return `${num} pertence à sequência de Fibonacci.`;
    } else {
        return `${num} não pertence à sequência de Fibonacci.`;
    }
}

document.querySelector("#form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    // Obtém o valor do input
    let inputNumber = parseInt(document.querySelector("#number").value);

    // Calcula e exibe o resultado
    let resultMessage = isFibonacci(inputNumber);
    document.querySelector("#result").textContent = resultMessage;

});

isFibonacci();


