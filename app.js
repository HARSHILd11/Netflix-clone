const express=require("express");
const app=express();

app.listen(8008,()=>{
    console.log("listening on port 8008")
});
app.set("views engine","view");
const path=require("path");

app.set("views",path.join(__dirname,"/views"));


app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("NETFLIX.ejs");


})
