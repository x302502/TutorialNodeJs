const CategoryViewModel = require('./category');
const ProductViewModel = require('./product')
module.exports = {
    Category: new CategoryViewModel(),
    Product: new ProductViewModel()
}