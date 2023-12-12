

const express=require("express")
const cors =require("cors")
const app=express()
let products=require("./api.json")
const port=4000
let count=15



app.use(express.json())
app.use(cors())
app.get("/products",(req,res)=>{
    res.send(products)
})




// ----------------GET-------------------

app.get('/products/:id', (req, res) => {
    const { id } = req.params
    const getproduct = products.find(x => x.id === +id)
    res.send(getproduct)
})

// ----------------DELETE-------------------

app.delete('/products/:id', (req, res) => {
    const { id } = req.params
    products = products.filter(x => x.id !== +id)
    res.send(products)
})

// ----------------CREATE-------------------

app.post('/products', (req, res) => {
    products.push({ id: count++, ...req.body })
    res.send(products)
})

// ----------------UPDATE-------------------

app.put('/products/:id', (req, res) => {
    const { id } = req.params
    const index = products.findIndex(x => x.id == id)
    if (index) {
          products[index] = { id: +id, ...req.body }
    res.send(products)
    }
  
})

app.listen(port,()=>{
    console.log("server 4000 portunda isleyir.");
})