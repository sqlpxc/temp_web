
var connect = rere("connect");
var serveStatic = require("serve-static");

var app = connect();
app.use(serveStatic("/"));

app.listen(process.env.PORT || 8000);
 
