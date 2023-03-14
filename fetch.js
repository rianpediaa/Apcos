const {fetch} = require('fetch')

fetch("http://localhost:3000/users", {
  method: "post",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },

  //make sure to serialize your JSON body
  body: JSON.stringify({
    username: '7',
    password: '2(+$--$)'
  })
})
.then( (response) => { 
   //do something awesome that makes the world a better place
});