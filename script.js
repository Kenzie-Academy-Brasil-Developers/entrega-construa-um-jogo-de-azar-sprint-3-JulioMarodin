const button = document.getElementById("jogar");
button.addEventListener("click", function() {
    const typedText = document.getElementById("textInput").value;
    const divResposta = document.getElementById("superior");
    
    const numAleatorio = Math.round(Math.random() * 10);
    console.log(numAleatorio);

    switch(numAleatorio) {
        case 1: 
            divResposta.innerText = "As minhas fontes dizem que sim, mas as minhas fontes também falaram que o Fred seria o melhor jogador da copa de 2014!";
            break;
        case 2:
            divResposta.innerText = "Não vou perder tempo com essa pergunta maaass você já parou pra pensar que a sua mão é o ponto onde seu braço se divide em vários bracinhos?";
            break;
        case 3:
            divResposta.innerText = "Talvez, mas só pra te avisar, eu prevejo vários loops infinitos na sua vida.";
            break;
        case 4:
            divResposta.innerText = "HAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA é uma pergunta pior que a outra.";
            break;
        case 5:
            divResposta.innerText = "Não tenho certeza, só tenho certeza que no código que você está trabalhando tem um bug inacreditável, sei onde tá mas não vou te falar, boa sorte, você vai precisar.";
            break;
        case 6:
            divResposta.innerText = "Sim, e aquela gambiarra que você fez no seu último código ficou bom.";
            break;
        case 7:
            divResposta.innerText = "Acho que sim, porém mais importante que isso é saber que galinhas evoluiram dos dinossauros pra virar nuggets.";
            break;
        case 8:
            divResposta.innerText = "Não sei, não me importo.";
            break;
        case 9:
            divResposta.innerText = "Não entendi sua pergunta, tente de novo só que dessa vez tente digitar com o nariz, é um pouco mais difícil mas vale a pena.";
            break;
        case 10:
            divResposta.innerText = "Só se for nos seus sonhos.";
            break;
        default :
            divResposta.innerText = "Se você estiver bêbado sim.";
    }
})