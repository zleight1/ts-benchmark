import { BaseRecord } from './BaseRecord';

export class VendorRecord extends BaseRecord {
    public FirstName: String;
    public LastName: String;

    constructor(Id: String, ExternalId: String, FirstName: String, LastName: String) {
        super(Id, ExternalId);
        this.FirstName = FirstName;
        this.LastName = LastName;
    }
}