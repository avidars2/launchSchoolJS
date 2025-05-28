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

/**
 * 
 * Given payments, if overpaid, pay off other amounts
 * 
 * bill for phone: 1000
 * pay for phone is 2000
 * 
 * bill goes to 0, overage goes to other
 * 
 * addPayments method:
 * I: Object with either {phone: 0 and/or internet: 0} or {amount: 0}
 * O: 
 * 
 * {
 * phone: 1000,
 * internet: 2000
 * }
 * 
 * 
 * if phone && phonebill > 0 && amount <= phonebill
 * ---pay off phone
 * 
 * if phone && phonebill === 0
 * ---add to amountPaid
 * 
 * Similar logic for internet
 * 
 * Lastly,
 * If amountPaid > 0 && phone or internet > 0, pay off phone or internet with stored amount
 * 
 * 
 * addPayments:
 * for each object in array, pass to addPayment
 * 
*/

function createInvoice(services={}) {
  return {
    phone: services.phone ?? 3000,
    internet: services.internet ?? 5500,
    amountPaid: 0,
    total() {
      return this.phone + this.internet;
    },
    addPayments(payObjArr) {
      payObjArr.forEach((payObj => this.addPayment(payObj)), this)      
    },
    addPayment(payObj) {
      console.log(payObj);
      console.log(`Total owed: `, this.total());
      let phoneAction = this.evaluateProperty(payObj, 'phone');
      let internetAction = this.evaluateProperty(payObj, 'internet');
      console.log(phoneAction, internetAction);
      if (phoneAction === 'pay') {
        this.phone = this.phone - payObj.phone;
      }
      if (internetAction === 'pay') {
        this.internet = this.internet - payObj.internet;
      }
      if (phoneAction === 'split') {
        this.amountPaid += payObj.phone - this.phone; //Remainder added to amount paid
        this.phone = 0; //Amount set to 0
      }
      if (internetAction === 'split') {
        this.amountPaid += payObj.internet - this.internet; //Remainder added to amount paid
        this.internet = 0; //Amount set to 0
      }
      if (phoneAction === 'move') {
        this.amountPaid += payObj.phone;
      }
      if (internetAction === 'move') {
        this.amountPaid += payObj.internet;
      }

      if (payObj.hasOwnProperty('amount')) {
        this.amountPaid += payObj.amount;
      }

      this.allocateExcessFunds('phone');
      this.allocateExcessFunds('internet');

      console.log('Excess: ', this.amountPaid);
      console.log('Phone remainder: ', this.phone);
      console.log('Internet remainder: ', this.internet);

    },
    evaluateProperty(payObj, service) {
      if (payObj.hasOwnProperty(service) && this[service] > 0 &&
      payObj[service] <= this[service]) {
        return 'pay';
      } else if (payObj.hasOwnProperty(service) && this[service] > 0 &&
      this[service] <= payObj[service]) {
        return 'split';        
      } else if (payObj.hasOwnProperty(service) && this[service] === 0) {
        return 'move';
      } else return false;
    },
    allocateExcessFunds(service) {
      if (this.amountPaid > 0 && this[service] > 0) {
        if (this.amountPaid > this[service]) {
          this.amountPaid = this.amountPaid - this[service];
          this[service] = 0;
        } else if (this.amountPaid === this[service]) {
          this.amountPaid = 0;
          this[service] = 0;
        } else {
          this[service] = this[service] - this.amountPaid;
          this.amountPaid = 0;
        }
      }
    },
    amountDue() {
      return this.phone + this.internet;
    }

  }
}

function createPayment(services={}) {
  return {
    internet: services.internet ?? 0,
    phone: services.phone ?? 0,
    amount: services.amount ?? 0,
    total() {
      return this.internet + this.phone;
    }
  }
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

console.log(payment2);

let payment3 = createPayment({ phone: 1000 });

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
invoice.amountDue();       // this should return 0
console.log(invoice.amountDue());
