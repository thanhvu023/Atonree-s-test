import React, { useState, useRef, useEffect } from 'react';
import '../styles/ChatbotBox.css';

const userOptions = [
  { id: 'user1', name: 'User 1' },
  { id: 'user2', name: 'User 2' }
];

const ChatbotBox = ({ onSend }) => {
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState('user1');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { type: 'user', text: input };
    setMessages(msgs => [...msgs, userMsg]);
    setInput('');
    // Gọi hàm onSend để lấy gợi ý sản phẩm
    if (onSend) {
      const suggestions = await onSend(userId, input);
      setMessages(msgs => [
        ...msgs,
        userMsg,
        { type: 'bot', suggestions }
      ]);
    }
  };

  return (
    <>
      {!open && (
        <button className="chatbot-fab" onClick={() => setOpen(true)}>
          💬 Chat AI
        </button>
      )}
      {open && (
        <div className="chatbot-box">
          <div className="chatbot-header">
            <span>AI Gợi ý sản phẩm</span>
            <button className="chatbot-close" onClick={() => setOpen(false)}>&times;</button>
          </div>
          <div className="chatbot-user-select">
            <label>User: </label>
            <select value={userId} onChange={e => setUserId(e.target.value)}>
              {userOptions.map(u => (
                <option key={u.id} value={u.id}>{u.name}</option>
              ))}
            </select>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, idx) =>
              msg.type === 'user' ? (
                <div key={idx} className="chatbot-msg-user">{msg.text}</div>
              ) : (
                <div key={idx} className="chatbot-msg-bot">
                  {msg.suggestions && msg.suggestions.length > 0 ? (
                    <ul>
                      {msg.suggestions.map(p => (
                        <li key={p.id}>{p.name} - {p.price.toLocaleString()} đ</li>
                      ))}
                    </ul>
                  ) : (
                    <span>Không tìm thấy sản phẩm phù hợp.</span>
                  )}
                </div>
              )
            )}
            <div ref={chatEndRef} />
          </div>
          <div className="chatbot-input-row">
            <input
              type="text"
              placeholder="Nhập từ khóa, ví dụ: dưới 500K, trên 1 triệu..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}>Gửi</button>
          </div>
        </div>
      )}
    </>
  );
};
export default ChatbotBox; 