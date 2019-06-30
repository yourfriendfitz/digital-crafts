def reverse_string(word):
  return word[::-1]

def palindrome_check(word):
    if word == reverse_string(word):
        print(f"{word} is a palindrome")
    else:
        print(f"{word} is not a palindrome")

palindrome_check("cat")
palindrome_check("mom")