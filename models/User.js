const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, //공백제거
    unique: 1, //똑같은 이메일 못 쓰게
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: string,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    //토큰 유효기간 -> 유효성검사에 씀
    type: Number,
  },
});

//스키마는 모델로 감싸줘야 함
const User = mongoose.model("User", userSchema); // ("모델이름", 스키마)

module.exports = { User };
