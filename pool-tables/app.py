from pool_table import Pool_Table
from functions import *

tables_ids = range(1, 13)

pool_tables = []

for id in tables_ids:
    pool_table = Pool_Table(id)
    pool_tables.append(pool_table)


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
    if table_choice == "q"
        app_running = False
email_choice = prompt_send_email()
if not email_choice:
    send_email(table_log)
