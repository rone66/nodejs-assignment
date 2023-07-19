const http=require('http');


const server=http.createServer((req,res)=>{
   if(req.url=='/'){
    res.end("<h1>I Am Happy To Learn Full Stack Web Development From PW Skills!</h1>");
   }else if(req.url=='/about'){
    res.end("about page");
   }else if(req.url=='/contactus'){
    res.end("contact us page");
   }else{
    res.writeHead(404,{"content-type":"text/html"});
    res.end("<h1>404 error...</h1>");
   }

});

server.listen(3001,"localhost",()=>{
    console.log("server is running on port : 3001");
})
