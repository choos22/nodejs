import express from "express"
import bodyParser from "body-parser"  //user?id=7 thif trên db muốn lấy đc số 7 thì dùng body parser
import viewEngine from "./config/viewEngine"
import initWebRouters from "./route/web"
import connectDB from "./config/connectDB";
require('dotenv').config();

const app = express()
const port = 3000

//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }))

viewEngine(app)
initWebRouters(app)
connectDB();



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port localhost:${port}`)
})
