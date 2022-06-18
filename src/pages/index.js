import React from "react";
import ContactContainer from "../components/Contact";
import FeaturedContainer from "../components/Featured";
import HeroContainer from "../components/Hero";
import Layout from "../components/Layout";
import NewArrivalContainer from "../components/NewArrival";
import PartnersContainer from "../components/Partners";
import VlogContainer from "../components/vlog";

export default function IndexPage () {
    return (
        <Layout>
            <div className='hero-banner _container'>
                <HeroContainer />
            </div>
            <div className="featured _container">
                <FeaturedContainer />
            </div>
            <div className="new-arrival">
                <NewArrivalContainer />
            </div>
            <div className="partners _container">
                <PartnersContainer />
            </div>
            <div className="vlog">
                <VlogContainer />
            </div>
            <div className="contact _container">
                <ContactContainer />
            </div>
        </Layout>
    )
}