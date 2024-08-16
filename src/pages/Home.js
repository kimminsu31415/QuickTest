import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const selectCharacterGender = async (gender) => {
    // 선택된 성별 문자열을 PageA로 전달
    navigate("/PageA", { state: { gender: gender } });
  };

  return (
    <div>
      <div>여기는 Home 페이지</div>

      <button
        className="bg-blue-300"
        onClick={() => selectCharacterGender("female")}
      >
        여자 캐릭터 선택
      </button>

      <button
        className="bg-blue-100"
        onClick={() => selectCharacterGender("male")}
      >
        남자 캐릭터 선택
      </button>

      <div>
        <Link to="/cardFlip" className="bg-blue-200">
          카드 컴포넌트
        </Link>
      </div>
    </div>
  );
};

export default Home;
