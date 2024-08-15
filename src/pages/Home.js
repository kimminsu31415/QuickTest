import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();

  const handleSelectCharacterGender = async (gender) => {
    // 성별에 따라 다른 API 엔드포인트로 요청 보내기
    const endpoint =
      gender === "female"
        ? "{{global}}/api/webtoon/female/"
        : "{{global}}/api/webtoon/male/";

    try {
      // 서버에서 데이터 받아오기
      const response = await axios.post(
        endpoint,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        },
      );

      // 받아온 데이터를 PageA로 전달하면서 페이지 이동
      const characters = response.data.map((item) => item.character);
      navigate("/PageA", { state: { characters } });
    } catch (error) {
      console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
    }
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
