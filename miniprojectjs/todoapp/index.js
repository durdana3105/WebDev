let inp=document.querySelector("input");
let ul=document.querySelector("ul");
// let li=document.querySelectorAll("li");/
let btn=document.querySelector("button");


//adding tasks
btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let dltbtn=document.createElement("button");
    dltbtn.innerText="delete";
    dltbtn.classList.add("delete")

    item.appendChild(dltbtn)
    ul.appendChild(item);
    console.log(inp.value);
    inp.value=""
})

//actual deleting
ul.addEventListener("click",function(e){
    if(event.target.nodeName=="BUTTON"){ //it is showing that the actuall class or actual ele it belongs to ex: the add task belongs to the button so 
        let listItem=e.target.parentElement
        listItem.remove();
        console.log("deleted")
    }
})

//deleting tasks
let dltbtns= document.querySelectorAll(".delete")
for(dltbt of dltbtns){
    dltbtn.addEventListener("click",function(){
        console.log("ele deleted");
        let par=this.parentElement;
        par.remove();
    })
}

// inp.addEventListener("input",function(){
//     console.log(inp.value);
//     ul.innerText=inp.value;
// })