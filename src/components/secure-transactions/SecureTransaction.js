import React from "react";
import { Link } from "react-router-dom";
import ReactWOW from "react-wow";

const SecureTransaction = () => {
  return (
    <div className="dg__secure__transaction">
      <div className="container">
        <div className="row align-items-center">

        <div className="col-lg-6">
            <ReactWOW duration="2s" animation="fadeInLeft">
              <div className="dg__secure__thumb">
                <img
                  src={process.env.PUBLIC_URL + "/images/about/20.png"}
                  alt="secure images"
                />
              </div>
            </ReactWOW>
          </div>

          <div className="col-lg-6">
            <div className="dg__secure__inner">
              <h2>
              The most powerful cryptoactive in the market with passive 
              income according to your investment.
              </h2>
              <p>
              IluminatisCoin Is a high-frequency trading token-based rewards protocol 
              developed with the vision of giving you passive rewards according to your investment.
              </p>
              <p>
              Our community-driven protocol combines the concepts of Trading and Defi
              to produce passive rewards for everyone on an ongoing basis..
              </p>
              <Link
                className="secure__btn dg__btn btn--trans"
                to={process.env.PUBLIC_URL + "/contact"}
              >
                Read More
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default SecureTransaction;
