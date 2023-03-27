import { EmojiProvider } from "../context/EmojiContext";
import EmojiButton from "./EmojiButton";

function EmojiClick() {
  return (
    <EmojiProvider>
      <div>
        <p>Click the button to toggle the emoji:</p>
        <EmojiButton />
      </div>
    </EmojiProvider>
  );
}

export default EmojiClick;