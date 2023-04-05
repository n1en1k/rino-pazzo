import React from "react";
import "./SubFeatStyles.css";

const SubFeat = () => {
  return (
    <div className="sub-featured">
      <div className="sub1">
        <div className="sub-content">
          <h3>Tuore Menu</h3>
          <div className="sub-info">
            <span>Käytämme vain parhaita raaka-aineita</span>
          </div>
        </div>
      </div>
      <div className="sub2">
        <h3>Hyvä sijainti</h3>
        <div className="sub-info">
          <span>Löydät meidät läheltä keskustaa</span>
        </div>
      </div>
      <div className="sub3">
        <h3>Soita ja Tilaa!</h3>
        <div className="sub-info">
          <span>012 345 6789</span>
        </div>
      </div>
    </div>
  );
};

export default SubFeat;
