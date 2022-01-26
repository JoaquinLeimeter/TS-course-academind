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

ARRAYS

const person = {
	name : 'david',
	age: 29,
	hobbies: ['videogames, cooking']
};

let favoriteActivities: string[];
favoriteActivities = ['string'];

console.log(person.name);

for (const hobby of person.hobbies) {
	console.log(hobby.toLowerCase()); //autocompletion
	console.log(hobby.map(() => {})) //not an array
};
