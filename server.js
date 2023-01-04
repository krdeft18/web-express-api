const e = require('express');
var express = require('express');
var app = express();
app.use(express.json());
//middleware


app.use("/api/permission/",(req,res,next)=>{
    //code here.
    //kiem tra token co ton tai hay ko
    let token = req.body.token;
    console.log(token);
    if(token==null || token ==""){
        res.status(401);
        res.json({
            message:"Token khong ton tai, vui long dang nhap de thuc hien chuc nang nay."
        });
    }else if(token == "dshfksafasdjf.kashdfkshfkjshjkdsf.khasdfkjsdhjadsfhj"){
        next();
    }else{
        res.status(401);
        res.json({
            message:"Token khong ton tai, vui long dang nhap de thuc hien chuc nang nay."
        });
    }
    //neu ton tai
    
    //nguoc lai thi thong bao loi.

})
//api them moi thong tin nguoi dung
app.post('/api/user', (req, res) => {
    let id = req.body.id;
    let name = req.body.name;
    if (id == null || id == "") {
        res.status(400);
        res.json({
            message: "Id buoc phai nhap."
        });
    } else if (name == null || name == "") {
        res.status(400);
        res.json({
            message: "Name buoc phai nhap."
        });
    } else {
        console.log(id);
        console.log(name);
        res.json({
            message: "Them moi thanh cong",
            id: id,
            name: name
        });
    }
})

app.get('/api/user', (req, res) => {
    res.json([{
        userId: 200,
        id: 200,
        title: 'delectus aut autem',
        completed: false
    }, {
        userId: 100,
        id: 100,
        title: 'delectus aut autem',
        completed: true
    }])
})

//cap nhat du lieu
app.put("/api/user/:id",(req, res) => {

});
//xoa du lieu
app.delete("/api/permission/user/:id",(req, res) => {
    let id = req.params.id;
    //truy van du lieu id can xoa
    //xoa trong csdl
    //thong bao thanh cong.
    res.json({
        message: "Xoa thanh cong",
        id: id
    });
});
//api phuc vu dang nhap
app.post('/api/user/signin', (req,res)=>{
    //code here
    //lay ve username va password
    let username = req.body.username;
    let password = req.body.password;
    console.log(username);
    console.log(password);
    //kiem tra du lieu
    if(username==null || username==""){
        res.status(400);
        res.json({
            message:"username must input."
        });
    }else if(password==null || password==""){
        res.status(400);
        res.json({
            message:"password must input."
        });
    }else{
        //kiem tra xem username va password co ton tai hay khong
        if(username=="huce@gmail.com" && password == "123456$@"){
            //tra ve thong tin tai khoan
            //tra ve thong tin tai khoan cua nguoi dung
            res.json({
                message:"Login success.",
                account:{
                    fullname:"Dai hoc xay dung",
                    avatar:"images/dhxd.jpg",
                    token:"dshfksafasdjf.kashdfkshfkjshjkdsf.khasdfkjsdhjadsfhj"
                }
            })
        }else{
            //dang nhap ko thanh cong
            res.status(400);
            res.json({
                message:"Login fail."
            })
        }
    }
})

//javascrip arrow function
// app.get('/api/user', function(req, res){
//    res.send("xin chao 66CS2");
// });

app.listen(3000, () => {
    console.log('3000 port open.');
});
