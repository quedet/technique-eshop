import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

export default function FeaturedContainer () {
    const {Newarrivals: {Products}} = useStaticQuery(graphql`
        query {
            Newarrivals: allDatoCmsProduct(filter: {newarrival: {eq: true}}, limit: 3) {
                Products: nodes {
                    id
                    price
                    slug
                    name
                    image {
                        gatsbyImageData
                    }
                    package {
                        slug
                    }
                }
            }
        }
    `)

    return (
        <div className="featured-container">
            <div className="featured-header">
                <div className="featured-item-label">
                    Featured
                </div>
                <div className="featured-item-title">
                    <span>Kitchen</span> <span>appliances</span>
                </div>
                <div className="featured-item-catalog">
                    <Link to="/catalog" className="featured-item-catalog-link">
                        <span>FULL CATALOG</span>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 16L12 26L10.6 24.6L19.2 16L10.6 7.4L12 6L22 16Z" fill="black"/>
                        </svg>
                    </Link>
                </div>
            </div>
            <div className="featured-content">
                {Products && Products.map(product => (
                    <div className="featured-item" key={product.id}>
                        <div className="featured-item-media">
                            <GatsbyImage image={product.image.gatsbyImageData} alt={product.name} />
                        </div>
                        <div className="featured-item-content">
                            <div className="featured-item-name">
                                <Link to={`/catalog/${product.package.slug}/${product.slug}`}>{product.name}</Link>
                            </div>
                            <div className="featured-item-price">${product.price}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}