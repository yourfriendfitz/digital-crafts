
inputName = document.getElementById("name")
inputAge = document.getElementById("age")

persons = document.getElementsByClassName("persons")

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.alive = true;
  }
  birthday() {
    this.age += 1;
  }
  death() {
    this.alive = false;
  }
}

let newName, newAge;

inputName.addEventListener("change", function(e) {
    newName = e.srcElement.value
})

inputAge.addEventListener("change", function(e) {
    newAge = e.srcElement.value
})

const addPerson = () => {
    const person = new Person(newName, newAge)
    personElement = document.createElement("span")
    personElement.innerHTML = `${person.name}, ${person.age} - ${person.alive}`
    persons.appendChild(personElement)
}
