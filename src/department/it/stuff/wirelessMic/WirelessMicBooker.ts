import {User} from '../../../../user/User';
import {ITDepartment} from '../../ITDepartment';
import {WirelessMicBookingJiraIssueRequestSender} from './WirelessMicBookingJiraIssueRequestSender';

export class WirelessMicBooker {

    constructor(private itDepartment:ITDepartment,
                private wirelessMicBookingJiraIssueRequestSender:WirelessMicBookingJiraIssueRequestSender) {
    }

    public bookMicrophoneFor(user:User, date:Date):void {
        return null;
    }

}