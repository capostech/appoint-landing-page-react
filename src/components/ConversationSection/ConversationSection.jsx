import { div } from "framer-motion/client";
import React, { useState, useEffect, useRef } from "react";

const conversations = [
  { id: 1, author: "A", message: "Hey Doc! 👋", isDoctor: false },
  { id: 2, author: "D", message: "Hi, what's up?", isDoctor: true },
  { id: 3, author: "A", message: "We are changing the game.", isDoctor: false },
  { id: 4, author: "A", message: "Are you in?", isDoctor: false },
  { id: 5, author: "D", message: "Yeah, sure!", isDoctor: true },
  { id: 6, author: "A", message: "Awesome!", isDoctor: false },
  { id: 7, author: "A", message: "Join our waitlist!", isDoctor: false },
];

const MessageBubble = ({ message, isDoctor, author, refProp, isVisible }) => (
  <div
    ref={refProp}
    data-id={message.id}
    className={`flex mx-10 my-6 ${
      isDoctor ? "items-end self-end" : "items-start"
    } gap-3 transition-transform duration-700 ease-out ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
    }`}
    style={{ scrollSnapAlign: "center" }}
  >
    {!isDoctor && (
      <div
        className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold"
        aria-label="Appoint Avatar"
      >
        {author}
      </div>
    )}
    <div
      className={`${
        isDoctor ? "bg-green-500 text-white" : "bg-white text-gray-700"
      } p-3 rounded-2xl shadow-lg w-auto`}
    >
      <p className="text-justify text-3xl">{message.message}</p>
    </div>
    {isDoctor && (
      <div
        className="w-10 h-10 bg-gray-300 rounded-full"
        aria-label="Doctor Avatar"
      ></div>
    )}
  </div>
);

const ConversationSection = () => {
  const [visibleMessages, setVisibleMessages] = useState([]);
  const messageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = parseInt(entry.target.dataset.id, 10);
          if (entry.isIntersecting) {
            if (!visibleMessages.includes(id)) {
              setVisibleMessages((prev) => [...prev, id]);
            }
          } else {
            setVisibleMessages((prev) => prev.filter((msgId) => msgId !== id));
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    messageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleMessages]);

  return (
    <div
      className=" overflow-y-scroll flex flex-col bg-gray-100 relative scrollbar-none rounded-3xl"
      style={{ scrollSnapType: "y mandatory" }}
    >
      <div className="div h-20"></div>
      {conversations.map((conversation, index) => (
        <MessageBubble
          key={conversation.id}
          message={conversation}
          isDoctor={conversation.isDoctor}
          author={conversation.author}
          refProp={(el) => (messageRefs.current[index] = el)}
          isVisible={visibleMessages.includes(conversation.id)}
        />
      ))}
    </div>
  );
};

export default ConversationSection;
