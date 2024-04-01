// //closure

// function outer() {
//   let name = 'tim';
//   function inner() {
//     console.log(`hello there secret is : ${name} `);
//   }
//   return inner;
//   inner();
// }

// outer()();

//closure basic example

// function newAccount(name, initialBalance) {
//   let balance = initialBalance;
//   function showBalance() {
//     console.log(`Hello ${name}, your balance is $${balance}`);
//   }
//   return showBalance;
// }

// newAccount('tim', 500)();

// const jim = newAccount('jim', 300);
// const kim = newAccount('kim', 300);

// jim();
// kim();

//closure complex example

function newAccount(name, initialBalance) {
  let balance = initialBalance;

  function showBalance() {
    console.log(`Hello ${name}, your balance is $${balance}`);
  }
  function deposit(amount) {
    balance += amount;
    showBalance();
  }
  function withdraw(amount) {
    if (amount > balance) {
      console.log(`Hello ${name}, not enough money`);
      return;
    }
    balance -= amount;
    showBalance();
  }

  return { showBalance: showBalance, withdraw, deposit };
}

const jim = newAccount('jim', 300);
const kim = newAccount('kim', 300);

jim.showBalance();
kim.showBalance();

jim.deposit(1000);
jim.withdraw(2000);
jim.withdraw(1000);
