import {PaginationSet} from './PaginationSet';
import {PaginationSetItem} from './PaginationSetItem';

export class PaginationSetProvider {

    public getPaginationSet(currentPage:number, pageCount:number):PaginationSet {
        return {
            previous: this.getItem(currentPage - 1),
            first: this.getItem(1),
            adjacentPages: this.getAdjacentOf(currentPage),
            last: this.getItem(pageCount),
            next: this.getItem(currentPage + 1),
        };
    }

    private getItem(pageNumber:number, isCurrent:boolean = false):PaginationSetItem {
        return {
            pageNumber: pageNumber,
            isCurrent: isCurrent,
        };
    }

    private getAdjacentOf(current:number):Array<PaginationSetItem> {
        const items:Array<PaginationSetItem> = [];
        for (let i = current - 2; i <= current + 2; i++) {
            items.push(this.getItem(i, i == current));
        }
        return items;
    }
}