import React, { useRef, useEffect, useState } from "react";

const Main = () => {
  const canvasRef = useRef(null);
  const [hour, setHour] = useState(new Date().getHours()); // 현재 시간
  const today = new Date(); // 오늘 날짜 객체

  // 날짜와 시간을 문자열로 반환하는 함수
  const formatDate = (date, hour) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const ampm = hour >= 12 ? "오후" : "오전";
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${year}년 ${month}월 ${day}일 ${ampm} ${formattedHour}시`;
  };

  // 캔버스에 그래프를 그리는 함수
  const drawGraph = (ctx, hour) => {
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    const centerY = height / 2;
    const amplitude = height / 3; // 진폭

    ctx.clearRect(0, 0, width, height); // 캔버스 클리어

    // 밤 하늘 그리기
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height);

    // sin 그래프와 해 위치 계산
    const sunX = width / 2; // 해의 x 좌표는 항상 중앙
    // 시간에 따른 sin 함수의 조정
    const phaseShift = -Math.PI / 2; // -π/2 상수로 위상 조정
    const sunY =
      centerY + amplitude * Math.sin(phaseShift + (hour / 24) * Math.PI * 2);

    // 낮 시간대(밝은 부분) 그리기
    ctx.fillStyle = "rgba(255, 255, 0, 0.1)";
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    for (let i = 0; i <= width; i++) {
      const x = i;
      const y =
        centerY +
        amplitude *
          Math.sin(
            phaseShift +
              ((((i - sunX) / width) * 24 + hour) / 24) * Math.PI * 2,
          );
      ctx.lineTo(x, y);
    }
    ctx.lineTo(width, centerY);
    ctx.lineTo(0, centerY);
    ctx.fill();

    // x축 선 그리기
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.stroke();

    // 해 그리기
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(sunX, sunY, 20, 0, Math.PI * 2); // 해의 위치는 고정
    ctx.fill();
  };

  // 캔버스와 그래프 초기화
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    drawGraph(ctx, hour);
  }, [hour]);

  return (
    <div>
      <canvas ref={canvasRef} width={window.innerWidth} height={400} />
      <div style={{ textAlign: "center", margin: "10px 0" }}>
        {formatDate(today, hour)}
      </div>
      <input
        type="range"
        min="0"
        max="23"
        value={hour}
        onChange={(e) => setHour(Number(e.target.value))}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default Main;
