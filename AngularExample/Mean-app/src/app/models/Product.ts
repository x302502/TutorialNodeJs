export class Product {
    id: number;
    detailcategoryid: number;
    productname: string;
    price: number;
    status?: string;
    type?: string;
    description: string;
    picture: string;
    constructor() {
        this.id = 0;
        this.detailcategoryid = 0;
        this.productname = '';
        this.price = 0;
        this.status = '';
        this.type = '';
        this.description = '';
        this.picture = '';
    }
}
