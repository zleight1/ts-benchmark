import { IRecord } from './IRecord';
export class BaseRecord implements IRecord {
    public Id: String;
    public ExternalId: String;

    constructor(Id: String, ExternalId: String) {
        this.Id = Id;
        this.ExternalId = ExternalId;
    }
}