let cells = document.querySelectorAll('.cell')
cells = Array.from(cells) //converts to an array of cells
// console.log(cells)

let currentPlayer = 'X'
let winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


cells.forEach(function(cell){
    cell.addEventListener('click', function(){
        // alert('clicked') making sure click function works
        if(cell.innerText.trim() !="") return //can't override cell that has text
        cell.innerText = currentPlayer
        checkForWinner()
        currentPlayer = currentPlayer == 'X' ? 'O' : 'X'
    })
})

function highlightCells(combination){
    combination.forEach(function(idx){
        cells[idx].classList.add('highlight')
    })
}

function checkForWinner(){
    winningCombinations.forEach(function(combination){
        let check = combination.every(idx => cells[idx].innerText.trim() ==currentPlayer)
        if(check){
            // alert(currentPlayer + 'Has Won') checking if player won function is working
            highlightCells(combination)
        }
    })
}