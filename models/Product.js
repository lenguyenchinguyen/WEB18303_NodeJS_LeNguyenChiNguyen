const db = require('./Database');
const products = [];



module.exports = class Product {

  static saveProduct(product) {
    db.query('insert into products SET ?', product, function (err, data) {
      if (err) throw err;
      return true;
    })
  }


  static getAll(callback) {
    let sql = 'SELECT * FROM products';
    let sql_2 = `SELECT * FROM  categories`;
    db.query(sql, function (err, dataProducts) {
      if (err) throw err;
      db.query(sql_2, function (err, dataCategory) {
        if (err) throw err;
        callback({ categories: dataCategory, products: dataProducts })
      })
    });

  }
}

// app.get("/category/:cateid", (req, res) => {
//     let sqlProByCateID = `SELECT * FROM products WHERE category_id ='${req.params.cateid}' `;
//     let sqlCate = `SELECT * FROM categories;`;
//     db.query(sqlProByCateID, function (err, dataProducts) {
//         if (err) throw err;
//         db.query(sqlCate, function (err, categories) {
//             if (err) throw err;
//             res.render("home.ejs", { categories: categories, products: dataProducts });
//         });
//     });
// });
