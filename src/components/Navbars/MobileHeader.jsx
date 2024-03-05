import React from 'react'
import MobileNavbar from './MobileNavbar'

const MobileHeader = () => {
    return (
        <>
            <div className="header-mobile header_sticky">
                <div className="container d-flex align-items-center h-100">
                    <a className="mobile-nav-activator d-block position-relative" href="#">
                        <svg
                            className="nav-icon"
                            width={25}
                            height={18}
                            viewBox="0 0 25 18"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <use href="#icon_nav" />
                        </svg>
                        <span className="btn-close-lg position-absolute top-0 start-0 w-100" />
                    </a>
                    <div className="logo">
                        <a href="/">
                            <span className="bg-yellow-400 text-white font-semibold pl-5">Noor Kid'</span><span className="bg-blue-400 text-white font-semibold pr-5">z Mall</span>
                        </a>
                    </div>
                    {/* /.logo */}
                    <a
                        href="#"
                        className="header-tools__item header-tools__cart js-open-aside"
                        data-aside="cartDrawer"
                    >
                        <svg
                            className="d-block"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <use href="#icon_cart" />
                        </svg>
                        <span className="cart-amount d-block position-absolute js-cart-items-count">
                            5
                        </span>
                    </a>
                </div>
                {/* /.container */}
                <MobileNavbar />
                {/* /.navigation */}
            </div>
        </>
    )
}
export default MobileHeader