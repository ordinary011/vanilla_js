// 5. Вывести каждый елемент массива у которого соседний с права элемент - парный

// const rarr = [347, 586, 235, 120, 458, 485, 447, 462, 105, 204, 590, 480, 339, 447, 348, 573, 210, 500, 159, 149, 409];

// console.log(rarr);

// for(let i = 0; i < rarr.length; i++){
//     if(rarr[i+1] % 2 === 0){
//         console.log(rarr[i])
//     };
// }


































// let newArr = [100,250,50,168,120,345,188];


// let sum2 = 0;

// for(let i = 0; i < newArr.length; i++){
//     sum2 += newArr[i];
// }

// let avg2 = sum2 / newArr.length;

// let sum = newArr.reduce( (a, b) => a + b);
// let avg = sum / newArr.length;

































// let test = ['unshift', false, 1, 2, 3, 'complex', 'nested'];
// let array = [];

// for(let i = 0; i < test.length; i++){
//     if(typeof(test[i]) === 'number'){
//         array.push(test[i])
//     }
// }

// console.log(array);




// let farr =[];

// for(let i = 0; i < 21; i++){
//     farr.push(Math.floor((Math.random() * (700 - 100 + 1) + 100) * 5));
// }

// console.log(farr);



// let harr = [];


// for(let i = 0; i < farr.length; i++){
//     harr.push(farr[i] * 5);

// }


// console.log(harr);


// let aarr = [...farr];


// for(let i = 0; i < farr.length; i++){
//     aarr[i] *= 5;

// }

// console.log(aarr);








// for(let i = 1; i < 101; i+= 2){
//     earr.push(i);
// }


// for(let i = 0; i < 21; i++){
//     earr.push(Math.floor((Math.random() * (732 - 8 + 1) + 8)));
// }



// let earr = [];

// for(let i = 0; i < 101; i+= 2){
//         earr.push(i);
//     }


// for(let i = 0; i < 101; i+= 3){
//     if (earr[i] % 2 === 0){
//         console.log(earr[i]);
//     }
// }


// sarr = [];

// for(let i = 0; i < 101; i+= 3){
//     if (earr[i] % 2 === 0){
//         sarr.push(earr[i]);
//     }
// }































// let tl = prompt('Please enter the color of the traffic light')
// let isRoadClear = prompt('Is the road clear?')

 
// if (tl == 'green'){
//     if (isRoadClear == 'yes'){
//         alert('you can go')
//     }else{
//         alert('wait till the troublemakers pass')
//     }
// }else if (tl == 'yellow'){
//     if (isRoadClear == 'no'){
//         alert('then wait please')
//     }else{
//         alert('you have to wait anyway=))')
//     }
// }else if (tl == 'red'){
//     if (isRoadClear == 'yes'){
//         alert('stay right there!!! it\'s red dude!!!')
//     }else{
//         alert('so don\'t go!!')
//     }
// }else {
//     alert('do whatever you want, I have a holiday today=))')
// }























// let tl = prompt('Please enter the color of traffic light')


// if (tl == 'green'){
//     alert('go')
// }else if (tl == 'yellow'){
//     alert('wait')
// }else if(tl == 'red'){
//     alert('stop')
// }else{
//     alert('do whatever you want')
// }
       

























// let fnum = + prompt('Enter the number');
// let snum = + prompt('Enter the number');
// let tnum = + prompt('Enter the number');


// if (fnum >= snum && fnum >= tnum){
//     if(snum >= tnum){
//         console.log(fnum, snum, tnum);
//     }else{
//         console.log(fnum, tnum, snum);
//     }
// }else if (snum >= fnum && snum >= tnum){
//     if(fnum >= tnum){
//         console.log(snum, fnum, tnum);
//     }else{
//         console.log(snum, tnum, fnum);
//     }
// }else{
//     if(fnum >= snum){
//         console.log(tnum, fnum, snum);
//     }else{
//         console.log(tnum, snum, fnum)
//     }
// };
































// cars = [{ mark : 'audi',
// engine : 450,
// owner : {
//     name: 'kiborg',
//     age : 34,
//     driving_expirience: 2
// },
// price: 360000,
// year_of_issue: 2012
// },

// { mark : 'volks',
// engine : 300,
// owner : {
//     name: 'ighor',
//     age : 30,
//     driving_expirience: 4
// },
// price: 400000,
// year_of_issue: 2015
// },

// { mark : 'bmw',
// engine : 400,
// owner : {
//     name: 'vitya',
//     age : 30,
//     driving_expirience: 7
// },
// price: 400000,
// year_of_issue: 2017
// },

// { mark : 'audi',
// engine : 250,
// owner : {
//     name: 'stephan',
//     age : 25,
//     driving_expirience: 4
// },
// price: 400000,
// year_of_issue: 2012
// },

// { mark : 'volks',
// engine : 460,
// owner : {
//     name: 'ighor',
//     age : 30,
//     driving_expirience: 4
// },
// price: 400000,
// year_of_issue: 2015
// },

// { mark : 'mercedes',
// engine : 100,
// owner : {
//     name: 'ighor',
//     age : 30,
//     driving_expirience: 4
// },
// price: 400000,
// year_of_issue: 2015
// },

// { mark : 'mitsubisi',
// engine : 300,
// owner : {
//     name: 'ighor',
//     age : 30,
//     driving_expirience: 4
// },
// price: 400000,
// year_of_issue: 2015
// },

// ];


// let total = 0;
// for (let i = 0; i < cars.length; i++){
//     total += cars[i].price;
// }



// console.log(total);


// for (let i = 0; i < cars.length; i++){
//     if (cars[i].owner.driving_expirience < 5 && cars[i].owner.age > 25){
//         cars[i].owner.driving_expirience += 1;  
    
//     }

// }



// for (let i = 0; i < cars.length; i++){
//     let percent = (cars[i].engine * 0.10);
//     cars[i].engine += percent;
// }



// for (let i = 0; i < cars.length; i++){
//     cars[i].owner.name = 'didi';
// }


// for (let i = 0; i < cars.length; i+=2){
//     let ten = (cars[i].engine * 0.10);
//     let five = (cars[i].price * 0.05);
//     cars[i].engine += ten;
//     cars[i].price += five;
// }

// console.log(cars);














