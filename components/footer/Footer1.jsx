"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { footerSections } from "@/data/footer";
export default function Footer1() {
  const formRef = useRef();
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_noj8796", "template_fs3xchn", formRef.current, {
        publicKey: "iG4SCmR-YtJagQ4gV",
      })
      .then((res) => {
        if (res.status === 200) {
          setSuccess(true);
          handleShowMessage();

          formRef.current.reset();
        } else {
          setSuccess(false);
          handleShowMessage();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    const headings = document.querySelectorAll(".footer-heading-mobile");

    const toggleOpen = (event) => {
      const parent = event.target.closest(".footer-col-block");
      const content = parent.querySelector(".tf-collapse-content");

      if (parent.classList.contains("open")) {
        parent.classList.remove("open");
        content.style.height = "0px";
      } else {
        parent.classList.add("open");
        content.style.height = content.scrollHeight + "px";
      }
    };

    headings.forEach((heading) => {
      heading.addEventListener("click", toggleOpen);
    });

    // Clean up event listeners when the component unmounts
    return () => {
      headings.forEach((heading) => {
        heading.removeEventListener("click", toggleOpen);
      });
    };
  }, []); // Empty dependency array means this will run only once on mount

  return (
    <footer className="footer" style={{ backgroundColor: "#9c0505" }}>
      <div className="top-footer">
        <div className="container">
          <div className="content-footer-top">

            <div className="footer-logo">
              <Link href={`/`}>
                <Image
                  alt="logo"
                  width={166}
                  height={48}
                  src="/images/logo/logo-transparent-gks.png"
                />
              </Link>
            </div>

            <div className="wd-social">
              <span>Follow Us:</span>
              <ul className="list-social d-flex align-items-center">
                <li>
                  <a href="#" className="box-icon w-40 social">
                    <svg
                      className="icon"
                      width={9}
                      height={16}
                      viewBox="0 0 9 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.60547 9L8.00541 6.10437H5.50481V4.22531C5.50481 3.43313 5.85413 2.66094 6.97406 2.66094H8.11087V0.195625C8.11087 0.195625 7.07925 0 6.09291 0C4.03359 0 2.68753 1.38688 2.68753 3.8975V6.10437H0.398438V9H2.68753V16H5.50481V9H7.60547Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="https://www.linkedin.com/company/gharkasathi/" className="box-icon w-40 social">
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.58151 16H0.264292V5.31762H3.58151V16ZM1.92111 3.86044C0.860376 3.86044 0 2.98185 0 1.92111C7.59231e-09 1.4116 0.202403 0.92296 0.562681 0.562681C0.92296 0.202403 1.4116 0 1.92111 0C2.43063 0 2.91927 0.202403 3.27955 0.562681C3.63983 0.92296 3.84223 1.4116 3.84223 1.92111C3.84223 2.98185 2.98149 3.86044 1.92111 3.86044ZM15.9968 16H12.6867V10.7999C12.6867 9.56057 12.6617 7.97125 10.962 7.97125C9.23735 7.97125 8.97306 9.31771 8.97306 10.7106V16H5.65941V5.31762H8.84091V6.77479H8.88734C9.33021 5.93549 10.412 5.04976 12.026 5.04976C15.3832 5.04976 16.0004 7.26052 16.0004 10.132V16H15.9968Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="#" className="box-icon w-40 social">
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.30314 5.92804L13.4029 0H12.1944L7.7663 5.14724L4.22958 0H0.150391L5.4986 7.78354L0.150391 14H1.35894L6.03514 8.56434L9.77017 14H13.8494L8.30284 5.92804H8.30314ZM6.64787 7.85211L6.10598 7.07705L1.79439 0.909771H3.65065L7.13015 5.88696L7.67204 6.66202L12.195 13.1316H10.3387L6.64787 7.85241V7.85211Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="https://wa.me/9202600601" className="box-icon w-40 social">
                  <svg
                    width={28}
                    height={28}
                    viewBox="0 0 24 24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.52 3.48A11.84 11.84 0 0012 .03C5.3.03.03 5.3.03 12a11.88 11.88 0 001.64 6l-1.06 3.88 3.98-1.01a11.81 11.81 0 005.42 3.28h.01c6.7 0 12.03-5.27 12.03-11.97C24 8.23 22.99 5.11 20.52 3.48zm-8.52 17.45a9.83 9.83 0 01-5.05-1.37l-.36-.21-2.35.6.62-2.29-.23-.38C4.5 14.37 4 12.74 4 11c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7zm5.39-7.92c-.29-.15-1.7-.84-1.96-.94-.27-.09-.47-.15-.68.15-.21.29-.78.94-.96 1.13-.18.21-.36.24-.65.09-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.45-1.72-1.62-2.01-.18-.29-.02-.44.13-.59.13-.13.29-.36.43-.53.15-.18.2-.29.3-.48.09-.18.05-.35-.02-.5-.07-.15-.68-1.63-.93-2.23-.24-.58-.48-.5-.68-.51-.18-.01-.35-.02-.53-.02s-.5.07-.76.35c-.25.29-.95.93-.95 2.27 0 1.34.97 2.64 1.11 2.83.15.18 2.11 3.22 5.11 4.51.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.09 1.7-.69 1.94-1.36.24-.66.24-1.23.17-1.36-.07-.13-.27-.21-.57-.36z"/>
                  </svg>
                  </a>
                </li>

                <li>
                  <a href="https://www.instagram.com/gharkasathi?igsh=ZmJ1NTl5d2RsYjV1" className="box-icon w-40 social">
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.99812 4.66567C5.71277 4.66567 4.66383 5.71463 4.66383 7C4.66383 8.28537 5.71277 9.33433 6.99812 9.33433C8.28346 9.33433 9.3324 8.28537 9.3324 7C9.3324 5.71463 8.28346 4.66567 6.99812 4.66567ZM13.9992 7C13.9992 6.03335 14.008 5.07545 13.9537 4.11055C13.8994 2.98979 13.6437 1.99512 12.8242 1.17556C12.0029 0.35426 11.01 0.100338 9.88927 0.0460516C8.92263 -0.00823506 7.96475 0.000520879 6.99987 0.000520879C6.03323 0.000520879 5.07536 -0.00823506 4.11047 0.0460516C2.98973 0.100338 1.99508 0.356011 1.17554 1.17556C0.354253 1.99687 0.100336 2.98979 0.0460508 4.11055C-0.00823491 5.0772 0.00052087 6.0351 0.00052087 7C0.00052087 7.9649 -0.00823491 8.92455 0.0460508 9.88945C0.100336 11.0102 0.356004 12.0049 1.17554 12.8244C1.99683 13.6457 2.98973 13.8997 4.11047 13.9539C5.07711 14.0082 6.03499 13.9995 6.99987 13.9995C7.9665 13.9995 8.92438 14.0082 9.88927 13.9539C11.01 13.8997 12.0047 13.644 12.8242 12.8244C13.6455 12.0031 13.8994 11.0102 13.9537 9.88945C14.0097 8.92455 13.9992 7.96665 13.9992 7ZM6.99812 10.5917C5.01056 10.5917 3.40651 8.98759 3.40651 7C3.40651 5.01241 5.01056 3.40832 6.99812 3.40832C8.98567 3.40832 10.5897 5.01241 10.5897 7C10.5897 8.98759 8.98567 10.5917 6.99812 10.5917ZM10.7368 4.10004C10.2728 4.10004 9.89802 3.72529 9.89802 3.26122C9.89802 2.79716 10.2728 2.42241 10.7368 2.42241C11.2009 2.42241 11.5756 2.79716 11.5756 3.26122C11.5758 3.37142 11.5542 3.48056 11.5121 3.58239C11.47 3.68422 11.4082 3.77675 11.3303 3.85467C11.2523 3.93258 11.1598 3.99437 11.058 4.03647C10.9562 4.07858 10.847 4.10018 10.7368 4.10004Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://youtube.com/@gharkasathi?si=x0eul3001IksXcWp" className="box-icon w-40 social">
                    <svg
                      width={16}
                      height={12}
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.6657 1.76024C15.4817 1.06737 14.9395 0.521689 14.2511 0.336504C13.0033 0 8 0 8 0C8 0 2.99669 0 1.7489 0.336504C1.06052 0.521718 0.518349 1.06737 0.334336 1.76024C0 3.01611 0 5.63636 0 5.63636C0 5.63636 0 8.25661 0.334336 9.51248C0.518349 10.2053 1.06052 10.7283 1.7489 10.9135C2.99669 11.25 8 11.25 8 11.25C8 11.25 13.0033 11.25 14.2511 10.9135C14.9395 10.7283 15.4817 10.2053 15.6657 9.51248C16 8.25661 16 5.63636 16 5.63636C16 5.63636 16 3.01611 15.6657 1.76024ZM6.36363 8.01535V3.25737L10.5454 5.63642L6.36363 8.01535Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      
      <div className="inner-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-cl-1">
                <p className="text-variant-2">
                At GharKaSathi, we believe your home is more than just a place—it's your sanctuary.<br></br>
                  Contact Us
                </p>
                <ul className="mt-12">
                  <li className="mt-12 d-flex align-items-center gap-8">
                    <i className="icon icon-mapPinLine fs-20 text-variant-2" />
                    <p className="text-white">
                      4034 4th Floor, Currency Tower Raipur C.G
                    </p>
                  </li>
                  <li className="mt-12 d-flex align-items-center gap-8">
                    <i className="icon icon-phone2 fs-20 text-variant-2" />
                    <a
                      href="tel:1-333-345-6868"
                      className="text-white caption-1"
                    >
                       +91 9202600601
                       +91 7477244487
                    </a>
                  </li>
                  <li className="mt-12 d-flex align-items-center gap-8">
                    <i className="icon icon-mail fs-20 text-variant-2" />
                    <p className="text-white">support@gharkasathi.com</p>
                  </li>
                </ul>
              </div>
            </div>
            {footerSections.map((section, index) => (
              <div key={index} className="col-lg-2 col-md-6">
                <div className={`footer-cl-${index + 2} footer-col-block`}>
                  <div className="fw-7 text-white footer-heading-mobile">
                    {section.heading}
                  </div>
                  <div className="tf-collapse-content">
                    <ul className="mt-10 navigation-menu-footer">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            href={link.href}
                            className="caption-1 text-variant-2"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            <div className="col-lg-4 col-md-6">
              {/* <div className="footer-cl-4 footer-col-block">
                <div className="fw-7 text-white footer-heading-mobile">
                  Newsletter
                </div>
                <div className="tf-collapse-content">
                  <p className="mt-12 text-variant-2">
                    Your Weekly/Monthly Dose of Knowledge and Inspiration
                  </p>
                  <div
                    className={`tfSubscribeMsg  footer-sub-element ${
                      showMessage ? "active" : ""
                    }`}
                  >
                    {success ? (
                      <p style={{ color: "rgb(52, 168, 83)" }}>
                        You have successfully subscribed.
                      </p>
                    ) : (
                      <p style={{ color: "red" }}>Something went wrong</p>
                    )}
                  </div>

                  <form id="subscribe-form" onSubmit={sendMail} ref={formRef}>
                    <div id="subscribe-content">
                      <input
                        type="email"
                        name="email-form"
                        id="subscribe-email"
                        placeholder="Your email address"
                        required
                      />
                      <button
                        type="submit"
                        id="subscribe-button"
                        className="button-subscribe"
                      >
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.00044 9.99935L2.72461 2.60352C8.16867 4.18685 13.3024 6.68806 17.9046 9.99935C13.3027 13.3106 8.16921 15.8118 2.72544 17.3952L5.00044 9.99935ZM5.00044 9.99935H11.2504"
                            stroke="#1563DF"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                    <div id="subscribe-msg" />
                  </form>
                  
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="container">
          <div className="content-footer-bottom">
            <div className="copyright">
              ©{new Date().getFullYear()}  Gharkasathi. All Rights Reserved.
            </div>
            <ul className="menu-bottom">
              <li>
                <Link href={`/our-service`}>Terms Of Services</Link>
              </li>
              <li>
                <Link href={`/pricing`}>Privacy Policy</Link>
              </li>
              <li>
                <Link href={`/contact`}>Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
