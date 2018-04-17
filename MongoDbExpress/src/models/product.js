class Product {
    constructor( _id,categoryId,name,description,create_at,status) {
        this._id = _id;
        this.categoryId = (categoryId == undefined)?null:categoryId;
        this.name = name;
        this.description = description;
        this.create_at = create_at;
        this.status = status;
    }
}
module.exports = Product;