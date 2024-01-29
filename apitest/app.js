const express = require (`express`);
const app = express();
const port = 3000;
const cors = require(`cors`);

app.use(express.json());
app.use(cors());

products = [
    {title: "La Historia Interminable", author: "Michael Ende", stock: 0},
    {title: "Cien Años de Soledad", author: "G.García Márquez", stock: 0},
]

app.get(`/products`, (req, res) => {
    res.status(200).json({
        products
    })
})

app.post(`/products`, (req, res) => {
    products.push(req.body);
    res.status(200).json({
        message:'ok'
    })
})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:` + port);
})