const test = require('./testMoudle.js')

var x1= 1
var x2 = 2

if(typeof(x1)=="string"||typeof(x2)=="string"){
    console.log("清输入数字")
}
else{
    console.log("加法："+test.add_ab(x1,x2))
    console.log("减法："+test.sub_ab(x1,x2))
    console.log("乘法："+test.ride_ab(x1,x2))
    console.log("除法："+test.divides_ab(x1,x2))
}

// {
//     var a=5
//     console.log(a)
//     console.log('a end')
// }

// function add_ab(a,b){
//     return a+b
// }

// console.log(add_ab(1,2))
//  var add_cd = function(c,d){
//      return c+d
//  }
//  console.log(add_cd(3,2))

//  add_ef=(e,f)=>{
//     return e+f
//  }
//  console.log(add_ef(3,6))

// console.log(test.a)
// console.log(c)
// a = 'hello'

// // 数据类型测试
// // 1——字符串，数字
// console.log("123"+"4") //拼接状态
// console.log("123"*"4") //直接相乘
// console.log("123"-"4") //直接相减
// console.log("123"/"4") //直接相除
// console.log("123"/"0") //无穷大
// console.log("a"*"4") //nan
// //2——布尔类型
// console.log("123"+false)
// console.log("123"-false)
// console.log("123"*false)
// console.log("123"/false)
// //特殊情况
// console.log(false/false)