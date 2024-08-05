const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dataBase = require('./config/db');
const productAPI = require('./API/Guest/productController');
const orderAPI = require('./API/Guest/orderController');
const cors = require('cors');

// CORS ayarları
const corsOptions = {
    origin: 'http://localhost:5173', 
    credentials: true,
};

// Middleware'ler
app.use(cors(corsOptions));
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Veritabanı bağlantısı
dataBase();

// API rotaları
app.use('/api/guest', productAPI);
app.use('/api/guest', orderAPI);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
