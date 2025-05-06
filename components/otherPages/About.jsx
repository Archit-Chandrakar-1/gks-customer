import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <section className="flat-section">
      <div className="container flat-header-wrapper-about">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="title">Welcome to GharKaSathi–Your Trusted Partner for Real Estate & Home Services</h2>
            <p className="text-variant-1 desc" style={{textAlign: 'left'}}>At GharKaSathi, we understand that finding the perfect home, managing property services, or handling relocation can be overwhelming. That's why we're here to make your journey simple, transparent, and stress-free. Whether you're buying your first home, renting, or in need of expert home services, we're committed to being by your side every step of the way.</p>
            <p className="text-variant-1 desc" style={{textAlign: 'left'}}>Our goal is simple: to connect you with trusted, professional service providers who truly care about your needs. We prioritize transparency, reliability, and efficiency to ensure your experience is seamless from start to finish.</p>
            
            <h3 className="title">Why Choose Us?</h3>
            <p className="text-variant-1 desc" style={{textAlign: 'left'}}>
              Experienced Professionals: We work only with skilled, certified experts passionate about delivering the best services.
              Comprehensive Service List: From real estate to home maintenance, we have got you covered.
              Effortless Online Booking: Book your services in just a few clicks—quick, simple, and convenient.
              Affordable Prices, Exceptional Quality: We balance value with affordability so you can trust that your money goes far.
              Customer-Centric Approach: Your happiness is our priority. We listen, adapt, and ensure you are satisfied every step of the way.
              Trusted & Vetted Providers: Every professional in our network undergoes strict vetting to ensure they meet our high standards.</p>

            <h3 className="title">Our Services</h3>
            <p className="text-variant-1 desc" style={{textAlign: 'left'}}>
            We’re proud to offer a wide range of services tailored to meet the needs of every homeowner:
            </p>
            <ul className="text-variant-1 desc" style={{textAlign: 'left'}} >
              <li>Real Estate Services (Buying, Selling, Renting)</li>
              <li>Cleaning Services (Deep Cleaning, Basic Cleaning)</li>
              <li>Painting Services (Interior & Exterior Makeovers)</li>
              <li>Electrical Services (Repairs & Installations)</li>
              <li>Home Renovation (Kitchens, Bathrooms & Home Extensions)</li>
              <li>Packer and Movers (Residential Relocation)</li>
              <li>Construction (New Builds, Renovations, Repairs)</li>
              <li>Plumbing (Fixes, Installations, Leak Repairs)</li>
              <li>Carpentry (Furniture, Shelving, Custom Cabinets)</li>
              <li>Painting (Interior & Exterior)</li>
              <li>Electrical (Repairs, Installations)</li>
              <li>Project Mangement</li>
              <li>Vastu Consultation</li>
              <li>Property Management</li>
              <li>Estate Legal Services</li>
            </ul>
           
          <h3 className="title">Additional Information</h3>
          <p className="text-variant-1 desc" style={{textAlign: 'left'}}>
              24/7 Support: We are always here to answer your questions and resolve concerns.
              Eco-Friendly Practices: We use sustainable, green products wherever possible.
              Fully Insured Services: Your home is safe with us—our services come with peace of mind.
              Exclusive Discounts: We value our loyal customers and reward them with special offers and promotions.
              We believe that your home should always feel safe, comfortable, and worry-free. Thats why we are committed to delivering reliable, professional, and affordable solutions that you can trust.
          </p>

          <h3 className="title">Get in Touch</h3>
          <p className="text-variant-1 desc" style={{textAlign: 'left'}}>Ready to simplify your life and experience the best in real estate and home services? Let Ghar Ka Sathi become your trusted partner in creating the perfect space for you and your loved ones.</p>

           {/* <div className="signature-box">
              <div className="top">
                <h6>Leslie Alexander</h6>
                <p className="text-variant-2">CEO & founder</p>
              </div>
              <Image
                alt=""
                width="211"
                height="116"
                src="/images/banner/signature.png"
              />
            </div> */}
            <Link
              href={`/contact`}
              className="tf-btn btn-view primary hover-btn-view"
              style={{ backgroundColor: '#9c0505', borderColor: '#4CAF50' }}
            >
              Contact us
              <span className="icon icon-arrow-right2"></span>
            </Link>
            <div className="box-img item1 ani5">
              <Image
                alt=""
                width="355"
                height="355"
                src="/gks-images/GKS-logo.png"
              />
            </div>
            <div className="box-img item2 ani4">
              <Image
                alt=""
                width="181"
                height="181"
                src="/gks-images/GKS-logo.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
