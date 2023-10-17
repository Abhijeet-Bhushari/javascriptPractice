let firstName = "Abhijeet";
let LastName = "Bhushari";

let fullName = firstName + " " + LastName;
console.log(fullName);

let pname = "Linda";
let greeting = "Hi there";

function func(greeting, name){
    console.log(greeting + ", " + name + "!");
}

func(greeting, pname);

let myPoints = 3;

function add3Points(){
    myPoints += 3;
}

function remove1Point(){
    myPoints --;
}

add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();
console.log(myPoints);



