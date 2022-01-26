//OBJECTS
// const person: {
// 	name: string;
// 	age: number;
// } = {
// 	name : 'david',
// 	age: 29
// }
// 
// const person = {
// 	name : 'david',
// 	age: 29
// }
// console.log(person.name);
// ARRAYS
// const person = {
// 	name : 'david',
// 	age: 29,
// 	hobbies: ['videogames, cooking']
// };
// let favoriteActivities: string[];
// favoriteActivities = ['string'];
// console.log(person.name);
// for (const hobby of person.hobbies) {
// 	console.log(hobby.toLowerCase()); //autocompletion
// 	console.log(hobby.map(() => {})) //not an array
// };
//Tuple
var person = {
    name: 'david',
    age: 29,
    hobbies: ['videogames, cooking'],
    role: [2, 'author']
};
person.role.push('admin'); //exeption for .push()
// person.role[1] = 10; //doesnt work
var favoriteActivities;
favoriteActivities = ['string'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLowerCase()); //autocompletion
    // console.log(hobby.map(() => {})) //not an array
}
;
