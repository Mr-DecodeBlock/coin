import React from "react";

const CurrencyCalculation = () => {
  return (
    <div className="dg__calculation__area bg__color--1 poss--relative section-padding--xlg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="dg__calculation">
              <h2>Calculation is a perfect way to get dessition</h2>
              <p>
                Lorem Ipsum is simply dummy the printing and typestting
                industry. Lorem Ipsum has been the industry's stndard dummy
                text. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum is simply dummy the printing and typestting
                industry. Lorem Ipsum has been the industry's stndard dummy
                text. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.Lorem Ipsum is simply dummy the printing and typestting
                industry. 
              </p>
              
            </div>
          </div>
        </div>
      </div>
      <div className="shape--1">
        <img
          src={process.env.PUBLIC_URL + "/images/about/010.png"}
          alt="images"
        />
      </div>
    </div>
  );
};

export default CurrencyCalculation;
