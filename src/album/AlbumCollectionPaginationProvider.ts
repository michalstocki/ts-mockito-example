import {PaginationSet} from '../pagination/PaginationSet';
import {AlbumCollectionProvider} from './AlbumCollectionProvider';
import {PaginationSetProvider} from '../pagination/PaginationSetProvider';

export class AlbumCollectionPaginationProvider {

    constructor(private albumCollectionProvider:AlbumCollectionProvider,
                private paginationSetProvider:PaginationSetProvider) {
    }

    public getPaginationItems():PaginationSet {
        const currentPage:number = this.albumCollectionProvider.getCurrentPage();
        const totalCount:number = this.albumCollectionProvider.getTotalCount();
        return this.paginationSetProvider.getPaginationSet(currentPage, totalCount);
    }
}