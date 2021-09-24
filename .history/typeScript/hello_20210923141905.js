// function sayHello(person) {
//     if (typeof person === 'string') {
//         return 'Hello, ' + person;
//     }
//     else {
//         throw new Error('person is not a string');
//     }
// }
// var user = 'Tom';
// console.log(sayHello(user));

function sayHello(person: string) {
    return 'Hello, ' + person;
}

let user = [0, 1, 2];
console.log(sayHello(user))