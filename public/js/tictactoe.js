$(document).ready(function(){
  let turn = 'X'
  let turns = [
    '#', '#', '#',
    '#', '#', '#',
    '#', '#', '#'
  ]
  let compTurn = 'O'
  let gameOn = false
  let count = 0

  $('#turnX').click(function(){
    turn = 'O'
    compTurn = 'X'
    $('#turnX').removeClass('btn-primary')
    $('#turnO').addClass('btn-primary')
    reset()
  })

  $('#turnO').click(function(){
    turn = 'X'
    compTurn = 'O'
    $('#turnO').removeClass('btn-primary')
    $('#turnX').addClass('btn-primary')
    reset()
  })

  function aiTurn(){
    let taken = false
    while(taken === false && count !== 5){
      let compMove = (Math.random() * 10).toFixed()   // Comp takes an random open square
      let move = $('#' + compMove).text()
      if (move === '#'){
        $('#' + compMove).text(compTurn)
        taken = true
        turns[compMove] = compTurn
      }
    }
  }

  function playerTurn (turn, id) {
    let squareTaken = $('#' + id).text()
    if (squareTaken === '#') {
      count++
      $('#' + id).text(turn)
      turns[id] = turn

      winner(turns, turn)
      if(gameOn === false){
        aiTurn()
        winner(turns, compTurn)
      }
    }
  }

  function winner (turnArray, currentTurn){
    if (turnArray[0] === currentTurn &&             // Row 1
      turnArray[1] === currentTurn &&
      turnArray[2] === currentTurn) {
        gameOn = true
        $('#winner').text(currentTurn + ' WINS!')
      } else if (turnArray[3] === currentTurn &&    // Row 2
        turnArray[4] === currentTurn &&
        turnArray[5] === currentTurn) {
          gameOn = true
          $('#winner').text(currentTurn + ' WINS!')
      } else if (turnArray[6] === currentTurn &&    //Row 3
        turnArray[7] === currentTurn &&
        turnArray[8] === currentTurn) {
          gameOn = true
          $('#winner').text(currentTurn + ' WINS!')
      } else if (turnArray[0] === currentTurn &&    // Column 1
        turnArray[3] === currentTurn &&
        turnArray[6] === currentTurn) {
          gameOn = true
          $('#winner').text(currentTurn + ' WINS!')
      } else if (turnArray[1] === currentTurn &&    // Column 2
        turnArray[4] === currentTurn &&
        turnArray[7] === currentTurn) {
          gameOn = true
          $('#winner').text(currentTurn + ' WINS!')
      } else if (turnArray[2] === currentTurn &&    // Column 3
        turnArray[5] === currentTurn &&
        turnArray[8] === currentTurn) {
          gameOn = true
          $('#winner').text(currentTurn + ' WINS!')
      } else if (turnArray[0] === currentTurn &&    // Diagonal 1
        turnArray[4] === currentTurn &&
        turnArray[8] === currentTurn) {
          gameOn = true
          $('#winner').text(currentTurn + ' WINS!')
      } else if (turnArray[2] === currentTurn &&    // Diagonal 2
        turnArray[4] === currentTurn &&
        turnArray[6] === currentTurn) {
          gameOn = true
          $('#winner').text(currentTurn + ' WINS!')
      } else {
        gameOn = false        // Game continues, computer's turn
      }
  }

  $('.tic').click(function() {
    let square = $(this).attr('id')
    playerTurn(turn, square)
  })

  function reset(){
    turns=[
      '#', '#', '#',
      '#', '#', '#',
      '#', '#', '#'
    ]
    count = 0
    $('.tic').text('#')
    gameOn = false
  }

})
