// 시작점
// 서버를 만들고 있는 곳
// body-parser 회원가입의 정보를 전송?
const express=require('express')
const app = express()
const port=5000
const bodyParser=require('body-parser');
const { User } = require("./models/User");

//application/x-www-form-urlencoded 처럼 온것을 분석할수 있게 해줌
app.use(bodyParser.urlencoded({extended:true}));
//application/json 타입처럼 된것을 분석해서 가져올 수 있게 해주는 구문
app.use(bodyParser.json());

const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://SeHyun:akzmtlqkf12@@boilerplate.rsazl.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser:true, useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false
}).then(()=>console.log('MongoDB Connected...'))
  .catch(err=>console.log(err))



app.get('/',(req,res)=>res.send('Hello World!~~~ 안녕하세요 ~~~'))

app.post('/register',(req,res)=>{
    //회원 가입할 때 필요한 정보들을 클라이언트에서 가져오면 
    // 그것들을 데이터베이스에 넣어준다.
    const user = new User(req.body) //req.body에 정보가 들어있는건 위에서 body-parser를 사용해서   
    user.save((err,useerInfo)=>{
        if(err) return res.json({success:false},err) //성공하지 못했다고 json형식으로 전달
        return res.status(200).json({ //200은 성공했다는 의미
            success:true
        })
    })//몽고db에서 오는 메시지 


})
app.listen(port,()=> console.log(`Example app listening on port ${port}!`))
