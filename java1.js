let message ="Hello , world!";
const PI = 3.14;
function greet (name) {
    return `Hello , ${name}!`;
}
console.log(greet("sai"));
// functin declaration
function greet (name) {
    return `hello , ${name}`;
}
console.log(greet("kittu"));
// function expressin
const hello=function(name){
    return `hello , ${name}!`;
}
console.log (hello("saikittu"));
//arrow function
const hii=(name)=>`hello,${name}!`;
console.log(greet("anurag"));
//IIFE function
(function(){
    console.log("this run right a way!");
})();

//call back function
const anurag =(name)=>{
    console.log(`hello,${name}!`);
}
function processname(callback){
    const name ="sai";
    callback(name);
}
processname (anurag);

//array
let fruits=["apple","banana","cherry"];
fruits.forEach(fruit => console.log(fruit));

//array methods
fruits.push("mango");
fruits.forEach(fruit => console.log(fruit));
fruits.pop();
fruits.forEach(fruit => console.log(fruit));
fruits.shift();
fruits.forEach(fruit => console.log(fruit));
fruits.unshift("grapes");
fruits.forEach(fruit => console.log(fruit));

//
let number=[1,2,3,4,5];
let squared=number.map(num=>num*num);
squared.forEach(sno=>console.log(sno));

//creating and acces
let person={
    name:"h",
    age:30,
    greet:function (name){
        return `hello,my name is sai $(this.name)`;
    },
};
console.log(person.name);
console.log(person.greet("fddgd"));



