# Cloning-and-Modifying-an-Object
![image](https://github.com/gitbiruk2010/Cloning-and-Modifying-an-Object/assets/103274295/f890e4ce-79c6-48fe-9c0b-eeb929376ceb)

## Overview
This README explains how to create a modified clone of an object using JavaScript's spread syntax, which allows for the original object to remain unchanged while making updates to the cloned version.

## Original Person Object
I begin with an object representing a person:

javascript
const person = { name: 'Tommy', age: 30 };
The person object includes name and age properties.
Creating a Modified Clone

To generate a new object with some properties altered and new properties added:

const newPerson = { ...person, name: 'Christina', gender: 'female' };

The spread syntax (...) is utilized to copy all properties from the original person object into newPerson. After copying, I change the name property to 'Christina' and introduce a new property, gender.
Verifying the Results

The final step is to confirm that the original person object remains the same and that newPerson reflects the intended changes:
// Original person object
console.log(person); // Expected output: { name: 'Tommy', age: 30 }
// Updated newPerson object
console.log(newPerson); // Expected output: { name: 'Christina', age: 30, gender: 'female' }
Executing the code will show that person retains its original state, demonstrating 'Tommy' as the name, and newPerson has the updated name 'Christina' along with the new gender property.
