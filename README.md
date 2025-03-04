# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied variables, functions, object literals, arrays, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead.

## Description

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your team lead

1. Describe the biggest difference between `.forEach` & `.map`.

The biggest difference between .forEach and .map is that .map returns a new array automatically based on whether or not each array element meets the criteria of a function passed through .map while .forEach also has a callback function passed through it does not return a new array, but will mutate the original array unless steps are taken to make sure it does not.  Another difference worth noting is that .forEach returns automatically, while .map does not.

2. What is the difference between a function and a method?

The main difference between a function and a method is that a method is a function housed within an Object Literal or a Class.  A method is a type of function.

3. What is closure?

Closure occurs when a function is invoked and reaches outside it's own context or scope to reference some sort of variable in the code outside of the function - this code may be in the global scope or in the scope of a parent function.  It's important to note that a function can never reach into a nested function's scope to reference a variable contained within that nested function. This paradigm remains true no matter how deep you nest functions.  A nested grandchild function can still reach outside itself and access variables assigned in it's grandparent function.  

4. Describe the four rules of the 'this' keyword.

The four rules of the ‘this’ keyword are directly related to it’s context and what ‘this’ is bound to or binding.  Within window (or global) context the ‘this’ keyword refers to the window or the global scope, also known as Window Binding, and in that context using ‘this’ is not useful. 

In Explicit Binding the ‘this’ keyword is used with dot notation and when the function containing ‘this’ is invoked (also using dot notation), ‘this’ refers to whatever object is left of the dot.

In New Binding the ‘this’ keyword is used within a constructor function and the ‘new’ keyword is used to create objects which refer back to the constructor function where properties are defined using the 'this' keyword, for example this.name = properties.name, and it’s properties and methods.  Within New Binding the ‘this’ keyword will refer to whatever object(and it's properties) is to the left of the dot, when any property or method is called for the objects created by the 'new' keyword with reference to the constructor function (or class).

Explicit binding occurs when the .call, .apply, or .bind methods are used.  It is called Explicit binding becasue the method will directly indicate what 'this' is supposed to reference as a paramater of the method.

5. Why do we need super() in an extended class?

In combination with extending the class, super() will ensure the child class inherits the properties of the parent class being extended.

## Project Set up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add TL as collaborator on Github.
- [ ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
- [ ] You are now ready to build this project with your preferred IDE
- [ ] Implement the project on your Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your team lead as a Reviewer on the Pull-request
- [ ] TL then will count the HW as done by  merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

## Task 1: Objects and Arrays
Test your knowledge of objects and arrays. 
* [ ] Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started.  Read the instructions carefully!

## Task 2: Functions
This challenge takes a look at callbacks and closures as well as scope. 
* [ ] Use the [functions.js](challenges/functions.js) link to get started. Read the instructions carefully!

## Task 3: Prototypes
Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

## Task 4: Classes
Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!
