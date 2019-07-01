class Car: ## this is the parent class
  def __init__(self, make, model):

    self.make = make
    self.model = model

  def drive(self):
    print("Driving")
  
  def refuel(self):
    print("Fueling")
