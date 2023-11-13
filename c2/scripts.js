var age = prompt("What is your age?");
var ageNumber = Number(age)
var currentYear = new Date().getFullYear();
var birthYear = currentYear - ageNumber;
document.write("Your birth year is: " + birthYear);