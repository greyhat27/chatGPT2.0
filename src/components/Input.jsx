import React, { useState } from "react";

export const Input = ({ sendMessage, loading }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSend = () => {
    if (!inputValue) return;
    sendMessage({ sender: "user", message: inputValue });
    setInputValue("");
  };
  return (
    <div className="w-full bg-white bg-opacity-10 max-h-40 rounded-lg px-4 py-4 overflow-auto relative">
      {loading ? (
        <img src="./loader.gif" alt="" className="w-8 m-auto" />
      ) : (
        <>
          <textarea
            rows={1}
            className="border-0 outline-none bg-transparent w-11/12"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              e.keyCode === 13 && e.shiftKey === false && handleSend();
            }}
          />
          <img
            src="./send.png"
            alt="send"
            className="absolute top-4 right-3 hover:cursor-pointer ease-in duration-100 hover:scale-125"
            width={20}
            onClick={handleSend}
          />
        </>
      )}
    </div>
  );
};
