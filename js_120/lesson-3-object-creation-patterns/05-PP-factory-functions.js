/**1) 
 * 2 disadvantages:
 * 1. Heavy memory load. This is due to all the methods being copied
 * for each instantiated object
 * 2. No real type. Each object returned is a fresh new object which is
 * not instantiated with a prototype that references the creating function.
 * 
 */

/**2)
 * Rewrite the following code to use object-literal syntax 
 * to generate the returned object:
 */

function makeObj() {
  return {
    propA: 10,
    propB: 20,
  }
}

/** 3/4/5)
 * 
 * In this problem and the remaining problems, we'll build a 
 * simple invoice processing program. To get you started, 
 * here's the code to process a single invoice:
 * 
 * To process multiple invoices, we need a factory method that 
 * we can use to create invoices. The requirements for the 
 * factory function are as follows:

It returns an invoice object, with phone and internet 
properties, and a total method.
The default value for the phone service is 3000, and the 
internet service is 5500 (in cents, of course!).
The function takes an object argument whose attributes override 
the default values.
Your function should work with the following code:


 */
function createInvoice(services={}) {
  return {
    phone: services.phone ?? 3000,
    internet: services.internet ?? 5500,
    total() {
      return this.phone + this.internet;
    },
    addPayment(paymentObj) { //amount, phone, internet
      for (let key in paymentObj) {
        let remaining = {remainder: paymentObj[key]};
        if (key === 'amount') {
          this.reduceBill(remaining, 'phone');
          this.reduceBill(remaining, 'internet');
        } else if (key === 'phone') {
          this.reduceBill(remaining, 'phone');
        } else {
          this.reduceBill(remaining, 'internet');
        }
      }

      console.log(this.phone);
      console.log(this.internet);
    },

    addPayments(paymentObj) {

    },
    reduceBill(amount, key) {
      if (this[key] > 0) {
        if (amount.remainder > this[key]) {
          this[key] = 0;
          amount.remainder = amount.remainder - this[key];
        } else {
          this[key] = this[key] - amount.remainder;
          amount.remainder = 0;
        }
      }
    }
  }

}

function invoiceTotal(invoices) {
  let total = 0;

  for (let index = 0; index < invoices.length; index += 1) {
    total += invoices[index].total();
  }

  return total;
}

// let invoices = [];
// invoices.push(createInvoice());
// invoices.push(createInvoice({ internet: 6500 }));
// invoices.push(createInvoice({ phone: 2000 }));
// invoices.push(createInvoice({
//   phone: 1000,
//   internet: 4500,
// }));

// console.log(invoiceTotal(invoices)); // 31000

/** 4 
 * 
 * 
Now we can build a factory function to create payments. The function can take an object argument in one of 3 forms:

Payment for one service, e.g., { internet: 1000 } or { phone: 1000 }.
Payment for both services, e.g., { internet: 2000, phone: 1000 }.
Payment with just an amount property, e.g., { amount: 2000 }.
The function should return an object that has the amount paid for each service and a total method that returns the payment total. 
If the amount property is not present in the argument, it should return the sum of the phone and internet service charges; if the amount 
property is present, return the value of that property.
 */

function createPayment(services={}) {
  let internetFee = services.internet ?? 0;
  let phoneFee = services.phone ?? 0;
  let amountTotal = services.amount ?? internetFee + phoneFee;

  return {
    internet: internetFee,
    phone: phoneFee,
    amount: amountTotal,
    total() {
      return this.amount;
    }
  }
}

function paymentTotal(payments) {
  return payments.reduce((sum, payment)  => sum + payment.total(), 0);
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments));      // => 24000


/** 5)
 * Update the createInvoice function so that it can add payment(s) to invoices. 
 * Use the following code as a guideline:
 */

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

let payment3 = createPayment({ phone: 1000 });

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
invoice.amountDue();       // this should return 0

