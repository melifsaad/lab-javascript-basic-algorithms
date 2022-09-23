console.log("I'm ready!");
// Iteration 1: Names and Input
const hacker1= "conductor";
console.log (`The driver's name is ${hacker1}`);
const hacker2= "navegador";
console.log (`The driver's name is ${hacker2}`);
console.log (hacker1.length);
// console.log(hacker1.length)
// Iteration 2: Conditionals

const namedriver = (hacker1, hacker2) =>{
         if (hacker1.length > hacker2.length)
            console.log (`The driver has the longest name, it has ${hacker1.length} characters`);
         if (hacker2.length > hacker1.length)
            console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
         if (hacker2.length === hacker1.length)
            console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// namedriver(hacker1, hacker2)

// Iteration 3: Loops
// Iteration 3.1
const str = hacker1
console.log(str.toUpperCase().split('').join(' '));
// Iteration 3.2
const str2 = hacker2
console.log (str2.split('').reverse().join(""))
// Iteration 3.3

