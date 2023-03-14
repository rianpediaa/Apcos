module.exports = mongoose => {
  const schema = mongoose.Schema(
    {
      link_daget: { type: String },
      id_daget: { type: String }
    },{
      timestamps: true
    }
  );
  
  schema.method('toJSON',function(){
    const {_id,__v,...object} = this.toObject()
    object.id = _id
    
    return object;
  })
  
  return mongoose.model('dagetdb', schema)
}
