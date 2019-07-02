def add_to_file(file_name, write_content):
    with open(file_name, "a") as file_object:
        file_object.write(write_content)

def ask_for_name(file_name):
    asking = True
    while asking:
        name = input("What name would you like to add to the guestbook? Type q to quit:  ")
        if name == "q":
            asking = False
        else:
            add_to_file(file_name, f"\n{name}")

ask_for_name("guest.txt")


def ask_for_response(file_name, question):
    asking = True
    add_to_file(file_name, f"-------{question}-------")
    while asking:
        response = input(f"{question} Type q to quit: ")
        if response == "q":
            asking = False
        else:
            add_to_file(file_name, f"\n{response}")

ask_for_response("responses.txt", "Why do you like programming?")