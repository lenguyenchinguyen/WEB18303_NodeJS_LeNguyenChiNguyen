
axios.get('http://localhost:3000/categories')
    .then(response => {
        response.data.forEach(element => {
            document.getElementById('categorySelect').innerHTML += `
                <option value='${element.id}'>
                    ${element.name}
                </option>
            `;
        });
    })
    .catch(error => {
        console.error(error);
    });

const id = localStorage.getItem('id-sp');
const API_URL = 'http://localhost:3000/products/';
let anh = '';

axios.get(API_URL + id)
    .then(response => {
        const data = response.data;
        document.getElementById("nameInput").value = data.name;
        anh = data.image;
        document.getElementById("priceInput").value = data.price;
        document.getElementById("img").src = `../site/img/${data.image}`;
        document.getElementById("saleInput").value = data.sale;
        document.getElementById("hotdealInput").value = data.hotdeal;
        document.getElementById("starInput").value = data.star;
        document.getElementById("descriptionInput").value = data.description;
    })
    .catch(error => {
        console.error(error);
    });

function update() {
    console.log(anh);
    if (document.getElementById("anh1").value == '') {
        data = {
            "name": document.getElementById("nameInput").value,
            "image": anh,
            "price": document.getElementById("priceInput").value,
            "sale": document.getElementById("saleInput").value,
            "hotdeal": document.getElementById("hotdealInput").value,
            "star": document.getElementById("starInput").value,
            "category": document.getElementById("categorySelect").value,
            "description": document.getElementById("descriptionInput").value
        };
    } else {
        data = {
            "name": document.getElementById("nameInput").value,
            "image": document.getElementById('anh1').value.slice(12),
            "price": document.getElementById("priceInput").value,
            "sale": document.getElementById("saleInput").value,
            "hotdeal": document.getElementById("hotdealInput").value,
            "star": document.getElementById("starInput").value,
            "category": document.getElementById("categorySelect").value,
            "description": document.getElementById("descriptionInput").value
        };
    }

    // Kiểm tra các giá trị và hiển thị thông báo lỗi tương ứng
    var name = document.getElementById("nameInput").value;
    var image = document.getElementById("anh1").value;
    var price = document.getElementById("priceInput").value;
    var sale = document.getElementById("saleInput").value;
    var category = document.getElementById("categorySelect").value;
    var hotdeal = document.getElementById("hotdealInput").value;
    var star = document.getElementById("starInput").value;
    var description = document.getElementById("descriptionInput").value;

    if (name === "") {
        document.getElementById("nameError").innerHTML = "Vui lòng nhập tên sản phẩm.";
        return;
    } else {
        document.getElementById("nameError").innerHTML = "";
    }

    if (image === "") {
        document.getElementById("imageError").innerHTML = "Vui lòng chọn ảnh sản phẩm.";
        return;
    } else {
        document.getElementById("imageError").innerHTML = "";
    }

    if (price === "") {
        document.getElementById("priceError").innerHTML = "Vui lòng nhập giá sản phẩm.";
        return;
    } else {
        document.getElementById("priceError").innerHTML = "";
    }

    if (sale === "") {
        document.getElementById("saleError").innerHTML = "Vui lòng nhập giá khuyến mãi.";
        return;
    } else {
        document.getElementById("saleError").innerHTML = "";
    }

    if (category === "") {
        document.getElementById("categoryError").innerHTML = "Vui lòng chọn danh mục.";
        return;
    } else {
        document.getElementById("categoryError").innerHTML = "";
    }

    if (hotdeal === "") {
        document.getElementById("hotdealError").innerHTML = "Vui lòng nhập số hotdeal.";
        return;
    } else {
        document.getElementById("hotdealError").innerHTML = "";
    }

    if (star === "") {
        document.getElementById("starError").innerHTML = "Vui lòng nhập số đánh giá.";
        return;
    } else {
        document.getElementById("starError").innerHTML = "";
    }

    if (description === "") {
        document.getElementById("descriptionError").innerHTML = "Vui lòng nhập mô tả sản phẩm.";
        return;
    } else {
        document.getElementById("descriptionError").innerHTML = "";
    }

    axios.put(API_URL + id, data)
        .then(response => {
            
            console.log(response.data);
            
            window.location = "qlsanpham.html";
        })
        .catch(error => {
            console.error(error);
            
        });
}
