
import QRCode from "react-qr-code";

const StaticQRCode = () => {
  return (
    <div>
      <h1>My QR Code</h1>
      <QRCode value="https://example.com" size={128} />
    </div>
  );
};

export default StaticQRCode;
