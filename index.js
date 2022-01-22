// my name is David
var firstName = 'David';

//There are 50 states. Unless something radical happens that will be constant
const numStates = 50;

//A sum can be the two or more numbers added together
var sum;
sum = 5 + 4;

function sayHello() {
   alert('Hello World!');
};
sayHello();

function checkAge(name, age){
    if(age < 21){
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}

checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

favVeg = ['Broccoli', 'Lima Beans', 'peas', 'sweet potatoes', 'asparagus'];
for(i=0; i<favVeg.length; i++){
    console.log(favVeg[i]);
}

let pet ={
    name: 'Kruger',
    breed: 'German Shepherd'
}

console.log(pet.name, pet.breed);

homies =[{name: 'Bertha', age: 66}, {name: 'Mae', age: 1}, {name: 'Michael', age: 5}, {name: 'Loyd', age: 42}, {name: 'Juan', age: 35}];

for(i=0; i<homies.length; i++){
    checkAge(homies[i].name, homies[i].age);
}

function getLength(_words){
    length=(_words.length);
        if(length % 2 ==0){
            alert('The world is nice and even!')
        }
        else{
            alert('The world is an odd place!')

        }
    }
getLength('Hello World!')
