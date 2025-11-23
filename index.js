const readline = require("readline");

const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

iniciarPrograma();

function apresentaMensagemERetornaResposta(mensagem, callback){
    teclado.question(mensagem + ": ", function(resposta){
        callback(resposta);
    });
}

function vafificaNivelHeroi(name, xp){
    let nivel = 
        xp >= 10001 ? "Radiante": 
        xp >= 9001 ? "Imortal": 
        xp >= 8001 ? "Ascendente": 
        xp >= 7001 ? "Platina": 
        xp >= 5001 ? "Ouro": 
        xp >= 2001 ? "Prata": 
        xp >= 1001 ? "Bronze": "Ferro";
    return `O herói de nome ${name} está no nível de ${nivel}.`;
}

function iniciarPrograma(){
    apresentaMensagemERetornaResposta("Digite o nome do herói (ou 'sair' para encerrar)", function(name){
        if(name.toLowerCase() === 'sair'){
            console.log("Programa encerrado.");
            teclado.close();
            return;
        }
        apresentaMensagemERetornaResposta("Digite a quantidade de XP do herói", function(xp){
            console.log(vafificaNivelHeroi(name, parseInt(xp)));
            console.log("----------------------------------");
            iniciarPrograma();
        })
    });
}
