const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const port = 5500;
var jsonParser = bodyParser.json();

const inventors = [
    { id: 1, first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { id: 2, first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { id: 3, first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { id: 4, first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { id: 5, first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { id: 6, first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 }
]
app.use(bodyParser.urlencoded());


app.get('/', (req, res) => {
    res.send("home.ejs")
});


app.get('/inventors', (req, res) => {
    let list = '<h2>Danh sách sản phẩm<ul>';
    inventors.forEach(e => {
        list += `<li><a style="text-decoration:none;color:green;" href="/inventor/${e.id}">${e.last}</a></li>`;
    });
    list += '</ul></h2>';
    res.send(list);
});

app.get('/inventor/:id', (req, res) => {
    let id = req.params.id;
    inventor = inventors.find(e => e.id == id);
    info = `<h2>Thông tin chi tiết nhà khoa học:Full name: ${inventor.first} ${inventor.last}, Year: ${inventor.year}, 
 Passed: ${inventor.passed}</h2>`;
    res.send(info);
});

app.get('/add-inventor', (req, res) => {
    res.send(`<h1>Thêm Nhà Khoa Học</h1>
  <form action="/inventor" method="POST">
  <input type="text" name="first" placeholder="Nhập tên">
  <input type="text" name="last" placeholder="Nhập họ"><br>
  <input type="number" name="year" placeholder="Năm sinh">
  <input type="number" name="passed" placeholder="Năm mất"><br>
  <button type="submit">Thêm nhà khoa học</button></form>`);
});

app.post('/inventor', (req, res) => {
    let newInventor = req.body;
    newInventor.id = inventors.length + 1;
    inventors.push(newInventor);
    res.redirect('/inventors');
});

// app.get('/product', (req, res) => {
//   res.send("product")
// });

// app.get('/add-product', (req, res) => {
//   res.send(`
//   <strong>This is product page</trong>
//   <form action="/product" method="POST">
//         <input type="text" name="addpro" placeholder="product">
//         <button type="submit">add product</button>
//     </form>`)
// });

// app.post('/product', jsonParser, function (req, res) {
//   res.send(req.body.addpro);
//   productlist.unshift(req.body.addpro);
//   res.send(req.body);
// });

//Bài 5

const products = [
    {
        id: 1,
        name: 'Tivi1',
        price: 8000000,
        images: ['tivi1.jpeg'],
        shortdes: 'Tivi chất lượng cao',
        longdes: 'Hàng chính hãng chất lượng cao, sản phẩm được bảo hành 12 tháng',
        comments: []

    },
    {
        id: 2,
        name: 'Tivi2',
        price: 8000000,
        images: ['tivi2.jpeg'],
        shortdes: 'Tivi chất lượng cao',
        longdes: 'Hàng chính hãng chất lượng cao, sản phẩm được bảo hành 12 tháng',
        comments: []
    },
    {
        id: 3,
        name: 'Tivi3',
        price: 8000000,
        images: ['tivi3.jpeg'],
        shortdes: 'Tivi chất lượng cao',
        longdes: 'Hàng chính hãng chất lượng cao, sản phẩm được bảo hành 12 tháng',
        comments: []
    }
]

app.get('/product', (req, res) => {
    let list = '<h2>Danh sách sản phẩm<ul>';
    products.forEach(e => {
        list += `<li><a style="text-decoration:none;color:green;" 
  href="/product/${e.id}">${e.name}</a></li>`;
    });
    list += '</ul></h2>';
    res.send(list);
});

app.use('/images', express.static(__dirname + '/images'));

app.get('/product/:id', (req, res) => {
    let id = req.params.id;
    let product = products.find(e => e.id == id);
    let productInfo = `
  <h2>Chi tiết sản phẩm</h2>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h3>Tên: ${product.name}</h3>
        <p>Giá: ${product.price}</p>
        <p>Mô tả: ${product.shortdes}</p>
      </div>
    <div class="row">
      <div class="col-md-12">
        <h3>Mô tả chi tiết: ${product.longdes}</h3>
      </div>
    </div>
  </div>
  `;
    product.images.forEach(image => {
        productInfo += `<li><img src="/images/${image}"  style="width:150px" alt="ảnh sản phẩm"></li>`;
    });
    productInfo += '</ul>';

    productInfo += `
    <h4>Bình luận và đánh giá sản phẩm:</h4>
    <form action="/product/${product.id}/comment" method="POST">
      <textarea name="comment" placeholder="Bình luận ở đây"></textarea><br>
      <input type="number" min="0" max="5" style="width:10%" name="rating" placeholder="Đánh giá từ(1-5)"><br>
      <button type="submit" style="background-color: #4CAF50; color: white; padding: 10px 20px; margin: 10px; font-size: 16px; border: none; cursor: pointer;">Submit</button>
    </form>
  `;


    if (product.comments && product.comments.length > 0) {
        productInfo += '<h4>Bình luận và đánh giá sản phẩm:</h4>';
        product.comments.forEach(comment => {
            productInfo += `<p>Bình luận: ${comment.text} , 
                      Đánh giá: ${comment.rating} sao </p>`;
        });
    }

    res.send(productInfo);
});

app.get('/product/:id/image/:image', (req, res) => {
    let id = req.params.id;
    let image = req.params.image;
    let product = products.find(e => e.id == id);

    if (product && product.images.includes(image)) {
        res.sendFile(image, { root: './images' });
    } else {
        res.send('Image not found');
    }
});

app.post('/product/:id/comment', (req, res) => {
    let id = req.params.id;
    let product = products.find(e => e.id == id);

    if (!product) {
        return res.status(404).send('Product not found');
    }

    if (!product.comments) {
        product.comments = [];
    }

    let newComment = {
        text: req.body.comment,
        rating: req.body.rating
    };

    product.comments.push(newComment);
    res.redirect(`/product/${product.id}`);
});

app.listen(port, () => {
    console.log(`Example app listening on port http://127.0.0.1:${port}`)
})