class Todo:
    """A class to make a simple todo list application"""

###############

    def new_task(self):
        task_name = input("What is the name of the task to add? ")
        task_priority = (
            input("What priority level is this task (1 = low, 2 = medium, or 3 = high) ? "))
        while True:
            try:
                int(task_priority)
                break
            except:
                task_priority = input("Please enter 1, 2, or 3 only: ")
        self.tasks.append(
            {f"task{len(self.tasks) +1}": {task_name: f"with a priority of {task_priority}"}})
        print(f"{task_name} was added to the task list \n{self.tasks}")
        self.task_menu()

###################

    def delete_task(self):
        print(self.tasks)
        task_to_del = input("Which task would you like to delete? ex. task1 ")
        try:
            for item in list(self.tasks):
                for (key, value) in item.items():
                    if key == task_to_del:
                        self.tasks.remove(item)
                        print(f"{task_to_del} was removed from the task list")
                        self.task_menu()
            else:
                print("Invalid task ID")
                exit_or_continue = int(
                    input("Input 1 to try again \n Input 2 to return to the main menu: "))
                if exit_or_continue == 1:
                    self.delete_task()
                else:
                    self.task_menu()
        except Exception as e:
            print(e)
        self.task_menu()

##################

    def cont(self):
        import time
        ready = input("Continue? (y/n) ")
        while True:
            try:
                if ready == "y":
                    self.task_menu()
                if ready == "n":
                    time.sleep(5)
                    self.cont()
                if ready != "y" and ready != "n":
                    ready = input("Please input (y) or (n) only: ")
            except Exception as e:
                print(e)

##################

    def list_tasks(self):
        print(self.tasks)
        self.cont()

#################

    def task_menu(self):
        option = (input(
            "Input 1 for a new task \n Input 2 to delete a task \n Input 3 to view all tasks \n Input q to quit application: "))
        trying = True
        while trying:
            try:
                if option == "q":
                    trying = False
                    return
                if int(option) == 1:
                    trying = False
                    self.new_task()
                    break
                if int(option) == 2:
                    trying = False
                    self.delete_task()
                    break
                if int(option) == 3:
                    trying = False
                    self.list_tasks()
                    break
            except Exception as e:
                if option not in [1, 2, 3, "q"]:
                    option = input("Please enter 1, 2, 3, or q only: ")
                    trying = True
                else:
                    print(e)

#################

    def __init__(self):
        self.tasks = []
        self.task_menu()


new_todo = Todo()
