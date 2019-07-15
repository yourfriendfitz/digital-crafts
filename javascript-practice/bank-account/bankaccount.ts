class BankAccount {
  balance: number;
  acctType: string;
  firstName: string;
  middleName: string;
  lastName: string;
  acctStatus: string;
  constructor(infoArr: Array<string>, acctType: string, initialDeposit: number) {
    [this.firstName, this.lastName, this.middleName] = [...infoArr];
    this.acctType = acctType;
    this.balance = initialDeposit;
    this.acctStatus = "opened";
  }
  deposit(deposit: number) {
    this.balance += deposit;
  }
  withdrawal(amount: number) {
    this.balance -= amount;
    if (this.balance > 0) {
      this.balance -= 35;
    }
  }
  transfer(BankAccount: BankAccount, amount: number) {
    this.balance -= amount;
    BankAccount.balance += amount;
  }
}
