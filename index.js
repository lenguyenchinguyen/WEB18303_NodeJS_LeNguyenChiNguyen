const express = require('express');
let bodyParser = require('body-parser');
const app = express();
const port = 6800;
var jsonParser = bodyParser.json();
app.use(express.static("public"));

app.use(bodyParser.urlencoded());

app.set('view engine ', 'ejs');
app.set('views ', 'public');





const products = [
  {
    id: 1,
    name: 'Doraemon',
    price: 20000,
    shortDescription: 'Hay',
    detailedDescription: 'Truyện hot 2024',
    images: 'book1.png',
    comments: []
  },
  {
    id: 2,
    name: 'Dragon ball',
    price: 20000,
    shortDescription: 'Hay',
    detailedDescription: 'Truyện hot 2024',
    images: 'book2.png',
    comments: []
  },
  {
    id: 3,
    name: 'Conan - thám tử lừng danh',
    price: 20000,
    shortDescription: 'Hay',
    detailedDescription: 'Truyện hot 2024',
    images: 'book4.png',
    comments: []
  },
];

app.get('/', (req, res) => {


  res.render('index.ejs')

});

app.get('/gioithieu', (req, res) => {


  res.render('gioithieu.ejs')

});

app.get('/shop', (req, res) => {


  res.render('shop.ejs')

});

app.get('/shop-single', (req, res) => {


  res.render('shop-single.ejs')

});


app.get('/contact', (req, res) => {


  res.render('contact.ejs')

});
app.get('/login', (req, res) => {


  res.render('login.ejs')

});

app.get('/register', (req, res) => {


  res.render('register.ejs')

});

app.get('/add_sp', (req, res) => {

  res.render('add_sp.ejs',)

});

app.get('/admin', (req, res) => {

  res.render('admin.ejs', { data: products })

});









app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`)
}); 