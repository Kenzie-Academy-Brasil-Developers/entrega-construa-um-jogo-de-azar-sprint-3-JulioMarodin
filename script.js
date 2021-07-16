const button = document.getElementById("jogar");
button.addEventListener("click", function() {
    const typedText = document.getElementById("textInput").value;
    const divResposta = document.getElementById("superior");
    let resposta = "";
    if(resposta.length > 0) {
        divResposta.removeChild([0]);
    }
    
    const numAleatorio = Math.round(Math.random() * 10);
    console.log(numAleatorio);

    switch(numAleatorio) {
        case 1: 
            resposta += "As minhas fontes dizem que sim, mas as minhas fontes também falaram que o Fred seria o melhor jogador da copa de 2014!";
            break;
        case 2:
            resposta += "Não vou perder tempo com essa pergunta maaass você já parou pra pensar que a sua mão é o ponto onde seu braço se divide em vários bracinhos?";
            break;
        case 3:
            resposta += "Talvez, mas só pra te avisar, eu prevejo vários loops infinitos na sua vida.";
            break;
        case 4:
            resposta += "HAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA é uma pergunta pior que a outra.";
            break;
        case 5:
            resposta += "Não tenho certeza, só tenho certeza que no código que você está trabalhando tem um bug inacreditável, sei onde tá mas não vou te falar, boa sorte, você vai precisar.";
            break;
        case 6:
            resposta += "Sim, e aquela gambiarra que você fez no seu último código ficou bom.";
            break;
        case 7:
            resposta += "Acho que sim, porém mais importante que isso é saber que galinhas evoluiram dos dinossauros pra virar nuggets.";
            break;
        case 8:
            resposta += "Não sei, não me importo.";
            break;
        case 9:
            resposta += "Não entendi sua pergunta, tente de novo só que dessa vez tente digitar com o nariz, é um pouco mais difícil mas vale a pena.";
            break;
        case 10:
            resposta += "Só se for nos seus sonhos.";
            break;
        default :
            resposta += "Se você estiver bêbado sim.";
    }
    
    const span = document.createElement("span");
    span.textContent = `Resposta: ${resposta}`;
    const answer = document.getElementById("answer");
    answer.appendChild(span);
    console.log(resposta);
})