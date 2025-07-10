class BankAccount {
  #accountNumber
  #balance = 0
  #transactionHistory = [];

  constructor() {
    this.#accountNumber = (Math.random() * 10000000).toFixed(0);
  }

  deposit(amt) {
    this.#balance += amt;
    this.#transactionHistory.push({ deposit: amt });
  }

  getBalance() {
    return this.#balance;
  }

  get balance() {
    return this.#balance;
  }

  withdraw(amt) {
    if (this.#balance >= amt) {
      this.#balance -= amt;
      this.#transactionHistory.push( {withdrawal: amt });
      return amt;
    } else {
      console.log('Insufficient Funds');
    }
  }

  transactionHistory() {
    this.#transactionHistory.forEach(obj => {
      let key = Object.keys(obj).toString();
      console.log(`${key}: ${obj[key]}`);
    })
  }
}

let account = new BankAccount();

account.transactionHistory();
account.deposit(5000);
account.transactionHistory();
account.withdraw(6000);
account.withdraw(5000);
account.deposit(1000);
account.transactionHistory();
console.log(account.getBalance());
