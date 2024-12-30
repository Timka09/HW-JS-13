// Task 1
const user = {
  hobby: "gaming",
  premium: true,
};
const {hobby, premium} = user
// Task 2
const employees = {
  ola: 100000000000000000000,
  barys: 10,
  timaHacker: 12341924783290573498563487956437534534895693485689436834,
};
const { ola, barys, timaHacker } = employees
// Task 3
const salary = {
  timohaaaaa: 1000,
  olga: 2000,
  barysBarys: 3000,
};
const {timohaaaaa, olga, barysBarys} = salary
// Task 5
const products = [
  { name: "Laptop", price: 1500, quantity: 4 },
  { name: "Smartphone", price: 800, quantity: 10 },
  { name: "Tablet", price: 1200, quantity: 5 },
];
const [product1, product2, product3] = products
for (const { name, price, quantity } of products) {
  console.log(`Product: ${name}, Price: ${price}, Quantity: ${quantity}`);
}

// Task 7 (from 12 homework)

const account = {
  accountName: "Timoha",
  balance: 1000, 
  transactions: [], 

  getBalance() {
    return this.balance;
  },

  deposit() {
    const depositNum = Number(prompt("Сільки хочете закинути на свій рахунок"));
    this.balance += depositNum;
    return alert(`ваш рухунок після депозиту ${this.balance}`);
  },

  withdraw() {
    const withdrawNum = Number(prompt("Сільки хочете зняти зі свого рахунку"));
    this.balance -= withdrawNum;
    return alert(`ваш рахунок після зняття коштів ${this.balance}`);
  },

  getTransactions() {
    return this.transactions;
  },
};


const { balance, transactions, deposit, withdraw, getBalance, getTransactions } = account;

