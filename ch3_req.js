var http=require("http")
http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end(`<h1> MyHomePage </h1> <img src="1.png" width="300" height="300">`)
    }else if(req.url==="1.png"){
        var i=fs.readFileSync("1.png")
        res.writeHead(200,{"Content-type":"image/png"})
        res.end(i)
    }else if(req.url==="/about"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write(req.url)
        res.end("<h1>About</h1>")

    }else{
        res.writeHead(404,{"Content-Type":"text/html"})
        res.end("<h3>Page not FOund</h3>")
    }
}).listen(7004,()=>{
    console.log("Server started on http://localhost:7004/1.png")
})