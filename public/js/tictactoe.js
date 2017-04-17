$(document).ready(function(){
  let turn = 'X'
  let turns = [
    '#', '#', '#',
    '#', '#', '#',
    '#', '#', '#'
  ]
  let compTurn = 'O'
  let gameOn = false

  $('#turnX').click(function(){
    turn = 'O'
    compTurn = 'X'
    $('#turnX').removeClass('btn-primary')
    $('#turnO').addClass('btn-primary')
  })

  $('#turnO').click(function(){
    turn = 'X'
    compTurn = 'O'
    $('#turnO').removeClass('btn-primary')
    $('#turnX').addClass('btn-primary')
  })

})
