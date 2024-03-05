import React from 'react'

const Testimonials = () => {
    return (
        <>
            <section className="testimonials bg-white">
                <div className="container">
                    <div className="mb-1 pb-4 mb-xl-5 pb-xl-5" />
                    <h2 className="section-title text-center fw-normal mb-1 mb-md-3 pb-xl-3 mb-xl-4">
                        Testimonials
                    </h2>
                    <div className="position-relative">
                        <div className="swiper-container js-swiper-slider" data-settings={{
                            autoplay: {
                                delay: 5000
                            },
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            effect: "none",
                            loop: true,
                            pagination: {
                                el: ".testimonial-pagination",
                                type: "bullets",
                                clickable: true
                            },
                            navigation: {
                                nextEl: ".testimonial-carousel__next",
                                prevEl: ".testimonial-carousel__prev"
                            }
                        }}>
                            <div className="swiper-wrapper testimonials__wrapper">
                                <div className="swiper-slide testimonials__item mb-4 text-center">
                                    <div className="w-740 mx-auto">
                                        <h5 className="fw-normal lh-2rem mb-4">
                                            “ Ipsum dolor sit amet, consectetur adipiscing elit.
                                            Fringilla vel tincidunt ipsum ac. Nam at et id leo pulvinar
                                            egestas mi lorem. Adipiscing felis, vel faucibus in.
                                            Hendrerit viverra elementum venenatis pellentesque
                                            pellentesque ornare “
                                        </h5>
                                        <p className="text-secondary mb-3">
                                            Helena Gibbson, 06 April 2023
                                        </p>
                                        <div className="border-circle overflow-hidden w-100px h-100px mx-auto">
                                            <img
                                                loading="lazy"
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvts5aHBstDkR8PigS4RmZkbZy78zpZoSuOw&usqp=CAU"
                                                width={100}
                                                height={100}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide testimonials__item mb-4 text-center">
                                    <div className="w-740 mx-auto">
                                        <h5 className="fw-normal lh-2rem mb-4">
                                            “ Ipsum dolor sit amet, consectetur adipiscing elit.
                                            Fringilla vel tincidunt ipsum ac. Nam at et id leo pulvinar
                                            egestas mi lorem. Adipiscing felis, vel faucibus in.
                                            Hendrerit viverra elementum venenatis pellentesque
                                            pellentesque ornare “
                                        </h5>
                                        <p className="text-secondary mb-3">
                                            Helena Gibbson, 06 April 2023
                                        </p>
                                        <div className="border-circle overflow-hidden w-100px h-100px mx-auto">
                                            <img
                                                loading="lazy"
                                                src="../images/home/demo4/testimonial_avatar.png"
                                                width={100}
                                                height={100}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide testimonials__item mb-4 text-center">
                                    <div className="w-740 mx-auto">
                                        <h5 className="fw-normal lh-2rem mb-4">
                                            “ Ipsum dolor sit amet, consectetur adipiscing elit.
                                            Fringilla vel tincidunt ipsum ac. Nam at et id leo pulvinar
                                            egestas mi lorem. Adipiscing felis, vel faucibus in.
                                            Hendrerit viverra elementum venenatis pellentesque
                                            pellentesque ornare “
                                        </h5>
                                        <p className="text-secondary mb-3">
                                            Helena Gibbson, 06 April 2023
                                        </p>
                                        <div className="border-circle overflow-hidden w-100px h-100px mx-auto">
                                            <img
                                                loading="lazy"
                                                src="../images/home/demo4/testimonial_avatar.png"
                                                width={100}
                                                height={100}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide testimonials__item mb-4 text-center">
                                    <div className="w-740 mx-auto">
                                        <h5 className="fw-normal lh-2rem mb-4">
                                            “ Ipsum dolor sit amet, consectetur adipiscing elit.
                                            Fringilla vel tincidunt ipsum ac. Nam at et id leo pulvinar
                                            egestas mi lorem. Adipiscing felis, vel faucibus in.
                                            Hendrerit viverra elementum venenatis pellentesque
                                            pellentesque ornare “
                                        </h5>
                                        <p className="text-secondary mb-3">
                                            Helena Gibbson, 06 April 2023
                                        </p>
                                        <div className="border-circle overflow-hidden w-100px h-100px mx-auto">
                                            <img
                                                loading="lazy"
                                                src="../images/home/demo4/testimonial_avatar.png"
                                                width={100}
                                                height={100}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /.swiper-wrapper */}
                        </div>
                        {/* /.swiper-container js-swiper-slider */}
                        <div className="products-carousel__prev testimonial-carousel__prev position-absolute top-50 d-flex align-items-center justify-content-center">
                            <svg
                                width={25}
                                height={25}
                                viewBox="0 0 25 25"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <use href="#icon_prev_md" />
                            </svg>
                        </div>
                        {/* /.products-carousel__prev */}
                        <div className="products-carousel__next testimonial-carousel__next position-absolute top-50 d-flex align-items-center justify-content-center">
                            <svg
                                width={25}
                                height={25}
                                viewBox="0 0 25 25"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <use href="#icon_next_md" />
                            </svg>
                        </div>
                        {/* /.products-carousel__next */}
                        <div className="testimonial-pagination type2 mt-4 d-flex align-items-center justify-content-center" />
                        {/* /.products-pagination */}
                    </div>
                    {/* /.position-relative */}
                    <div className="mt-1 pt-4 mt-xl-5 pt-xl-5" />
                </div>
            </section>
        </>
    )
}

export default Testimonials