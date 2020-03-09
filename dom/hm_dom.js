




// let title = document.createElement('h1');

// title.innerText = 'hello';
// title.classList.add('bg')
// title.setAttribute('id', 'title')


// let content = document.getElementById('content');

// console.log(title);
// console.log(content);

// // content.appendChild(title);

// content.insertBefore(title, content.children[0]);








// FORMS

// let form = document.getElementsByTagName('form')[0];

// console.log(form);

// let login = form.children[0];
// let password = form.children[2];

// console.log(login.value);
// console.log(password.value);


// NEW FORMS MANAGEMENT

// console.log(document.forms.form1.login.value);
// console.log(document.forms.form1.password.value);



// EVENTS

// let buttons = document.getElementsByTagName('button');

// console.log(buttons);

// buttons[0].onclick = () => console.log('hello');
// buttons[1].onclick = () => console.log('bye');



// HOMEWORK



const divArr = document.getElementsByClassName('divka');
const left = document.getElementById('left');
const right = document.getElementById('right');


let j = 0
divArr[j].style.display = 'block';


left.onclick = function(){
    divArr[j].style.display = 'none';
    if(j === 0){
        j = divArr.length;
    }
    j--;
    divArr[j].style.display = 'block';
    
}

right.onclick = function(){
    divArr[j].style.display = 'none';
    if(j === divArr.length - 1){
        j = -1;
    }
    j++;
    divArr[j].style.display = 'block';
 
}



























































































































































