export class BaseRecord {
    public Id: String;
    public ExternalId: String;

    constructor(Id: String, ExternalId: String) {
        this.Id = Id;
        this.ExternalId = ExternalId;
    }
}