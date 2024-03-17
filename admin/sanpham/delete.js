function deleteProduct(id) {
   const API_URL = "http://localhost:3000/products/"
   axios.delete(API_URL + id)
}