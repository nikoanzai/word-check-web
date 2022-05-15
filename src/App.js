import { useState } from "react";
import axios from "axios";

import "./App.scss";

function App() {
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [nonWords, setNonWords] = useState([]);

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/find-non-words`,
        {
          sentence: text,
        }
      );
      setNonWords(data);
    } catch (error) {
      console.error(error);
    }

    setSubmitting(false);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          type="text"
          className="word-input"
          onChange={handleChangeText}
        />
        <button disabled={submitting} type="submit" className="check-button">
          Check
        </button>
        {!!nonWords.length && (
          <p className="non-word-text">
            Non-English words: {nonWords.join(", ")}
          </p>
        )}
      </form>
    </div>
  );
}

export default App;
