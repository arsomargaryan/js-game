// SELECTORS
const $time = document.querySelector('#time');
const $result = document.querySelector('#result');
const $game = document.querySelector('#game');
const $start = document.querySelector('#start');
const $changeTime = document.querySelector('#change-time');

let score = 0;
const colors = ['red', 'green', 'blue', 'orange', 'yellow', 'brown', 'pink', 'purple', 'gray', 'black'];


// EVENT LISTENERS

$start.addEventListener('click', startGameFunc);
$game.addEventListener('click', boxClickHandlerFunc);
$changeTime.addEventListener('change', changeTimeFunc);


// FUNCTIONS

function startGameFunc(){

    hide($start);
    $game.style.backgroundColor = 'white';
    score = 0;
    $result.textContent = score;
    $changeTime.setAttribute('disabled', 'true');

    const interval = setInterval(()=>{
        const time = +$time.textContent;
        if(time === 0) {
            clearInterval(interval);
            endGameFunc();
        }
        else $time.textContent = (time - 0.1).toFixed(1);
    }, 100);

    renderBox();
}


function endGameFunc(){
    show($start);
    $game.style.backgroundColor = 'gray';
    $time.textContent = (+$changeTime.value).toFixed(1); 
    $game.textContent = '';
    $changeTime.removeAttribute('disabled');
}


function renderBox(){

    $game.textContent = '';

    const boxSize = random(30, 60);
    const colorIndex = random(0, colors.length-1);
    const gameWidth = $game.getBoundingClientRect().width; // {x: ,y:, width:, height: }

    const $box = document.createElement('div');
    $box.style.width = $box.style.height = boxSize + 'px';
    $box.style.backgroundColor = colors[colorIndex];
    $box.style.position = 'absolute';
    $box.style.top =  random(0, gameWidth - boxSize) + 'px';
    $box.style.left = random(0, gameWidth - boxSize) + 'px';
    $box.style.cursor = 'pointer';
    $box.setAttribute('data-box', 'true');

    $game.append($box);
}

function boxClickHandlerFunc(e){
    if(e.target.dataset.box){
        renderBox();
        score++;
        $result.textContent = score;
    }
}

function changeTimeFunc(){
    $time.textContent = (+$changeTime.value).toFixed(1);
}


//               5    10
function random(min, max){
    const diff = max - min + 1; // 6
    return Math.floor(Math.random()* diff) + min; 
}


function hide($el){
    $el.classList.add('hide');
}


function show($el){
    $el.classList.remove('hide');
}



// SLIDER = 10
// TODO = 10
// GAME = 10
// 

