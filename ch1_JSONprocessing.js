var fs=require("fs")
const shape={'d':{'a':10,'b':20,'c':[30,50]}}
fs.writeFileSync("Shape.txt",JSON.stringify(shape))
var r=fs.readFileSync("Shape.txt")
var s=JSON.parse(r)
var add=s.d.a+s.d.b
var sub=s.d.c[1]-s.d.b
var mul=s.d.c[0]*s.d.c[1]
fs.appendFileSync("Shape.txt",`\nAddition is :${add}
Subtraction is :${sub}
Multiplication is :${mul}`)