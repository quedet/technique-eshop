import React from "react";
import { loadStripe } from "@stripe/stripe-js";

let StripePromise;

const getStripe = () => {
    if (!StripePromise) {
        StripePromise = loadStripe("pk_test_51L3grzLYPCfKoj0ig9uVbsEmlXBSYWRTMc2mRisPdEUoRijO7oqYxrpftVWD786Dj3E6866SPFI5bFKpejybnKsr00PeZNFP2O")
    }

    return StripePromise
}

const Checkout = () => {
    const [loading, setLoading] = React.useState(false)

    const redirectToCheckout = async event => {
        event.preventDefault()

        setLoading(true)

        const stripe = await getStripe()

        const { error } = await stripe.redirectToCheckout({
            mode: "payment",
            lineItems: [{ price: "price_1LBkhcLYPCfKoj0ifTXmcT5R", quantity: 1}],
            successUrl: `http://localhost:8000/`,
            cancelUrl: `http://localhost:8000/`
        })

        if (error) {
            console.warn("Error", error)
            setLoading(false)
        }
    }

    return (
        <button disabled={loading} onClick={redirectToCheckout}>
            BUY NOW
        </button>
    )
}

export default Checkout