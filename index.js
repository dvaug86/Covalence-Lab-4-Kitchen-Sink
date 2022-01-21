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

/*let id =[
    {name: 'Charles', age: 21}, 
    {name: 'Abby', age: 27},
    {name: 'James', age: 18},
    {name: 'John' age: 17}
];
*/

function checkAge(name, age){
    if(age < 21){
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}

checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John',17);

favVeg = ['Broccoli', 'Lima Beans', 'peas', 'sweet potatoes', 'asparagus'];
for(i=0; i<favVeg.length; i++){
    console.log(favVeg[i]);
}
