export abstract class AbstractClass {

    protected nextCell:AbstractClass;

    public setNextChain(cell:AbstractClass):void {
        this.nextCell = cell;
    }

    public methodA(argumentA:Objectable):void {
        this.nextCell.methodA(argumentA);
    }
}

export class Objectable {
    constructor(public isObjectable:boolean) {
    }
}