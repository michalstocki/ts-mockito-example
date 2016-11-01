import {AlbumCollectionPaginationProvider} from '../../../src/album/AlbumCollectionPaginationProvider';
import {AlbumCollectionProvider} from '../../../src/album/AlbumCollectionProvider';
import TypeMoq = require('typemoq');
import {expect} from '../../util/expect';
import {aPaginationSet} from '../pagination/PaginationSetBuilder';
import {aPaginationSetItem as aPage} from '../pagination/SimplePaginationSetItemBuilder';
import {PaginationSetProvider} from '../../../src/pagination/PaginationSetProvider';

describe('AlbumCollectionPaginationProvider (real logic)', () => {
    let albumCollectionProvider:TypeMoq.Mock<AlbumCollectionProvider>;
    let albumCollectionPaginationProvider:AlbumCollectionPaginationProvider;

    beforeEach(() => {
        albumCollectionProvider = TypeMoq.Mock.ofType(AlbumCollectionProvider);
        albumCollectionPaginationProvider = new AlbumCollectionPaginationProvider(
            albumCollectionProvider.object,
            new PaginationSetProvider()
        );
    });

    describe('providing pagination items of albums collection', () => {
        it('returns correct list of available results pages', () => {
            // given
            albumCollectionProvider.setup(a => a.getCurrentPage()).returns(() => 6);
            albumCollectionProvider.setup(a => a.getTotalCount()).returns(() => 10);
            const expectedItems = aPaginationSet()
                .withFirst(aPage(1))
                .withLast(aPage(10))
                .withNext(aPage(7))
                .withPrevious(aPage(5))
                .withAdjacentPages([
                    aPage(4),
                    aPage(5),
                    aPage(6, true),
                    aPage(7),
                    aPage(8),
                ]).build();

            // when
            const result = albumCollectionPaginationProvider.getPaginationItems();

            // then
            expect(result).to.deep.equal(expectedItems);
        });
    });
});

describe('AlbumCollectionPaginationProvider (mocked logic)', () => {
    let albumCollectionProvider:TypeMoq.Mock<AlbumCollectionProvider>;
    let albumCollectionPaginationProvider:AlbumCollectionPaginationProvider;
    let paginationSetProvider:TypeMoq.Mock<PaginationSetProvider>;

    beforeEach(() => {
        albumCollectionProvider = TypeMoq.Mock.ofType(AlbumCollectionProvider);
        paginationSetProvider = TypeMoq.Mock.ofType(PaginationSetProvider);
        albumCollectionPaginationProvider = new AlbumCollectionPaginationProvider(
            albumCollectionProvider.object,
            paginationSetProvider.object
        );
    });

    describe('providing pagination items of albums collection', () => {
        it('returns correct list of available results pages', () => {
            // given
            const expectedItems = aPaginationSet().build();
            const currentPage = 6;
            const pageCount = 10;
            albumCollectionProvider.setup(a => a.getCurrentPage()).returns(() => currentPage);
            albumCollectionProvider.setup(a => a.getTotalCount()).returns(() => pageCount);
            paginationSetProvider
                .setup(p => p.getPaginationSet(TypeMoq.It.isValue(currentPage), TypeMoq.It.isValue(pageCount)))
                .returns(() => expectedItems);

            // when
            const result = albumCollectionPaginationProvider.getPaginationItems();

            // then
            expect(result).to.equal(expectedItems);
        });
    });
});
