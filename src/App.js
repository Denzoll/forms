import { useState } from "react";
import "./App.css";

function App() {
  const [text, SetText] = useState("");
  const [Empty, setEmpty] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState(false);

  const handleBlur = (e) => {
    if(!text) {
      setMessage(false)
      setError("Полe ввода не должно быть пустым")
    }
  };

  const handleSetText = (e) => {
    SetText(e.target.value);
    if (e.target.value) {
      setEmpty(false)
      setError("")
      setMessage(true)
    }
    if (!e.target.value) {
      setEmpty(true)
      setMessage(false)
      setError("Поле ввода не должно быть пустым")
    }
  };


  const handleSubmit = (e) => {
    console.log(text);
    setError("Отправлено")
    SetText("");
    setEmpty(true);
    setMessage(true)
  };
  return (
    <>
      <form  onClick={(e) => e.preventDefault()}>
        <input
          
          type="text"
          value={text}
          onChange={handleSetText}
          onBlur={(e) => handleBlur(e)}
        />
        <button onClick={e => handleSubmit()} type="submit" disabled={Empty}>
          Отправить
        </button>
        {error && Empty && <div className={message === false ? 'is-error' : 'no-error'}>{error}</div>}
        
      </form>
    </>
  );
}

export default App;
