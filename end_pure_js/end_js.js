

// console.log(10);

// setTimeout(function(){
//     console.log(20);
// }, 2000)


// console.log(10);










// console.log(1);
// console.log(2);

// try{
//     console.log(a);

// }catch(er){
//     console.log(er);
// }

// console.log(4);





// let a = +prompt('enter a');
// let b = +prompt('enter b');


// function divide(c, d){
//     if(d === 0){
//         throw new Error('b can not be equal to 0')
//     }
//     return c / d
// }

// try{
//     console.log(divide(a,b))
// }catch(e){
//     console.log(e);
// }

// console.log('go on');





let tx = document.getElementById('href')
let bt = document.getElementById('send')
let btc = document.getElementById('close')
let rf = document.getElementById('refresh')
let gl = document.getElementById('google')
let back = document.getElementById('back')
let forward = document.getElementById('forward')
let go = document.getElementById('go')


bt.onclick = () => open(tx.value);
    

btc.onclick = () => close();
    

// console.log(location);

rf.onclick = () => location.reload();


gl.onclick = () => {location.href = 'https://google.com'}


// console.log(history);


back.onclick = () => history.back();
forward.onclick = () => history.forward();

go.onclick = () => history.go(-2);


// console.log(navigator.geolocation);

// console.log(localStorage);

// localStorage.setItem('name', 'didi');
// // localStorage.clear();



// let obj = {name: 'vasya', lastname: 'kigov'};

// localStorage.setItem('first', obj)
// localStorage.setItem('second', JSON.stringify(obj))


// let x = localStorage.getItem('second')
// let y = localStorage.getItem('first')

// console.log(x);

// let parsed = JSON.parse(x);

// console.log(parsed);



// if(localStorage.getItem('presence') === null){
//     alert('hi');
//     localStorage.setItem('presence', '+');
// }


// localStorage.clear();





// try{
//     setTimeout(() => {
//         throw new Error('ffff')
//     } ,2000)
// }catch (e){
//     console.log(e);
// }




// setTimeout(() => {
//     try{
//         throw new Error('ffff')
//     }catch (e){
//         console.log(e);
//     }
// } ,2000)


// let i = 0
// let inter = setInterval( () => {
//     console.log('ticki');
//     i++
//     if(i === 3){
//         clearInterval(inter);
//     }
// }, 2000)




// let inter = setInterval( () => {
//     console.log('ticki')
// }, 1000)


// setTimeout( () => clearInterval(inter), 5000)















// CRASH COURSE PROMISES****************************

// let posts = [
//     {title: 'Post One', body: 'This is the post one'},
//     {title: 'Post Two', body: 'This is the post two'}
// ]



// function getPosts(){
//     setTimeout( () => {
//         let output = '';
//         posts.forEach( a => {
//             output += `<li>${a.title}</li>`;
//         })
//         document.body.innerHTML = output;
//     }), 1000}


// function createPost(post){
//     setTimeout( () => {
//         posts.push(post);
//     }, 2000)
// }



// getPosts();
// createPost({title: 'Post Three', body: 'This is the post three'});


// console.log(posts)



// WITH CALL BACKS *************************************

// let posts = [
//     {title: 'Post One', body: 'This is the post one'},
//     {title: 'Post Two', body: 'This is the post two'}
// ]



// function getPosts(){
//     setTimeout( () => {
//         let output = '';
//         posts.forEach( a => {
//             output += `<li>${a.title}</li>`;
//         })
//         document.body.innerHTML = output;
//     }), 10000}


// function createPost(post, callback){
//     setTimeout( () => {
//         posts.push(post)
//         callback();
//     }, 2000)
// }


// createPost({title: 'Post Three', body: 'This is the post three'}, getPosts);






// PROMISES*****************************************

// let posts = [
//     {title: 'Post One', body: 'This is the post one'},
//     {title: 'Post Two', body: 'This is the post two'}
// ]



// function getPosts(){
//     setTimeout( () => {
//         let output = '';
//         posts.forEach( a => {
//             output += `<li>${a.title}</li>`;
//         })
//         document.body.innerHTML = output;
//     }), 10000}


// function createPost(post){
//     setTimeout( () => {
//         posts.push(post)
//     }, 2000)
// }




































































































































































