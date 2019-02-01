import { AccountRecord } from './records/AccountRecord';
import { VendorRecord } from './records/VendorRecord';
import { PaymentRecord } from './records/PaymentRecord';

const myVendor = new VendorRecord("1", "A", "John", "Smith");
const myAccount = new AccountRecord("2", "B", 555, "Checking");
const firstPayment = new PaymentRecord("123", "456", 666.66, myVendor, myAccount);

console.log(JSON.stringify(firstPayment));
