import { Routes, Route } from "react-router";
import { Navigation } from './Components/Navigation/Navigation';
import { QRCodeGenerator } from './Components/Generate/QRCodeGenerator';
import { QRCodeScanner } from './Components/Scan/QRCodeScanner';
import { GenerateHistory } from './Components/GenerateHistory/GenerateHistory';
import { ScanHistory } from './Components/ScanHistory/ScanHistory';

export const Layout = () => {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/generate" element={<QRCodeGenerator />} />
        <Route path="/scan" element={<QRCodeScanner />} />
        <Route path="/scan-history" element={<ScanHistory />} />
        <Route path="/generate-history" element={<GenerateHistory />} />
      </Routes>
    </div>
  );
}