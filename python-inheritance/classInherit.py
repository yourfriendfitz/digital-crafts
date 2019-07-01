############################ Simple Inheritance

class Car:  # this is the parent class
    def __init__(self, make, model):
        self.make = make
        self.model = model

    def drive(self):
        print("Driving")

    def refuel(self):
        print("Fueling")


class ElectricCar(Car):  # this is a sub-class, Car is passed as an arg to inherit
    def __init__(self, make, model, range):
        super().__init__(make, model)  # super() references the Car parent class
        self.range = range

    def refuel(self):  # overide the refuel function from Car class for electric
        print("Charging")


class Truck(Car):
    def __init__(self, make, model):
        super().__init__(make, model)

    def refuel(self):
        print("Fueling, Diesel")


tesla_car = ElectricCar("Tesla", "Model S", 350)
tesla_car.drive()

########################### Single inheritance from multiple classes


class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age


class Grandfather(Person): ## inherits from Person
    def __init__(self, name, age):
        super().__init__(name, age)
        self.hobby = ""
        self.occupation = ""


class Father(Grandfather): ## Inherits from Grandfather which inherits from Person
    def __init__(self, name, age):
        super().__init__(name, age)
        self.job = ""


class Kid(Father): ## Inherits from Father which inherits from Grandfather which inherits from Person
    def __init__(self, name, age):
        super().__init__(name, age)
        self.toys = []


little_timmy = Kid("Timmy", 11)
