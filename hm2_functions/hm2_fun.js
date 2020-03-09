// **********************************

//  1 створити масив з 10 елементів, заповнити його парними значеннями (2 4 6 8 10 ...).

// let arr2 = Array(10).fill(0);

// console.log(arr2);

// 2 створити масив з 10 елементів, заповнити його цілими рандомними значеннями(Math.random)

// let arr1 = Array(10).fill().map(() => Math.floor(Math.random() * 20));

// console.log(arr1);

// - відсортувати його за  віком (зростання , а потім окремо спадання)

// let arr3 = [...users];

// arr3.sort((a,b) => a.age - b.age);

// console.log(arr3);
// console.log(users);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// let arr4 = [...users];
// let arr5 = [...users];

// arr4.sort( (a,b) => a.name.length - b.name.length);
// arr5.sort( (a,b) => b.name.length - a.name.length);

// console.log(arr4);
// console.log(arr5);
// console.log(users);

// - виконати певні фільтрації(по вікові, імені...)

// let arr6 = [...users];

// let filtered = arr6.filter( a => a.age > 30);
// let filtered2 = arr6
//     .filter( a => a.name === "olya" || a.name === "max")
//     .sort((a,b) => a.name.length - b.name.length);

// console.log(filtered);
// console.log(filtered2);
// console.log(arr6);
// console.log(users);

let users = [
	{ name: 'vasya', age: 31, status: false },
	{ name: 'petya', age: 30, status: true },
	{ name: 'kolya', age: 29, status: true },
	{ name: 'olya', age: 28, status: false },
	{ name: 'max', age: 30, status: true },
	{ name: 'anya', age: 31, status: false },
	{ name: 'oleg', age: 28, status: false },
	{ name: 'andrey', age: 29, status: true },
	{ name: 'masha', age: 30, status: true },
	{ name: 'olya', age: 31, status: false },
	{ name: 'max', age: 31, status: true }
];

// - зробити всіх старшими на рік

// let arr7 = [...users];

// arr7.forEach( a => a.age += 1);

// console.log(arr7);
// console.log(users);

// - знайти перший/останній індекс об'єкта в якого ім'я макс ***********************************

// let arr8 = [...users];

// let trial = arr8.findIndex(a => a.name === 'max');

// console.log(trial);

// let firstInd = arr8.map(a => a.name).indexOf('max');
// let lastInd = arr8.map(a => a.name).lastIndexOf('max');

// console.log(firstInd);
// console.log(lastInd);

// - удалити всіх в проміжку інексів від 3 до 6

// let arr9 = [...users];

// let spliced = arr9.splice(3, 3)

// console.log(spliced);
// console.log(arr9);
// console.log(users);

// - замінити 5 елемент на інший

// let arr10 = [...users];

// let fifi = {name: 'fifi', age: 31, status: false}

// let altered = arr10.splice(4, 1, fifi);

// console.log(altered);
// console.log(arr10);
// console.log(users);
