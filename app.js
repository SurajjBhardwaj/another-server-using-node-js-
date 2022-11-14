const express=require("express");
const bodyparser=require("body-parser");
const request=require("request");
const https=require("https");


const app=express();
app.use(bodyparser.urlencoded({ extended : true}));
app.use(express.static("public"));

app.get("/",function (req,res) {

    res.sendFile( __dirname +"/signup.html");
})

app.post("/",function (req,res) {

    var email=req.body.email;
    var password=req.body.password;
     console.log(email);
     console.log(password);
 
    if(res.statusCode===200){
        res.send("thank you ");
    }
    else{
        res.send("there is and error please try again");
    }
     
    
})



app.listen(3000,function (req,res) {

    console.log("heyy your server is ready to begin");
})



//Id =  aeb2e22f7e
//api key = a7f849594a08e05d8aed328f5f7d0bba-us8