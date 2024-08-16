import axios from "axios";
import React, { useState, useEffect, useRef } from "react";

const ChatPage = () => {
  const [characterMessage, setCharacterMessage] = useState("");

  const [messages, setMessages] = useState([
    { text: "안녕 이음아, 오늘 하루는 어떻더냐?", isUser: true },
    { text: "안녕하세요 혁원 어르신, 오늘은 참 맑아요", isUser: false },
  ]);

  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const handleSend = async () => {
    if (input.trim() === "") return;

    // 사용자가 입력한 메시지를 먼저 화면에 추가
    const userMessage = { text: input, isUser: true };
    setMessages([...messages, userMessage]);

    try {
      let response;

      response = await axios.post(
        "https://6237-220-124-223-3.ngrok-free.app/api/webtoon/conversation/suho/",
        {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
            Accept: "application/json",
          },
        },
      );
      setCharacterMessage(response.data);
    } catch (error) {
      console.error("Error fetching answer from the server:", error);
    } finally {
      setInput(""); // 입력 필드 초기화
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex min-h-screen justify-center bg-gray-300">
      <div className="w-full max-w-[400px] overflow-x-hidden bg-slate-100">
        <div className="flex flex-col justify-between gap-4 bg-black px-[14px] py-[20px]">
          {/* 헤더 바 */}
          <div className="relative flex justify-center text-white">
            <div className="text-[25px] font-bold">성진우</div>
            <div className="absolute left-[10px] z-10 text-xl">
              <button
                className="h-[25px] w-[25px] rounded-sm bg-white"
                style={{
                  backgroundImage: `url('/assets/FinalScreen/backArrow.png')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></button>
            </div>
          </div>

          <div className="bg-black text-center text-[12px] text-white">
            캐릭터챗이 답변하는 내용은 AI 기술을 통해 생성되었습니다. <br />
            실제 캐릭터가 하는 말과 차이가 있거나 일부 부정확할 수 있습니다.
          </div>

          <div
            className="h-[222px] rounded-md"
            style={{
              backgroundImage: `url('/assets/Chat_Image_1.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="flex flex-col justify-between p-4">
            <div
              className="mx-auto mb-4 flex h-8 w-16 items-center justify-center rounded-full bg-white"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }} // 50% 투명도 적용
            >
              오늘
            </div>

            <div className="text-white">{JSON.stringify(characterMessage)}</div>

            {/* 채팅 */}
            <div className="flex h-[380px] flex-col gap-3 overflow-y-auto">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`max-w-[70%] p-2 px-4 ${
                    message.isUser
                      ? "self-end bg-white text-right"
                      : "self-start bg-yellow-400 text-left"
                  }`}
                  style={{
                    borderRadius: message.isUser
                      ? "28px 28px 0px 28px" // 오른쪽 하단 모서리만 라운디드 적용 안 함
                      : "28px 28px 28px 0px", // 왼쪽 하단 모서리만 라운디드 적용 안 함
                  }}
                >
                  <div className="text-sm font-semibold">{message.text}</div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* 채팅 입력창 */}
          <div className="flex items-center rounded-full border border-white bg-gray-800 px-2 py-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="주인공에게 하고 싶은 말을 입력하세요"
              className="flex-grow bg-transparent px-2 text-white outline-none"
            />
            <button
              onClick={handleSend}
              className="mr-1 h-[24px] w-[24px] rounded-full p-1 text-black"
              style={{
                backgroundImage: `url('/assets/FinalScreen/TextSend.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
