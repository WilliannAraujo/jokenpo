const result = document.querySelector(".result")
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")
const empateScore = document.querySelector("#empate-score")
let humanScoreNumber = 0
let machineScoreNumber = 0
let empateScoreNumber = 0

const playhuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())


}


const playMachine = () => {
    const choice = ['pedra', 'papel', 'tesoura']
    const ramdonNumber = Math.floor(Math.random() * 3)

    return choice[ramdonNumber]
}

const playTheGame = (human, machine) => {
    console.log(human, machine)

    if (human === machine) {empateScoreNumber++
        empateScore.innerHTML=empateScoreNumber
        result.innerHTML = `Você escolheu ${human} e a Alexa escolheu ${machine}, deu EMPATE`
    } else if (human === 'papel' && machine === 'pedra' 
    || human === 'pedra' && machine === 'tesoura' 
    || human === 'tesoura' && machine === 'papel') {
        humanScoreNumber++
        humanScore.innerHTML=humanScoreNumber
        result.innerHTML = `Você escolheu ${human} e a Alexa escolheu ${machine}, você GANHOU`
    }
    else{machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = `Você escolheu ${human} e a Alexa escolheu ${machine}, a Alexa ganhou`
    }
}




