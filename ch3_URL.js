var url=require("url")
var fs=require("fs")
var addr="https://www.google.com:8080/about/students?year=2025&t1=22&t2=18&t3=20#example"
var p=url.parse(addr,true)
console.log(p)
process.noDeprecation=true
var y=p.query.year
if (y%4==0){
    console.log("A Leap Year")
}else{
    console.log("Not a Leap Year")
}
var y1=p.query
// var e=fs.writeFileSync("Marks.txt",JSON.stringify(y1))
var t1=parseInt(y1.t1)
var t2=parseInt(y1.t2)
var t3=parseInt(y1.t3)
var sum=t1+t2+t3
console.log(sum)
var a=fs.appendFileSync("Marks.txt",`
Total Marks of ${t1}+${t2}+${t3} is ${sum}`)