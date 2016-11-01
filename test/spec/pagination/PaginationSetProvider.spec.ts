import {PaginationSetProvider} from '../../../src/pagination/PaginationSetProvider';
import {PaginationSet} from '../../../src/pagination/PaginationSet';
import {aPaginationSet} from './PaginationSetBuilder';
import {aPaginationSetItem as aPage} from './SimplePaginationSetItemBuilder';
import {expect} from '../../util/expect';

describe('PaginationSetProvider', () => {
    let paginationSetProvider:PaginationSetProvider;

    beforeEach(() => {
        paginationSetProvider = new PaginationSetProvider();
    });

    describe('providing details of the available pages', () => {
        describe('when the current page is 5 and total page count is more then 8', () => {
            it('provides links to a first pages, four adjacent pages and the last page', () => {
                // given
                const expectedPaginationSet = aPaginationSet()
                    .withFirst(aPage(1))
                    .withLast(aPage(9))
                    .withNext(aPage(6))
                    .withPrevious(aPage(4))
                    .withAdjacentPages([
                        aPage(3),
                        aPage(4),
                        aPage(5, true),
                        aPage(6),
                        aPage(7),
                    ]).build();

                // when
                const result:PaginationSet = paginationSetProvider.getPaginationSet(5, 9);

                // then
                expect(result).to.be.deep.equal(expectedPaginationSet);
            });
        });
    });
});
