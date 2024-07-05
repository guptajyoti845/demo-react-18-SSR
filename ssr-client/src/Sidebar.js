import { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
    const [message, setMessage] = useState("");

    const showMessage = (msg) => {
        setMessage(msg);
    };

    const clearMessage = () => {
        setMessage("");
    };

    return (
        <div className="sidebar">
            <h3>Sidebar</h3>
            <p>Links and other content can go here.</p>
            <div className="links">
                <a href="/">Home</a>
                <a href="/cars">Cars</a>
                <a href="/about">About</a>
            </div>
            <button onClick={() => showMessage("Button 1 clicked!")}>Button 1</button>
            <button onClick={() => showMessage("Button 2 clicked!")}>Button 2</button>
            <button onClick={() => showMessage("Button 3 clicked!")}>Button 3</button>
            <button onClick={clearMessage}>Clear Message</button>
            {message && <div className="message">{message}</div>}
        </div>
    );
}

export default Sidebar;
