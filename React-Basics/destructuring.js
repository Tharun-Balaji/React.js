let person = {
    name: "Tharun",
    age: 25,
    occupation: "Software Engineer",
    location: "Delhi",
    Salary: "No Idea"
};

// let name = person["name"];
// console.log(name);

// let age = person["age"];
// let occupation = person["occupation"];

let {name,age,occupation} = person;

console.log(name, age,occupation);

let place = person["location"];

let {location:placeOfPerson} = person;

console.log(place, placeOfPerson);