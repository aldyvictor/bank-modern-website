import React, { useState, useEffect } from "react";

import styles from "./style";

import {
  Billing,
  Business,
  Button,
  CardDeal,
  Clients,
  CTA,
  FeedbackCard,
  Footer,
  GetStarted,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "./components/Index";
import { fav24, backTop } from "./assets";
import DocumentMeta from "react-document-meta";
import Favicon from "react-favicon";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [showButton, setShowButton] = useState(false);
  const [blurNav, setBlurNav] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    const handleScrollBlur = () => {
      window.pageYOffset > 90 ? setBlurNav(true) : setBlurNav(false);
    };

    window.addEventListener("scroll", handleScrollBlur);

    return () => {
      window.removeEventListener("scroll", handleScrollBlur);
    };
  }, []);

  const meta = {
    title: "Hoobank | Designed by One Week Wonders",
    description: "A new way to make the payments easy, reliable and secure.",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "Hoobank, Banking, Payment, Finance, Business, Money",
      },
    },
  };

  useEffect(() => {
    const handleScrollVisible = () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener("scroll", handleScrollVisible);

    return () => {
      window.removeEventListener("scroll", handleScrollVisible);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <DocumentMeta {...meta} />
      <Favicon url={fav24} />

      <div className="bg-primary w-full overflow-hidden">
        <div
          className={`fixed top-0 z-50 w-full ${styles.paddingX} ${
            styles.flexCenter
          } ${
            blurNav && "bg-primary/60 backdrop-blur"
          } transition-all ease-in-out duration-300`}
        >
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart} mt-20`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
          </div>
        </div>
      </div>

      {showButton && (
        <div className="fixed bottom-5 right-7 z-50 cursor-pointer transition-all ease-in-out duration-300">
          <Button
            className="py-[4px] px-[4px] rounded-lg opacity-50 hover:opacity-100 transition-opacity duration-300"
            onClick={scrollToTop}
          >
            <img src={backTop} alt="back to top" className="w-8 h-8" />
          </Button>
        </div>
      )}
    </>
  );
};

export default App;
