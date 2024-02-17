function hiddenElementById(elementId){
const element = document.getElementById(elementId);
element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}



// contineu game

function  continueGame(){
  const alfabet = getAAlfabet();


   const display = document.getElementById('current-alfabet');
    display.innerText =alfabet;
   
    setBackgroundColor(alfabet)
}


function  getAAlfabet(){
const alfabetsStrimg = 'abcdefghijklmnopqrstuvwxyz';
const alfabets = alfabetsStrimg.split('');
 
const randomNumber = Math.random()*25;
const index = Math.round(randomNumber);

const alfabet = alfabets[index];
return alfabet;


}


// set background color
function  setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-amber-300')
}

// removed background color
function  removeBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-amber-300')
}
// score and life .............
function getTexElementValueById(event){
    const elementId = document.getElementById(event);
    const elementText = elementId.innerText;
    const element = parseInt(elementText);
    return element;
}

function setTexElementValueById(event, value){
    const element =document.getElementById(event);
    element.innerText = value;
}