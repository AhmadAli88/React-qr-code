
import QRCode from "react-qr-code";

const StyledQRCode = () => {
  return (
    <div>
      <h1>Custom Styled QR Code</h1>
      <QRCode
        value="https://example.com"
        size={200}
        bgColor="purple"
        fgColor="yellow"
        style={{ border: "5px solid red" }}
      />
    </div>
  );
};

export default StyledQRCode;
