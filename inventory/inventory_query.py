makes = ["honda", "kia", "ford"]
models = {
  "honda": ["civic", "accord", "cr-v"],
  "kia": ["forte", "sedona"],
  "ford": ["f-150", "focus", "escape"]
}
colors = {
  "civic": ["blue", "green"],
  "accord": ["blue", "red"],
  "cr-v": ["blue", "green"],
  "forte": ["blue", "black"],
  "sedona": ["white", "green"],
  "f-150": ["blue", "white"],
  "focus": ["blue", "yellow"],
  "escape": ["blue", "gray"]

}

def new_car():
  car = {
    "make": input("enter the make: "),
    "model": input("enter the model: "),
    "color": input("enter the color: "),
  }
  return car

def is_car_avail(car):
  has_make = False
  has_model = False
  has_color = False
  make, model = car["make"], car["model"]
  for (k, v) in car.items():
    if k == "make":
      for i in makes:
        if i == v:
          has_make = True
    if k == "model":
      for i in models[make]:
        if i == v:
          has_model = True
    if k == "color":
      for i in colors[model]:
        if i == v:
          has_color = True
  print(f"Inventory query \n Do we have the specified make? {has_make} \n Do we have the specified model? {has_model} \n Do we have the specified color? {has_color}")

is_car_avail(new_car())
