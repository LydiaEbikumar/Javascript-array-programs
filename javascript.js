//program 1
// function condition(num){
//     for(itr=1;itr<=num;itr++)
//     {
//     if(itr%3==0 && itr%5!=0)
//         console.log("fizz");
//     else if(itr%5==0 && itr%3!=0)
//         console.log("Bus");
//     else if(itr%3==0 && itr%5==0)
//         console.log("Busfizz")
//     else{
//         console.log(itr);
//     }}
// }
// condition(100);

//program 2 
// function text(str){
//   let str1=(str.split("").reverse().join(""));
//   if(str==str1){
//     return("palindrome");}
//   else{
//     return("Not a palindrome");
//   }
//  }
// console.log(text("kayak"));

//program 3
// let arr=[10,30,60,70];
// arr.sort();
// console.log(arr[arr.length-1]);

//program 6
// function factorial(num){
//     let fact=1,itr;
//     for(itr=1;itr<=num;itr++)
//     {
//         fact=fact*itr;
//     }
//     return fact;
// }
// console.log(factorial(6));

//program 7
// function fahrenheit(celsius){
//       let temp=(celsius-32)*5/9;
//       return temp;
//     }
// console.log(fahrenheit(40));

//program 5
// let str="this place looks beautiful";
// let words=str.split(" ");
// let longest=" ";
// for(let itr=0;itr<words.length;itr++){
//     if(words[itr].length>longest.length){
//         longest=words[itr];
//     }
// }
// console.log(longest); 

//program 4
// function count(str,char){
//     let count=0;
//     for(let itr=0;itr<str.length;itr++){
//         if(str[itr]==char){
//             count++
//         }
// }
// return count;
// }
// console.log("hello","hi");
// let message={
//     fname:"Lydia",
//     lname:"Ebikumar",
//     text:function(){
//     document.write(this.fname+this.lname);}
//     }
//     message.text()
// let message={
//     text:function(){
//     console.log(this.fname+this.lname+this.city+this.area);
//     }

// }
// let message1={
//     fname:"Lydia",
//     lname:" Ebikumar",
//     city:" chennai",
//     area:" Anna Nagar",
// }
// message.text.call(message1)
// const welcome={
//     fname:"Lydia",
//     lname:"Ebikumar",
//     text:function(){
//     document.write(this.fname +" "+this.lname);
//     }
// }
// welcome.text()
// const message={
//     city:"kallakurichi",
//     state:"Tamil Nadu",
// }
// document.write(message.city +" "+message.state);
// const hello=()=>
//     console.log("Lydia");
// hello();
// const sqr=(a)=>a*a;console.log(sqr(5));




let arr=[10,30,20,50];
console.log("array creation "+arr); //1.array creation
arr.push(70);
console.log("push "+arr); //2.array manipulation
arr.pop();
console.log("pop "+arr); //array manipulation
console.log("array sorting "+arr.sort()); //3.array sorting
console.log("array reverse "+arr.reverse()); //array reverse
console.log("flatening array "+arr.flat()); //4.flatening array
console.log("array searching "+arr.indexOf(20)); //5.array searching
let arr1=[10,20,30];
let arr2=[40,50,60];
console.log(...arr1,...arr2);//6.array spreading
arr.sort();
console.log("Max "+arr[arr.length-1]);//maximum
console.log("min "+arr[0]);//minimum








