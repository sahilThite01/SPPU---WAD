const express = require("express");                 // Import express module    
const app = express();                              // Calling the express function

app.use(express.static("./public"))

app.listen(4000, ()=>{
    console.log("Server is started");
})



