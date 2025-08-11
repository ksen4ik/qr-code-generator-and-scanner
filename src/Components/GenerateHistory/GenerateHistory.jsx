import {QRCodeSVG} from 'qrcode.react';
import { GENERATE_DATA } from '../../constants'

import qrStyles from './GenerateHistory.module.css'

export const GenerateHistory = () => {

  const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

  return(
    <div className={qrStyles.container}>
      {data.map((text) => (
        <div key={text} className={qrStyles.qrWrapper}>
          <p>{text}</p>
          <QRCodeSVG value={text} size={100} />
        </div>
      ))}
    </div>
  );
}