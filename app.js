const express = require("express")
const app = express();
app.get('/',(req,res)=>{

    res.send('Homepage Accessed')
    })
app.listen(3000, ()=>{

    console.log("Hello, app running")
});

