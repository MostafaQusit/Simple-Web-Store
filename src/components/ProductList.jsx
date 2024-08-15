import React, {useState, useEffect} from 'react'
import ProductCard from './ProductCard'

var prevCategory = "All"
function ProductList() {
  const[products, setProducts] = useState([])
  const[categories, setCategories] = useState([])

  const getProducts = () => {
    setFilter("All")
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      //.then(json => console.log(json))
      .then(json => setProducts(json))
  }

  const getCategories = () => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => setCategories(json))
  }

  const getProductsByCategories = (category) => {
    setFilter(category)
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then(res => res.json())
      .then(json => setProducts(json))
  }

  useEffect( () =>{
    getProducts()
    getCategories()
  }, [])

  const [filter, setFilter] = useState("All");
  const setAdvancedFilter = (category) => {
    if (category === prevCategory) {
      getProducts()
      setFilter("All")
    }
    else{
      getProductsByCategories(category)
      setFilter(category)
    }
    prevCategory = category;
  }

  return (
    <section className="py-1">
      <div className="container">
        <h1 className="text-center mb-3"> Our Products </h1>
        <div className="d-flex justify-content-center mb-3">
          
          {
            categories && categories.map( (category)=>{
              return (<button className={`btn btn-out rounded-5 shadow mx-1 + ${category===filter? "btn-dark" : "btn-outline-dark"}`}
                              onClick={() => {setAdvancedFilter(category)}}>{category}</button>)
            })
          }
        </div>
        <div className="row">
          {
            products && products.map( (element) => {
              return(<ProductCard product={element} key={element.id}/>)
            })
          }
        </div> {/* row */}
      </div> {/* container */}
    </section> 
  )
}

export default ProductList