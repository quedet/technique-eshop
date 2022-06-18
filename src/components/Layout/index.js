import React from 'react'
import CartProvider from '../../context/cartContext'
import FooterContainer from './Footer'
import HeaderContainer from './Header'

export default function Layout ({ children }) {
    return (
        <div>
            <CartProvider>
                <header className='header'>
                    <div className='_container'>
                        <HeaderContainer />
                    </div>
                </header>
                <main className='main-content'>
                    <div className='_flex_container'>
                        { children }
                    </div>
                </main>
                <footer className='footer'>
                    <div className='_container'>
                        <FooterContainer />
                    </div>
                </footer>
            </CartProvider>
        </div>
    )
}