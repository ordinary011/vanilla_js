
// 1. Якщо змінна a дорівнює нулю, то виведіть 'Вірно', інакше виведіть 'Невірно'. 

// let a = -3;

// let bbb = (a === 0? true : false);

// console.log(bbb);


// 2. В змінної min лежить число від 0 до 59. 
// Визначте в яку чверть години потрапляє це число (в першу, другу, третю або четверту).


// let min = 60;
// let quarter = '';
// if (min >= 0 && min <= 15){
//     quarter = 'It is the first quarter of the hour'
// }else if (min >= 16 && min <= 30){
//     quarter = 'It is the second quarter of the hour'
// }else if (min >= 31 && min <= 45){
//     quarter = 'It is the third quarter of the hour';
// }else if (min >= 46 && min <= 60){
//     quarter = 'It is the third quarter of the hour'
// }else{
//     quarter = 'Sorry the number is too high'
// };

// console.log(quarter);


// 3.Якщо змінна a дорівнює або менше 1, а змінна b більше або дорівнює 3, 
//     то виведіть суму цих змінних, 
//     інакше виведіть їх різницю (результат віднімання).
//     Перевірте роботу скрипта при a і b, що дорівнює 1 і 3, 0 і 6, 3 і 5.



// let a = 3;
// let b = 5;


// let anyAction = (a <= 1 && b >= 3? (a + b) : (a - b));


// 4. В змінної month лежить якесь число з інтервалу від 1 до 12.
//     Визначте в яку пору року потрапляє цей місяць (зима, літо, весна, осінь).

// function seasons(m){

//     switch(m){
//         case 12:
//         case 1:
//         case 2:
//         return 'winter';
//         case 3:
//         case 4:
//         case 5:
//         return 'spring';
//         case 6:
//         case 7:
//         case 8:
//         return 'summer';
//         case 9:
//         case 10:
//         case 11:
//         return 'autumn';
//         default: 
//         return 'sorry there are only 12 month in the year =))'
          
//     }

// }

// 5.  Переменная num может принимать 4 значения: 1, 2, 3 или 4. 
//     Если она имеет значение '1', то в переменную result запишем 'зима', 
//     если имеет значение '2' – 'весна' и так далее. 

// let result = '';
// function fourSeasons(num){
//     switch(num){
//         case 1:
//         result = 'winter';
//         break;
//         case 2:
//         result = 'spring';
//         break;
//         case 3: 
//         result = 'summer';
//         break;
//         case 4: 
//         result = 'autumn';
//         break;
//         default:
//         result = 'only 4 seasons are here (values in range of 1-4)';
//         break;
//     }

// }

// fourSeasons(6);
// console.log(result);



// let family = [{
//     name : 'Ania',
//     lastName: 'Smith',
//     age: 13,
//     gender: 'female'
// },
// {
//     name : 'Stuart',
//     lastName: 'Smith',
//     age: 22,
//     gender: 'male'
// },
// {
//     name : 'kiki',
//     lastName: 'Smith',
//     age: 40,
//     gender: 'male'
// },
// {
//     name : 'gira',
//     lastName: 'Smith',
//     age: 41,
//     gender: 'female'
// }]

// console.log(family[3].age);



let arr = [2,17,13,6,22,31,45,66,100,-18];


// arr.map(a => console.log(a));

// 1. перебрати його циклом while

// let i = 0;
// while (i < arr.length){
//     console.log(arr[i]);
//     i++;
// }


// 2. перебрати його циклом for

// for (let b =0; i < arr.length; b++){
//     console.log(arr[b]);
// }


// 3. перебрати циклом while та вивести  числа тільки з непарним індексом


// let a = 1;
// while(a < arr.length){
//     console.log(arr[a])
//     a += 2;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом


// for (let f = 1; f < arr.length; f+=2){
//     console.log(arr[f]);
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення 


// let v = 0;
// while(v < arr.length){
//     console.log(arr[v])
//     v += 2;
// }


// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let c = 0; c < arr.length; c+=2){
//         console.log(arr[c]);
//     }


// 7. замінити кожне число кратне 3 на слово "okten"


// let maped = arr.map( g => g % 3 === 0? g = 'okten' : g);


// for(let n =0; n<arr.length; n++){
//     if (arr[n] % 3 === 0){
//         arr[n] = 'okten';
//     }
// }



// 8. вивести масив в зворотньому порядку.


// arr.reverse();

// for (let c = 0; c < arr.length; c+=2){
//             console.log(arr[c]);
//         }


// console.log(arr);



// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)



// for (let b = (arr.length - 1); b >= 0; b-=2){
//         console.log(arr[b]);
//     }



// for(let n = (arr.length - 1); n >= 0; n--){
//         if (arr[n] % 3 === 0){
//             arr[n] = 'okten';
//         }
//     }

// arr.reverse();





























