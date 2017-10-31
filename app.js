const express = require('express'),
  config = require('./config/config'),
  glob = require('glob'),
  mongoose = require('mongoose')

mongoose.connect(config.db)
var db = mongoose.connection
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db)
})

var models = glob.sync(config.root + '/app/models/*.js')
models.forEach(function (model) {
  require(model)
})
var app = express()

// Requiring socket after app is activated
const http = require('http').Server(app)
const io = require('socket.io')(http)

io.on('connection', (socket) => {
  console.log('a user connected')

  socket.on('newLi', function (msg) {
    socket.broadcast.emit('newLi', msg)
  })
})

module.exports = require('./config/express')(app, config)

// listen through html instead
http.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port)
})
