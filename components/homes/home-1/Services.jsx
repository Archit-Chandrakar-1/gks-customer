import React from "react";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
export default function Services() {
  return (
    <section className="flat-section">
      <div className="container">
        <div
          className="box-title text-center wow fadeInUpSmall"
          data-wow-delay=".2s"
          data-wow-duration="2000ms"
        >
          {/* <div className="title mt-4"></div> */}
          <h2 style={{ whiteSpace: "nowrap", marginRight: "50%" }}>Everything You Need At Your Fingertips</h2>
          <h3  className="text-subtitle text-primary">Our In-House Services</h3>
        </div>
        <div
          className="tf-grid-layout md-col-3 wow fadeInUpSmall"
          data-wow-delay=".4s"
          data-wow-duration="2000ms"
        >
          {services.map((elm, i) => (
            <Link key={i} href={elm.link} className="box-service">
              <div className="image">
                <Image
                  className="lazyload"
                  alt="image-location"
                  src={elm.imageSrc}
                  width={75}
                  height={75}
                />
              </div>
              <div className="content">
                <h5 className="title">{elm.title}</h5>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
