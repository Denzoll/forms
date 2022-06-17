import { useState } from "react";
import "./App.css";

function App() {
  const [text, SetText] = useState("");
  const [Empty, setEmpty] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleBlur = (e) => {
    if(!text) {
      setError("полe ввода не должно быть пустым")
    }
  };

  const handleSetText = (e) => {
    SetText(e.target.value);
    if (text) {
      setEmpty(false);
      setError("сообщение отправлено ");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    SetText("");
    setEmpty(true);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          
          type="text"
          value={text}
          onChange={handleSetText}
          onBlur={(e) => handleBlur(e)}
        />
        <button type="submit" disabled={Empty}>
          Отправить
        </button>
        {error && Empty && <div style={{ color: "red" }}>{error}</div>}
        
      </form>
    </>
  );
}

export default App;
