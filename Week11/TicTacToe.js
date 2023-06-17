//Variables & Stuff
let gameBoard = document.querySelector('#gameboard');
let informationDisplay = document.querySelector('#info');
let startCells = ['', '','','','','','','','']

let go = 'circle'
informationDisplay.textContent = 'Circle goes first'

//Game Functions

function createboard(){
    startCells.forEach((_cell,index)=> {
        let cellElement = document.createElement('div')
        cellElement.classList.add('square')
        cellElement.id= index
        cellElement.addEventListener('click', addTurn)
        gameBoard.append(cellElement)
    })

}
createboard();

function addTurn(y){
    let goDisplay = document.createElement('div')
    goDisplay.classList.add(go)
    y.target.append(goDisplay)
    go = go === 'circle' ? 'x' : 'circle'
    informationDisplay.textContent = 'It is now ' + go + "'s turn"
    y.target.removeEventListener('click', addTurn)
    checkScore()
}

function checkScore() {
   let allSquares = document.querySelectorAll('.square')
    let winningCombos = [
        [0,1,2], [3,4,5],[6,7,8],
        [0,3,6], [1,4,7],[2,5,8],
        [0,4,8], [2,4,6] 
        ]

  //Winning Combos

    winningCombos.forEach(array =>{
        let circleWins = array.every(cell =>
            allSquares[cell].firstChild?.classList.contains('circle'))


        if (circleWins){
            informationDisplay.textContent = 'Circle wins game!'
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
            return

        }

    })
    winningCombos.forEach(array =>{
        let xWins = array.every(cell =>
            allSquares[cell].firstChild?.classList.contains('x'))

        if (xWins){
            informationDisplay.textContent = 'X wins game!'
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
            return

        }

    })

}