
number = int(input("Enter a number: "))

if number > 1:
   for integer in range(2,number):
       if (number % integer) == 0:
           print(number,"is not a prime number")
           print(integer,"times",number//integer,"is",number)
           break
   else:
       print(number,"is a prime number")
else:
   print(number,"is not a prime number")