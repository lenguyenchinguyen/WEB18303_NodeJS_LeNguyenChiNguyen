const Product = require('../../models/Product');


exports.getProducts = (req, res, next) => {
    Product.getAll(function (data) {
        res.render('./shop', {
            dataProducts: data.products,
            dataCategory: data.categories
        });
    });
}

exports.getAddProducts = (req, res, next) => {
    Product.getAll(function (data) {
        res.render('admin/product/addnew', {
            dataProducts: data.products,
            dataCategory: data.categories
        });
    });
}

exports.postAddProduct = (req, res, next) => {
    const file = req.file
    let title = req.body.name;
    let price = req.body.price;
    let content = req.body.description;
    // let category_id = req.body.category_id
    let nameImage = file.filename;

    let products = {
        id: res.insertId,
        name: title,
        price: price,
        content: content,
        // category_id: category_id,
        image: nameImage,
    }
    Product.saveProduct(products);
    res.redirect('/');
};
