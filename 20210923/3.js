const http = require('http')
var i=0
const server = http.createServer((req, res) => {
  console.log(req);
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  if(req.url=='/'){
    i++
  }
  var fs = require("fs");
var data =fs.readFileSync("input.txt")

console.log(data.toString())

  res.end('Im yt!\n'+i+data.toString())
})

server.listen(3000)