import {PaginationSetItem} from '../../../src/pagination/PaginationSetItem';

export function aPaginationSetItem(pageNumber:number, isCurrent:boolean = false):PaginationSetItem {
    return {
        pageNumber: pageNumber,
        isCurrent: isCurrent
    }
}