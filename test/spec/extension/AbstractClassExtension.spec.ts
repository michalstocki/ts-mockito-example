import {AbstractClassExtension} from '../../../src/extension/AbstractClassExtension';
import {AbstractClass, Objectable} from '../../../src/extension/AbstractClass';
import {mock, instance, verify} from 'ts-mockito';
import {SecondAbstractClassExtension} from '../../../src/extension/SecondAbstractClassExtension';

describe('AbstractClassExtension', () => {

    let abstractClassExtension:AbstractClassExtension;
    let nextCell:AbstractClass;

    beforeEach(() => {
        nextCell = mock(SecondAbstractClassExtension);
        abstractClassExtension = new AbstractClassExtension(true);
        abstractClassExtension.setNextChain(instance(nextCell));
    });

    describe('when it was given object', () => {
        it('calls next cell', () => {
            // given
            const argumentA = new Objectable(true);

            // when
            abstractClassExtension.methodA(argumentA);

            // then
            verify(nextCell.methodA(argumentA)).once();
        });
    });

    describe('when it was given a non-object argument', () => {
        it('desn`t call next cell', () => {
            // given
            const argumentA = new Objectable(false);

            // when
            abstractClassExtension.methodA(argumentA);

            // then
            verify(nextCell.methodA(argumentA)).never();
        });
    });
});
