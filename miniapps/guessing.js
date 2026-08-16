// 1.GUESSING NUMBER GAME

// const max=prompt("Enter a max number of your choice :");

// const random=Math.floor(Math.random()*max)+1;

// let guess=prompt("Guess the number:");
// while(true){
//     if(guess==="quit"){
//         console.log("okay bye");
//         break;
//     } 
//         if(guess==random){
//             console.log("congrats! you guessed the number",random);
//             break;
//         } 
//         else if(guess >random){
//                 guess=prompt("guess again, the number is smaller than your guess");
//             } else{
//                 guess=prompt("guess again, the number is larger than your guess");
//             }
//         } 
    


// 2.ROLL DICE
// function dice() {
    
//     let random = Math.floor(Math.random() * 6) + 1;
//     console.log("The random number is : ", random);
// }

// dice();


//3.PRINT 1 TO N
// function print1toN(n) {
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         sum=sum+i;
       
//     }
//     return sum;
// }
// print1toN(10);


//4.CONCATENATE THE STRING OF ARRAY
// let arr=["hi",'hello','bye'];
// function concstr(arr){
//     let result="";
    
//     for(let i=0;i<arr.length;i++){
//         result+=arr[i];
//     }
//     return result;
// }
// 


//5.SCOPES
// let greet="hello";//global scope
// function greet1(){
//     let greet="hi"; //function scope
//     console.log(greet);
//     function greet2(){
//         console.log(greet);//lexical scope
//     }
//     greet2();//if want to print the greet2 function then we have to call it inside the greet1 function because of lexical scope
// }
// console.log(greet);
// greet1();


//6.ARROW FUNCTION
    //1.SETTIMOUT
// console.log("hi there");
// setTimeout( () => {
//     console.log("apna college");
// },4000);
// console.log("welcome to");

   //2.SETINTERVAL  
// let id=setInterval( () => {
//     console.log("apna college");
// },2000);

// clearInterval(id);



//7.QUESTIONS
// const square=n =>n*n;

// let id=setInterval( ()=>{
//     console.log("Hello world");
// },2000);
// setTimeout( ()=>{
//     clearInterval(id);
// },10000);

//8.ARRAY METHODS(aDVANCED)
// let num=[1,2,3,4,5];
// let double=num.map( n =>{
//      return n*n;
// }
// // )
// let students=[
//     {
//         name:"aman",
//         marks:90,
//     },
//     {
//         name:"pooja",
//         marks:50,
//     },
//     {
//         name:"priya",
//         marks:70,
//     }
// ];
// let gpa=students.map((el) =>{
//     return el.marks/10;
// });

// [3,4,2].every((el)=>
//     (el%2==0)
// )
// [10,20,25].every((el)=>
// (el%10==0)
// )

// let arr=[1,2,3,4,5,1];
// Math.min(arr);





let btn=document.querySelector("button");
btn.onclick=function(){
    console.log("Button clicked!");
}

