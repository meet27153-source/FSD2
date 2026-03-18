var fs=require("fs")
fs.writeFileSync("temp.txt","Good Morning!")
console.log("Sync Operation done")
fs.writeFile("temp1.txt","Hi",(e)=>{
    if(e){
        throw e
    }else{
        console.log("Async task completed")
    }
})
console.log("Last Line")