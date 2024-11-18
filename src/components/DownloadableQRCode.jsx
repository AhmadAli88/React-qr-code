import React from "react";
import QRCode from "react-qr-code";

const DownloadableQRCode = () => {
  const qrRef = React.useRef();

  const downloadQRCode = () => {
    const svg = qrRef.current.querySelector("svg");
    const serializer = new XMLSerializer();
    const svgBlob = new Blob([serializer.serializeToString(svg)], { type: "image/svg+xml" });
    const url = URL.createObjectURL(svgBlob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "qrcode.svg";
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <div ref={qrRef}>
        <QRCode value="https://example.com" size={128} />
      </div>
      <button onClick={downloadQRCode} style={{ marginTop: "10px" }}>
        Download QR Code
      </button>
    </div>
  );
};

export default DownloadableQRCode;
