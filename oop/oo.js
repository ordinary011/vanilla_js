
class User{
    constructor(email, name ){
        
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    logIn(){
        console.log(`The "${this.name}" with an email of "${this.email}" has just logged in`);
        return this;
    }
    logOut(){
        console.log(`The "${this.name}" with an email of "${this.email}" has just logged out`);
        return this;
    }
    updateScore(){
        this.score++;
        console.log(`${this.name} has a score of ${this.score} now`);
        return this;
    }
}

class Admin extends User{
    delete(a){
        users = users.filter(b => b.email != a.email);
        return this;
    }
     
}


let userOne = new User('ffff@vvvv.com', 'First');
let userTwo = new User('yoshi@mario.com', 'second');
let adm = new Admin('igi@gmail.com', 'Main');
 

// userOne.logIn().updateScore().updateScore().logOut();


let users = [userOne, userTwo, adm];

console.log(adm);


// UNDER THE HOOD **********************************


// function User1(email, name){
//     this.email = email;
//     this.name = name;
//     this.online = false;
    
// }

// User1.prototype.logIn = function(){
//     this.online = true;
//     console.log(this.email, 'has logged in');
//     return this;
// }

// User1.prototype.logOut = function(){
//     this.online = false;
//     console.log(this.email, 'has logged out');
//     return this;
// }

// function Admin(role, ...args){
//     User1.apply(this, args);
//     this.role = role;
//     return this;

// }

// Admin.prototype = Object.create(User1.prototype);

// Admin.prototype.del = function(a){
//     users2 = users2.filter(b => a.email != b.email)
//     return this;
// }

// let us1 = new User1('sm@gmail.com', 'first');
// let us2 = new User1('gg@gmail.com', 'second');
// let adm1 = new Admin('ngu', 'shau@gmail.com', 'Main');


// let users2 = [us1, us2, adm1];

// console.log(users2);

// adm1.del(users2[2]);

// console.log(users2);


























































































































































































































































