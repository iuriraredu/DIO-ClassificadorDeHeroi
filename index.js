const SEPARATOR = "----------------------------------\n";

const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question, callback){
    input.question(question + ": ", function(response){
        callback(response);
    });
}

function getLevel(name, xp){
    let level = 
        xp >= 10001 ? "Radiante": 
        xp >=  9001 ? "Imortal": 
        xp >=  8001 ? "Ascendente": 
        xp >=  7001 ? "Platina": 
        xp >=  5001 ? "Ouro": 
        xp >=  2001 ? "Prata": 
        xp >=  1001 ? "Bronze":  
                      "Ferro";
    return `O herói de nome ${name} está no nível de ${level}.`;
}

function main(){
    ask("Digite o nome do herói (ou 'sair' para encerrar)", function(name){
        if(name.toLowerCase() === 'sair'){
            console.log("Programa encerrado.");
            console.log(SEPARATOR);
            input.close();
            return;
        } else {
            ask("Digite a quantidade de XP do herói", function(xp){
                xp = parseInt(xp);
                if(isNaN(xp) || xp < 0){
                    console.log("XP inválido. Por favor, insira um número válido.");
                    console.log(SEPARATOR);
                    return main();
                } else {
                    console.log(getLevel(name, parseInt(xp)));
                    console.log(SEPARATOR);
                    main();
                }
            });
        }
    });
}

function start(){
    console.clear();
    console.log("=== CLASSIFICADOR DE HERÓIS ===\n");
    main();
}

start();