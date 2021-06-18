/** *
 * Tom Bielawski
 * Lambda Shcool WEB45
 * Unit 1, Module 4, Day 4
 * JS-Exercise-Classes
 * index.js
 * 6/16/2021 
 * **/

/*
  EXAMPLE TASK:
    - Write an Airplane class whose constructor initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` property of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property gets set to true.
        + If a plane lands, its `isFlying` property gets set to false.
*/

// EXAMPLE SOLUTION CODE:
class Airplane {
    constructor(name) {
      this.name = name;
      this.isFlying = false;
    }
    takeOff() {
      this.isFlying = true;
    }
    land() {
      this.isFlying = false;
    }
  }
  
  /*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */
  
  /*
    TASK 1
      - Write a Person class whose constructor initializes `name` and `age` from arguments.
      - All instances of Person should also initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"
  */

//Define the class
class Person
{
  //Define the constructor
  constructor(name, age)
  {
    //Set name to this.name
    this.name = name;
    //Set age to this.age
    this.age = age;
    //Initialize stomach to empty array
    this.stomach = [];
  }

  //Define the eat() method
  eat(edible)
  {
    //If stomach has 10 or fewer...
    if(this.stomach.length < 10)
    {
      //...the person can eat
      this.stomach.push(edible);
    }

    //If the stomach as more than 10
    else if (this.stomach.length > 10)
    {
      //person cannot eat
      console.log("I'm full.");
    }
  }

  //Define the poop() method
  poop(edible)
  {
    //Reset stomach to empty
    this.stomach = [];
  }

  //Define the toString() method
  toString()
  {
    //Return the name and age in a string
    return `${this.name}, ${this.age}`;
  }
}

  /*
    TASK 2
      - Write a Car class whose constructor initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with a `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */

//Define the class
class Car 
{
  //Define the constructor()
  constructor(model, milesPerGallon)
  {
    //Set model to this.model
    this.model = model;
    //Set mpg
    this.milesPerGallon = milesPerGallon;
    //Init the tank to 0
    this.tank = 0;
    //init the odometer to 0
    this.odometer = 0;
  }

  //Define the fill method() pass in gallons
  fill(gallons)
  {
    //Add gallons to what's already in the tank
    this.tank += gallons;
  }

  //Define the drive method() pass in distance
  drive(distance)
  {
    //If distance is less than the max range...
    if (this.tank * this.milesPerGallon > distance) 
    {
      //Increment the odometer
      this.odometer += distance;
      //...assign result of the distance / mpg to the tank
      this.tank -= distance / this.milesPerGallon;
    }

    //If distance is more than max range...
    else 
    {
      //assign the result of tank * mpg to odometer
      this.odometer += this.tank * this.milesPerGallon;
      //Assign 0 to tank
      this.tank = 0;
      //Return required string when tank is empty
      return `I ran out of fuel at ${this.odometer} miles!`
    }
  }

}
  
  /*
    TASK 3
      - Write a Lambdasian class.
      - Its constructor takes a single argument - an object with the following keys:
          + name
          + age
          + location
      - Its constructor should initialize `name`, `age` and `location` properties on the instance.
      - Instances of Lambdasian should be able to `.speak()`:
          + Speaking should return a phrase `Hello my name is {name}, I am from {location}`.
          + {name} and {location} of course come from the instance's own properties.
  */

//Define the class
class Lambdasian 
{
  //Define the constructor, pass in lambdaObject
  constructor(lambdaObject)
  {
    this.name = lambdaObject.name;
    this.age = lambdaObject.age;
    this.location = lambdaObject.location;
  }

  //Define the speak() method
  speak()
  {
    //Return the person's name and location in a string
    return `Hello my name is ${this.name}, I am from ${this.location}`
  }

}
  
  /*
    TASK 4
      - Write an Instructor class extending Lambdasian.
      - Its constructor takes a single argument - an object with the following keys:
          + All the keys used to initialize instances of Lambdasian.
          + `specialty`: what the instance of Instructor is good at, i.e. 'redux'
          + `favLanguage`: i.e. 'JavaScript, Python, Elm etc.'
          + `catchPhrase`: i.e. `Don't forget the homies`.
      - The constructor calls the parent constructor passing it what it needs.
      - The constructor should also initialize `specialty`, `favLanguage` and `catchPhrase` properties on the instance.
      - Instructor instances have the following methods:
          + `demo` receives a `subject` string as an argument and returns the phrase 'Today we are learning about {subject}' where subject is the param passed in.
          + `grade` receives a `student` object and a `subject` string as arguments and returns '{student.name} receives a perfect score on {subject}'
  */

//Define the Instructor subclass
class Instructor extends Lambdasian
{  
  //Define the constructor, pass in lambdaObject
  constructor(lambdaObject)
  {
    //Bind to parent with super(), applies parent
    super(lambdaObject);
    //Set specialty to this.specialty
    this.specialty = lambdaObject.specialty;
    //Set favLanguage to this.favLanguage
    this.favLanguage = lambdaObject.favLanguage;
    //Set catchPhrase to this.catchPhrase
    this.catchPhrase = lambdaObject.catchPhrase;
  }

  //Define the demo() method
  demo(subject)
  {
    return `Today we are learning about ${subject}`
  }

  //Define the grade() method
  grade(student, subject)
  {
    return `${student.name} receives a perfect score on ${subject}`
  }
}


  /*
    TASK 5
      - Write a Student class extending Lambdasian.
      - Its constructor takes a single argument -  an object with the following keys:
          + All the keys used to initialize instances of Lambdasian.
          + `previousBackground` i.e. what the Student used to do before Lambda School
          + `className` i.e. CS132
          + `favSubjects`. i.e. an array of the student's favorite subjects ['HTML', 'CSS', 'JS']
      - The constructor calls the parent constructor passing to it what it needs.
      - The constructor should also initialize `previousBackground`, `className` and `favSubjects` properties on the instance.
      - Student instances have the following methods:
          + `listSubjects` a method that returns all of the student's favSubjects in a single string: `Loving HTML, CSS, JS!`.
          + `PRAssignment` a method that receives a subject as an argument and returns `student.name has submitted a PR for {subject}`
          + `sprintChallenge` similar to PRAssignment but returns `student.name has begun sprint challenge on {subject}`
  */

//Define the student subclass
class Student extends Lambdasian
{
  //Define the constructor
  constructor(lambdaObject)
  {
    //Bind to parent with super(), applies parent 
    super(lambdaObject);
    //Assign previousBackground to this.previousBackground
    this.previousBackground = lambdaObject.previousBackground;
    //Assign className to this.classname
    this.className = lambdaObject.className;
    //Assign favSubjects to this.favSubjects
    this.favSubjects = lambdaObject.favSubjects;
  }
  
  //Define listSubjects() method
  listSubjects()
  {
    //Return the required string
    return `${this.favSubjects}`;
  }

  //Define PRAssignment() method, pass in subject
  PRAssignment(subject)
  {
    //Return the required string
    return `${this.name} has submitted a PR for ${subject}`;
  }

  //Define sprintChallenge() method
  sprintChallenge(subject)
  {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}
  
  /*
    TASK 6
      - Write a ProjectManager class extending Instructor.
      - Its constructor takes a single argument - an object with the following keys:
          + All the keys used to initialize instances of Instructor.
          + `gradClassName`: i.e. CS1
          + `favInstructor`: i.e. Sean
      - Its constructor calls the parent constructor passing to it what it needs.
      - The constructor should also initialize `gradClassName` and `favInstructor` properties on the instance.
      - ProjectManager instances have the following methods:
          + `standUp` a method that takes in a slack channel and returns `{name} announces to {channel}, @channel standy times!`
          + `debugsCode` a method that takes in a student object and a subject and returns `{name} debugs {student.name}'s code on {subject}`
  */

 //Define project manager subclass extending Instructor subclass
 class ProjectManager extends Instructor 
 {
   //Define the constructor
   constructor(lambdaObject)
   {
     //Bind to parent with super(), applies parent
     super(lambdaObject);
     //Assign gradClassname to this.gradClassname
     this.gradClassName = lambdaObject.gradClassName;
     //Assign favInstructor to this.favInstructor
     this.favInstructor = lambdaObject.favInstructor;
   }

   //Define the standup() method
   standUp(channel)
   {
     //Return the required string
     return `${this.name} announces to ${channel}, @channel standy times!`;
   }
  
   //Define the debugsCode() method
   debugsCode(student, subject)
   {
     return `${this.name} debugs ${student.name}'s code on ${subject}`;
   }

 }
  /*
    STRETCH PROBLEM (no tests!)
      - Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
      - Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
      - Add a graduate method to a student.
        + This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
        + If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
  */


  //End of Challenge
  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
  function foo(){
    return 'bar';
}

export default{
    foo,
    Person,
    Car,
    Lambdasian,
    Instructor,
    Student,
    ProjectManager
}
