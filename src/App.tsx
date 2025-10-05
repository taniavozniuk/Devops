import { useState } from "react";
import "./App.css";
import Input from "./components/Input/Input.js";
import { Toast } from "./components/Toast/Toast.js";
import { Sidebar } from "./components/Sidebar/Sidebar.js";

function App() {
  const [toast, setToast] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const showToast = (m: string) => {
    setToast((prev) => [...prev, m]);
  };

  const handleClose = (idx: number) => {
    setToast((prev) => prev.filter((_, i) => i !== idx));
  };
  return (
    <div className='app-wrapper'>
      <div style={{ padding: "20px" }}>
        <h2>Text Input</h2>
        <Input type="text" clearable placeholder="Enter text..." />
        <h2>Number Input</h2>
        <Input type="text" clearable placeholder="Enter number..." />
        <h2>Password Input</h2>
        <Input type="password" clearable placeholder="Enter password..." />

        <button
          onClick={() => showToast("Success toast!")}
          style={{ marginTop: "20px" }}
        >
          Show Toast
        </button>
        {toast.map((msg, idx) => (
          <Toast
            key={idx}
            message={msg}
            type="success"
            duration={3000}
            showCloseButton
            onClose={() => handleClose(idx)}
          />
        ))}
        <button onClick={() => setIsOpen(true)} style={{ marginTop: "20px" }}>
          Open Menu
        </button>
        <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </div>
  );
}

export default App;
