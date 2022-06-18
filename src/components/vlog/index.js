import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

export default function VlogContainer () {
    const { media_vlog, media_vlog_prev, media_vlog_next } = useStaticQuery(graphql`
        query {
            media_vlog: file(relativePath: {eq: "naomi-hebert-MP0bgaS_d1c-unsplash.jpg"}) {
                childImageSharp {
                    gatsbyImageData
                }
            }
            media_vlog_prev: file(relativePath: {eq: "naomi-hebert-MP0bgaS_d1c-unsplash.jpg"}) {
                childImageSharp {
                    gatsbyImageData
                }
            }

            media_vlog_next: file(relativePath: {eq: "naomi-hebert-MP0bgaS_d1c-unsplash.jpg"}) {
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
    `)
    return (
        <div className="vlog-container">
            <div className="vlog-media-background">
                <GatsbyImage image={media_vlog.childImageSharp.gatsbyImageData} alt="" />
            </div>
            <div className="vlog-content">
                <div className="_container vlog-content-inner">
                    <div className="vlog-content-item vlog-content-prev">
                        <div className="vlog-content-item-inner">
                            <div className="vlog-content-item-media">
                                <GatsbyImage image={media_vlog_prev.childImageSharp.gatsbyImageData} alt="" />
                            </div>
                            <div className="vlog-content-item-btn">
                                <button className="partners-item-btn-item partners-item-prev">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.99987 16L19.9999 5.99998L21.3999 7.39998L12.7999 16L21.3999 24.6L19.9999 26L9.99987 16Z" fill="black"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="vlog-content-item-text">
                            All of the gas stoves
                        </div>
                    </div>
                    <div className="vlog-content-current">
                        <div className="vlog-content-current-type">Video</div>
                        <div className="vlog-content-current-title">Proper positioning of objects in the kitchen</div>
                        <div className="vlog-content-current-btn">
                            <button className="vlog-content-current-btn-play">
                                PLAY
                            </button>
                        </div>
                    </div>
                    <div className="vlog-content-item vlog-content-next">
                        <div className="vlog-content-item-inner">
                            <div className="vlog-content-item-media">
                                <GatsbyImage image={media_vlog_next.childImageSharp.gatsbyImageData} alt="" />
                            </div>
                            <div className="vlog-content-item-btn">
                                <button className="partners-item-btn-item partners-item-next">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 16L12 26L10.6 24.6L19.2 16L10.6 7.4L12 6L22 16Z" fill="black"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="vlog-content-item-text">
                            News of the week
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}