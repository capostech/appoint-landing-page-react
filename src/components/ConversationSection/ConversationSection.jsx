import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const conversations = [
  { id: 1, author: "A", message: "Hey Doc! 👋", isDoctor: false },
  { id: 2, author: "D", message: "Hi, what's up?", isDoctor: true },
  { id: 3, author: "A", message: "We are changing the game.", isDoctor: false },
  { id: 4, author: "A", message: "Are you in?", isDoctor: false },
  { id: 5, author: "D", message: "Yeah, sure!", isDoctor: true },
  { id: 6, author: "A", message: "Awesome!", isDoctor: false },
  { id: 7, author: "A", message: "Join our waitlist! ", isDoctor: false },
];

const MessageBubble = ({
  message,
  isDoctor,
  author,
  refProp,
  isVisible,
  onClick,
}) => (
  <div
    ref={refProp}
    data-id={message.id}
    className={`flex mx-10 my-6 ${
      isDoctor ? "items-end self-end" : "items-start"
    } gap-3 transition-transform duration-700 ease-out cursor-pointer ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
    }`}
    style={{ scrollSnapAlign: "center" }}
    onClick={onClick}
  >
    {!isDoctor && (
      <div
        className="w-10 h-10 bg-[#0b8470] rounded-full flex items-center justify-center text-white font-bold"
        aria-label="Appoint Avatar"
      >
        {author}
      </div>
    )}
    <div
      className={`${
        isDoctor ? "bg-[#0b8470] text-white" : "bg-white text-gray-700"
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

const JoinWaitlistForm = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const payload = { name, email };

    try {
      const response = await axios.post(
        "https://script.google.com/macros/s/AKfycbxmGGLb_QaQ5ek8WK9xh08LH_nWZl21GcVuLCrPokRPczVpnIEEYcOUnzh_n8wECdC7/exec", // Replace with your actual URL
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.result === "success") {
        setSuccess(true);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Error saving data:", error);
      setError("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
          <h2 className="text-xl font-bold mb-4">Thank you!</h2>
          <p className="text-gray-700">You have successfully joined the waitlist.</p>
          <button
            onClick={onClose}
            className="mt-4 bg-[#0b8470] text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Join Our Waitlist</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className={`bg-[#0b8470] text-white px-4 py-2 rounded w-full ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 text-sm text-gray-500 underline w-full text-center"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

const ConversationSection = () => {
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const messageRefs = useRef([]);

  const handleBubbleClick = (messageId) => {
    const joinWaitlistMessage = conversations.find(
      (conv) => conv.id === messageId && conv.message.trim() === "Join our waitlist!"
    );
    if (joinWaitlistMessage) {
      setShowForm(true);
    }
  };

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
      { threshold: 0.5 }
    );

    messageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleMessages]);

  return (
    <div
      className="overflow-y-scroll p-10 flex flex-col bg-[#FFFFFF] relative scrollbar-none rounded-3xl"
      style={{ scrollSnapType: "y mandatory" }}
    >
      <div className="h-20"></div>
      {conversations.map((conversation, index) => (
        <MessageBubble
          key={conversation.id}
          message={conversation}
          isDoctor={conversation.isDoctor}
          author={conversation.author}
          refProp={(el) => (messageRefs.current[index] = el)}
          isVisible={visibleMessages.includes(conversation.id)}
          onClick={() => handleBubbleClick(conversation.id)}
        />
      ))}
      <div className="h-20"></div>
      {showForm && <JoinWaitlistForm onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default ConversationSection;
