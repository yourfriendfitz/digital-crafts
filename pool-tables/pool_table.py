class Pool_Table:
    def __init__(self, id):
        self.id = id
        self.occupied = False
        self.user = "no user"

    def start(self, user_id):
        import datetime
        self.start_time = datetime.datetime.now()
        self.user = user_id
        self.occupied = True
        return self.start_time
    
    def end(self):
        import datetime
        self.end_time = datetime.datetime.now()
        elapsed_time = self.end_time - self.start_time
        self.user = "no user"
        self.occupied = False
        return self.end_time, elapsed_time
