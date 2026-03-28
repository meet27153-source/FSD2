var eventemitter=require("events")
var ee=new eventemitter()
ee.on("Square",(s)=>{
    if(s<0){
        console.log("Side must be Positive")
    }else{
        console.log(`Perimeter is ${4*s}`)
    }
})
ee.emit("Square",10)