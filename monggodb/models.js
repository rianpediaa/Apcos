module.exports = mongoose => {
  const schema = mongoose.Schema(
    {
      username: { type: String },
      keyUser: { type: String },
      nomer_wa: { type: String },
      saldo: { type: String },
      nomer_dana: { type: String }
    },{
      timestamps: true
    }
  );
  
  schema.method('toJSON',function(){
    const {_id,__v,...object} = this.toObject()
    object.id = _id
    
    return object;
  })
  
  return mongoose.model('logindb', schema)
}