//khai báo sử dụng multer
const express = require('express');
var bodyParser = require('body-parser');
var app = express();
var multer=require('multer');
const port = 5500;
app.use(bodyParser.urlencoded());
//khai bao sử dụng template ejs
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
const upload = multer({ dest: './public/images/' })
//router
app.get("/", (req, res) => {
    var today = new Date();
    currentDay = today.getDay();
    var day = '';
    switch (currentDay) {
        case 0:
            day = 'Chủ nhật';
            break;
        case 1:
            day = 'Thứ hai';
            break;
        case 2:
            day = 'Thứ ba';
            break;
        case 3:
            day = 'Thứ tư';
            break;
        case 4:
            day = 'Thứ năm';
            break;
        case 5:
            day = 'Thứ sáu';
            break;
        case 6:
            day = 'Thứ bảy';
            break;
        default:
            console.log(`Error: ${currentDay}`);
    }
    res.render('home', { kindOfDay: day });
})

var listProduct = [
    {
        id:1,
        title: 'Apple Book',
        price: 3000,
        description: "A very interesting book about so many even more interesting things!",
        imageURL: "book.png",
    }, {
        id:2,
        title: 'Microsoft Book',
        price: 2000,
        description: "A very interesting book about so many even more interesting things!",
        imageURL: "book.png",
    },
    {
        id:3,
        title: 'VFast Book',
        price: 1000,
        description: "A very interesting book about so many even more interesting things!",
        imageURL: "book.png",
    }
];

app.get("/shop",(req,res)=>{
    res.render('shop',{products:listProduct});
   })
   app.get("/addnew",(req,res)=>{
    res.render("addnew");
   })  
   app.post('/addnew', upload.single('image'),(req, res) => {

    const file = req.file
    let title=req.body.name;
    let price=req.body.price;
    let description=req.body.description;
    let nameImage=file.filename;
   
    listProduct.push({
    id:110,
    title:title,
    price:price,
    description:description,
    imageURL:nameImage,
    })
   
    res.redirect('/shop');
   });
   
   
   app.get("/addnew",(req,res)=>{
    res.render("addnew");
   })
   
    

app.listen(port, () => {
    console.log(`Example app listening on port http://127.0.0.1:${port}`)
})