import express from "express";
import cors from "cors";
const app =  express();

app.listen(5000, ()=>{
    console.log("listening to port 5000");
})