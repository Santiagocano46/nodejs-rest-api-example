'use strict'

var express = require('express')
var app = express();
app.use(express.json());

app.set("port", process.env.PORT || 4000)

app.get('/', function (req, res) {
  console.log('GET request received')
  res.writeHead(200, {'Content-Type': 'application/json'})
  var response = { "response" : "This is GET method." }
  console.log(response)
  res.end(JSON.stringify(response))
})

app.get('/:id', function (req, res) {
  console.log('GET /:id request received')
  res.writeHead(200, {'Content-Type': 'application/json'})
  var response = { "response" : "This is GET method with id=" + req.params.id + "." }
  console.log(response)
  res.end(JSON.stringify(response))
})
// NUEVO MÉTODO GET /status
app.get('/status', function (req, res) {
  console.log('GET /status request received')
  res.writeHead(200, {'Content-Type': 'application/json'})
  var response = { "status" : "ok", "timestamp": new Date().toISOString() }
  console.log(response)
  res.end(JSON.stringify(response))
})

// NUEVO MÉTODO POST /echo
app.post('/echo', function (req, res) {
  console.log('POST /echo request received')
  res.writeHead(200, {'Content-Type': 'application/json'})
  var response = { "echoed" : req.body }
  console.log(response)
  res.end(JSON.stringify(response))
})

app.put('/', function (req, res) {
  console.log('PUT request received')
  res.writeHead(200, {'Content-Type': 'application/json'})
  var response = { "response" : "This is PUT method." }
  console.log(response)
  res.end(JSON.stringify(response))
})

app.delete('/', function (req, res) {
  console.log('DELETE request received')
  res.writeHead(200, {'Content-Type': 'application/json'})
  var response = { "response" : "This is DELETE method." }
  console.log(response)
  res.end(JSON.stringify(response))
})

const server = app.listen(app.get("port"), function () {
  const host = server.address().address
  const port = server.address().port

  console.log("Node.js API app running at http://%s:%s", host, port)
})

process.on('SIGINT', () => {
  console.log('Received SIGINT. Closing server...')
  server.close(() => {
    console.log('Server closed. Exiting process...')
    process.exit(0)
  })
})

process.on('SIGTERM', () => {
  console.log('Received SIGTERM. Closing server...')
  server.close(() => {
    console.log('Server closed. Exiting process...')
    process.exit(0)
  })
})