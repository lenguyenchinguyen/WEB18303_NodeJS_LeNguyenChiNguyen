//khai báo sử dụng multer
const express = require('express');
var bodyParser = require('body-parser');
var app = express();
var multer = require('multer');
const port = 7700;
app.use(bodyParser.urlencoded());
//khai bao sử dụng template ejs
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
const upload = multer({ dest: './public/images/' })

var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'mydb'
});

//router
app.get("/", (req, res) => {
    let sql = `SELECT * FROM products`;
    let sql_2 = `SELECT * FROM  categories`;
    db.query(sql, function (err, dataProducts) {
        if (err){throw err;}  
    db.query(sql_2, function (err, categories) {
            if (err){throw err;}
          res.render('home.ejs', { categories: categories, products: dataProducts });
        });
    });
});

app.get("/category/:cateid", (req, res) => {
    let sqlProByCateID = `SELECT * FROM products WHERE category_id ='${req.params.cateid}' `;
    let sqlCate= `SELECT * FROM categories;`;
    db.query(sqlProByCateID, function (err, dataProducts) {
      if (err) throw err;
      db.query(sqlCate, function (err, categories) {
        if (err) throw err;
        res.render("home.ejs", {categories:categories, products:dataProducts});
      });
    });
  });



app.get("/shop", (req, res) => {
    res.render('shop', { products: listProduct });
})


app.post('/addnew', upload.single('image'), (req, res) => {

    const file = req.file
    let title = req.body.name;
    let price = req.body.price;
    let description = req.body.description;
    let nameImage = file.filename;

    listProduct.push({
        id: 110,
        title: title,
        price: price,
        description: description,
        imageURL: nameImage,
    })

    res.redirect('/home.ejs');
});


app.get("/addnew", (req, res) => {
    res.render("addnew");
})



app.listen(port, () => {
    console.log(`Example app listening on port http://127.0.0.1:${port}`)
})