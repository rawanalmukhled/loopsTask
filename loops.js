//Question 1: Write a for loop in JavaScript that prints the numbers from 1 to 10.
console.log("Q1:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//Question 2: Write a for loop in JavaScript that prints the even numbers from 2 to 20.
console.log("Q2:");
for (let i = 2; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//Question 3: Write a while loop in JavaScript that calculates the sum of all integers from 1 to 100.
console.log("Q3:");
let sum = 0;
let i = 1;
while (i <= 100) {
  sum = sum + i;
  i++;
}
console.log(sum);

//Question 4 🌶️🌶️🌶️: Write a for loop in JavaScript that iterates through an array of numbers and calculates their sum.
console.log("Q4:");
let arr = [1, 2, 3, 4];
let sum2 = 0;
for (let i = 0; i < arr[arr.length - 1]; i++) {
  sum2 = sum2 + arr[i];
}
console.log(sum2);
