var fs=require("fs")
fs.mkdir("AFS1",(e)=>{
     if(e){
         throw e
     }else{
         console.log("Created")
     }
})
fs.writeFile("AFS1/task.txt","Hello",(e)=>{
    if(e){
        throw e
    }else{
        console.log("Async task completed")
    }
})
fs.appendFile("AFS1/task.txt"," Good Morning",(e)=>{
    if(e){
        console.log("File not found "+e)
    }else{
        console.log("Appended")
    }
})
fs.copyFile("AFS1/task.txt","AFS1/task1.txt",(e)=>{
    if(e){
        throw e
    }else{
        console.log("Copied")
    }
})
fs.readFile("AFS1/task1.txt","utf-8",(e,data)=>{
    if(e){
        throw e
    }else{
        console.log(data)
        fs.unlink("AFS1/task.txt",(e)=>{
            if(e){
                throw e
            }else{
                console.log("Deleted")
            }
        })
    }
})
fs.rename("AFS1/task1.txt","AFS1/task.txt",(e)=>{
    if(e){
        throw e
    }else{
        console.log("Renamed")
    }
})