const http = require('http')
const fs = require('fs')
const ejs = require('ejs')
const cal=require('./testModule.js')
var i = 0;
var firstData=0;
const server = http.createServer((req, res) => {
  const suburl=req.url.split('?')[0];
  const queryurl=req.url.split('?')[1];
  res.statusCode = 200;
  var fs = require("fs");
  if (req.url === '/favicon.ico') {
    res.setHeader('Content-Type', 'image/jpg')
    fs.readFile('image1.jpg', function (err, data) {
      res.setHeader('Content-Type', 'image/jpg')
      if (err) return console.error(err);
      // console.log(data.toString());
      res.write(data); 
      res.end("I'm kk. \nyou are" + i + "th friend");
    });
  }
  else if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html')
    i++;
    fs.readFile('index.html', function (err, data) {
      if (err) return console.error(err);
      // console.log(data.toString());
      res.write(data);
      res.write('\n');
      res.end();
    });

  }
  else if (req.url === '/testhref') {
    res.setHeader('Content-Type', 'text/html')
    i++;
    fs.readFile('testhref.html', function (err, data) {
      if (err) return console.error(err);
      // console.log(data.toString());
      res.write(data);
      res.write('\n');
      res.end();
    });

  }
  else{
    if(suburl==='/input'){
      res.setHeader('Content-Type', 'text/html')
      operate=queryurl.split('&')[2]
      submitData=operate.split('=')[1]
      const dataA=parseFloat(queryurl.split('&')[0].split('=')[1])
      const dataB=parseFloat(queryurl.split('&')[1].split('=')[1])
      if(submitData==='%2B'){
        ejs.renderFile('result.html',{result:cal.add_ab(dataA,dataB)},function(err,str){
        
          if(err){
              console.log('file is wrong')
          }else{
          res.statusCode=200
          res.setHeader('Content-Type', 'text/html')
          res.end(str)}
      })
        // res.end('The operate is:'+cal.add_ab(dataA,dataB));
      } else if(submitData==='-'){
        ejs.renderFile('result.html',{result:cal.sub_ab(dataA,dataB)},function(err,str){
        
          if(err){
              console.log('file is wrong')
          }else{
          res.statusCode=200
          res.setHeader('Content-Type', 'text/html')
          res.end(str)}
      })
      } else if(submitData==='*'){
        ejs.renderFile('result.html',{result:cal.ride_ab(dataA,dataB)},function(err,str){
        
          if(err){
              console.log('file is wrong')
          }else{
          res.statusCode=200
          res.setHeader('Content-Type', 'text/html')
          res.end(str)}
      })
      } else if(submitData==='%2F'){
        ejs.renderFile('result.html',{result:cal.divide_ab(dataA,dataB)},function(err,str){
        
          if(err){
              console.log('file is wrong')
          }else{
          res.statusCode=200
          res.setHeader('Content-Type', 'text/html')
          res.end(str)}
      })
      } 
      // fs.readFile('index.html', function (err, data) {
      //   if (err) return console.error(err);
      //   // console.log(data.toString());
      //   res.write(data);
      //   res.write('\n');
        // res.end('The result is:');
      }else{
      res.setHeader('Content-Type', 'text/html')
      // console.log(firstData.split('=')[1]);
      i++;
      res.end("received")
    }
  }
})
server.listen(3001)

