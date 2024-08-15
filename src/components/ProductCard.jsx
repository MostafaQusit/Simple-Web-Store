import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function ProductCard({ product }) {
    const [color, setColor] = useState("");

    return (
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-9 mb-2 px-0 h-75">
            <div className="card p-3 border-0">
                <Link to={`/details/${product.id}`}>
                    <img className="card-img-top img-fluid mb-1 center" src={product.image} style={{aspectRatio: 1/1}} alt=''/>
                </Link>
                <h6 className="card-title">{product.category}</h6>
                <Link
                    className="h5 card-text text-decoration-none text-truncate"
                    to={`/details/${product.id}`}
                    style={{color: color}}
                    onMouseOver={() => setColor("orange")}
                    onMouseLeave={() => setColor("")}>
                    
                    {product.title}
                </Link>
                <h3 className="card-text">
                    <sup className="h6">$</sup>
                    {product.price}
                </h3>
            </div> {/* card */}
        </div>
    )
}

export default ProductCard