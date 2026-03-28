const eventemitter=require("events")
const ee=new eventemitter()
ee.on("First",()=>{
    console.log("First Event")
})
ee.emit("First")
ee.on("Second",(a,b)=>{
    console.log(`Multiplication is:${a*b}`)
})
ee.emit("Second",5,10)
ee.on("Write",()=>{
    console.log("Written")
    ee.emit("Append")
})
ee.on("Append",()=>{
    console.log("Appended")

})
ee.emit("Write")
console.log("Thank You!!!")