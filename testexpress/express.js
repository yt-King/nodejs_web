const express = require('express')
const ejs = require('ejs')
const cal=require('./testModule.js')
const app = express()
const port = 3002
app.use('/',express.static('public'))
app.use('/',express.static('private'))
app.use('/',express.static('href'))
app.use('href',express.static('html2'))
// app.get('/input', (req, res) => {
//   res.send('Hello input!')
//   console.log('get')
// })
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var dataA =0.0
var dataB =0.0
app.post('/input', function (req, res, next) {
  console.log(req.body)
   dataA = parseFloat(req.body.first)
   dataB = parseFloat(req.body.second)
   oper = req.body.submit1
  next()
})
app.get('/input', function (req, res, next) {
   dataA = parseFloat(req.query.first)
   dataB = parseFloat(req.query.second)
   oper = req.query.submit1
  next()
})
app.use('/input', function (req, res, next) {
  // res.send(dataA+";"+dataB)
  if(oper==='+'){
      ejs.renderFile('result.html',{result:cal.add_ab(dataA,dataB)},function(err,str){
    if(err){
        console.log('file is wrong')
    }else{
    res.end(str)}
  })
  }
next()
})
app.use('/input', function (req, res, next) {
  // res.send(dataA+";"+dataB)
  if(oper==='-'){
      ejs.renderFile('result.html',{result:cal.sub_ab(dataA,dataB)},function(err,str){
    if(err){
        console.log('file is wrong')
    }else{
    res.end(str)}
  })
  }
next()
})
app.use('/input', function (req, res, next) {
  // res.send(dataA+";"+dataB)
  if(oper==='*'){
      ejs.renderFile('result.html',{result:cal.ride_ab(dataA,dataB)},function(err,str){
    if(err){
        console.log('file is wrong')
    }else{
    res.end(str)}
  })
  }
next()
})
app.use('/input', function (req, res, next) {
  // res.send(dataA+";"+dataB)
  if(oper==='/'){
      ejs.renderFile('result.html',{result:cal.divide_ab(dataA,dataB)},function(err,str){
    if(err){
        console.log('file is wrong')
    }else{
    res.end(str)}
  })
  }
next()
})
// app.use('/', (req, res) => {
//     res.send('Hello use!')
//   })
  
// app.post('/', (req, res) => {
//     res.send('Hello post!')
//   })
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})