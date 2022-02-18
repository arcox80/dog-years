// variable represents my age in human years
const myAge = 7;

// calculating early years to use later
let earlyYears = 2;
earlyYears *= 10.5;

// determing later years value to use later
let laterYears = myAge - 2;

// calculating value of dog years in the later years
laterYears *= 4;

// calculating final value of dog years
const myAgeInDogYears = earlyYears + laterYears;

// assing my name to a variable and making it all lower case
let myName = 'Eliza'.toLowerCase();

// displaying human age and dog age in a string
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
