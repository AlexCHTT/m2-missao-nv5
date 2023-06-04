const mongoose = require('mongoose');

let banco = mongoose;


const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
  };

  mongoose.connect('mongodb://localhost:27017/livraria', options)
  .then(() => {
    console.log('MongoDB: Conect');
  })
  .catch((err) => {
    console.error('MongoDB: Falha ao se conectar', err);
  });

module.exports = banco;