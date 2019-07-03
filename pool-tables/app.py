from pool_table import Pool_Table

tables_ids = range(1, 13)

pool_tables = []

for id in tables_ids:
    pool_table = Pool_Table(id)
    pool_tables.append(pool_table)


def menu(array):
    print("----Pool Tables----")
    for table in array:
        if table.occupied == False:
            table_status = "Open"
            print(f"Pool table {table.id} is {table_status}")
        else:
            table_status = "In Use"
            start_time = table.start_time
            user = table.user
            print(
                f"Pool table {table.id} is {table_status} since {start_time} by {user}")


def prompt_choice():
    choice = input("Which table would you like to occupy or release? ")
    try:
        choice = int(choice)
    except:
        print("Please enter a valid table number")
        prompt_choice()
    return choice


def use_or_free():
    choice = input("Would you like to ")


def define_user():
    user = input("What is the name of the user for this table? ")
    return user


def add_json_to_file(file_name, write_content):
    import json
    with open(file_name, "w") as file_object:
        json.dump(write_content, file_object)


def occupy_table(array, index, user_id):
    array[index].start(user_id)
    print(
        f"Pool table {array[index].id} is now in use by {user_id} since {array[index].start_time}")


def free_table(array, index):
    user = array[index].user
    end, elapsed = array[index].end()
    print(f"Pool table {array[index].id} is now free from {user} since {end}")
    print(f"Total time of use is: {elapsed}")
    cost = '${:,.2f}'.format(elapsed.seconds * 0.003)
    json_entry = {
        user: f"Occupied pool table {array[index].id} at {array[index].start_time} until {end} for a total elapsed time of {elapsed}. The total cost of use is {cost}"}
    return json_entry


def prompt_send_email():
    boolean = False
    choice = input(
        "Would you like to send the log as an email?\nPress q to quit. Press any other key to send email:  ")
    if choice == "q":
        boolean = True
    return boolean


def prompt_continue():
    boolean = True
    choice = input(
        "Would you like to exit the app?\nPress q to quit. Press any other key to continue:  ")
    if choice != "q":
        boolean = False
    return boolean


def send_email(content):
    import smtplib
    import ssl
    import getpass

    smtp_server = "smtp.gmail.com"
    port = 465  # use 587 with the second method try/except

    sender = "fitzdevtest@gmail.com"
    print(sender)
    password = getpass.getpass("Enter your password: ")

    recipient = "testdevfitz2@gmail.com"
    message = f"""
    
    {content}
    
    """

    context = ssl.create_default_context()

    with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
        server.login(sender, password)
        print("Login Successful")
        server.sendmail(sender, recipient, message)
        print(f"Email sent to {sender}")


table_log = []
app_running = True
while app_running:
    menu(pool_tables)
    table_choice = prompt_choice() - 1
    if pool_tables[table_choice].occupied == False:
        user = define_user()
        occupy_table(pool_tables, table_choice, user)
    else:
        to_json = free_table(pool_tables, table_choice)
        table_log.append(to_json)
    add_json_to_file("tables_log.json", table_log)
    contiune_app = prompt_continue()
    if contiune_app:
        app_running = False
email_choice = prompt_send_email()
if not email_choice:
    send_email(table_log)
