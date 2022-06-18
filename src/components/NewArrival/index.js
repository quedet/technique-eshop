import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

export default function NewArrivalContainer () {
    const { media_new } = useStaticQuery(graphql`
        query {
            media_new: file(relativePath: {eq: "milada-vigerova-x7mqPOxuJNw-unsplash.jpg"}) {
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
    `)

    return (
        <div className="newarrival-container">
            <div className="newarrival-item">
                <div className="newarrival-item-media">
                    <GatsbyImage image={media_new.childImageSharp.gatsbyImageData} alt="" className="" />
                </div>
                <div className="newarrival-item-content">
                    <div className="newarrival-item-content-meta">
                        <div>News</div>
                        <div>15.10.2016</div>
                    </div>
                    <div className="newarrival-item-content-title">
                        Juicers revolution
                    </div>
                    <div className="newarrival-item-content-description">
                        Like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.
                    </div>
                    <div className="newarrival-item-content-action">
                        <button className="newarrival-item-content-action-btn">
                            <Link to="" className="newarrival-item-content-action-btn-link">
                                <span>SHOW MORE</span>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 16L12 26L10.6 24.6L19.2 16L10.6 7.4L12 6L22 16Z" fill="black"/>
                                </svg>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}