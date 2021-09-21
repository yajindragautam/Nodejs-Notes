const myName = 'Yajindr';
const myLast = 'Gtm';
const myPost = 'Programer'
const fullName = myFullName(myName,myLast)

// Normar Function
function myFullName(myName, lastName){
    return myName + lastName;
}
console.log(fullName);

// Arrow Function
const yourFullName = (myName, lastName) => myName + lastName;

console.log(fullName);

person ={
    name: 'Elizabeth',
    lastName: 'Olsen',
    address: 'California',
    age: 25,
    getFullName(){
        return this.name+ ' ' + this.lastName;
    },
    getAge(){
        return this.age;
    }
}

console.log(person.getFullName());