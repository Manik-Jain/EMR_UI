export class Audit {

    id : number;
    entityId : string;
    entityType : string;
    attributeUpdated : string;
    previousValue : string;
    newValue : string;
    changedBy : string;
    updatedOn : string;

    constructor(id : number,
        entityId : string,
        entityType : string,
        attributeUpdated : string,
        previousValue : string,
        newValue : string,
        changedBy : string,
        updatedOn : string) {
            this.id = id;
            this.entityId = entityId;
            this.entityType = entityType;
            this.attributeUpdated = attributeUpdated;
            this.previousValue = previousValue;
            this.newValue = newValue;
            this.changedBy = changedBy;
            this.updatedOn = updatedOn;
        }

}