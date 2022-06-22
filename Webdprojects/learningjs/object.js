// const job = ["deepesh", 22121, "agrawal", salary];
console.log(new Date().toISOString()); //inbuilt in java script toISOString is function

class Job {
  constructor(jobtitle, place, salary) {
    this.title = jobtitle; //to
    this.location = jobtitle; //to
    this.salary = jobtitle; //to
  } //add method

  describe() {
    console.log(
      `hi my name is ${this.title} and my location is ${this.location} salary is ${this.salary}`
    );
  }
}

const developer = new Job(`hi`, `hi`, `hi`);
const cook = new Job(`hi`, `hi`, `hi`);
developer.describe();

const job = { title: "developer", location: "network" };
const { title: jtitle } = job; //to convert title to jtitle

console.log(jtitle);

//destructuring
// const input = ["deepesh", "deepesh"];
// undefined;
// const fname = input[0];
// undefined;
// const lname = input[1];
// undefined;
// const [first, last] = input;
// undefined;
// first;
// ("deepesh");
// last;
// ("deepesh");

// ************************************************************************************************************************************

// asyncronos code
