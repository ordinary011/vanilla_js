// class Person {
//     constructor(name, surname, age) {
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//     }

//     hello() {
//         console.log('hello');
//     }

//     bye() {
//         console.log('bye');
//     }
// }

// class Developer extends Person {
//     constructor(name, surname, age, skills, level) {
//         super(name, surname, age);
//         this.skills = skills;
//         this.level = level;
//     }

//     coding() {
//         console.log('tuc tuc tuc');
//     }

//     hello(){
//         console.log('slava js!!!');
//     }

//     helloSwitch(number){
//         if (number === 0){
//             this.hello();
//         }else {
//             super.hello();
//         }
//     }

// }

// let bb = new Person('fif', 'barbie', 3);
// let zenyk = new Developer('anonim', 'hacker', 45, ['c++'], 80);

// console.log(bb);
// console.log(zenyk);
// zenyk.hello();
// zenyk.bye();

// ***********************************************
// HOMEWORK GOES BELOW !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// ***********************************************

// Взять библиотечный класс Array и добавить ему новый метод который
// - при вызове выводит на консоль текущий массив

// Array.prototype.see = function() {
//    console.log(this)
// };

// [1,4,6].see();

// - выводит только парные елементы

// Array.prototype.even = function(){
//     console.log(this.filter(a => a %2 ===0));
// };

// - выводит только элементы с парными индексами

// let arr1 = [1,4,6, 10, 24, 23, 15, 14, 22]
// Array.prototype.evenIndex = function(){

//         for(let i = 0; i < this.length; i++){
//             if(this.indexOf(this[i]) % 2 === 0){
//                 console.log(this.indexOf(this[i]));
//             }
//         }

// }

// arr1.evenIndex();
