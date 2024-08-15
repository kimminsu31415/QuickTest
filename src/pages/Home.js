import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();

  const handleSelectCharacterGender = (gender) => {
    //gender에 따라 데이터를 pageA로 보냄과 동시에 pageA로 이동
    const characters =
      gender === "female" ? ["여자 캐릭터 데이터"] : ["남자 캐릭터 데이터"];

    navigate("/PageA", { state: { characters } });
  };

  return (
    <div>
      <div>여기는 main 페이지</div>

      <button
        className="bg-blue-300"
        onClick={() => handleSelectCharacterGender("female")}
      >
        여자 캐릭터 선택
      </button>

      <button
        className="bg-blue-100"
        onClick={() => handleSelectCharacterGender("male")}
      >
        남자 캐릭터 선택
      </button>
    </div>
  );
};

export default Home;
