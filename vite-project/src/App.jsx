import { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const addItem = () => {
    if (input.trim() !== '') {
      setItems([...items, input.trim()]);
      setInput('');
    }
  };

  const deleteItem = (index) => {
    const updated = [...items];
    updated.splice(index, 1);
    setItems(updated);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`container ${darkMode ? 'dark' : ''}`}>
      <h2>🍇 Dynamic Fruit List</h2>

      <button className="toggle-btn" onClick={toggleTheme}>
        {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>

      <div className="input-section">
        <input
          type="text"
          placeholder="Add a fruit..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
      </div>

      {items.length === 0 ? (
        <div className="placeholder">🪴 No items yet...</div>
      ) : (
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>
              ✅ {item}
              <span className="delete-btn" onClick={() => deleteItem(idx)}>❌</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
