const http = require('http')
var i = 0
const server = http.createServer((req, res) => {
    console.log(req);
    res.statusCode = 200
    res.setHeader('Content-Type', 'image/jpg')
    var fs = require("fs");

    if (req.url === '/favicon.ico') {
        fs.readFile('1.jpg', function (err, data) {
            if (err) return console.error(err);
            res.write(data)
            res.end()
        });
    }

    if (req.url == '/') {
        i++
        res.setHeader('Content-Type', 'text/html')
        fs.readFile('index.html', function (err, data) {
            if (err) return console.error(err);
            res.write(data)
            res.end('Im yt!\n' + i)
        });
    }

    // fs.createReadStream('1.jpg').pipe(res)

})

server.listen(3000)
