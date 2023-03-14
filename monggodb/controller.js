const db = require('./index')
const Debe = db.dagetdb

exports.create = (req,res)=>{
  Debe.create(req.body)
  .then(()=>res.json({
    status: 200,
    msg: 'daget berhasil!'
  }))
  .catch(err=>res.json({
    status: 500,
    msg: 'daget gagal!'
  }))
}

exports.findAll = (req,res)=>{
  Debe.find()
    .then(data => res.json(data))
    .catch(err => res.json({
      status: 500,
      msg: 'Error!'
    }))
}

exports.show = (req,res)=>{
  var id = req.params.id
  Debe.findById(id)
  .then(data => res.json(data))
    .catch(err => res.json({
      status: 404,
      msg: 'Not Found!'
  }))
}

exports.update = (req,res)=>{
  var id = req.params.id
  Debe.findById(id)
  
  Debe.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
  .then(data => {
    if(!data){
      res.json({
        status: 500,
        msg: 'Tidak Ada Data!'
      })
    }else{
      res.json({
        status: 200,
        msg: 'Update Data Berhasil!'
      })
    }
  })
    .catch(err => res.json({
      status: 404,
      msg: 'Not Found!'
  }))
}

exports.delete = (req,res)=>{
  var id = req.params.id
  Debe.findByIdAndRemove(id)
  .then(data => {
    if(!data){
      res.json({
        status: 500,
        msg: 'Tidak Ada Data!'
      })
    }else{
      res.json({
        status: 200,
        msg: 'Delete Data Berhasil!'
      })
    }
  })
    .catch(err => res.json({
      status: 404,
      msg: 'Not Found!'
  }))
}
