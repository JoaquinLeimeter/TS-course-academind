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
// ARRAY
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
//TUPLE
// const person: {
// 	name: string;
// 	age: number;
// 	hobbies: string[];
// 	role: [number, string];
// } = {
// 	name : 'david',
// 	age: 29,
// 	hobbies: ['videogames, cooking'],
// 	role: [2, 'author']
// };
// person.role.push('admin'); //exeption for .push()
// // person.role[1] = 10; //doesnt work
//ENUM
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
    Role[Role["AUTHOR"] = 3] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'david',
    age: 29,
    hobbies: ['videogames, cooking'],
    role: Role.ADMIN
};
console.log(person.role);
