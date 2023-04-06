import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import SubFeat from "./components/SubFeat/SubFeat";
import Footer from "./components/Footer/Footer";
import "../styles/EtusivuStyles.css";

const Etusivu = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <SubFeat />
      <div class="main-wrapper">
        <h2>Tervetuloa!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor
          vulputate feugiat. Etiam blandit mi id felis vestibulum faucibus.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras
          aliquam maximus porttitor. Integer at porta quam, et vestibulum
          tortor. Pellentesque hendrerit congue ultricies. Proin lorem magna,
          consectetur eu eros quis, facilisis consequat velit. Sed eleifend
          mollis lorem, placerat faucibus neque vehicula ac. Integer vehicula,
          mauris quis auctor molestie, sem risus sollicitudin lacus, et lobortis
          odio nunc consequat quam. Sed pulvinar malesuada tincidunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor
          vulputate feugiat. Etiam blandit mi id felis vestibulum faucibus.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras
          aliquam maximus porttitor. Integer at porta quam, et vestibulum
          tortor. Pellentesque hendrerit congue ultricies. Proin lorem magna,
          consectetur eu eros quis, facilisis consequat velit. Sed eleifend
          mollis lorem, placerat faucibus neque vehicula ac. Integer vehicula,
          mauris quis auctor molestie, sem risus sollicitudin lacus, et lobortis
          odio nunc consequat quam. Sed pulvinar malesuada tincidunt.
        </p>
        <h2>Lounaslista:</h2>
        <div className="lounaslista">
          <div className="lounaslistaRivi">
            <div className="lounaslistaRiviPaiva">
              <h3>maanantai: </h3>
            </div>
            <div className="lounaslistaRiviRuoka">
              pizza, kebab, makkara, muusi, pizza, kebab, makkara, muusi
            </div>
          </div>
          <div className="lounaslistaRivi">
            <div className="lounaslistaRiviPaiva">
              <h3>tiistai: </h3>
            </div>
            <div className="lounaslistaRiviRuoka">buffet</div>
          </div>
          <div className="lounaslistaRivi">
            <div className="lounaslistaRiviPaiva">
              <h3>keskiviikko: </h3>
            </div>
            <div className="lounaslistaRiviRuoka">buffet</div>
          </div>
          <div className="lounaslistaRivi">
            <div className="lounaslistaRiviPaiva">
              <h3>torstai: </h3>
            </div>
            <div className="lounaslistaRiviRuoka">buffet</div>
          </div>
          <div className="lounaslistaRivi">
            <div className="lounaslistaRiviPaiva">
              <h3>perjantai: </h3>
            </div>
            <div className="lounaslistaRiviRuoka">buffet</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Etusivu;
