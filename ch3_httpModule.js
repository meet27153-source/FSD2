var http=require("http")
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html"})
    res.write("Hello")
    res.end("<h1>Welcome to my Website</h1>")
    res.write("<h3>Last<h3>")
    // res.end()
}).listen(7001,()=>{
    console.log("Server Started")
})