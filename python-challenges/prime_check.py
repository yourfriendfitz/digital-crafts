# Prime number check
number = int(input("Enter a number: "))

if number > 1:
   for integer in range(2,number):
       if (number % integer) == 0:
           print(f"{number} is not a prime number")
           print(f"{integer} times {number//integer} is {number}")
           break
   else:
       print(f"{number} is a prime number")
else:
   print(f"{number}is not a prime number")