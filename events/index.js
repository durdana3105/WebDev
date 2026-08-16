// let form=document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     let input=document.querySelector("input");
//     console.log(input.value);
//     input.value="";

//     let user=document.querySelector("#user");
//     let pass=document.querySelector("#pass");

//     console.log(user.value);
//     console.log(pass.value);

//     alert(`Hi ${user.value}, your password is ${pass.value}`);
// })



//CUSTOM TEXT EDITOR
// let inp=document.querySelector("input");
// let p=document.querySelector("p");

// inp.addEventListener("input",function(){
//     console.log(inp.value);
//     p.innerText=inp.value;
// })

// function savetodb(data,sucess,failure){
//     let internetspeed=Math.floor(Math.random()*10)+1;
//     if(internetspeed<4){
//         sucess();
//         console.log("week connection")
//     } else{
//         failure();
//         console.log("good connection")
//     }
// }

// //callback hell
// saveToDb(
//   "apna college",
//   () => {
//     console.log("success : your data was saved");

//     saveToDb(
//       "hello world",
//       () => {
//         console.log("success2: data2 saved");

//         saveToDb(
//           "shradha",
//           () => {
//             console.log("success3: data3 saved");
//           },
//           () => {
//             console.log("failure3 : weak connection");
//           }
//         );
//       },
//       () => {
//         console.log("failure2 : weak connection");
//       }
//     );
//   },
//   () => {
//     console.log("failure : weak connection");
//   }
// );


//promises
// function savetodb(data){
//     return new Promise((success,failure)=>{
//         let internetspeed=Math.floor(Math.random()*10)+1;
//         if(internetspeed<4){
//             success();
//         } else{
//             failure();
//         }
//     });
// }
//can directly do it without taking the variable request
// let request=savetodb("apnacollege");
// request.then(()=>{
//     console.log("promise resolved")
//     console.log(request)
// }
// )
// .catch(()=>{
//     console.log("promise rejected");
//     console.log(request)
// })



//PROMISES RESOLVED the callback hell
h1=document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("color changed");
        },delay);
    });
}

// changeColor("red",1000)
// .then(()=>{
//     console.log("red color was completed");
//     return changeColor("orange",1000)
// })
// .then(()=>{
//     console.log("orange color was completed");
//     return changeColor("black",1000)
// })
// .then(()=>{
//     console.log("black color was completed");
//     return changeColor("green",1000)
// })
// .then(()=>{
//     console.log("green color was completed");
//     return changeColor("purple",1000)
// })

//using async and await keywords
// async function demo(){
//     await changeColor("red",1000);
//     await changeColor("blue",1000);
//     await changeColor("purple",1000);
//     await changeColor("green",1000);
//     changeColor("orange",1000);
// }

// demo();


//API REQUEST

let url="https://catfact.ninja/fact";
fetch(url)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log("data1: ",data.fact)
        return fetch(url)
    })
    .then((res)=>{
        return res.json();
    })
    .then((data2)=>{
        console.log("data2: ",data2.fact)
    })
    .catch((err)=>{
        console.log("ERROR - ",err);
    })
console.log("iam happy")