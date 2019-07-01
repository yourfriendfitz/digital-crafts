class Task:
    def __init__(self, name):
        self.name = name

class Palindrome:
    def __init__(self, word):
        self.word_to_check = word
    
    def reverse(self):
        return ("".join(reversed(self.word_to_check)))
