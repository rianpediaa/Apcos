const express = require('express')
const app = express()
const cors = require('cors')
const config = require('./config.json')
const db = require('./monggodb')
//body 
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//cors
app.use(cors())
app.use(express.json())

//konekdb
const debeConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

db.mongoose.connect(db.url,debeConfig)
.then(()=>console.log('Berhasil Connect Mongodb ✓'))
.catch(err=>{
  console.log('Gagal Connect Mongodb ×')
})

//routes
require('./routes/users')(app)
app.get('/', (req,res)=>{
  res.json({
    msg:'berhasil'
  })
})

app.listen(config.port, ()=>{
  console.log('Server Running Port : '+config.port)
})