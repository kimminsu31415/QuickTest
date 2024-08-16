import React, { useState } from "react";
import "./CardFlip.css";

const CardFlip = ({ name, age, tags, error }) => {
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
      {/* 카드 앞면 */}
      <div className="card-face card-front">
        <div className="card-content">
          <div className="text-xl">카드 앞면</div>
          <div className="text-sm">캐릭터 이름: {name}</div>
          <div className="text-sm">캐릭터 나이: {age}</div>
          <div className="text-sm">캐릭터 태그: {tags}</div>
        </div>
      </div>

      {/* 카드 뒷면 */}
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
