import { useContext } from "react";
import { EmojiContext } from "../context/EmojiContext";

const EmojiButton = () => {
  const { emoji, toggleEmoji } = useContext(EmojiContext);

  return <button onClick={toggleEmoji}>{emoji}</button>;
};

export default EmojiButton;
