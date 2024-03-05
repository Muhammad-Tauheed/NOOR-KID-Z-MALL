import React from 'react'

const HomeCards = () => {
    return (
        <>
            <section className="grid-banner container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="grid-banner__item position-relative">
                            <img
                                loading="lazy"
                                className="w-100 h-auto"
                                src="https://thumbs.dreamstime.com/b/new-arrivals-copy-sale-web-banners-template-special-offers-advertisement-liquid-colors-different-forms-new-arrivals-113894285.jpg"
                                width={690}
                                height={450}
                                alt=""
                            />
                            <div className="text-white content_abs content_bottom content_left content_bottom-lg content_left-lg">
                                <p className="text-uppercase mb-0">Basic Collection</p>
                                <h3 className="mb-2 text-white">New Arrivals</h3>
                                <a
                                    href="./shop1.html"
                                    className="btn-link default-underline text-uppercase fw-medium text-white"
                                >
                                    Shop Now
                                </a>
                            </div>
                            {/* /.content_abs content_bottom content_left content_bottom-md content_left-md */}
                        </div>
                        <div className="pb-4 pt-1" />
                        <div className="grid-banner__item position-relative">
                            <img
                                loading="lazy"
                                className="w-100 h-auto"
                                src="https://www.mumkins.in/cdn/shop/files/kurta-pajama-for-boys-bs105151-black-model-image.jpg?v=1685958543&width=1080"
                                width={690}
                                height={285}
                                alt=""
                            />
                            <div className="content_abs content_bottom content_left content_bottom-lg content_left-lg ">
                                <p className="text-uppercase mb-0 ">Shop Casual</p>
                                <h3 className="mb-2 font-semibold ">Clothes For Boys</h3>
                                <a
                                    href="./shop1.html"
                                    className="btn-link default-underline text-uppercase fw-medium "
                                >
                                    Shop Now
                                </a>
                            </div>
                            {/* /.content_abs content_bottom content_left content_bottom-md content_left-md */}
                        </div>
                        <div className="pb-4 pt-1" />
                    </div>
                    {/* /.col-md-6 */}
                    <div className="col-md-6">
                        <div className="grid-banner__item position-relative">
                            <img
                                loading="lazy"
                                className="w-100 h-auto"
                                src="https://i.pinimg.com/originals/87/a5/dd/87a5dd24040ee483a61843b549eb58be.jpg"
                                width={690}
                                height={285}
                                alt=""
                            />
                            <div className="content_abs content_bottom content_left content_bottom-lg content_left-lg ">
                                <p className="text-uppercase mb-0 ">Want and Need</p>
                                <h3 className="mb-2 ">The Everygirl Wears</h3>
                                <a
                                    href="./shop1.html"
                                    className="btn-link default-underline text-uppercase fw-medium "
                                >
                                    Shop Now
                                </a>
                            </div>
                            {/* /.content_abs content_bottom content_left content_bottom-md content_left-md */}
                        </div>
                        <div className="pb-4 pt-1" />
                        <div className="grid-banner__item position-relative">
                            <img
                                loading="lazy"
                                className="w-100 h-auto"
                                src="https://www.shutterstock.com/image-vector/vector-illustration-modern-free-shipping-260nw-1286047873.jpg"
                                width={690}
                                height={450}
                                alt=""
                            />
                            <div className="content_abs content_bottom content_left content_bottom-lg content_left-lg ">
                                <p className="text-uppercase mb-0 ">Sale off This week</p>
                                <h3 className="mb-2 ">Running Shoes</h3>
                                <a
                                    href="./shop1.html"
                                    className="btn-link default-underline text-uppercase fw-medium "
                             >
                                    Shop Now
                                </a>
                            </div>
                            {/* /.content_abs content_bottom content_left content_bottom-md content_left-md */}
                        </div>
                        <div className="pb-4 pt-1" />
                    </div>
                    {/* /.col-md-6 */}
                </div>
                {/* /.row */}
            </section>
        </>
    )
}

export default HomeCards