debugger;
inputName = document.getElementById("name");
inputAge = document.getElementById("age");

persons = document.getElementById("persons");

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
  newName = e.srcElement.value;
});

inputAge.addEventListener("change", function(e) {
  newAge = e.srcElement.value;
});

const addPerson = () => {
  const person = new Person(newName, newAge);
  personElement = document.createElement("span");
  aliveElement = document.createElement("span");
  killButton = document.createElement("button");
  killButton.setAttribute("onclick", "kill(this)");
  killButton.innerHTML = `Kill ${newName}`;
  personElement.innerHTML = `${person.name}, ${person.age} `;
  aliveElement.innerHTML = `- Alive: ${person.alive}`;
  aliveElement.appendChild(killButton);
  persons.appendChild(personElement);
  persons.appendChild(aliveElement);
};

const kill = e => {
  console.log(e);
};
