import {AbstractClass, Objectable} from './AbstractClass';

export class SecondAbstractClassExtension extends AbstractClass {

    constructor(private a:number) {
        super();
    }

    public methodA(argumentA:Objectable):void {
        super.methodA(argumentA);
    }
}