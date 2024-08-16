import React, { useEffect, useState } from "react";
import axios from "axios";

const PageB = () => {
  const [characters, setCharacters] = useState([]); // 캐릭터 리스트
  const [character, setCharacter] = useState(""); // 현재 캐릭터 정보
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .post("https://6237-220-124-223-3.ngrok-free.app/api/webtoon/male/", {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "69420",
          Accept: "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        setCharacters(response.data); // 전체 캐릭터 리스트
        if (response.data.length > 0) {
          setCharacter(response.data[0].character); // 첫 번째 캐릭터 객체
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message);
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <div>여기는 PageB 입니다.</div>
      <div>캐릭터 이름: {JSON.stringify(character.name)}</div>

      <div className="bg-blue-200 p-5">
        {error ? (
          <div>Error: {error}</div>
        ) : (
          <div>{JSON.stringify(characters)}</div>
        )}
        <div>
          캐릭터 정보
          <div>{JSON.stringify(character)}</div>
        </div>
      </div>
    </div>
  );
};

export default PageB;
