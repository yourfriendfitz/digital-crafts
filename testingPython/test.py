import unittest
from App import *

# unittest is a module, TestCase contains the unit testing functions
# unittest will run each method starting with test ex. testReverseString


class TodoListTestCase(unittest.TestCase):
    def testAddTask(self):
        task = Task("Task Test")
        self.assertIsNotNone(task)


class PalindromeTestCase(unittest.TestCase):
    def setUp(self):  # ran before each test
        print("setting up")
        self.palindrome = Palindrome("cat")

    def testReverseString(self):
        self.assertEqual("tac", self.palindrome.reverse())

    def tearDown(self):  # ran after each test
        print("tearing down")


# run the test
unittest.main()
