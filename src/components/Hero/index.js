import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

export default function HeroContainer () {
    const { media_hero, media_promotion } = useStaticQuery(graphql`
        query {
            media_hero: file(relativePath: {eq: "andrea-donato-e8Eeh1gLSRU-unsplash.jpg"}) {
                childImageSharp {
                    gatsbyImageData
                }
            }

            media_promotion: file(relativePath: {eq: "element5-digital-yutgPvmHxYQ-unsplash.jpg"}) {
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
    `)

    return (
        <div className="hero-container">
            <div className="hero-item hero-item-features">
                <header className="hero-item-header">
                    <div className="hero-title">
                        <span>A wonderful serenity has taken</span>
                        <span>possession of my entire soul.</span>
                    </div>
                    <div className="hero-action">
                        <button className="hero-action-btn">
                            <span className="hero-action-btn-text">SHOW ITEM</span>
                            <svg className="hero-action-btn-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 16L12 26L10.6 24.6L19.2 16L10.6 7.4L12 6L22 16Z" fill="black"/>
                            </svg>
                        </button>
                    </div>
                </header>
                <div className="hero-item-media">
                    <GatsbyImage image={media_hero.childImageSharp.gatsbyImageData} alt="" className="hero-illustration-media" />
                </div>
            </div>
            <div className="hero-item hero-item-promotion">
                <header className="hero-item-header">
                    <div className="_top">
                        <div className="hero-item-top">
                            <div className="hero-item-top-bar"></div>
                            <div className="hero-item-top-promotion">Special Offer</div>
                        </div>
                        <div className="hero-title">
                            <span>Upto 40% Off</span>
                        </div>
                        <div className="hero-description">
                            <span>A wonderful serenity has taken</span>{' '}
                            <span>possession of my entire soul.</span>
                        </div>
                    </div>
                    <div className="_bottom">
                        <div className="hero-action">
                            <button className="hero-action-btn">
                                <span className="hero-action-btn-text">SHOW ITEM</span>
                                <svg className="hero-action-btn-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 16L12 26L10.6 24.6L19.2 16L10.6 7.4L12 6L22 16Z" fill="black"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </header>
                <div className="hero-item-media">
                    <GatsbyImage image={media_promotion.childImageSharp.gatsbyImageData} alt="" className="hero-illustration-media" />
                </div>
            </div>
        </div>
    )
}