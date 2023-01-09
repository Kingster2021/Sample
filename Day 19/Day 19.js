// Objects
// an empty with properties and behavior (method)

// Object literal
// key-value pair
// property: value
const person = {
    
    firstName: "Daniel",
    lastName:  "Park",
    age:        20,
    gender:    "Male"

}

// console.log(person["firstName"]);
// dot notation
// object.propertyName
console.log(person.firstName);
console.log( `${person.firstName} ${person.lastName}` );

person.isAdmin = true;
person.firstName = "DG";
console.log(person);

// Object instance
const person2 = new Object();
// const person2 = ();
person2.firstName = "Jin";
person2.lastName = "Yui";
person2.isAdmin = true;
delete person2.isAdmin;

// console.log(person2);

// Object constructor
// PascalCase
// function declaration
function Car( color, brand, model, year, sound ) {
    // this - refers to current object
    this.color = color;
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.start = function() {
        console.log(sound)
    }
}

const vios = new Car( "Red", "Toyota", "Vios", "2022", "Vroom! Vroom!");
console.log( vios.color );
vios.start();

const mirage = new Car( "Blue", "Mitsubisi", "Mirage", "2021", "Beep! Beep!" );
mirage.start();

// 
const student = {

    firstName: "Jose",
    middleName: "Protacio",
    lastName: "Rizal",
    grade: 99,
    hobby: ["reading", "traveling", "flirting"],
    name: {
        fName: "Jose",
        lName: "Rizal"
    }

}

console.log( student.name.fName, student.name.lName );
// console.log( student.hobby[0] );

// for...of
for(hobby of student.hobby) {
    // do something..
    console.log(hobby);
}

// for...in
// property in object
// object[key]
for( property in student ) {
    console.log( `${property}: ${student[property]}` );
}

// for...in w/ array
// index in array
for(key in student .hobby) {
    console.log(student.hobby[key]);
}







    

