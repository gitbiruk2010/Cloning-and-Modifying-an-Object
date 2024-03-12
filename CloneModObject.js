// I have a person object here. I want to make a new, similar object but with some changes.
const person = { name: 'Tommy', age: 30 };

/* To create a new object based on the old one, I use spread syntax. 
Then, I'll change 'John' to 'Jane' and add a 'gender' property.*/
const newPerson = { ...person, name: 'Christina', gender: 'female' };

/*Now, let's make sure my original person is untouched and that 
my new person has the updates I made.
This is my original person, should still be John.*/
console.log(person);
// This should show Jane with the new gender property.
console.log(newPerson); 