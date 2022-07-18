const hobbies = ["deepesh", "agrawal"]; //a pointer to the array is stored
hobbies.push("re");
console.log(hobbies[2]);
//memory analysis
// primitive numbers,string ,boolean,&more(different memory)
// reference :objects(different memory)
const person = {
  name: 20,
};
function getadult(p) {
  p.name -= 18;
  return p.name; //p.name-18 to not change orignal object
}
// console.log(getadult(person)); //we get 2 as a result both prson change
// console.log(getadult({ age: person.name }));
console.log(getadult({ ...person }));
