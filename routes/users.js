module.exports = app => {
  const Kontrol = require('../monggodb/controller')
  const router = require('express').Router()
  
  router.get('/', Kontrol.findAll)
  router.get('/:id', Kontrol.show)
  router.post('/', Kontrol.create)
  router.put('/:id', Kontrol.update)
  router.delete('/:id', Kontrol.delete)
  
  app.use('/api',router)
}
