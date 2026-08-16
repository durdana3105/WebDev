const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
//for method-override
const methodOverride=require('method-override')

//parse the data so no undefined
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.use(express.json());

//require the uuid package
const{v4: uuidv4}=require('uuid');
uuidv4();



//path sahi krne keliye
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

let posts = [
    {
        id: uuidv4(),
        username: "apnacollege",
        content: "i love coding"
    },
    {
        id: uuidv4(),
        username: "teracollege",
        content: "i love java"
    },
    {
        id: uuidv4(),
        username: "meracollege",
        content: "i love python"
    }
]
app.get("/posts/new", (req, res) => {
    res.render("new.ejs")
})
app.get('/posts', (req, res) => {
    res.render("index", { posts });
});

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id=uuidv4();
    posts.push({ id,username, content });
    res.redirect("/posts")
})

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;

    let post = posts.find((p) => id === p.id);

    console.log(post);

    res.render("show.ejs", { post });
});

//to edit the post(using hopscotch)
app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params
    let newContent=req.body.content
    let post = posts.find((p) => id === p.id);
    post.content=newContent
    console.log(post)
    // res.send("patch request working");
    res.redirect("/posts")
})

//edit post 
app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs",{post});
})

//DELETE POST
app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts = posts.filter((p) => id !== p.id);
    // res.send("deleted")
    res.redirect("/posts")

})

app.listen(port, () => {
    console.log("listening on port " + port);
});

//using uuid(universally unique identifier) for creating unique ids for new acc and posts