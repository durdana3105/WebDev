const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express=require("express");
const app=express();
const path=require("path");
const methodOverride=require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));

//for ejs
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

//connecting mysql with my vs code
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password:'durdana3105'
});


//inserting into table
let q="insert into user (id,username,email,password) values ?";
// let users=[["123a","123_newuser1","123@gmail.com","123a"],
// ["123b","123_newuser2","123b@gmail.com","123b"],
// ["123c","123_newuser3","123c@gmail.com","123c"]
// ];


//to create fake data
let createRandomUser= ()=> {
  return [
     faker.string.uuid(),
     faker.internet.username(),
     faker.internet.email(),
     faker.internet.password(),
  ];
}

//using faker generateing 100 users details
// let data=[];
// for(let i=1;i<=100;i++){
//   data.push(createRandomUser());
// }


// try{
// connection.query(q,[data],(err,result)=> //users dalna insert keliye aur data for the  100 fake d=users
// {
//   if(err) throw err;
//   console.log(result);
// });
// } catch(err){
//   console.log(err)
// }
// connection.end();//to automatically close the server of mysql


//to run mysql in our cli-terminal
//--      {mysql -u root -p}



// console.log(createRandomUser());


//HOME PAGE
app.get("/",(req,res)=>{
  let q="select count(*) from user";
  try{
connection.query(q,(err,result)=> //users dalna insert keliye aur data for the  100 fake d=users
{
  if(err) throw err;
  let count=result[0]["count(*)"];
  // console.log(result);
  res.render("home.ejs",{count});
});
} catch(err){
  console.log(err)
  res.send("some error in db");
}
connection.end();


  // res.send("welcome to homepage");
})


//SHOW PAGE
app.get('/user',(req,res)=>{
    let q='select *from user';
     try{
connection.query(q,(err,users)=> //users dalna insert keliye aur data for the  100 fake d=users
{
  if(err) throw err;
  // console.log(result);
  // res.send(result);
  res.render("users.ejs",{users});
});
} catch(err){
  console.log(err)
  res.send("some error in db");
}
});


//EDIT ROUTE
app.get("/user/:id/edit",(req,res)=>{
  let {id}=req.params;
  let q=`select *from user where id='${id}'`;

  try{
connection.query(q,(err,result)=> //users dalna insert keliye aur data for the  100 fake d=users
{
  if(err) throw err;
  let user=result[0];
  res.render("edit.ejs",{user});
});
} catch(err){
  console.log(err)
  res.send("some error in db");
}
})


//UPDATE (DB) ROUTE
app.patch("/user/:id",(req,res)=>{
  
})

app.listen("8080",()=>{
  console.log("server is listening to port")
});