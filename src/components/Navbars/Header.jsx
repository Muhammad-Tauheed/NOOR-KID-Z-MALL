import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <>
            <header id="header" className="header header-fullwidth header-transparent-bg">
                <div className="header-top d-flex bg-gradient-to-r from-blue-500 via-white to-rose-500 color-white align-items-center">
                    <ul className="list-unstyled d-flex flex-1 gap-3 m-0">
                        <li>
                            <a href="#" className="menu-link menu-link_us-s color-white">
                                Shipping
                            </a>
                        </li>
                        <li>
                            <a href="#" className="menu-link menu-link_us-s color-white">
                                FAQ
                            </a>
                        </li>
                        <li>
                            <a href="#" className="menu-link menu-link_us-s color-white">
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="#" className="menu-link menu-link_us-s color-white">
                                Track Order
                            </a>
                        </li>
                    </ul>
                    <p className="mx-auto mb-0 text-black ">FREE SHIPPING WORLDWIDE</p>
                    <div className="heeader-top__right flex-1 d-flex gap-1 justify-content-end">
                        <ul className="social-links list-unstyled d-flex flex-wrap mb-0">
                            <li>
                                <a href="#" className="footer__social-link d-block color-white">
                                    <svg
                                        className="svg-icon svg-icon_facebook"
                                        width={9}
                                        height={15}
                                        viewBox="0 0 9 15"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <use href="#icon_facebook" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer__social-link d-block color-white">
                                    <svg
                                        className="svg-icon svg-icon_twitter"
                                        width={14}
                                        height={13}
                                        viewBox="0 0 14 13"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <use href="#icon_twitter" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer__social-link d-block color-white">
                                    <svg
                                        className="svg-icon svg-icon_instagram"
                                        width={14}
                                        height={13}
                                        viewBox="0 0 14 13"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <use href="#icon_instagram" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer__social-link d-block color-white">
                                    <svg
                                        className="svg-icon svg-icon_pinterest"
                                        width={14}
                                        height={15}
                                        viewBox="0 0 14 15"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <use href="#icon_pinterest" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                        <select
                            className="form-select form-select-sm bg-transparent color-white"
                            name="store-language"
                        >
                            <option value="english" selected="">
                                English
                            </option>
                            <option value="german">German</option>
                            <option value="french">French</option>
                            <option value="swedish">Swedish</option>
                        </select>
                        <select
                            className="form-select form-select-sm bg-transparent color-white"
                            name="store-currency"
                        >
                            <option value="usd" selected="">
                                $ USD
                            </option>
                            <option value="gbp">£ GBP</option>
                            <option value="eur">€ EURO</option>
                        </select>
                    </div>
                </div>
                <div className="header-desk header-desk_type_1">
                    <div className="logo">
                        <a href="/">
                            <span className="text-white bg-yellow-400  font-bold pl-2 py-2">Noor Kid'</span><span className="text-white bg-blue-400 font-bold pr-2 py-2">z Mall</span>
                        </a>
                    </div>
                    {/* /.logo */}
                    <Navbar />
                    {/* /.navigation */}
                    <div className="header-tools d-flex align-items-center">
                        <div className="header-tools__item hover-container">
                            <div className="js-hover__open position-relative">
                                <a className="js-search-popup search-field__actor" href="#">
                                    <svg
                                        className="d-block"
                                        width={20}
                                        height={20}
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <use href="#icon_search" />
                                    </svg>
                                    <i className="btn-icon btn-close-lg" />
                                </a>
                            </div>
                            <div className="search-popup js-hidden-content">
                                <form
                                    action="./search_result.html"
                                    method="GET"
                                    className="search-field container"
                                >
                                    <p className="text-uppercase text-secondary fw-medium mb-4">
                                        What are you looking for?
                                    </p>
                                    <div className="position-relative">
                                        <input
                                            className="search-field__input search-popup__input w-100 fw-medium"
                                            type="text"
                                            name="search-keyword"
                                            placeholder="Search products"
                                        />
                                        <button className="btn-icon search-popup__submit" type="submit">
                                            <svg
                                                className="d-block"
                                                width={20}
                                                height={20}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_search" />
                                            </svg>
                                        </button>
                                        <button
                                            className="btn-icon btn-close-lg search-popup__reset"
                                            type="reset"
                                        />
                                    </div>
                                    <div className="search-popup__results">
                                        <div className="sub-menu search-suggestion">
                                            <h6 className="sub-menu__title fs-base">Quicklinks</h6>
                                            <ul className="sub-menu__list list-unstyled">
                                                <li className="sub-menu__item">
                                                    <a
                                                        href="./shop2.html"
                                                        className="menu-link menu-link_us-s"
                                                    >
                                                        New Arrivals
                                                    </a>
                                                </li>
                                                <li className="sub-menu__item">
                                                    <a href="#" className="menu-link menu-link_us-s">
                                                        Dresses
                                                    </a>
                                                </li>
                                                <li className="sub-menu__item">
                                                    <a
                                                        href="./shop3.html"
                                                        className="menu-link menu-link_us-s"
                                                    >
                                                        Accessories
                                                    </a>
                                                </li>
                                                <li className="sub-menu__item">
                                                    <a href="#" className="menu-link menu-link_us-s">
                                                        Footwear
                                                    </a>
                                                </li>
                                                <li className="sub-menu__item">
                                                    <a href="#" className="menu-link menu-link_us-s">
                                                        Sweatshirt
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="search-result row row-cols-5" />
                                    </div>
                                </form>
                                {/* /.header-search */}
                            </div>
                            {/* /.search-popup */}
                        </div>
                        {/* /.header-tools__item hover-container */}
                        <div className="header-tools__item hover-container">
                            <a
                                className="header-tools__item js-open-aside"
                                href="#"
                                data-aside="customerForms"
                            >
                                <svg
                                    className="d-block"
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <use href="#icon_user" />
                                </svg>
                            </a>
                        </div>
                        <a className="header-tools__item" href="./account_wishlist.html">
                            <svg
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <use href="#icon_heart" />
                            </svg>
                        </a>
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
                                3
                            </span>
                        </a>
                        <a
                            className="header-tools__item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#siteMap"
                        >
                            <svg
                                className="nav-icon"
                                width={25}
                                height={18}
                                viewBox="0 0 25 18"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect width={25} height={2} />
                                <rect y={8} width={20} height={2} />
                                <rect y={16} width={25} height={2} />
                            </svg>
                        </a>
                    </div>
                    {/* /.header__tools */}
                </div>
                {/* /.header-desk header-desk_type_1 */}
            </header>
        </>
    )
}

export default Header