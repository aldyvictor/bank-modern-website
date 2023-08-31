import React from "react";

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
import { fav24 } from "./assets";
import DocumentMeta from "react-document-meta";
import Favicon from "react-favicon";

const App = () => {
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

  return (
    <>
      <DocumentMeta {...meta} />
      <Favicon url={fav24} />

      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
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
    </>
  );
};

export default App;
