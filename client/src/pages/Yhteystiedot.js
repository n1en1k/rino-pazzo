import React from "react";
import "../styles/YhteystiedotStyles.css";

const Yhteystiedot = () => {
  return (
    <div className="main-wrapper">
      <div className="yhteystiedot-wrapper">
        <div className="yhteystiedotEka">
          <h2>Yhteystiedot:</h2>
          <p>Rino Pazzo</p>
          <p>Osoite 123</p>
          <p>12345 Kaupunki</p>
          <p>&nbsp;</p>
          <p>012 345 6789</p>
          <p>asiakaspalvelu (a) rino.pazzo</p>
          <p>&nbsp;</p>
          <h2>Aukioloajat:</h2>
          <p>ma - to: 10:30 - 22:00</p>
          <p>pe - su: 10:30 - 23:00</p>
          <p>&nbsp;</p>
        </div>

        <div className="yhteystiedotToinen">
          <h2>Ota yhteyttä:</h2>
          <p>Huom! Tilaukset vain soittamalla!</p>
          <form name="yhteydenotto" method="post">
            <input
              className="tekstikentta"
              type="text"
              id="nimi"
              name="nimi"
              maxlength="50"
              placeholder="Nimi"
              onfocus="clearText(this)"
              onclick="clickclear(this, 'Nimi:')"
            />
            <br />
            <input
              className="tekstikentta"
              type="tel"
              id="puhelin"
              name="puhelin"
              onkeypress="return isNumberKey(event)"
              maxlength="10"
              placeholder="Puhelin"
              onfocus="clearText(this)"
              onclick="clickclear(this, 'Puhelin:')"
            />
            <br />
            <input
              className="tekstikentta"
              type="email"
              id="sposti"
              name="sposti"
              maxlength="30"
              placeholder="S&auml;hk&ouml;posti"
              onfocus="clearText(this)"
              onclick="clickclear(this, 'S&auml;hk&ouml;posti:')"
            />
            <br />
            <textarea
              className="viestikentta"
              rows="4"
              cols="39"
              maxlength="150"
              onfocus="clearText(this)"
              onclick="clickclear(this, 'Viestisi')"
              id="viesti"
              name="viesti"
              placeholder="Viestisi"
            ></textarea>
            <br />
            <input
              className="painike"
              type="submit"
              value="L&auml;het&auml;"
              name="lahetapainike"
              id="lahetapainike"
            />{" "}
            <input
              onclick="resetti();return false"
              type="reset"
              className="resetti"
              value="Tyhjenn&auml;"
            />
          </form>
        </div>
      </div>{" "}
    </div>
  );
};

export default Yhteystiedot;
