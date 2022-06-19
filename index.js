const express = require("express"); //express 모듈을 가져온다
const app = express(); //새로운 express app을 만들고
const port = 3000; //3천번 포트를 백서버로 두고

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://choheecha:875003@boilerplate.usowr.mongodb.net/?retryWrites=true&w=majority"
    // {
    //   useNewUrlParser: true,
    //   useUnifinedToPoloy: true,
    //   useCreateIndex: true,
    //   useFindAndModify: false,
    // }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
