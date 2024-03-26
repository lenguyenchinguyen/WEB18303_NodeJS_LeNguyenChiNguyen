//khai báo sử dụng multer
const express = require('express');
var bodyParser = require('body-parser');
var app = express();

const port = 6800;
app.use(bodyParser.urlencoded());
//khai bao sử dụng template ejs
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

//--------------------------------------------------//
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop');
app.use('/admin', adminRoutes);
app.use(shopRoutes);


//----------------------------------------------------//



//router
// app.get("/admin/products", (req, res) => {
//     let sql = `SELECT * FROM products`;
//     let sql_2 = `SELECT * FROM  categories`;
//     db.query(sql, function (err, dataProducts) {
//         if (err) { throw err; }
//         db.query(sql_2, function (err, categories) {
//             if (err) { throw err; }
//             res.render('admin/product/list', { categories: categories, products: dataProducts });
//         });
//     });
// });

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



// app.get("/shop", (req, res) => {
//     res.render('shop', { products: listProduct });
// })


// app.post('/addnew', upload.single('image'), (req, res) => {

//     const file = req.file
//     let title = req.body.name;
//     let price = req.body.price;
//     let content = req.body.description;
//     let category_id = req.body.category_id
//     let nameImage = file.filename;

//     products = {
//         id: res.insertId,
//         name: title,
//         price: price,
//         content: content,
//         category_id: category_id,
//         imageURL: nameImage,
//     }
//     db.query('insert into products SET?', products, function (err, data) {
//         if (err) throw err;

//         res.redirect('/');
//     })


// });


// app.get("/addnew", (req, res) => {
//     let sql_categories = `SELECT * FROM categories`;
//     db.query(sql_categories, function (err, category) {
//         if (err) throw err;
//         res.render("addnew", { categories: category });
//     })


// })



app.listen(port, () => {
    console.log(`Example app listening on port http://127.0.0.1:${port}`)
})