// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/

const consume = (a, b, cb) => {
  return cb(a, b);
};


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

const add = (a, b) => {
  return a + b;
};

const multiply = (a, b) => {
  return a * b;
};

const greeting = (firstName, lastName) => {
  return `Hello ${firstName} ${lastName}, nice to meet you!`
};


/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation: 
// The function nestedFunction can access the variable internal because a function can reach outward into a parent function - in this case myFunction - (or alternatively to global scope if there is no parent function) for context and is then able to find the value of the variable being referenced in nestedFunction. Or in other words code inside a function can access outside scope, but code outside a function can never access the inside scope of that function.  By definition closure happens when a function is invoked and references some sort of variable outside of the function/it's context. 

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
