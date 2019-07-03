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

# try:
#     server = smtplib.SMTP(smtp_server, port)
#     server.ehlo()
#     server.starttls(context = context)
#     server.ehlo()
#     server.login(sender, password)
#     print("Login Successful")
# except Exception as e:
#     print(e)
# finally:
#     server.quit()
