//lay ve danh sach san pham
function getAllProduct(req, res){
    //call function cua model
    res.json({
        msg:"Danh sach san pham"
    })
}

//them moi san pham
function addProduct(req, res){
    //them moi vao trong csdl-->goi model
    res.json({
        msg:"Them moi thanh cong"
    })
}


//sua san pham

//xoa san pham

//tim kiem san pham theo ten

module.exports = {
    getAllProduct,
    addProduct
}