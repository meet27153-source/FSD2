var fs=require("fs")
// fs.mkdir("ASF1",(e)=>{
//     if(e){
//         throw e
//     }else{
//         console.log("Created")
//     }
// })
fs.writeFile("ASF1/t1.txt","Hi",(e)=>{
    if(e){
        throw e
    }else{
        console.log("Written")
    }
})
fs.writeFile("temp1.txt","Hi",(e)=>{
    if(e){
        throw e
    }else{
        console.log("Async task completed")
    }
})
fs.appendFile("ASF1/t1.txt","Hello",(e)=>{
    if(e){
        console.log("File not found "+e)
    }else{
        console.log("Appended")
    }
})
fs.readFile("ASF1/t1.txt","utf-8",(e,data)=>{
    if(e){
        throw e
    }else{
        console.log(data)
        fs.unlink("ASF1/t1.txt",(e)=>{
            if(e){
                throw e
            }else{
                console.log("Deleted")
            }
        })
    }
})
// fs.rmdir("ASF1",(e)=>{
//     if(e){
//         throw e
//     }else{
//         console.log("File Deleted")
//     }
// })
// fs.rename("temp.txt","newfile.txt",(e)=>{
//     if(e){
//         throw e
//     }else{
//         console.log("Renamed")
//     }
// })
fs.copyFile("newfile.txt","myfile.txt",(e)=>{
    if(e){
        throw e
    }else{
        console.log("Copied")
    }
})