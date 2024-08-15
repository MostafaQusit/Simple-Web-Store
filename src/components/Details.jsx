import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

function Details() {
    const params = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(res => res.json())
            .then(json => setProduct(json))
    }, [params.id])

    return (
        <section className="py-5">
            <div className="container">
                <h1 className="text-center mb-3"> Product Title {product.id} </h1>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <h1 className="mb-3">{product.title}</h1>
                        <h3>{product.category}</h3>
                        <h3>{product.price}</h3>
                        <p>{product.description}</p>
                    </div> {/* left */}
                    <div className="col-md-6 mb-3">
                        <img src={product.image} className="w-75" alt=''/>
                    </div> {/* right */}
                </div> {/* row */}
            </div> {/* container */}
        </section>

    )
}

export default Details