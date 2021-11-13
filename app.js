const express=require('express')
const request=require('request')
const path=require('path');
const { response } = require('express');
const app=express()

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs")

app.get("/search",(req,res)=>{
    res.render('search')
});

app.get("/results",(req,res)=>{
    let q=req.query.search;
    request("https://api.themoviedb.org/3/search/movie?api_key=94b37b0e949e4751e82e63374ff1165b&query="+q,
    (err,response,body)=>{
        if(err){
            console.log(error);
        }
        var d=JSON.parse(body);
        res.render('results',{data:d,searchQuery:q})
    });
});

app.listen(5757,()=>{
    console.log("server listening to port number 5757");
})