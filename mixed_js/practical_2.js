

// PRACTICAL HIGHER ORDER FUNCTIONS ***************


// Вивести масив винахідників які народились в 1500-х роках. 


// let arr1 = inventors.filter( a => a.year >= 1500 && a.year <= 1600);

// console.log(arr1);




// Вивести масив тільки імен винахідників які народились в 1800-х роках


// let arr2 = inventors
//   .filter( a => a.year >= 1800 && a.year <= 1900)
//   .map( a => `${a.first} was born in ${a.year} `);

// console.log(arr2);


// Вивести масив з імен та прізвищ винахідників (['Albert Einstein', ... ])


// let arr3 = inventors.map(a => `${a.first} ${a.last}`)

// console.log(arr3);







// Відсортувати винахідників за кількістю прожитих років


// let arr4 = inventors  
//   .sort( (a, b) => (a.passed - a.year) - (b.passed - b.year))
//   .map( a => `${a.first} was leaving for ${a.passed - a.year} years`);

// console.log(arr4);




// ************************************************

// Відсортувати людей але тільки за прізвищем


// ************************************************


const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];


// let arr5 = [...people];

// for(let i = 0; i < arr5.length; i++){
//   arr5[i].split(' ')
// }


// console.log(arr5);








// Перевірити чи є хоча б один винахідник народжений в 1878, якщо так то функція повертає true якщо ні то false


// let birth = inventors.some(a => a.year === 1878);

// console.log(birth);





// const inventors = [
//   { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
//   { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
//   { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
//   { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
//   { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
//   { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
//   { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
//   { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
//   { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
//   { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
//   { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
//   { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
// ];

// Знайдіть суму років які прожили всі винахідники разом


// let arr6 = inventors.reduce( (a,b) => a + (b.passed - b.year) ,0)

// console.log(arr6);







// Знайти суму кожного типу транспорту, які є в масиві


// const ts = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];


// let cars = ts.filter( a => a === 'car').length;
// let trucks = ts.filter( a => a === 'truck').length;
// let bikes = ts.filter( a => a === 'bike').length;
// let walks = ts.filter( a => a === 'walk').length;
// let van = ts.filter( a => a === 'van').length;
// let pogostick = ts.filter( a => a === 'pogostick').length;


// console.log(
//   `There are ${cars} cars, ${trucks} trucks, ${bikes} bikes, ${walks} walks, ${van} vans, and ${pogostick} pogostick (whatever it means=))`
// );


































































































































