"use client";

import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";

import Contact from "@/components/Contacts/Contact";
import ContactForm from "@/components/Contacts/Contact-Form";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import FooterOne from "@/components/Footer/Footer-One";

const ContactPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <MobileMenu />
          <Cart />

          <div className="rbt-conatct-area bg-gradient-11 rbt-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center mb--60">
                    <span className="subtitle bg-secondary-opacity">
                      Contact Us
                    </span>
                    <h2 className="title">
                      Join with Us<br /> for the next step.
                    </h2>
                  </div>
                </div>
              </div>
              <Contact />
            </div>
          </div>

          <ContactForm />

          <div className="rbt-google-map bg-color-white rbt-section-gapTop">
            <iframe
              className="w-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.6303677357487!2d76.33133351022505!3d10.047329090019096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d8ad2436683%3A0x39e1ac3beda45ba3!2sEVOXIGN%20Technologies%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1734350268377!5m2!1sen!2sin"
              height="600"
              style={{ border: "0" }}
            ></iframe>
          </div>

          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default ContactPage;
