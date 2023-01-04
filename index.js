//khai bao doi tuong express
const express = require('express');
const app = express();

app.use(express.json());
const PORT = 8080;
const productRouter = require('./router/productrouter');
const userRouter = require('./router/userrouter');
//
app.use('/api/product', productRouter);
app.use('/api/user', userRouter);
//mo port
app.listen(PORT, function(){
    console.log('Server da duoc mo.');
})
//su dung router
