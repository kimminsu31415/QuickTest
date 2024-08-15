import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const PageA = () => {
  const characters = [
    "1번 캐릭터",
    "2번 캐릭터",
    "3번 캐릭터",
    "4번 캐릭터",
    "5번 캐릭터",
    "6번 캐릭터",
    "7번 캐릭터",
  ];

  // 현재 표시할 캐릭터의 인덱스
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);

  // useNavigate 훅 사용
  const navigate = useNavigate();

  // 버튼을 누르면 다음 캐릭터 인덱스로 값 증가
  const ChangeCharacterContentIndex = () => {
    if (currentCharacterIndex === characters.length - 1) {
      // 마지막 캐릭터라면 PageB로 이동
      navigate("/PageB");
    } else {
      // 마지막 캐릭터가 아니라면 다음 캐릭터 인덱스 값으로 변경
      setCurrentCharacterIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div>
      <div>여기는 PageA</div>
      <div className="h-40 bg-slate-200">
        <div>컴포넌트 내용이 바뀌는 div 영역</div>
        <div>{characters[currentCharacterIndex]}</div>
        <button className="bg-orange-200" onClick={ChangeCharacterContentIndex}>
          내용 바꾸기
        </button>
      </div>
      <Link to="/PageB" className="bg-blue-200">
        PageB로 이동
      </Link>
    </div>
  );
};

export default PageA;

{
  /*
  import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const PageA = () => {
  const location = useLocation();
  const [characters] = useState(location.state?.characters || []);
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const navigate = useNavigate();

  const ChangeCharacterContentIndex = () => {
    if (currentCharacterIndex === characters.length - 1) {
      navigate("/PageB");
    } else {
      setCurrentCharacterIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div>
      <div>여기는 PageA</div>
      <div className="h-40 bg-slate-200">
        <div>컴포넌트 내용이 바뀌는 div 영역</div>
        <div>{characters[currentCharacterIndex]?.name}</div>
        <button className="bg-orange-200" onClick={ChangeCharacterContentIndex}>
          내용 바꾸기
        </button>
      </div>
      <button onClick={() => navigate("/PageB")} className="bg-blue-200">
        PageB로 이동
      </button>
    </div>
  );
};

export default PageA;

  
  
  */
}
