const express=require('express');
const app=express();
app.use(express.json());
const PORT=3000;
let students=[];
app.get('/',(req,res)=>res.json({message:'Welcome to Project 2 Backend API'}));
app.get('/students',(req,res)=>res.json(students));
app.post('/students',(req,res)=>{
 const {name,age}=req.body;
 if(!name||age===undefined){return res.status(400).json({message:'Name and age are required'});}
 const s={id:students.length+1,name,age};
 students.push(s);
 res.status(201).json({message:'Student added',student:s});
});
app.listen(PORT,()=>console.log(`Server running on http://localhost:${PORT}`));
