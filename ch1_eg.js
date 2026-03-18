var fs=require("fs")
fs.writeFileSync("V.txt","Welcome to LJ University")
var r=fs.readFileSync("V.txt","utf-8")
let i=0
let s='aeiouAEIOU'
for(let n=0;n<r.length;n++){
    if(s.includes(r[n])){
        i++
    }
}
fs.appendFileSync("V.txt",`\nVowels in statement is/are: ${i}`)
console.log("Task Completed")