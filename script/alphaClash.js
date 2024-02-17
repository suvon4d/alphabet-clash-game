function play(){

    hiddenElementById('hoeme')


    showElementById('play-ground')

    continueGame()

}
function gameOver(){

    hiddenElementById('play-ground')


    showElementById('play-again')

     getTexElementValueById('fainal-score');
    setTexElementValueById('fainal-score', getTexElementValueById('corrent-score'))


}


function playAgain(){
    hiddenElementById('play-again')


    showElementById('play-ground')

    setTexElementValueById('corrent-life', 5)
    setTexElementValueById('corrent-score', 0)
}