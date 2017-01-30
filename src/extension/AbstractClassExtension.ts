import {AbstractClass, Objectable} from './AbstractClass';

export class AbstractClassExtension extends AbstractClass {

    constructor(private a:boolean) {
        super();
    }

    public methodA(argumentA:Objectable):void {
        if (argumentA.isObjectable) {
            this.nextCell.methodA(argumentA);
        }
    }
}