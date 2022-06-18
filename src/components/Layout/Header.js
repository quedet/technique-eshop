import { Link } from "gatsby"
import React from "react"

const NavLinks = [
    {
        id: 1,
        label: 'News',
        path: '/news'
    },
    {
        id: 2,
        label: 'Catalog',
        path: '/catalog'
    },
    {
        id: 3,
        label: 'Contacts',
        path: '/contact'
    },
    {
        id: 4,
        label: 'About Us',
        path: '/about-us'
    },
    {
        id: 5,
        label: 'FAQ',
        path: '/faq'
    }
]

export default function HeaderContainer () {
    return (
        <div className="header-container">
            <div className="navbar">
                <div className="navbar-left">
                    <nav className="navbar-menu">
                        { NavLinks && NavLinks.map(item => (
                            <div className="navbar-menu-item" key={item.id}>
                                <Link to={item.path} className="navbar-menu-item-link">
                                    <span>{item.label}</span>
                                </Link>
                            </div>
                        ))}
                    </nav>
                    <div className="navbar-burger">
                        <div className="navbar-burger-item">
                            <svg className="navbar-burger-item-icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 7V9H28V7H4ZM4 15V17H28V15H4ZM4 23V25H28V23H4Z" fill="black"/>
                            </svg>
                            <span className="navbar-burger-item-text">
                                MENU
                            </span>
                        </div>
                    </div>
                </div>
                <div className="navbar-middle">
                    <div className="navbar-brand">
                        <div className="navbar-brand-item">
                            <Link to="/" className="navbar-brand-item-link">
                                TECHNIQUE
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="navbar-right">
                    <div className="navbar-feature-item">
                        <svg className="navbar-feature-item-icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29 27.586L21.448 20.034C23.2628 17.8553 24.1678 15.0608 23.9747 12.2319C23.7816 9.40297 22.5052 6.75739 20.4112 4.84552C18.3172 2.93364 15.5667 1.90267 12.732 1.96709C9.89717 2.0315 7.19635 3.18633 5.19133 5.19134C3.18632 7.19635 2.03149 9.89717 1.96708 12.732C1.90267 15.5667 2.93363 18.3172 4.84551 20.4112C6.75738 22.5053 9.40296 23.7816 12.2319 23.9747C15.0608 24.1678 17.8553 23.2628 20.034 21.448L27.586 29L29 27.586ZM3.99999 13C3.99999 11.22 4.52783 9.47991 5.51677 7.99987C6.5057 6.51983 7.91131 5.36627 9.55584 4.68508C11.2004 4.0039 13.01 3.82567 14.7558 4.17293C16.5016 4.5202 18.1053 5.37737 19.364 6.63604C20.6226 7.89471 21.4798 9.49836 21.8271 11.2442C22.1743 12.99 21.9961 14.7996 21.3149 16.4442C20.6337 18.0887 19.4802 19.4943 18.0001 20.4832C16.5201 21.4722 14.78 22 13 22C10.6139 21.9974 8.32621 21.0483 6.63896 19.361C4.9517 17.6738 4.00264 15.3861 3.99999 13V13Z" fill="black"/>
                        </svg>
                    </div>
                    <div className="navbar-feature-item navbar-feature-item-shop">
                        <svg className="navbar-feature-item-icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.8333 10V7.54167C20.8333 6.77562 20.6825 6.01708 20.3893 5.30935C20.0962 4.60161 19.6665 3.95855 19.1248 3.41688C18.5831 2.8752 17.9401 2.44552 17.2323 2.15237C16.5246 1.85922 15.7661 1.70833 15 1.70833C14.234 1.70833 13.4754 1.85922 12.7677 2.15237C12.06 2.44552 11.4169 2.8752 10.8752 3.41688C10.3335 3.95855 9.90387 4.60161 9.61071 5.30935C9.31756 6.01708 9.16668 6.77562 9.16668 7.54167V13.375C9.16668 13.596 9.25447 13.808 9.41075 13.9643C9.56704 14.1205 9.779 14.2083 10 14.2083C10.221 14.2083 10.433 14.1205 10.5893 13.9643C10.7455 13.808 10.8333 13.596 10.8333 13.375V11.6667H17.5V10H10.8333V7.54167C10.8333 6.4366 11.2723 5.37679 12.0537 4.59539C12.8351 3.81399 13.8949 3.375 15 3.375C16.1051 3.375 17.1649 3.81399 17.9463 4.59539C18.7277 5.37679 19.1667 6.4366 19.1667 7.54167V13.3333C19.1667 13.5543 19.2545 13.7663 19.4108 13.9226C19.567 14.0789 19.779 14.1667 20 14.1667C20.221 14.1667 20.433 14.0789 20.5893 13.9226C20.7455 13.7663 20.8333 13.5543 20.8333 13.3333V11.6667H25V26.6667H5.00001V11.6667H7.50001V10H3.33334V26.7417C3.33334 27.1638 3.50104 27.5686 3.79953 27.8671C4.09803 28.1656 4.50287 28.3333 4.92501 28.3333H25.075C25.4971 28.3333 25.902 28.1656 26.2005 27.8671C26.499 27.5686 26.6667 27.1638 26.6667 26.7417V10H20.8333Z" fill="black"/>
                        </svg>
                        <span className="navbar-feature-item-text">4</span>
                    </div>
                    <div className="navbar-feature-item navbar-feature-item-lang">
                        <span className="navbar-feature-item-text">EN</span>
                        <svg className="navbar-feature-item-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 22L6 12L7.4 10.6L16 19.2L24.6 10.6L26 12L16 22Z" fill="black"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}