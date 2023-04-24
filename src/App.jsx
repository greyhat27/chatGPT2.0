import { useState } from "react";
import { ChatGptbody } from "./components/ChatGptbody";
import { Input } from "./components/Input";
import { useMutation } from "react-query";
import { fetchdata } from "./api";

function App() {
  const [chat, setChat] = useState([]);

  const mutation = useMutation({
    mutationFn: () => {
      return fetchdata(chat);
    },
    onSuccess: (data) =>
      setChat((prev) => [
        ...prev,
        { sender: "ai", message: data.message.replace(/^\n\n/, "") },
      ]),
  });

  const sendMessage = async (message) => {
    await Promise.resolve(setChat((prev) => [...prev, message]));
    mutation.mutate();
  };

  return (
    <div className="bg-[#1A232E] h-screen py-6 sm:px-16 px-12 text-white overflow-hidden flex flex-col justify-between align-middle">
      <div className="gradient-01 z-0 absolute"></div>
      <div className="gradient-02 z-0 absolute"></div>
      <div></div>
      <div className="uppercase font-bold text-2xl text-center mb-3">
        ChatGPT2.0
      </div>
      <div className="h-[90%] overflow-auto w-full max-w-4xl min-w-[20rem] py-8 px-4 self-center scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-gray-transparent scrollbar-thumb-rounded-md">
        <ChatGptbody chat={chat} />
      </div>
      <div className="w-full max-w-4xl min-w-[20rem] self-center">
        <Input sendMessage={sendMessage} loading={mutation.isLoading} />
      </div>
    </div>
  );
}

export default App;
