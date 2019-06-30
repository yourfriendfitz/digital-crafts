class Calc:
  """Simple class to perform calculations"""
  def __init__ (self, number_one, number_two):
    self.a = number_one
    self.b = number_two
  def add(self):
    return self.a + self.b
  def mult(self):
    return self.a * self.b
  
firstCalc = Calc(1, 5)

# Using a method as an arg in another instance of Calc()

secondCalc = Calc(firstCalc.add(), 9)

print(firstCalc.add()) # return 6
print(firstCalc.mult()) # return 5
print(secondCalc.add()) # return 15
print(secondCalc.mult()) # return 54
