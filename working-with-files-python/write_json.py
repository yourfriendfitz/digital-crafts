import json

names = ["Mark", "Henry", "Tom"]

person_dictionary = {
    "name": "John",
    "age": 22,
    "Occupation": "Firefighter"
}


class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    @staticmethod
    def from_dict(dict):
        return Person(dict["name"], dict["age"])

    def to_dict(self):
        return {
            "name": self.name,
            "age": self.age
        }

person_class = Person("Tom", 22)

def read_json_file(file_name):
    with open(file_name) as file_object:
        return json.load(file_object)



json_data = read_json_file("/Users/fitz/Desktop/digital-crafts/working-with-files-python/persons.json")
person_from_json = Person.from_dict(json_data)
print(person_from_json.name, person_from_json.age)




def add_json_to_file(file_name, write_content):
    with open(file_name, "w") as file_object:
        json.dump(write_content, file_object)


add_json_to_file("example.json", names)

add_json_to_file("persons.json", person_dictionary)

add_json_to_file("persons.json", person_class.__dict__)

