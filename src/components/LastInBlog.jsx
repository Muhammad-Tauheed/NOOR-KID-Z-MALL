import React from 'react'

const LastInBlog = () => {
    return (
        <>
            <section className="blog-carousel bg-yellow">
                <div className="container">
                    <div className="mb-1 pb-4 mb-xl-5 pb-xl-5" />
                    <h2 className="section-title text-center fw-normal mb-1 mb-md-3 pb-xl-3 mb-xl-4">
                        Latest in Blog
                    </h2>
                    <div className="position-relative">
                        <div
                            className="swiper-container js-swiper-slider"
                            data-settings='{
        "autoplay": {
          "delay": 5000
        },
        "slidesPerView": 4,
        "slidesPerGroup": 1,
        "effect": "none",
        "loop": true,
        "pagination": {
          "el": ".blog-pagination",
          "type": "bullets",
          "clickable": true
        },
        "breakpoints": {
          "320": {
            "slidesPerView": 1,
            "slidesPerGroup": 1,
            "spaceBetween": 14
          },
          "768": {
            "slidesPerView": 2,
            "slidesPerGroup": 2,
            "spaceBetween": 20
          },
          "992": {
            "slidesPerView": 3,
            "slidesPerGroup": 1,
            "spaceBetween": 24
          },
          "1200": {
            "slidesPerView": 4,
            "slidesPerGroup": 1,
            "spaceBetween": 30
          }
        }
      }'
                        >
                            <div className="swiper-wrapper blog-grid row-cols-xl-3">
                                <div className="swiper-slide blog-grid__item bg-white">
                                    <div className="blog-grid__item-image">
                                        <img
                                            loading="lazy"
                                            className="h-auto"
                                            src="../images/home/demo4/post-1.jpg"
                                            width={330}
                                            height={220}
                                            alt=""
                                        />
                                    </div>
                                    <div className="blog-grid__item-detail text-center px-3 px-xl-5 pb-4">
                                        <div className="blog-grid__item-meta justify-content-center">
                                            <span className="blog-grid__item-meta__author">
                                                By Admin
                                            </span>
                                            <span className="blog-grid__item-meta__date">
                                                Aprial 05, 2023
                                            </span>
                                        </div>
                                        <div className="blog-grid__item-title mb-0">
                                            <a href="./blog_single.html">
                                                Woman with good shoes is never be ugly place
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide blog-grid__item bg-white">
                                    <div className="blog-grid__item-image">
                                        <img
                                            loading="lazy"
                                            className="h-auto"
                                            src="../images/home/demo4/post-2.jpg"
                                            width={330}
                                            height={220}
                                            alt=""
                                        />
                                    </div>
                                    <div className="blog-grid__item-detail text-center px-3 px-xl-5 pb-4">
                                        <div className="blog-grid__item-meta justify-content-center">
                                            <span className="blog-grid__item-meta__author">
                                                By Admin
                                            </span>
                                            <span className="blog-grid__item-meta__date">
                                                Aprial 05, 2023
                                            </span>
                                        </div>
                                        <div className="blog-grid__item-title mb-0">
                                            <a href="./blog_single.html">
                                                What Freud Can Teach Us About Furniture
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide blog-grid__item bg-white">
                                    <div className="blog-grid__item-image">
                                        <img
                                            loading="lazy"
                                            className="h-auto"
                                            src="../images/home/demo4/post-3.jpg"
                                            width={330}
                                            height={220}
                                            alt=""
                                        />
                                    </div>
                                    <div className="blog-grid__item-detail text-center px-3 px-xl-5 pb-4">
                                        <div className="blog-grid__item-meta justify-content-center">
                                            <span className="blog-grid__item-meta__author">
                                                By Admin
                                            </span>
                                            <span className="blog-grid__item-meta__date">
                                                Aprial 05, 2023
                                            </span>
                                        </div>
                                        <div className="blog-grid__item-title mb-0">
                                            <a href="./blog_single.html">
                                                Habitant morbi tristique senectus
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide blog-grid__item bg-white">
                                    <div className="blog-grid__item-image">
                                        <img
                                            loading="lazy"
                                            className="h-auto"
                                            src="../images/home/demo4/post-4.jpg"
                                            width={330}
                                            height={220}
                                            alt=""
                                        />
                                    </div>
                                    <div className="blog-grid__item-detail text-center px-3 px-xl-5 pb-4">
                                        <div className="blog-grid__item-meta justify-content-center">
                                            <span className="blog-grid__item-meta__author">
                                                By Admin
                                            </span>
                                            <span className="blog-grid__item-meta__date">
                                                Aprial 05, 2023
                                            </span>
                                        </div>
                                        <div className="blog-grid__item-title mb-0">
                                            <a href="./blog_single.html">
                                                Woman with good shoes is never be ugly place
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /.swiper-wrapper */}
                        </div>
                        {/* /.swiper-container js-swiper-slider */}
                        <div className="blog-pagination type2 mt-4 d-flex align-items-center justify-content-center" />
                        {/* /.products-pagination */}
                    </div>
                    {/* /.position-relative */}
                    <div className="mt-1 pt-4 mt-xl-5 pt-xl-5" />
                </div>
            </section>
        </>
    )
}

export default LastInBlog