import Head from "next/head";
import React from "react";
import Hero from '../components/hero';
import Navbar from '../components/navbar';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Winston's | Winston's personal import export service</title>
      </Head>
      <Navbar />
      <main>
        <Hero />
        <section className='section-stats'>
          
        </section>
      </main>
    </React.Fragment>
  );
}
