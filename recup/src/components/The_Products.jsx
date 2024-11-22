import React, { useState, useEffect, useRef } from "react"
import axios from "axios"

function The_Products() {
  const [jewelierProducts, setJewelierProducts] = useState([])
  const quantityRef = useRef()



    
    const fetchJewelierProducts = () => {
      const quantity = parseInt(quantityRef.current.value) || 0
      
        axios.get("https://fakestoreapi.com/products")
        .then((res) => {
          const filteredJewelry = res.data.filter(
            (product) => product.category === "jewelery"
          );
          setJewelierProducts(filteredJewelry.slice(0, quantity))
        })
        .catch((err) => {
          console.error("Error al obtener productos", err)
          alert("Error al obtener los productos.")
        });
    };
    
    useEffect(() => {
      fetchJewelierProducts()
    }, [])
  

 

  

  // const deleteProduct = (id) => {
  //   axios
  //     .delete(`http://localhost:3001/products/${id}`)
  //     .then((res) => {
        
        
  //     })
  //     .catch((err) => {
  //       console.error("Error al eliminar producto", err);
  //       alert("Error al eliminar el producto.");
  //     });
  // };
  // Dejo comentado el deleteProduct porque sino me rompe el codigo pero esta parte de la estructura armada
 

  return (
    <div>
        <center><h1>Lista de Productos de Joyería</h1></center>
      
      <div>
        <input
          type="number"
          ref={quantityRef}
          placeholder="Ingrese la cantidad de prouctos"
          min="1"
        />
        <button onClick={fetchJewelierProducts}>Obtener productos</button>
      </div>

      <div>
        {jewelryProducts.length > 0 ? (
          jewelryProducts.map((product) => (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <img src={product.image} alt={product.title} width={100} />
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </div>
          ))
        ) : (
          <p>No hay productos disponibles</p>
        )}
      </div>

      <hr />

    </div>
  );
}

export default The_Products
