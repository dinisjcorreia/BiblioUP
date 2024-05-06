import React, { useState, useEffect } from "react";

function App() {
    const [messages, setMessages] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:8000/livros")
        .then((res) => res.json())
        .then((data) => setMessages(data.message));
    }, []);
  
    return (
      <div className="App">
        {messages.map((message, index) => (
          <h1 key={index}>{message.titulo}</h1>
        ))}
      </div>
    );
  }

export default App