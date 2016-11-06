import {ITDepartment} from '../../../../../../src/department/it/ITDepartment';
import {mock, instance, when, verify} from 'ts-mockito';
import {WirelessMicBooker} from '../../../../../../src/department/it/stuff/wirelessMic/WirelessMicBooker';
import {WirelessMicBookingJiraIssueRequestSender} from '../../../../../../src/department/it/stuff/wirelessMic/WirelessMicBookingJiraIssueRequestSender';
import {User} from '../../../../../../src/user/User';

describe('WirelessMicBooker', () => {
    let wirelessMicBooker:WirelessMicBooker;
    let itDepartment:ITDepartment;
    let jiraIssueRequestSender:WirelessMicBookingJiraIssueRequestSender;

    beforeEach(() => {
        itDepartment = mock(ITDepartment);
        jiraIssueRequestSender = mock(WirelessMicBookingJiraIssueRequestSender);
        wirelessMicBooker = new WirelessMicBooker(instance(itDepartment), instance(jiraIssueRequestSender));
    });

    describe('booking a wireless microphone headset to borrow', () => {
        describe('when the IT department is friendly for the borrowing user', () => {
            it('simply makes the booking', () => {
                // given
                const user:User = {firstName: 'Michal', lastName: 'Stocki'};
                when(itDepartment.isFriendlyFor(user)).thenReturn(true);

                // when
                wirelessMicBooker.bookMicrophoneFor(user, new Date('11-07-2016'));

                // then
                verify(itDepartment.simplyBookWirelessMicFor(user)).called();
            });
        });

        describe('when the IT department is not friendly for the borrowing user', () => {
            it('delegates creating the booking request Jira issue', () => {
                // given
                const user:User = {firstName: 'Michal', lastName: 'Stocki'};
                when(itDepartment.isFriendlyFor(user)).thenReturn(false);
                const date = new Date('11-07-2016');

                // when
                wirelessMicBooker.bookMicrophoneFor(user, date);

                // then
                verify(jiraIssueRequestSender.sendBookRequestFor(user, date)).called();
            });
        });
    });
});
