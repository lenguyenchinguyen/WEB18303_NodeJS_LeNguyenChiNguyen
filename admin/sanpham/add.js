
axios.get('http://localhost:3000/categories')
    .then(response => {
        response.data.forEach(element => {
            document.getElementById('categorySelect').innerHTML += `
                <option value='${element.id}'>
                    ${element.name}
                </option>
            `;
        });
    });

let addsanpham = document.getElementById('add');

function add() {
    var nameInput = document.getElementById("nameInput");
    var imageInput = document.getElementById('anh').value;
    var priceInput = document.getElementById("priceInput");
    var saleInput = document.getElementById("saleInput");
    var hotdealInput = document.getElementById("hotdealInput");
    var starInput = document.getElementById("starInput");
    var descriptionInput = document.getElementById("descriptionInput");

    var nameError = document.getElementById("nameError");
    var imageError = document.getElementById('imageError');
    var priceError = document.getElementById("priceError");
    var saleError = document.getElementById("saleError");
    var hotdealError = document.getElementById("hotdealError");
    var starError = document.getElementById("starError");
    var descriptionError = document.getElementById("descriptionError");

    var isValid = true;

    if (nameInput.value.trim() == "") {
        nameError.innerHTML = "Vui lòng điền vào tên sản phẩm.";
        isValid = false;
    } else {
        nameError.innerHTML = "";
    }

    if (imageInput == "") {
        imageError.innerHTML = "Vui lòng chọn hình ảnh.";
        isValid = false;
    } else {
        imageError.innerHTML = "";
    }

    if (priceInput.value.trim() == "") {
        priceError.innerHTML = "Vui lòng điền vào giá sản phẩm.";
        isValid = false;
    } else {
        priceError.innerHTML = "";
    }

    if (saleInput.value == "") {
        saleError.innerHTML = "Vui lòng điền vào giá sản phẩm.";
        isValid = false;
    } else {
        saleError.innerHTML = "";
    }

    if (hotdealInput.value.trim() == "") {
        hotdealError.innerHTML = "Vui lòng điền vào hotdeal cho sản phẩm.";
        isValid = false;
    } else {
        hotdealError.innerHTML = "";
    }

    if (starInput.value == "") {
        starError.innerHTML = "Vui lòng đánh giá sản phẩm.";
        isValid = false;
    } else {
        starError.innerHTML = "";
    }

    if (descriptionInput.value == "") {
        descriptionError.innerHTML = "Vui lòng nhập thông tin sản phẩm.";
        isValid = false;
    } else {
        descriptionError.innerHTML = "";
    }

    if (!isValid) {
        return; 
    }

    const API_URL = "http://localhost:3000/";
    const sanpham = {
        name: nameInput.value,
        price: priceInput.value,
        category: document.getElementById("categorySelect").value,
        image: document.getElementById("anh").value.slice(12),
        sale: saleInput.value,
        hotdeal: Number(hotdealInput.value),
        star: Number(starInput.value),
        description: descriptionInput.value
    };

    axios.post(API_URL + `products`, sanpham)
        .then((response) => {
            console.log(response);
            window.location = 'qlsanpham.html'; 
        })
        .catch((error) => {
            console.error('Error adding product:', error.message);
        });
}
