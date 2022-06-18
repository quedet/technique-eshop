import { GatsbyImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import AddToCartButton from "../components/AddToCart"
import Layout from "../components/Layout"

export default function Product_Detail ({ pageContext: { product } }) {
    const [quantity, setQuantity] = useState(1)

    const handleChange = (evt) => {
        evt.preventDefault()
        const form_data = new FormData(evt.target)
        const quantity = form_data.get('quantity')

        setQuantity(quantity)
    }

    return (
        <Layout>
            <div className="product_detail _container">
                <div className="product-header">
                    <div className="product-header-top">
                        <GatsbyImage image={product.image.gatsbyImageData} alt={product.name} />
                    </div>
                    <div className="product-header-bottom">
                        <div className="product-description-title">
                            <div>DESCRIPTION</div>
                            <button className="product-description-btn">
                                Read more
                            </button>
                        </div>
                        <div className="product-description">
                            <p className="product-description-text">
                                {product.description}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="product-content">
                    <div className="product-name">
                        <div>{product.name}</div>
                    </div>
                    <div className="product-package">
                        <div>{product.package.name}</div>
                    </div>
                    <div className="product-price">
                        <div>$ {product.price}</div>
                    </div>
                    <form method="POST" className="product-quantity-form" onSubmit={(evt) => { evt.preventDefault() }}>
                        <div className="product-quantity-form-item">
                            <div className="form-item-inner">
                                <label htmlFor="product_quantity">Quantity</label>
                                <input type="number" defaultValue={quantity} name="quantity" id="product_quantity" onChange={handleChange} />
                            </div>
                        </div>
                        <div className="product-quantity-form-submit">
                            <AddToCartButton product={product} quantity={quantity} />
                        </div>
                    </form>
                    <div className="product-meta">
                        <div className="product-meta-item">
                            <div className="product-meta-item-header">PACKAGE</div>
                            <div>{product.package.name}</div>
                        </div>
                        <div className="product-meta-item">
                            <div className="product-meta-item-header">CAPACITY</div>
                            <div>{product.capacity}</div>
                        </div>
                        <div className="product-meta-item">
                            <div className="product-meta-item-header">COLOR</div>
                            <div>{product.capacity}</div>
                        </div>
                        <div className="product-meta-item">
                            <div className="product-meta-item-header">POWER</div>
                            <div>{product.power}</div>
                        </div>
                        <div className="product-meta-item">
                            <div className="product-meta-item-header">WEIGHT</div>
                            <div>{product.weight}</div>
                        </div>
                        <div className="product-meta-item">
                            <div className="product-meta-item-header">DIMENSION</div>
                            <div>{product.dimension}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}