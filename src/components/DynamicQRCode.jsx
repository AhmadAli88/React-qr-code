import { useState } from "react";
import QRCode from "react-qr-code";

const DynamicQRCode = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <h1>Dynamic QR Code</h1>
      <input
        type="text"
        placeholder="Enter text for QR Code"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px" }}
      />
      <QRCode value={text || "default value"} size={128} />
    </div>
  );
};

export default DynamicQRCode;
