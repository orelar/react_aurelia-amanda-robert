import React, { useState } from "react";
import openai from "./OpenAI";

const AI = () => {
  const [response, setResponse] = useState("");
  const [input, setInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChatCompletion = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const chatResponse = await openai.chat.completions.create({
        messages: [{ role: "user", content: input }],
        model: "gpt-3.5-turbo",
      });
      setResponse(chatResponse.choices[0].message.content);
      setIsSubmitting(false);
    } catch (error) {
      console.error("Error making OpenAI chat completion:", error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center w-1/2 p-6 bg-gray-300 backdrop-blur bg-white/50 rounded-lg shadow-lg">
          <h2 className="text-2xl mb-4 text-center text-blue-300 font-extrabold text-[50px]">
            AI Bot
          </h2>
          <div className="bg-blue-100 p-4 rounded-lg mb-4">
            <p className="font-semibold text-blue-700">Chat Bot</p>
            <p className="text-black text-lg">{response}</p>
          </div>
          <div className="relative rounded-lg bg-white p-4 flex-1 w-full">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Send your message"
              className="textarea textarea-bordered w-full flex-1 font-medium text-xl mb-2"
            ></textarea>
            <button
              onClick={handleChatCompletion}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="loading loading-dots"></span>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AI;
