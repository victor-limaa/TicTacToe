document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll('.square');

    squares.forEach((square)=>{
        square.addEventListener('click', handleClick)
    })

})

handleClick = (event) => {
    let square = event.target
    let position = square.id

    

    if (handleMove(position)){
        setTimeout(() => {
            alert('O Jogo Acabou - O Vencedor foi o jogador ' + playerTime)
            
        }, 10)
       
    }
    updateSquare(position) 
}

updateSquare = (position) => {
    let square = document.getElementById(position.toString());
    let symbol = board[position]
    square.innerHTML = `<div class='${symbol}'></div>`
}

function updateReset(){

    reset()
    let squares = document.querySelectorAll('.square')

    squares.forEach((square) => {
        let position = square.id
        
        if(board[position] == ''){
            square.innerHTML = ''
        }
    })
}