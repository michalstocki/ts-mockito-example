import {User} from '../../user/User';

export class ITDepartment {

    constructor() {
        console.info('message from a ITDepartment constructor!');
    }

    public isFriendlyFor(user:User):boolean {
        return null;
    }

    public simplyBookWirelessMicFor(user:User):void {
        return null;
    }
}