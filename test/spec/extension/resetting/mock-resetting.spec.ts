import {instance, mock, reset, when} from 'ts-mockito';
import {expect} from '../../../util/expect';

describe('Mock resetting', () => {
    it('should reset a value configured to be returned', () => {
        // given
        const myClassMock = mock(MyClass);
        when(myClassMock.methodB('some string')).thenReturn('other string');
        const myClass = instance(myClassMock);
        reset(myClassMock);

        // when
        const result = myClass.methodB('some string');

        // then
        expect(result).to.not.equal('other string');
    });
});

class MyClass {

    public methodB(someArgument:string):string {
        return `provided value: ${someArgument}`;
    }
}