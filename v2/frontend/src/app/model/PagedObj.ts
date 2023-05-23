export class PagedObj{
    content: any[]=[];
    number: number=0;
    empty: boolean=true;
    pageable: any;
    totalPages: number=0;
    totalElements: number=0;
    first: boolean=false;
    last: boolean=false;
    size: number=0;
    sort: any;
    numberOfElements: number=0;
}