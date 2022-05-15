import "./App.css";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input autoFocus type="text" className="word-input" />
        <button type="submit" className="check-button">
          Check
        </button>
      </form>
    </div>
  );
}

export default App;
