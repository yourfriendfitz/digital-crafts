from car import Car

class ElectricCar(Car): ## this is a sub-class, Car is passed as an arg to inherit
  def __init__(self, make, model, range):
    super().__init__(make, model) ## super() references the Car parent class
    self.range = range
  
  def refuel(self): ## overide the refuel function from Car class for electric
    print("Charging")