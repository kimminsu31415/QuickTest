import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const selectCharacterGenderPageA = async (gender) => {
    // 선택된 성별 문자열을 PageA로 전달
    navigate("/PageA", { state: { gender: gender } });
  };

  const selectCharacterGenderPageC = async (gender) => {
    // 선택된 성별 문자열을 PageC로 전달
    navigate("/PageC", { state: { gender: gender } });
  };

  return (
    <div>
      <div>여기는 Home 페이지</div>

      <button
        className="bg-blue-300"
        onClick={() => selectCharacterGenderPageA("female")}
      >
        여자 캐릭터 선택 - pageA
      </button>

      <button
        className="bg-blue-100"
        onClick={() => selectCharacterGenderPageA("male")}
      >
        남자 캐릭터 선택 - pageA
      </button>

      <div>
        <Link to="/cardFlip" className="bg-yellow-200">
          카드 컴포넌트
        </Link>
      </div>
      <div>
        <Link to="/chatPage" className="bg-green-200">
          채팅 페이지
        </Link>
      </div>
      <div>
        <button
          className="bg-pink-300"
          onClick={() => selectCharacterGenderPageC("female")}
        >
          여자 캐릭터 선택 - PageC
        </button>

        <button
          className="bg-pink-100"
          onClick={() => selectCharacterGenderPageC("male")}
        >
          남자 캐릭터 선택 - PageC
        </button>
      </div>
    </div>
  );
};

export default Home;
