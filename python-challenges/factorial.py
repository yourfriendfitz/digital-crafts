
def factorial(n):
    result = 1
    for number in range(1, n+1):
        result = result * number
    return result


print(factorial(5))
