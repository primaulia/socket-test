$(function () {
  const socket = io()
  const $submit = $('#tiptap')
  const $input = $('input')
  const $ul = $('ul')

  $submit.on('click', newLi)
  socket.on('newLi', (data) => {
    var $newLi = $('<li>')

    $newLi.text(data)
    $ul.append($newLi)
  })

  function newLi () {
    var inputVal = $input.val()
    var $newLi = $('<li>')

    $newLi.text(inputVal)
    $ul.append($newLi)
    socket.emit('newLi', inputVal)
  }
})
