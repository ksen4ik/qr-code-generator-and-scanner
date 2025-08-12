import { useState } from 'react'
import {QRCodeSVG} from 'qrcode.react';

import qrStyles from './QRCodeGenerator.module.css'

import { GENERATE_DATA } from '../../constants'

export const QRCodeGenerator = () => {

  const [value, setValue] = useState('');
  const [result, setResult] = useState(false);


  const onClickHandler = () => {
    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

    localStorage.setItem(
      GENERATE_DATA,
      JSON.stringify([...prevData, value])
    );

    setResult(value);
    setValue('');
  }

  const onChangeHandler = (event) => {
    setValue(event.target.value);
    setResult('');
  }

  return (
    <div className={qrStyles.container}>
      <div className={qrStyles.wrapper}>
        <input
          type="text"
          value={value}
          placeholder="Введите текст..."
          onChange={onChangeHandler}
          className={qrStyles.input} />
        <button type='button' onClick={onClickHandler} className={qrStyles.button}>Сгенерировать QR</button>
      </div>
      {result ? <QRCodeSVG value={value}  /> : null}
      {result ? <p>{value}</p> : null}
    </div>
  );
}