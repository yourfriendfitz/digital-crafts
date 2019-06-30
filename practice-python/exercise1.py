def when_is_user_100yr():
    name = input("What is your name? ")
    age = int(input("What is your age? "))
    if age not in range(120):
        print("Are you sure you're older than 120?")
        age = int(input("What is your age? "))
    if age < 100:
        years_to_100 = 100 - age
    else:
        years_to_100 = 0
    if years_to_100 != 0:
        print(f"{name} will be 100 years old in {years_to_100} years")
    else:
        print(f"{name} is 100 years old or older")
    times_to_repeat = int(input("How many times would you like to repeat the previous message? "))
    if times_to_repeat > 25:
        print("That is too many times to repeat!")
        times_to_repeat = int(input("How many times would you like to repeat the previous message? "))
    for i in range(times_to_repeat):
        if years_to_100 != 0:
            print(f"{name} will be 100 years old in {years_to_100} years")
        else:
            print(f"{name} is 100 years old or older")

when_is_user_100yr()