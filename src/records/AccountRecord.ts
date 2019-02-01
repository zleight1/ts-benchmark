import { BaseRecord } from './BaseRecord';

export class AccountRecord extends BaseRecord {
    public AccountNumber: Number;
    public AccountName: String;

    constructor(Id: String, ExternalId: String, AccountNumber: Number, AccountName: String) {
        super(Id, ExternalId);
        this.AccountNumber = AccountNumber;
        this.AccountName = AccountName;
    }
}
