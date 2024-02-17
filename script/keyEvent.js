function handelKeybordKeyUpEvent(event){
const pressedAlfabet = event.key;
const correntAlfabetElement = document.getElementById('current-alfabet');
const correntAlfabet = correntAlfabetElement.innerText;
const expacedAlfabet = correntAlfabet.toLowerCase();

// console.log(expacedAlfabet, pressedAlfabet)
 
if(pressedAlfabet==='Escape'){
    gameOver()
}

if(pressedAlfabet === expacedAlfabet){
    continueGame()
    removeBackgroundColor(expacedAlfabet)

    const score = getTexElementValueById('corrent-score');
    const updatedScore = score+1;
    setTexElementValueById('corrent-score', updatedScore)


    // const correntScoreElement = document.getElementById('corrent-score');
    // const correntScoreTex = correntScoreElement.innerText;
    // const correntScore = parseInt(correntScoreTex);
    // const newScore = correntScore+1;
    // correntScoreElement.innerText = newScore;
}
else{
    const life = getTexElementValueById('corrent-life');
    const updatedLife = life-1;
    setTexElementValueById('corrent-life', updatedLife)

    if(updatedLife===0){
        gameOver()
    }

    // const  correntLifeElement  = document.getElementById('corrent-life');
    // const correntLifeText = correntLifeElement.innerText;
    // const correntLife = parseInt(correntLifeText);
    // const evenLife = correntLife-1;
    // correntLifeElement.innerText = evenLife;
}
}
document.addEventListener('keyup', handelKeybordKeyUpEvent)
