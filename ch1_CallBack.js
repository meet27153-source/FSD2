function test(name,callback){
        console.log("First Exceution"+name)
        callback()
        }
function last(){
        console.log("Last Execution")
        }
test(" Node js",last)
const msg=function(){
        console.log("Hi")
        }
setTimeout(msg,3000)