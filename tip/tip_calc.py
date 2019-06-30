#!/usr/bin/env python3

class Tip_Calc:
    """Simple class to perform tip calculations
    enter bill amount in (total) and percentage to
    tip in (percentage)"""
    def __init__ (self, total, percentage):
        self.total = total
        self.pct = percentage
    def calc_tip(self):
        pct = (int(self.pct) / 100)
        tip = (float(self.total) * pct)
        print(f"Your tip amount is {tip:.2f}")

total = input("What was your total bill? ")
percentage = input("What percentage would you like to tip? ex: 20 = 20% ")

tip_one = Tip_Calc(total, percentage)

tip_one.calc_tip()