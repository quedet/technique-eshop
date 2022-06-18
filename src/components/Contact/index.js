import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function ContactContainer () {
    const { media_location } = useStaticQuery(graphql`
        query {
            media_location: file(relativePath: {eq: "location.png"}) {
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
    `)
    return (
        <div className="contact-container">
            <div className="contact-header">
                <div className="contact-header-label">
                    Contacts
                </div>
                <div className="contact-header-title">
                    <span>Let's get</span> <span>acquainted</span>
                </div>
                <div className="contact-header-meta">
                    <div className="contact-header-meta-item">
                        <div className="contact-header-meta-item-header">Visit us</div>
                        <div className="contact-header-meta-item-content">
                            <div>228 E 7th Street #312</div>
                            <div>St Paul, MN 55101</div>
                            <div>United States</div>
                        </div>
                    </div>
                    <div className="contact-header-meta-item">
                        <div className="contact-header-meta-item-header">Email</div>
                        <div className="contact-header-meta-item-content">
                            <div>info@technique.com</div>
                        </div>
                    </div>
                    <div className="contact-header-meta-item">
                        <div className="contact-header-meta-item-header">Visit us</div>
                        <div className="contact-header-meta-item-content">
                            <div>+16507599755</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-content">
                <div className="contact-content-media">
                    <GatsbyImage image={media_location.childImageSharp.gatsbyImageData} alt=""/>
                </div>
                <form className="contact-content-form">
                    <div className="contact-content-form-header">
                        <div>CONTACT US</div>
                    </div>
                    <div className="contact-content-form-fields">
                        <div className="form-fields-item">
                            <input type="text" name="user_name" placeholder="Name" />
                        </div>
                        <div className="form-fields-item">
                            <input type="number" name="user_phone" placeholder="Phone" />
                        </div>
                        <div className="form-fields-item">
                            <textarea rows={5} name="user_message" placeholder="Message" />
                        </div>
                        <div className="form-fields-item">
                            <button type="submit">
                                <span>SEND MESSAGE</span>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 16L12 26L10.6 24.6L19.2 16L10.6 7.4L12 6L22 16Z" fill="black"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}