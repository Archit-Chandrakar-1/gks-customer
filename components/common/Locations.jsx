"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { locations } from "@/data/locations";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

export default function Locations({ parentClass = "flat-location px-10" }) {
  const [swiperInstance, setSwiperInstance] = useState(null);
  return (
    <section className={parentClass}>
      <div className="box-title text-center wow fadeInUp">
        <div className="text-subtitle text-primary">Explore Cities</div>
        <h3 className="mt-4 title">Our Location For You</h3>
      </div>

      <div className="wow fadeInUp" data-wow-delay=".2s">
        <Swiper
          className="swiper tf-sw-location"
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          onMouseEnter={() => swiperInstance?.autoplay.stop()}
          onMouseLeave={() => swiperInstance?.autoplay.start()}
          spaceBetween={8}
          slidesPerView={6}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false, waitForTransition: false }}
          speed={3000}
          breakpoints={{
            1600: { slidesPerView: 6, spaceBetween: 8 },
            1224: { slidesPerView: 4, spaceBetween: 8 },
            1100: { slidesPerView: 3, spaceBetween: 8 },
            768: { slidesPerView: 3, spaceBetween: 8 },
            500: { slidesPerView: 2, spaceBetween: 8 },
            320: { slidesPerView: 1, spaceBetween: 8 },
          }}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true, el: ".spd4" }}
        >
          {locations.map((location, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <Link href={`/topmap-grid`} className="box-location">
                <div className="image img-style">
                  <Image
                    className="lazyload"
                    data-src={location.imgSrc}
                    alt={location.alt}
                    src={location.imgSrc}
                    width={465}
                    height={400}
                  />
                </div>
                {/* <div className="content">
                  <div className="inner-left">
                    <span className="sub-title fw-6">321 Property</span>
                    <h6 className="title text-line-clamp-1 link">
                      {location.title}
                    </h6>
                  </div>
                  <button className="box-icon line w-44 round">
                    <i className="icon icon-arrow-right2" />
                  </button>
                </div> */}
              </Link>
            </SwiperSlide>
          ))}
          <div className="sw-pagination spd4 spd1 sw-pagination-location text-center" />
        </Swiper>
      </div>
    </section>
  );
}
