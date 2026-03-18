var fs=require("fs")
var p=require("path")
var ps="LJ/Sample.txt"
var bn=p.basename(ps)
var dn=p.dirname(ps)
var newpath=dn+ "/" +bn
// fs.mkdir(dn,(e)=>{
//     if(e){
//         throw e
//     }else{
//         console.log("Folder Created")
//     }
// })
fs.writeFile(newpath,"Hello",(e)=>{
    if(e){
        throw e
    }else{
        fs.copyFile(newpath,dn+"/temp.txt",(e)=>
        {
            if(e){
                throw e
            }else{
                fs.unlink(newpath,(e)=>{
                    if(e){
                        throw e
                    }else{
                        console.log("Created")
                    }
                })
            }
        })
    }
})