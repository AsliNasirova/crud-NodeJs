import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [products, setproducts] = useState([])
  

useEffect(() => {
  fetch("http://localhost:4000/products")
  .then(res=>res.json())
  .then(data=>setproducts(data))

  
}, [])

console.log(products);

  return (
    <div className='card_container'>
    {
      products.map(item=>(
        <div className="card">
          <img src={item.image} alt="" />
          <p>info:{item.info}</p>
          <p>name:{item.name}</p>
          <p>price:{item.price}$</p>
        </div>
      ))
    }
     </div>
  )
}

export default App
