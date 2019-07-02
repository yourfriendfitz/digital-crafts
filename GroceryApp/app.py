from ShoppingList import ShoppingList
from GroceryItem import GroceryItem


def add_json_to_file(file_name, write_content):
    import json
    with open(f"{file_name}.json", "w") as file_object:
        print(f"adding list to {file_name}.json")
        json.dump(write_content, file_object)

def prompt_item_info(class_object):
    item = input(
        f"What Item would you like to add to the list for {class_object.store}, {class_object.storeLoc}: ")
    price = input(f"What is the price of {item}? ex 1.99 ")
    quantity = input(f"What quantity of {item} would you like? ")
    return item, price, quantity


def prompt_store_and_location():
    store = input("What store would you like to start a list for? ")
    location = input(
        "Where is this store located? ex Spring Branch or Katy ")
    return store, location


def prompt_edit_list(array):
    printStoreListsCondensed(array)
    index_to_edit = input(
        "Which list from above would you like to add items to? Use the index left of the list name: ")
    index_to_edit = int(index_to_edit) - 1
    return index_to_edit


def app_continue():
    app_continue = input(
        "Press q to quit, Press e to edit a list, Press any other key to continue: ")
    return app_continue


def add_items_continue(class_object):
    boolean = True
    app_continue = input(
        f"Press q to quit, Press any other key to continue adding items for {class_object.store}, {class_object.storeLoc}: ")
    if app_continue == "q":
        boolean = False
    return boolean


def add_item_list(class_object):
    item, price, quantity = prompt_item_info(class_object)
    class_object.items.append(GroceryItem(
        item, float(price), int(quantity)))
    class_object.items_to_json.append(GroceryItem(
        item, float(price), int(quantity)).__dict__)


def edit_list(index, array):
    item, price, quantity = prompt_item_info(array[index])
    array[index].items.append(GroceryItem(
        item, float(price), int(quantity)))
    array[index].items_to_json.append(GroceryItem(
        item, float(price), int(quantity)).__dict__)
    


def menu_ui():
    print("-----------------")
    print("Press 1 to add a new list")
    print("Press 2 to edit an existing list")
    print("Press 3 to view all lists")
    print("-----------------")


def first_menu_ui():
    print("-----------------")
    print("Press enter to add a new list")
    print("Press q to quit")
    print("-----------------")


def first_menu():
    first_menu_ui()
    choice = input("Enter: ")
    return choice


def main_menu():
    menu_ui()
    user_input = input("Input 1, 2, or 3: ")
    return int(user_input)


def printStoreLists(array):
    index = 0
    for storeList in array:
        print("----------------------------------")
        print("\n")
        print(f"Index ({index + 1})",
              f"List for {storeList.store}, {storeList.storeLoc}")
        print("---------------------------")
        index += 1
        for item in storeList.items:
            print(item.name)
            print(f"${item.price}")
            print(f"Qty: {item.quantity}")
            print("***************")
        print("---------END---------")
        print("\n")


def printStoreListsCondensed(array):
    index = 0
    for storeList in array:
        print("----------------------------------")
        print("\n")
        print(f"Index ({index + 1})",
              f"List for {storeList.store}, {storeList.storeLoc}")
        print("---------------------------")
        index += 1


def groceryApp():
    groceries = []
    groceries_to_json = []
    app_running = True
    first_run = True
    skip_menu = False
    while app_running:
        if first_run:
            choice = first_menu()
            if choice == "q":
                return
            else:
                choice = 1
            first_run = False
        if choice == 0:
            choice = main_menu()
        if choice == 1:
            store, location = prompt_store_and_location()
            shoppingList = ShoppingList(store, location)
            adding_items_in_list = True
            choice = 0
        if choice == 2:
            index = prompt_edit_list(groceries)
            edit_list(index, groceries)
            adding_items_in_list = True
        if choice == 3:
            printStoreLists(groceries)
            choice = 0
        while adding_items_in_list:
            print("#############################")
            add_item_list(shoppingList)
            print("#############################")
            keep_adding = add_items_continue(shoppingList)
            if not keep_adding:
                adding_items_in_list = False
        groceries.append(shoppingList)
        groceries_to_json.append({f"{shoppingList.store}, {shoppingList.storeLoc}": shoppingList.items_to_json})
        printStoreLists(groceries)
        user_input = app_continue()
        keep_running = True
        if user_input == "e":
            index = prompt_edit_list(groceries)
            edit_list(index, groceries)
            choice = 2
        if user_input == "q":
            keep_running = False
        if not keep_running:
            app_running = False
        add_json_to_file("groceryList", groceries_to_json)


groceryApp()
