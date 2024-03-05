import React from 'react'

const InSideCollections = () => {
    return (
        <>
            <section className="products-carousel container">
                <h2 className="section-title text-center fw-normal mb-1 mb-md-3 pb-xl-3 mb-xl-4">
                    The Inside Collection
                </h2>
                <div className="position-relative">
                    <div
                        className="swiper-container js-swiper-slider"
                        data-settings='{
      "autoplay": {
        "delay": 5000
      },
      "slidesPerView": 4,
      "slidesPerGroup": 4,
      "effect": "none",
      "loop": false,
      "breakpoints": {
        "320": {
          "slidesPerView": 2,
          "slidesPerGroup": 2,
          "spaceBetween": 14
        },
        "768": {
          "slidesPerView": 3,
          "slidesPerGroup": 3,
          "spaceBetween": 24
        },
        "992": {
          "slidesPerView": 4,
          "slidesPerGroup": 1,
          "spaceBetween": 30,
          "pagination": false
        }
      }
    }'
                    >
                        <div className="swiper-wrapper">
                            <div className="swiper-slide product-card">
                                <div className="pc__img-wrapper">
                                    <a href="./product1_simple.html">
                                        <img
                                            loading="lazy"
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQAAqTrxExIo2eXEC8yY7a0HTorI8_DpJ6Mw&usqp=CAU"
                                            width={330}
                                            height={400}
                                            alt="Cropped Faux leather Jacket"
                                            className="pc__img"
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7GorF4q2Fql2Cf4liXSPl5VDhqcgQXqXQIfpGT33g-eY2O7RaiV0p4ATEPDEpGJg_PI&usqp=CAU"
                                            width={330}
                                            height={400}
                                            alt="Cropped Faux leather Jacket"
                                            className="pc__img pc__img-second"
                                        />
                                    </a>
                                    <div className="anim_appear-bottom position-absolute w-100 text-center mb-3">
                                        <button
                                            className="btn btn-round btn-hover-red border-0 text-uppercase me-1 me-md-2 js-add-cart js-open-aside"
                                            data-aside="cartDrawer"
                                            title="Add To Cart"
                                        >
                                            <svg
                                                className="d-inline-block"
                                                width={14}
                                                height={14}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_cart" />
                                            </svg>
                                        </button>
                                        <button
                                            className="btn btn-round btn-hover-red border-0 text-uppercase me-1 me-md-2 js-quick-view"
                                            data-bs-toggle="modal"
                                            data-bs-target="#quickView"
                                            title="Quick view"
                                        >
                                            <svg
                                                className="d-inline-block"
                                                width={18}
                                                height={18}
                                                viewBox="0 0 18 18"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_view" />
                                            </svg>
                                        </button>
                                        <button
                                            className="btn btn-round btn-hover-red border-0 text-uppercase js-add-wishlist"
                                            title="Add To Wishlist"
                                        >
                                            <svg
                                                width={14}
                                                height={14}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_heart" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="pc__info position-relative">
                                    <p className="pc__category">Dresses</p>
                                    <h6 className="pc__title">
                                        <a href="./product1_simple.html">
                                            Cropped Faux Leather Jacket
                                        </a>
                                    </h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price">$29</span>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide product-card">
                                <div className="pc__img-wrapper">
                                    <a href="./product1_simple.html">
                                        <img
                                            loading="lazy"
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7GorF4q2Fql2Cf4liXSPl5VDhqcgQXqXQIfpGT33g-eY2O7RaiV0p4ATEPDEpGJg_PI&usqp=CAU"
                                            width={330}
                                            height={400}
                                            alt="Cropped Faux leather Jacket"
                                            className="pc__img"
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQAAqTrxExIo2eXEC8yY7a0HTorI8_DpJ6Mw&usqp=CAU"
                                            width={330}
                                            height={400}
                                            alt="Cropped Faux leather Jacket"
                                            className="pc__img pc__img-second"
                                        />
                                    </a>
                                    <div className="product-label text-uppercase bg-white top-0 left-0 mt-2 mx-2">
                                        New
                                    </div>
                                    <div className="anim_appear-bottom position-absolute w-100 text-center mb-3">
                                        <button
                                            className="btn btn-round btn-hover-red border-0 text-uppercase me-1 me-md-2 js-add-cart js-open-aside"
                                            data-aside="cartDrawer"
                                            title="Add To Cart"
                                        >
                                            <svg
                                                className="d-inline-block"
                                                width={14}
                                                height={14}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_cart" />
                                            </svg>
                                        </button>
                                        <button
                                            className="btn btn-round btn-hover-red border-0 text-uppercase me-1 me-md-2 js-quick-view"
                                            data-bs-toggle="modal"
                                            data-bs-target="#quickView"
                                            title="Quick view"
                                        >
                                            <svg
                                                className="d-inline-block"
                                                width={18}
                                                height={18}
                                                viewBox="0 0 18 18"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_view" />
                                            </svg>
                                        </button>
                                        <button
                                            className="btn btn-round btn-hover-red border-0 text-uppercase js-add-wishlist"
                                            title="Add To Wishlist"
                                        >
                                            <svg
                                                width={14}
                                                height={14}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_heart" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="pc__info position-relative">
                                    <p className="pc__category">Dresses</p>
                                    <h6 className="pc__title">
                                        <a href="./product1_simple.html">Calvin Shorts</a>
                                    </h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price">$62</span>
                                    </div>
                                    <div className="d-flex align-items-center mt-1">
                                        <a
                                            href="#"
                                            className="swatch-color pc__swatch-color"
                                            style={{ color: "#222222" }}
                                        />
                                        <a
                                            href="#"
                                            className="swatch-color swatch_active pc__swatch-color"
                                            style={{ color: "#b9a16b" }}
                                        />
                                        <a
                                            href="#"
                                            className="swatch-color pc__swatch-color"
                                            style={{ color: "#f5e6e0" }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide product-card">
                                <div className="pc__img-wrapper">
                                    <a href="./product1_simple.html">
                                        <img
                                            loading="lazy"
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQAAqTrxExIo2eXEC8yY7a0HTorI8_DpJ6Mw&usqp=CAU"
                                            width={330}
                                            height={400}
                                            alt="Cropped Faux leather Jacket"
                                            className="pc__img"
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7GorF4q2Fql2Cf4liXSPl5VDhqcgQXqXQIfpGT33g-eY2O7RaiV0p4ATEPDEpGJg_PI&usqp=CAU"
                                            width={330}
                                            height={400}
                                            alt="Cropped Faux leather Jacket"
                                            className="pc__img pc__img-second"
                                        />
                                    </a>
                                    <div className="anim_appear-bottom position-absolute w-100 text-center mb-3">
                                        <button
                                            className="btn btn-round btn-hover-red border-0 text-uppercase me-1 me-md-2 js-add-cart js-open-aside"
                                            data-aside="cartDrawer"
                                            title="Add To Cart"
                                        >
                                            <svg
                                                className="d-inline-block"
                                                width={14}
                                                height={14}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_cart" />
                                            </svg>
                                        </button>
                                        <button
                                            className="btn btn-round btn-hover-red border-0 text-uppercase me-1 me-md-2 js-quick-view"
                                            data-bs-toggle="modal"
                                            data-bs-target="#quickView"
                                            title="Quick view"
                                        >
                                            <svg
                                                className="d-inline-block"
                                                width={18}
                                                height={18}
                                                viewBox="0 0 18 18"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_view" />
                                            </svg>
                                        </button>
                                        <button
                                            className="btn btn-round btn-hover-red border-0 text-uppercase js-add-wishlist"
                                            title="Add To Wishlist"
                                        >
                                            <svg
                                                width={14}
                                                height={14}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_heart" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="pc__info position-relative">
                                    <p className="pc__category">Dresses</p>
                                    <h6 className="pc__title">
                                        <a href="./product1_simple.html">Kirby T-Shirt</a>
                                    </h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price">$17</span>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide product-card">
                                <div className="pc__img-wrapper">
                                    <a href="./product1_simple.html">
                                        <img
                                            loading="lazy"
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7GorF4q2Fql2Cf4liXSPl5VDhqcgQXqXQIfpGT33g-eY2O7RaiV0p4ATEPDEpGJg_PI&usqp=CAU"
                                            width={330}
                                            height={400}
                                            alt="Cropped Faux leather Jacket"
                                            className="pc__img"
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQAAqTrxExIo2eXEC8yY7a0HTorI8_DpJ6Mw&usqp=CAU"
                                            width={330}
                                            height={400}
                                            alt="Cropped Faux leather Jacket"
                                            className="pc__img pc__img-second"
                                        />
                                    </a>
                                    <div className="product-label bg-red text-white right-0 top-0 left-auto mt-2 mx-2">
                                        -67%
                                    </div>
                                    <div className="anim_appear-bottom position-absolute w-100 text-center mb-3">
                                        <button
                                            className="btn btn-round btn-hover-red border-0 text-uppercase me-1 me-md-2 js-add-cart js-open-aside"
                                            data-aside="cartDrawer"
                                            title="Add To Cart"
                                        >
                                            <svg
                                                className="d-inline-block"
                                                width={14}
                                                height={14}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_cart" />
                                            </svg>
                                        </button>
                                        <button
                                            className="btn btn-round btn-hover-red border-0 text-uppercase me-1 me-md-2 js-quick-view"
                                            data-bs-toggle="modal"
                                            data-bs-target="#quickView"
                                            title="Quick view"
                                        >
                                            <svg
                                                className="d-inline-block"
                                                width={18}
                                                height={18}
                                                viewBox="0 0 18 18"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_view" />
                                            </svg>
                                        </button>
                                        <button
                                            className="btn btn-round btn-hover-red border-0 text-uppercase js-add-wishlist"
                                            title="Add To Wishlist"
                                        >
                                            <svg
                                                width={14}
                                                height={14}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_heart" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="pc__info position-relative">
                                    <p className="pc__category">Dresses</p>
                                    <h6 className="pc__title">
                                        <a href="./product1_simple.html">Cableknit Shawl</a>
                                    </h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price price-old">$129</span>
                                        <span className="money price price-sale">$99</span>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide product-card">
                                <div className="pc__img-wrapper">
                                    <a href="./product1_simple.html">
                                        <img
                                            loading="lazy"
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7GorF4q2Fql2Cf4liXSPl5VDhqcgQXqXQIfpGT33g-eY2O7RaiV0p4ATEPDEpGJg_PI&usqp=CAU"
                                            width={330}
                                            height={400}
                                            alt="Cropped Faux leather Jacket"
                                            className="pc__img"
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQAAqTrxExIo2eXEC8yY7a0HTorI8_DpJ6Mw&usqp=CAU"
                                            width={330}
                                            height={400}
                                            alt="Cropped Faux leather Jacket"
                                            className="pc__img pc__img-second"
                                        />
                                    </a>
                                    <div className="product-label text-uppercase bg-black text-white top-0 left-0 mt-2 mx-2">
                                        Sale
                                    </div>
                                    <div className="anim_appear-bottom position-absolute w-100 text-center mb-3">
                                        <button
                                            className="btn btn-round btn-hover-red border-0 text-uppercase me-1 me-md-2 js-add-cart js-open-aside"
                                            data-aside="cartDrawer"
                                            title="Add To Cart"
                                        >
                                            <svg
                                                className="d-inline-block"
                                                width={14}
                                                height={14}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_cart" />
                                            </svg>
                                        </button>
                                        <button
                                            className="btn btn-round btn-hover-red border-0 text-uppercase me-1 me-md-2 js-quick-view"
                                            data-bs-toggle="modal"
                                            data-bs-target="#quickView"
                                            title="Quick view"
                                        >
                                            <svg
                                                className="d-inline-block"
                                                width={18}
                                                height={18}
                                                viewBox="0 0 18 18"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_view" />
                                            </svg>
                                        </button>
                                        <button
                                            className="btn btn-round btn-hover-red border-0 text-uppercase js-add-wishlist"
                                            title="Add To Wishlist"
                                        >
                                            <svg
                                                width={14}
                                                height={14}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_heart" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="pc__info position-relative">
                                    <p className="pc__category">Dresses</p>
                                    <h6 className="pc__title">
                                        <a href="./product1_simple.html">Colorful Jacket</a>
                                    </h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price">$29</span>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide product-card">
                                <div className="pc__img-wrapper">
                                    <a href="./product1_simple.html">
                                        <img
                                            loading="lazy"
                                            src="../images/home/demo4/product-6-1.jpg"
                                            width={330}
                                            height={400}
                                            alt="Cropped Faux leather Jacket"
                                            className="pc__img"
                                        />
                                        <img
                                            loading="lazy"
                                            src="../images/home/demo4/product-6-2.jpg"
                                            width={330}
                                            height={400}
                                            alt="Cropped Faux leather Jacket"
                                            className="pc__img pc__img-second"
                                        />
                                    </a>
                                    <div className="anim_appear-bottom position-absolute w-100 text-center mb-3">
                                        <button
                                            className="btn btn-round btn-hover-red border-0 text-uppercase me-1 me-md-2 js-add-cart js-open-aside"
                                            data-aside="cartDrawer"
                                            title="Add To Cart"
                                        >
                                            <svg
                                                className="d-inline-block"
                                                width={14}
                                                height={14}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_cart" />
                                            </svg>
                                        </button>
                                        <button
                                            className="btn btn-round btn-hover-red border-0 text-uppercase me-1 me-md-2 js-quick-view"
                                            data-bs-toggle="modal"
                                            data-bs-target="#quickView"
                                            title="Quick view"
                                        >
                                            <svg
                                                className="d-inline-block"
                                                width={18}
                                                height={18}
                                                viewBox="0 0 18 18"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_view" />
                                            </svg>
                                        </button>
                                        <button
                                            className="btn btn-round btn-hover-red border-0 text-uppercase js-add-wishlist"
                                            title="Add To Wishlist"
                                        >
                                            <svg
                                                width={14}
                                                height={14}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_heart" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="pc__info position-relative">
                                    <p className="pc__category">Dresses</p>
                                    <h6 className="pc__title">
                                        <a href="./product1_simple.html">
                                            Shirt In Botanical Cheetah Print
                                        </a>
                                    </h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price">$62</span>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide product-card">
                                <div className="pc__img-wrapper">
                                    <a href="./product1_simple.html">
                                        <img
                                            loading="lazy"
                                            src="../images/home/demo4/product-7-1.jpg"
                                            width={330}
                                            height={400}
                                            alt="Cropped Faux leather Jacket"
                                            className="pc__img"
                                        />
                                        <img
                                            loading="lazy"
                                            src="../images/home/demo4/product-7-2.jpg"
                                            width={330}
                                            height={400}
                                            alt="Cropped Faux leather Jacket"
                                            className="pc__img pc__img-second"
                                        />
                                    </a>
                                    <div className="anim_appear-bottom position-absolute w-100 text-center mb-3">
                                        <button
                                            className="btn btn-round btn-hover-red border-0 text-uppercase me-1 me-md-2 js-add-cart js-open-aside"
                                            data-aside="cartDrawer"
                                            title="Add To Cart"
                                        >
                                            <svg
                                                className="d-inline-block"
                                                width={14}
                                                height={14}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_cart" />
                                            </svg>
                                        </button>
                                        <button
                                            className="btn btn-round btn-hover-red border-0 text-uppercase me-1 me-md-2 js-quick-view"
                                            data-bs-toggle="modal"
                                            data-bs-target="#quickView"
                                            title="Quick view"
                                        >
                                            <svg
                                                className="d-inline-block"
                                                width={18}
                                                height={18}
                                                viewBox="0 0 18 18"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_view" />
                                            </svg>
                                        </button>
                                        <button
                                            className="btn btn-round btn-hover-red border-0 text-uppercase js-add-wishlist"
                                            title="Add To Wishlist"
                                        >
                                            <svg
                                                width={14}
                                                height={14}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_heart" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="pc__info position-relative">
                                    <p className="pc__category">Dresses</p>
                                    <h6 className="pc__title">
                                        <a href="./product1_simple.html">Cotton Jersey T-Shirt</a>
                                    </h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price">$17</span>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide product-card">
                                <div className="pc__img-wrapper">
                                    <a href="./product1_simple.html">
                                        <img
                                            loading="lazy"
                                            src="../images/home/demo4/product-8-1.jpg"
                                            width={330}
                                            height={400}
                                            alt="Cropped Faux leather Jacket"
                                            className="pc__img"
                                        />
                                        <img
                                            loading="lazy"
                                            src="../images/home/demo4/product-8-2.jpg"
                                            width={330}
                                            height={400}
                                            alt="Cropped Faux leather Jacket"
                                            className="pc__img pc__img-second"
                                        />
                                    </a>
                                    <div className="anim_appear-bottom position-absolute w-100 text-center mb-3">
                                        <button
                                            className="btn btn-round btn-hover-red border-0 text-uppercase me-1 me-md-2 js-add-cart js-open-aside"
                                            data-aside="cartDrawer"
                                            title="Add To Cart"
                                        >
                                            <svg
                                                className="d-inline-block"
                                                width={14}
                                                height={14}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_cart" />
                                            </svg>
                                        </button>
                                        <button
                                            className="btn btn-round btn-hover-red border-0 text-uppercase me-1 me-md-2 js-quick-view"
                                            data-bs-toggle="modal"
                                            data-bs-target="#quickView"
                                            title="Quick view"
                                        >
                                            <svg
                                                className="d-inline-block"
                                                width={18}
                                                height={18}
                                                viewBox="0 0 18 18"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_view" />
                                            </svg>
                                        </button>
                                        <button
                                            className="btn btn-round btn-hover-red border-0 text-uppercase js-add-wishlist"
                                            title="Add To Wishlist"
                                        >
                                            <svg
                                                width={14}
                                                height={14}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_heart" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="pc__info position-relative">
                                    <p className="pc__category">Dresses</p>
                                    <h6 className="pc__title">
                                        <a href="./product1_simple.html">Zessi Dresses</a>
                                    </h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price price-old">$129</span>
                                        <span className="money price price-sale">$99</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /.swiper-wrapper */}
                    </div>
                    {/* /.swiper-container js-swiper-slider */}
                </div>
                {/* /.position-relative */}
            </section>
        </>
    )
}

export default InSideCollections