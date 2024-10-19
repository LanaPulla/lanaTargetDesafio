function letterA(){
    const form = document.querySelector("#form")
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const inputText = (document.querySelector("#text").value);
        console.log(inputText);

        let resultMessage;
    
        if (inputText.includes('a') || inputText.includes('A')){
            resultMessage =(`A palavra ${inputText} contém a letra A`)
        } else{
            resultMessage = `A palavra ${inputText} não contém a letra A`;
        }

        
        document.querySelector("#result").textContent = resultMessage;
    });
    
    
}
letterA();