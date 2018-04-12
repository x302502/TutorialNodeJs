class Product {
    constructor(id,detailCategoryId,name,price,status,type,description,picture) {
        this.id = id;
        this.detailCategoryId = detailCategoryId;
        this.name = name;
        this.price = price;
        this.status = status;
        this.type = type;
        this.description = description;
        this.picture = picture;
    }
}
module.exports = Product;