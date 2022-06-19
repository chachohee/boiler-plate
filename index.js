const express = require("express"); //express 모듈을 가져온다
const app = express(); //새로운 express app을 만들고
const port = 3000; //3천번 포트를 백서버로 두고
const bodyparser = require("body-parser");
const { User } = require("./models/User");

const config = require("./config/key");

//application/x-www-form-urlencoded 타입으로 분석된 것을 가져올 수 있도록
app.use(bodyparser.urlencoded({ extended: true }));
//application/json 타입으로 분석된 것을 가져올 수 있도록
app.use(bodyparser.json());

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI)
  // {
  //   useNewUrlParser: true,
  //   useUnifinedToPoloy: true,
  //   useCreateIndex: true,
  //   useFindAndModify: false,
  // }
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("여름아 가지마 ~~~ !!!");
});
app.post("/register", (req, res) => {
  //회원가입할 때 필요한 정보들을 client에서 가져오면
  //그것들을 DB에 넣어준다

  const user = new User(req.body);

  //save()는 몽고디비에 있는 메서드
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
