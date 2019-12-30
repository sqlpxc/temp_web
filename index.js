const http=require("http");
const Path=require("path");
const fs=require("fs");

var server=http.createServer(function (req,res){
    fs.createReadStream(Path.resolve(__dirname,"."+req.url)).pipe(res);
})
