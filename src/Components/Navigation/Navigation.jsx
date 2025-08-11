import { Link } from "react-router";

import qrStyles from './Navigation.module.css'

export const Navigation = () => {
  return(
    <nav className={qrStyles.container}>
      <Link className={qrStyles.navLink} to="/generate">Сгенерировать QR Code</Link>
      <Link className={qrStyles.navLink} to="/scan">Сканировать QR Code</Link>
      <Link className={qrStyles.navLink} to="/scan-history">История сканирования</Link>
      <Link className={qrStyles.navLink} to="/generate-history">История генерирования</Link>
    </nav>
  )
}