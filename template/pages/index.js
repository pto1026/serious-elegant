import Head from "next/head";
import React from "react";
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import Stats from '../components/stats';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Winston&apos;s | Winston&apos;s personal import export service</title>
      </Head>
      <Navbar />
      <main>
        <Hero />
        <section className='section-stats u-text-center'>
          <h2 className='heading-secondary section-stats__header'>Why Winston&apos;s?</h2>
         <Stats />

        </section>
      </main>
    </React.Fragment>
  );
}
