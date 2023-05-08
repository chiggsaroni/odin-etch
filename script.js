let color = 'black';
let click = true;
document.addEventListener('DOMContentLoaded', function() {
    createBoard(16);

    document.querySelector('body').addEventListener('click', (e) =>{
        if (e.target.tagName != "BUTTON") {
            click = !click;
            if (click) {
                document.querySelector('.mode').textContent = 'Mode: Coloring'
            }
            else {
                document.querySelector('.mode').textContent = 'Mode: Not Coloring'
            }
        } 
    })



    let popupBtn = document.querySelector('#popup');
    popupBtn.addEventListener('click', function (){
        let size = getSize();
        createBoard(size);

    })

})


function createBoard(size) {
    // creating the board
    let board = document.querySelector('.board');
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // creating the grid
    let grid = size * size;
    for (i=0; i < grid; i++) {
        let square = document.createElement('square');
        square.addEventListener('mouseover', colorDiv)
        board.insertAdjacentElement('beforeend', square);  
    }
 
}

function getSize(){
    let input = prompt('Enter a Number');
    let message = document.querySelector('#message');
    if (input == "") {
        message.innerHTML = 'Please enter a number';

    }
    else if (input < 2 || input > 100){
        message.innerHTML = 'Please enter a number between 2-100';
    }
    else {
        message.innerHTML = `Board size has been changed!`
        return input;
    }
}


function colorDiv(){
    if (click) {
        if(color == 'random'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
        else {
            this.style.backgroundColor = color;
        }
    }
}

function setColor(colorChoice){
    color = colorChoice;
}

function resetBoard(){
    let clear = document.querySelectorAll('square');
    clear.forEach((div) => div.style.backgroundColor = 'white');
}



