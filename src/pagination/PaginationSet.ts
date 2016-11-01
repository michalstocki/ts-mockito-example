import {PaginationSetItem} from './PaginationSetItem';

export interface PaginationSet {
    previous:PaginationSetItem;
    first:PaginationSetItem;
    adjacentPages:Array<PaginationSetItem>;
    last:PaginationSetItem;
    next:PaginationSetItem;
}