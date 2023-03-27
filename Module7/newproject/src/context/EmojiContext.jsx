import { createContext, useState } from "react";

const EmojiContext = createContext();

const EmojiProvider = ({ children }) => {
  const [emoji, setEmoji] = useState("👍");

  const toggleEmoji = () => {
    setEmoji((prevEmoji) => (prevEmoji === "👍" ? "👎" : "👍"));
  };

  return (
    <EmojiContext.Provider value={{ emoji, toggleEmoji }}>
      {children}
    </EmojiContext.Provider>
  );
};

export { EmojiContext, EmojiProvider };