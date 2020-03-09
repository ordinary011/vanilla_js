
// class Figure{
//     constructor(name){
//         this.name = name;
//     }

// }

// let fig = new Figure('triangle');


// class Square extends Figure{
//     constructor(name, height){
//         super(name);
//         this.height = height;
//     }

//     calcArea(){
//         return this.height * this.height;
//     }

//     get area(){
//         return this.calcArea();
//     }

//     set setHeight(value){
//         this.height = value;
//     }

// }


// let mySquare = new Square('my Square', 20 );



// console.log(mySquare);
// console.log(mySquare.calcArea());

// console.log(mySquare.area);


// mySquare.setHeight = 30;
// console.log(mySquare.area);


// class Figure{
//     constructor(name){
//         this.name = name;
//     }

// }

// let fig = new Figure('triangle');


// class Square extends Figure{
//     constructor(name, height){
//         super(name);
//         this.height = height;
//     }

//     calcArea(){
//         return this.height * this.height;
//     }

//     get area(){
//         return this.calcArea();
//     }

//     set setHeight(value){
//         this.height = value;
//     }

// }

// let mySquare = new Square('my Square', 20 );



// class Circle extends Figure{
//     constructor(name, radius){
//         super(name);
//         this.radius = radius;
//     }

//     lengthOfCirclce(){
//       return 2 * Math.PI * (this.radius * this.radius);
//     }

//     get length(){
//         return this.lengthOfCirclce();
//     }

//     set setRadius(r){
//         return this.radius = r;
//     }

// }

// let myCircle = new Circle('circle1', 20);

// console.log(myCircle);

// console.log(myCircle.lengthOfCirclce());

// console.log(myCircle.length);

// console.log(myCircle.setRadius = 30);

// console.log(myCircle.length);


// const arr = new Array(10);

// arr.fill(2);

// arr.forEach( a => console.log(a))







// //1
// function foo(){
//     return this;
// }

// console.log(foo());


// // 2


// let obj = {
//     name : 'Obj',
//     fn: foo
// }

// console.log(obj.fn());


// let obj1 = {
//     name : 'obj1',
//     fn: foo
// }

// console.log(obj1.fn());


// 3

function Person (){
    this.name = "Taras";

}

let myPerson  = new Person();

console.log(myPerson);


console.log('ff');





















