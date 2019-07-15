class BankAccount {
  constructor(infoArr, acctType, initialDeposit) {
    [this.firstName, this.lastName, this.middleName] = [...infoArr];
    this.acctType = acctType;
    this.balance = initialDeposit;
    this.acctStatus = "opened";
  }
  deposit(deposit) {
    this.balance += deposit;
  }
  withdrawal(amount) {
    this.balance -= amount;
    if(this.balance > 0) {
        this.balance -= 35
    }
  }
  transfer(BankAccount, amount) {
      this.balance -= amount;
      BankAccount.balance += amount
  }
}
