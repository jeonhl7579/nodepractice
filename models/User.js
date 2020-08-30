const mongoose =require('mongoose');
const userSchema=mongoose.Schema({
    name: {
        type:String,
        maxlength:50
    },
    email: {
        type: String,
        trim: true, // 스페이스바를 없애주는 역할
        unique: 1 //중복 안되게
    },
    password: {
        type: String,
        minlength: 5,
    },
    lastname: {
        type: String,
        maxlength: 50,
    },
    role:{
        type: Number,
        default: 0,
    },
    image: String,
    token:{
        type: String
    },
    tokenExp:{          //token 유효기간
        type: Number
    },
})

const User = mongoose.model('User',userSchema)  // 스키마를 모델로 감싸기

module.exports = { User } //다른 곳에서도 사용할 수 있게 모듈 