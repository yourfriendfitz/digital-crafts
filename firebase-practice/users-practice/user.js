class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.hobbies = [];
  }

  addHobby = hobbyObj => {
    this.hobbies.push(hobbyObj);
  };
}
