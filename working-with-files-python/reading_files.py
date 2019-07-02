
def open_read_file(file_name):
    with open(file_name) as file_object:  # this is a simple context manager
        contents = file_object.read()
        return contents


print(open_read_file("sample.txt"))


def open_read_file_by_line(file_name):
    with open(file_name) as file_object:
        lines = file_object.readlines()
        return lines


emails = open_read_file_by_line("example_emails.txt")

for email in emails:
    print(email)


def overwrite_file(file_name, write_content):
    with open(file_name, "w") as file_object:
        file_object.write(write_content)

overwrite_file("write_example.txt", "jsmith@mac.com")


def add_to_file(file_name, write_content):
    with open(file_name, "a") as file_object:
        file_object.write(write_content)

add_to_file("write_example.txt", "\nthurston@me.com")