import unittest
from ShoppingList import ShoppingList
from GroceryItem import GroceryItem

# unittest is a module, TestCase contains the unit testing functions
# unittest will run each method starting with test ex. testReverseString

class GroceryAppTestCase(unittest.TestCase):
    def setUp(self):  # ran before each test
        self.shoppingList = ShoppingList("Kroger", "Spring Branch")
        self.groceryItem = GroceryItem("milk", (1.99))


    def testAddShoppingList(self):
        self.assertIsNotNone(self.shoppingList)
        print("test1")
    
    def testAddGroceryItem(self):
        self.assertIsNotNone(self.groceryItem)
        print("test2")

    def tearDown(self):  # ran after each test
        pass

# run the test
unittest.main()
