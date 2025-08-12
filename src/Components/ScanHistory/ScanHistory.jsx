import {QRCodeSVG} from 'qrcode.react';
import { SCAN_DATA } from '../../constants'

import qrStyles from './ScanHistory.module.css'

export const ScanHistory = () => {

  const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

  return(
    <div className={qrStyles.container}>
      {data.map((text) => (
        <div key={text} className={qrStyles.qrWrapper}>
          <QRCodeSVG value={text} size={200} />
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}