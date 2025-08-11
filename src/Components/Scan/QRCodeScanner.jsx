import { useState } from 'react'
import { Scanner } from '@yudiel/react-qr-scanner';

import qrStyles from './QRCodeScanner.module.css'

import { SCAN_DATA } from '../../constants'

export const QRCodeScanner = () => {

  let [scanResultValue, setScanResultValue] = useState('');

  const scanHandler = (result) => {
    setScanResultValue(result[0].rawValue);

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

    localStorage.setItem(
      SCAN_DATA,
      JSON.stringify([...prevData, result[0].rawValue])
    );
  }

  const settings = {
    audio: false,
    finder: false,
  }

  return(
    <div className={qrStyles.container}>
      <Scanner
        onScan={scanHandler}
        components={settings}
        styles={{container: {width: 250}}}
      />

      <p>{scanResultValue}</p>
    </div>
  )
}