import Head from "next/head";
import React from "react";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Stats from "../components/stats";
import Features from "../components/features";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>
          Winston&apos;s | Winston&apos;s personal import export service
        </title>
      </Head>
      <Navbar />
      <main>
        <Hero />
        <section className="section-stats u-text-center">
          <h2 className="heading-secondary section-stats__header">
            Why Winston&apos;s?
          </h2>
          <Stats />
        </section>
        <section className="section-features">
          <h2 className="heading-secondary section-features__header u-text-center">
            What we are
          </h2>
          <Features />
        </section>
        <section className="section-how">
          <h2 className="heading-secondary section-how__header">
            How we do it
          </h2>
          <div className="how u-grid-2">
            <div className="how__box">
              <p className="how__title">01</p>
              <p className="how__text">
                The first step is negotiation, we negotiatie on your behalf to
                find you the best price out there.
              </p>
            </div>
            <div className="how__box">
              <img
                className="how__image"
                src="imgs/negotiation.jpg"
                alt="Two business men negotiiation, one holds a tablet."
              />
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}
