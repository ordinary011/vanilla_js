



// const name =  document.querySelector('#inp_name');

// const address = document.querySelector('#inp_address')


// const form = document.querySelector('#form1')




// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const obj = {
//         name: name.value,
//         address: address.value
//     }
//     localStorage.setItem('obj', JSON.stringify(obj));

// })


// let data = JSON.parse(localStorage.getItem('obj'))

// // name.value = data.name;
// // address.value = data.address;

// data && data.name ? name.value = data.name : name.value = null;

// data && data.address ? address.value = data.address : address.value = null;






// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function mutate(arr){
//     let arr1 = [...arr].sort( (a, b) => a - b);
//     let arr2 = arr1.filter( a => a % 2 == 0)
//     let arr3 = arr1.filter( a => a % 2 == 1)
//     let arr4 = [...arr2, ...arr3];
//     if(arr4.length > 0 && arr4.length < 10^5){
//         return arr4;
//     }

// }

// console.log(mutate(array));




// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let array1 = [5, 9, 4, 3, 1, 2, 7, 8, 6, 10]

// function mutate(arr){
//     let arr1 = [...arr].sort( (a, b) => a - b);
//     return [...arr1.filter( a => a % 2 == 0), ...arr1.filter( a => a % 2 == 1)];
   
// }

// console.log(mutate(array1));



// function findLongestWordLength(str) {
//     let arr = str.split(' ').sort( (a, b) => b.length > a.length? 1 : -1);
    
//     return arr[0].length;
//   }
  
// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));



// function findLongestWord(str) {
//     var longestWord = str.split(' ').reduce((longest, currentWord)  =>
//        currentWord.length > longest.length ? currentWord : longest, "");
//     return longestWord.length;
//   }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));






// function findLongestWordLength(s) {
//     return s.split(' ').reduce((x, y) => Math.max(x, y.length), 0);
//   }


// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));









































































