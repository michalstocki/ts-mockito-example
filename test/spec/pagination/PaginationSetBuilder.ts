import {PaginationSetItem} from '../../../src/pagination/PaginationSetItem';
import {PaginationSet} from '../../../src/pagination/PaginationSet';

export class PaginationSetBuilder {

    private previous:PaginationSetItem;
    private first:PaginationSetItem;
    private adjacentPages:Array<PaginationSetItem> = [];
    private last:PaginationSetItem;
    private next:PaginationSetItem;

    public withNext(next:PaginationSetItem):PaginationSetBuilder {
        this.next = next;
        return this;
    }

    public withLast(last:PaginationSetItem):PaginationSetBuilder {
        this.last = last;
        return this;
    }

    public withAdjacentPages(adjacentPages:Array<PaginationSetItem>):PaginationSetBuilder {
        this.adjacentPages = adjacentPages;
        return this;
    }

    public withFirst(first:PaginationSetItem):PaginationSetBuilder {
        this.first = first;
        return this;
    }

    public withPrevious(previous:PaginationSetItem):PaginationSetBuilder {
        this.previous = previous;
        return this;
    }

    public build():PaginationSet {
        return {
            previous: this.previous,
            first: this.first,
            adjacentPages: this.adjacentPages,
            last: this.last,
            next: this.next,
        };
    }

}

export function aPaginationSet():PaginationSetBuilder {
    return new PaginationSetBuilder();
}