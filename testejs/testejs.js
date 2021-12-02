const http = require('http')
const ejs = require('ejs')
const server = http.createServer(req,res=>{
    ejs.renderFile('result.html',{result:678},options,function(err,str){
        
        if(err){
            console.log('file is wrong')
        }else{
        res.statusCode=200
        res.setHeader('Content-Type', 'text/html')
        res.end(str)}
    })
})
server.listen(3000)