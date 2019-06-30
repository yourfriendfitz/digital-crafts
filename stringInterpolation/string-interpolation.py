class Person:
    """A simple class for creating a person with a first and last name"""
    def __init__(self, firstName, lastName):
        self.first = firstName
        self.last = lastName
    def printName(self):
        print(f"Hello my name is {self.first} {self.last}")
    
a = input("Whats your first name? ")
b = input("Whats your last name? ")
personOne = Person(a, b)
personOne.printName()