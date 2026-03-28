var http=require("http")
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"application/json"})
    var d={"Subject":"FSD2","Family":"NAS"}
    res.end(JSON.stringify(d))
}).listen(8001,()=>{
    console.log("Server started on http://localhost:8001")
})