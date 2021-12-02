const http = require('http')
var i=0
const server = http.createServer((req, res) => {
  // console.log(req);
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  if(req.url=='/'){
    i++
  }
  res.end('Im yt!\n'+i)
})

server.listen(3000)