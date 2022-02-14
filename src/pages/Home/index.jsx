import React from 'react';
import Banner from '../../components/Banner';
import Header from '../../components/Header';
import ProductContainer from '../../components/ProductContainer';
import Footer from '../../components/Footer';

export default function Home() {

  return(
    <>
      <Header />
      <Banner />
      <ProductContainer />
      <Footer />
    </>
  )
}