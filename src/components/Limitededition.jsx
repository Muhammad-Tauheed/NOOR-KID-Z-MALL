import React from 'react'

const Limitededition = () => {
    return (
        <>
            <section className="products-carousel bg-rose-500">
                <div className="container">
                    <div className="mb-1 pb-4 mb-xl-5 pb-xl-5" />
                    <h2 className="section-title text-center fw-normal text-white mb-1 mb-md-3 pb-xl-3 mb-xl-4">
                        Limited Edition
                    </h2>
                    <div className="position-relative">
                        <div
                            className="swiper-container js-swiper-slider"
                            data-settings='{
        "autoplay": {
          "delay": 5000
        },
        "slidesPerView": 5,
        "slidesPerGroup": 1,
        "effect": "none",
        "loop": false,
        "pagination": {
          "el": ".products-pagination-1",
          "type": "bullets",
          "clickable": true
        },
        "navigation": {
          "nextEl": ".products-carousel__next-1",
          "prevEl": ".products-carousel__prev-1"
        },
        "breakpoints": {
          "320": {
            "slidesPerView": 2,
            "slidesPerGroup": 2,
            "spaceBetween": 14
          },
          "768": {
            "slidesPerView": 3,
            "slidesPerGroup": 3,
            "spaceBetween": 20
          },
          "992": {
            "slidesPerView": 4,
            "slidesPerGroup": 1,
            "spaceBetween": 28
          },
          "1200": {
            "slidesPerView": 5,
            "slidesPerGroup": 1,
            "spaceBetween": 28
          }
        }
      }'
                        >
                            <div className="swiper-wrapper">
                                <div
                                    className="swiper-slide product-card"
                                    style={{ backgroundColor: "#E9E7E8" }}
                                >
                                    <div className="pc__img-wrapper">
                                        <a href="./product1_simple.html">
                                            <img
                                                loading="lazy"
                                                src="https://vcdn1-ngoisao.vnecdn.net/2023/05/03/Ngay1-Emily-Rehearsal-2-1683099438.jpg?w=600&h=0&q=100&dpr=1&fit=crop&s=JZHjxNibt_Y9WB_PQQWTKA"
                                                width={260}
                                                height={315}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img"
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
                                    <div className="pc__info position-relative mx-2 px-3 py-3 mt-0">
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
                                <div
                                    className="swiper-slide product-card"
                                    style={{ backgroundColor: "#E9E7E8" }}
                                >
                                    <div className="pc__img-wrapper">
                                        <a href="./product1_simple.html">
                                            <img
                                                loading="lazy"
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQAAqTrxExIo2eXEC8yY7a0HTorI8_DpJ6Mw&usqp=CAU"
                                                width={260}
                                                height={315}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img"
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
                                    <div className="pc__info position-relative mx-2 px-3 py-3 mt-0">
                                        <h6 className="pc__title">
                                            <a href="./product1_simple.html">Calvin Shorts</a>
                                        </h6>
                                        <div className="product-card__price d-flex">
                                            <span className="money price">$62</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="swiper-slide product-card"
                                    style={{ backgroundColor: "#EDECEA" }}
                                >
                                    <div className="pc__img-wrapper">
                                        <a href="./product1_simple.html">
                                            <img
                                                loading="lazy"
                                                src="https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q="
                                                width="260"
                                                height="315"
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img"
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
                                    <div className="pc__info position-relative mx-2 px-3 py-3 mt-0">
                                        <h6 className="pc__title">
                                            <a href="./product1_simple.html">Kriby T-Shirt</a>
                                        </h6>
                                        <div className="product-card__price d-flex">
                                            <span className="money price">$17</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="swiper-slide product-card"
                                    style={{ backgroundColor: "#E8E8E8" }}
                                >
                                    <div className="pc__img-wrapper">
                                        <a href="./product1_simple.html">
                                            <img
                                                loading="lazy"
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7GorF4q2Fql2Cf4liXSPl5VDhqcgQXqXQIfpGT33g-eY2O7RaiV0p4ATEPDEpGJg_PI&usqp=CAU"
                                                width={260}
                                                height={315}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img"
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
                                    <div className="pc__info position-relative mx-2 px-3 py-3 mt-0">
                                        <h6 className="pc__title">
                                            <a href="./product1_simple.html">Cableknit Shawl</a>
                                        </h6>
                                        <div className="product-card__price d-flex">
                                            <span className="money price">$129</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="swiper-slide product-card"
                                    style={{ backgroundColor: "#F1F3E9" }}
                                >
                                    <div className="pc__img-wrapper">
                                        <a href="./product1_simple.html">
                                            <img
                                                loading="lazy"
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7GorF4q2Fql2Cf4liXSPl5VDhqcgQXqXQIfpGT33g-eY2O7RaiV0p4ATEPDEpGJg_PI&usqp=CAU"
                                                width={260}
                                                height={315}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img"
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
                                    <div className="pc__info position-relative mx-2 px-3 py-3 mt-0">
                                        <h6 className="pc__title">
                                            <a href="./product1_simple.html">
                                                Shirt In Botanical Cheetah
                                            </a>
                                        </h6>
                                        <div className="product-card__price d-flex">
                                            <span className="money price">$129</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="swiper-slide product-card"
                                    style={{ backgroundColor: "#E9E7E8" }}
                                >
                                    <div className="pc__img-wrapper">
                                        <a href="./product1_simple.html">
                                            <img
                                                loading="lazy"
                                                src="../images/home/demo4/product-9.jpg"
                                                width={260}
                                                height={315}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img"
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
                                    <div className="pc__info position-relative mx-2 px-3 py-3 mt-0">
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
                                <div
                                    className="swiper-slide product-card"
                                    style={{ backgroundColor: "#E9E7E8" }}
                                >
                                    <div className="pc__img-wrapper">
                                        <a href="./product1_simple.html">
                                            <img
                                                loading="lazy"
                                                src="../images/home/demo4/product-10.jpg"
                                                width={260}
                                                height={315}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img"
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
                                    <div className="pc__info position-relative mx-2 px-3 py-3 mt-0">
                                        <h6 className="pc__title">
                                            <a href="./product1_simple.html">Calvin Shorts</a>
                                        </h6>
                                        <div className="product-card__price d-flex">
                                            <span className="money price">$62</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="swiper-slide product-card"
                                    style={{ backgroundColor: "#EDECEA" }}
                                >
                                    <div className="pc__img-wrapper">
                                        <a href="./product1_simple.html">
                                            <img
                                                loading="lazy"
                                                src="../images/home/demo4/product-11.jpg"
                                                width={260}
                                                height={315}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img"
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
                                    <div className="pc__info position-relative mx-2 px-3 py-3 mt-0">
                                        <h6 className="pc__title">
                                            <a href="./product1_simple.html">Kriby T-Shirt</a>
                                        </h6>
                                        <div className="product-card__price d-flex">
                                            <span className="money price">$17</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="swiper-slide product-card"
                                    style={{ backgroundColor: "#E8E8E8" }}
                                >
                                    <div className="pc__img-wrapper">
                                        <a href="./product1_simple.html">
                                            <img
                                                loading="lazy"
                                                src="../images/home/demo4/product-12.jpg"
                                                width={260}
                                                height={315}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img"
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
                                    <div className="pc__info position-relative mx-2 px-3 py-3 mt-0">
                                        <h6 className="pc__title">
                                            <a href="./product1_simple.html">Cableknit Shawl</a>
                                        </h6>
                                        <div className="product-card__price d-flex">
                                            <span className="money price">$129</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="swiper-slide product-card"
                                    style={{ backgroundColor: "#F1F3E9" }}
                                >
                                    <div className="pc__img-wrapper">
                                        <a href="./product1_simple.html">
                                            <img
                                                loading="lazy"
                                                src="../images/home/demo4/product-13.jpg"
                                                width={260}
                                                height={315}
                                                alt="Cropped Faux leather Jacket"
                                                className="pc__img"
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
                                    <div className="pc__info position-relative mx-2 px-3 py-3 mt-0">
                                        <h6 className="pc__title">
                                            <a href="./product1_simple.html">
                                                Shirt In Botanical Cheetah
                                            </a>
                                        </h6>
                                        <div className="product-card__price d-flex">
                                            <span className="money price">$129</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /.swiper-wrapper */}
                            {/* /.products-pagination */}
                        </div>
                        {/* /.swiper-container js-swiper-slider */}
                        <div className="products-carousel__prev products-carousel__prev-1 bg-transparent position-absolute top-50 d-flex align-items-center justify-content-center">
                            <svg
                                className="color-white"
                                width={20}
                                height={20}
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <use href="#icon_prev_md" />
                            </svg>
                        </div>
                        {/* /.products-carousel__prev */}
                        <div className="products-carousel__next products-carousel__next-1 bg-transparent position-absolute top-50 d-flex align-items-center justify-content-center">
                            <svg
                                className="color-white"
                                width={20}
                                height={20}
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <use href="#icon_next_md" />
                            </svg>
                        </div>
                        {/* /.products-carousel__next */}
                        <div className="products-pagination products-pagination-1 type2 active-white mt-5 mb-3 d-flex align-items-center justify-content-center" />
                    </div>
                    {/* /.position-relative */}
                    <div className="mt-1 pt-4 mt-xl-5 pt-xl-5" />
                </div>
            </section>
        </>
    )
}

export default Limitededition