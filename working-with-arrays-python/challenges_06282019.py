#### Make a Asterisk Pyramid ####


def pyramid(number):
    asterisk = 1
    for n in range(1, number + 1):
        print((" " * number) + ("*" * asterisk))
        number -= 1
        asterisk += 2


pyramid(5)

#### Remove duplicates from an array ####

names = ["Alex", "John", "Mary", "Steve", "John", "Steve"]

print(list(dict.fromkeys(names)))

#### Find the largest element in an array ####


def largest_element(array):
    result = ""
    for item in array:
        if len(item) > len(result):
            result = item
    return result


names = ["Alex", "John", "Mary", "Steve", "John", "Steve"]

print(largest_element(names))

#### Find the smallest element in the array ####


def smallest_element(array):
    result = array[0]
    for item in array:
        if len(item) < len(result):
            result = item
    return result


names = ["Alex", "John", "Mary", "Steve", "John", "Steve"]

print(smallest_element(names))

#### Find the missing integer ####


def missing_integer(array):
    for item in array:
        for i in range(10):
            if i not in array:
                return i


numbers = [0, 1, 2, 3, 5, 6, 7, 8, 9, 8]

print(missing_integer(numbers))

#### Duplicate an array ####

arr = [1, 2, 3, 4, 5]


def duplicate_array(array):
    new_array = []
    for item in array:
        new_array.append(item)
    new_array += array
    return new_array


print(duplicate_array(arr))
