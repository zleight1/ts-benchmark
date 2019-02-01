import { BaseRecord } from './BaseRecord';
import { VendorRecord } from './VendorRecord';
import { AccountRecord } from './AccountRecord';

export class PaymentRecord extends BaseRecord {
    public Amount: Number;
    public Vendor: VendorRecord;
    public Account: AccountRecord;

    constructor(Id: String, ExternalId: String, Amount: Number, Vendor: VendorRecord, Account: AccountRecord) {
        super(Id, ExternalId);
        this.Amount = Amount;
        this.Vendor = Vendor;
        this.Account = Account;
    }
}