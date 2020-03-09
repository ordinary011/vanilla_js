document.addEventListener('DOMContentLoaded', function(){


// let banner = document.getElementById('page-banner');


// let bookList = document.getElementById('book-list')


// let titles = document.getElementsByClassName('title');


// let lis = document.getElementsByTagName('li');



// Array.from(titles).forEach((el) => console.log(el));



// const Wrap = document.querySelector('#wrapper');



// const wmf = document.querySelector('#book-list li:nth-child(2) .name')



// let books = document.querySelectorAll('#book-list li .name')



// Array.from(books).forEach( a => console.log(a));


// Array.from(books).forEach(function(book){
//     console.log(book.textContent);
// })


// books.forEach( a => console.log(a.textContent));


// books.forEach( a => a.textContent += ' (book title)');


// let bookList = document.querySelector('#book-list');



// bookList.innerHTML = '<h2>Books and more books</h2>'
// bookList.innerHTML += '<p>This is how you add an HTML</p>'


// const banner = document.querySelector('#page-banner');


// console.log('#page-banner node type is',banner.nodeType);
// console.log('#page-banner node name is',banner.nodeName);
// console.log('#page-banner has child nodes',banner.hasChildNodes());



// const clonedBanner = banner.cloneNode(true);


// console.log(clonedBanner);






// const bookList1 = document.querySelector('#book-list')


// console.log('the parent noede is', bookList1.parentNode);
// console.log('the parent noede is', bookList1.parentElement.parentElement);


// console.log(bookList1.childNodes);

// console.log(bookList1.children);




// console.log('bookList next sibling is', bookList1.nextSibling);
// console.log('bookList next element sibling is', bookList1.nextElementSibling);
// console.log('bookList previous element sibling is', bookList1.previousElementSibling);


// bookList1.previousElementSibling.querySelector('p').innerHTML += '<br/>Too cool for everyone else'





// let h2 = document.querySelector('#book-list h2');

// console.log(h2);

// h2.addEventListener('click', (e) => {
//     console.log(e.target)
//     console.log(e)
// }
// );




// let bt = document.querySelectorAll('#book-list .delete')


// bt.forEach(a => a.addEventListener('click', (e) => {

//     const li = e.target.parentElement;
//     li.parentNode.removeChild(li);

// }))






const link = document.querySelector('#page-banner a')

link.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log(e.target.textContent);
    // console.log(`navigation to ${e.target.textContent} was prevented`);
//     console.log("navigation to", e.target, "was prevented");
})







const list = document.querySelector('#book-list ul')

// DELETE BOOKS
list.addEventListener('click', (e) => {
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})


// console.log(document.forms[0]);
// console.log(document.forms['add-book']);


// ADD BOOKS


const ourForm = document.forms['add-book'];

// console.log(ourForm);

ourForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = ourForm.querySelector('input[type="text"]').value;

    // CREATE
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const delBtn = document.createElement('span');

    // ADD CONTENT
    delBtn.textContent = 'delete';
    bookName.textContent = val;

    // ADD CLASSES 
    bookName.classList.add('name');
    delBtn.classList.add('delete')


    // APPEND TO DOM 
    li.appendChild(bookName);
    li.appendChild(delBtn);
    list.appendChild(li);
})


// const li1 = document.querySelector('li:last-child');

// li1.style.color = "red";
// li1.style.marginTop = "60px";


// li1.className = "test";
// li1.className += " test2";





// let book = document.querySelector('li:first-child .name')

// console.log(book);


// book.setAttribute('class', 'name2')

// console.log(book.getAttribute('class'));

// console.log(book.hasAttribute("class"));

// book.removeAttribute('class');

// console.log(book);


// console.log(list);


const hideBox = document.querySelector('#hide');

hideBox.addEventListener('change', e => {
    if(hideBox.checked){
        list.style.display = 'none';
    }else{
        list.style.display = 'initial'
    }
})


const searchBar = document.forms['search-books'].querySelector('input');


searchBar.addEventListener('keyup', e => {
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach( a =>{
        const title = a.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            a.style.display = 'block';
        }else{
            a.style.display = 'none';
        }
    })

})



const tabs = document.querySelector('.tabs');

const panels = document.querySelectorAll('.panel');


tabs.addEventListener('click', (e) => {
   if(e.target.tagName == 'LI'){
       const TargetPanel = document.querySelector(e.target.dataset.target)
       panels.forEach( (bt) => {
           if(bt == TargetPanel){
                bt.classList.add('active')
           }else{
               bt.classList.remove('active')
           }
       })
   }
})




})






















































































































































































































