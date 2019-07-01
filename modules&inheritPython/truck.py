from car import Car

class Truck(Car):
  def __init__(self, make, model):
    super().__init__(make, model)
  
  def refuel(self):
    print("Fueling, Diesel")