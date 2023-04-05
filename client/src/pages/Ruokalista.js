import React from "react";
import "../styles/RuokalistaStyles.css";

const Ruokalista = () => {
  return (
    <div className="main-wrapper">
      <div className="ruokalista-wrapper">
        <div className="ruokalista-left">
          <h2>Pizzat</h2>
          <div className="itemContainer">
            <div className="itemNumberAndName">
              <span className="numero"> </span>
            </div>
            <div className="itemPrice">
              <span>
                pieni<span> - </span>
                <span></span>iso
              </span>
            </div>
          </div>

          <div className="itemContainer">
            <div className="itemNumberAndName">
              <h3>
                <span className="number">1.</span>MARGARETA
              </h3>
              <p>extrajuusto</p>
            </div>
            <div className="itemPrice">
              <span>6,00</span>
              <span> - </span>
              <span>12,00</span>
            </div>
          </div>

          <div className="itemContainer">
            <div className="itemNumberAndName">
              <h3>
                <span className="number">2.</span>VESUVIO
              </h3>
              <p>kinkku</p>
            </div>
            <div className="itemPrice">
              <span>6,50</span>
              <span> - </span>
              <span>13,00</span>
            </div>
          </div>
        </div>
        {/* ruokalista-left */}
        <div className="ruokalista-right">
          <h2>Kebabit</h2>
          <div className="itemContainer">
            <div className="itemNumberAndName">
              <span className="numero"> </span>
            </div>
            <div className="itemPrice">
              <span>
                pieni<span> - </span>
                <span></span>iso
              </span>
            </div>
          </div>

          <div className="itemContainer">
            <div className="itemNumberAndName">
              <h3>
                <span className="number">30.</span>PITAKEBAB
              </h3>
              <p>Kebab, pitaleipä, salaatti, tomaatti, kurkku, kastike</p>
            </div>
            <div className="itemPrice">
              <span>6,50</span>
              <span> - </span>
              <span> </span>
            </div>
          </div>
          <div className="itemContainer">
            <div className="itemNumberAndName">
              <h3>
                <span className="number">31.</span>KEBAB RIISI
              </h3>
              <p>Kebab, riisi, salaatti, tomaatti, kurkku, kastike</p>
            </div>
            <div className="itemPrice">
              <span>7,50</span>
              <span> - </span>
              <span> </span>
            </div>
          </div>
        </div>
        {/* ruokalista-right */}
      </div>
      {/* ruokalista-wrapper */}
    </div>
  );
};

export default Ruokalista;
