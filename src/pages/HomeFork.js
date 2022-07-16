import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import HeroSliderTwo from "../containers/hero-sliders/HeroSliderTwo";
import CurrencyTicker from "../containers/currency-tickers/CurrencyTicker";
import AboutContent from "../components/about-contents/AboutContent";
import EasyStart from "../containers/easy-starts/EasyStart";

import SecureTransaction from "../components/secure-transactions/SecureTransaction";
import SoftwareDownload from "../components/software-downloads/SoftwareDownload";

import CounterUp from "../containers/counter-ups/CounterUp";
import CurrencyCalculation from "../components/currency-calculations/CurrencyCalculation";

const HomeOne = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>IluminatisCoin | Home</title>
        <meta
          name="description"
          content="Homepage of React JS Crypto Currency Template."
        />
      </MetaTags>
      <LayoutOne>
        {/* hero slider */}
        <HeroSliderTwo />
        {/* currency ticker */}
        <CurrencyTicker />
        {/* easy start */}
        <EasyStart />
        {/* currency calculation */}
        <SecureTransaction />
        {/* live chart */}
        <CurrencyCalculation />
        {/* counter up */}
        <CounterUp backgroundImage="/images/bg/020.jpg" />
        {/* secure transaction */}
        <AboutContent />
        {/* video popup */}
        <SoftwareDownload />
        {/* blog grid */}
      </LayoutOne>
    </Fragment>
  );
};

export default HomeOne;
