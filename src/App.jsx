import './App.css';
import DownloadableQRCode from './components/DownloadableQRCode';
import DynamicQRCode from './components/DynamicQRCode';
import StaticQRCode from './components/StaticQRCode';
import StyledQRCode from './components/StyledQRCode';

function App() {
  return (
    <div>
      <StaticQRCode />
      <DynamicQRCode/>
      <StyledQRCode />
      <DownloadableQRCode />
    </div>
  );
}

export default App;
