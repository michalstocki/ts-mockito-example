import {PaginationSetItem} from '../../../src/pagination/PaginationSetItem';

export class PaginationSetItemBuilder {

    private pageNumber:number;
    private isCurrent:boolean;

    public whichIsCurrent(isCurrent:boolean):PaginationSetItemBuilder {
        this.isCurrent = isCurrent;
        return this;
    }

    public withPageNumber(pageNumber:number):PaginationSetItemBuilder {
        this.pageNumber = pageNumber;
        return this;
    }

    public build():PaginationSetItem {
        return {
            pageNumber: this.pageNumber,
            isCurrent: this.isCurrent
        };
    }
}

function aPaginationSetItem():PaginationSetItemBuilder {
    return new PaginationSetItemBuilder();
}