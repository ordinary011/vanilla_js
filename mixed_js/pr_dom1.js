

// const user = {
//     name : 'vasya',
//     export: function(){
//         return this;
//     }
// }

// console.log(user.export().name);












// let a = (function counter(){
//     let count = 0;
//     return function(){
//         return ++count;
//     }
    
// })();

// console.log(a);






// function multiply(a){
//     return function(b){
//         return a * b;
//     }
// }


// console.log(multiply());

// const mlByTwo = multiply(2);


// console.log(mlByTwo(5));
// console.log(mlByTwo(10));



// const mlByThree = multiply(3);

// console.log(mlByThree);








// const user = (function(){
//     let name = 'di di';
//     function getName(){
//         return name;
//     }

//     function setName(val){
//         name = val;
//     }

//     return {
//         getName: getName,
//         setName: setName
//     }
    
// })();


// user.setName('ff');

// console.log(user.getName());





// let mutate = (function(){
//     let num = 0;
//     function increment(){
//         return ++num;
//     }
//     function decrement(){
//         return --num;
//     }
//     function getNum(){
//         return num;
//     }
//     return {
//         getNum : getNum,
//         increment: increment,
//         decrement: decrement
//     }
// })();




// mutate.increment()
// mutate.increment()
// mutate.increment()

// mutate.decrement()


// console.log(mutate.getNum());

// console.log(mutate.increment());
// console.log(mutate.increment());

// console.log(mutate.getNum());





function sum(a,b){
    return a + b + this.a + this.b;
}

obj = {
    a: 1,
    b: 2
}


sum.call(obj, 3, 4); // 10

sum.apply(obj, [3,4]); //10

const resBind = sum.bind(obj);

resBind(3,4);



































































































































































