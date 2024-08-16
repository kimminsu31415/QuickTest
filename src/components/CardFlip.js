import React, { useState } from "react";
import "./CardFlip.css";

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    // <div className="card-container">
    <div
      className={`card ${isFlipped ? "is-flipped" : ""}`}
      onClick={handleCardClick}
    >
      <div className="card-face card-front">
        <div className="card-content">
          <div className="text-xl">카드 앞면</div>
          <div className="text-3xl font-bold">This</div>
        </div>
      </div>
      <div className="card-face card-back">
        <div className="card-content">
          <div className="text-xl">카드 뒷면</div>
          <div className="text-3xl font-bold">Back</div>
        </div>
      </div>
    </div>
    //</div>
  );
};

export default CardFlip;
