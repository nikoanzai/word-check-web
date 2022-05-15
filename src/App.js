import { useState } from "react";

import "./App.scss";

function App() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // TODO: implement API call
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input autoFocus type="text" className="word-input" />
        <button disabled={submitting} type="submit" className="check-button">
          Check
        </button>
      </form>
    </div>
  );
}

export default App;
