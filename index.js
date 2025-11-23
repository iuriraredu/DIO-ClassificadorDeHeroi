const readline = require("readline");

const scanner = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

startProgram();

function displaysMessageAndReturnsResponse(message, callback){
    scanner.question(message + ": ", function(response){
        callback(response);
    });
}

function checkLevel(name, xp){
    let level = 
        xp >= 10001 ? "Radiante": 
        xp >= 9001 ? "Imortal": 
        xp >= 8001 ? "Ascendente": 
        xp >= 7001 ? "Platina": 
        xp >= 5001 ? "Ouro": 
        xp >= 2001 ? "Prata": 
        xp >= 1001 ? "Bronze": "Ferro";
    return `O herói de nome ${name} está no nível de ${level}.`;
}

function startProgram(){
    displaysMessageAndReturnsResponse("Digite o nome do herói (ou 'sair' para encerrar)", function(name){
        if(name.toLowerCase() === 'sair'){
            console.log("Programa encerrado.");
            scanner.close();
            return;
        }
        displaysMessageAndReturnsResponse("Digite a quantidade de XP do herói", function(xp){
            console.log(checkLevel(name, parseInt(xp)));
            console.log("----------------------------------");
            startProgram();
        })
    });
}
