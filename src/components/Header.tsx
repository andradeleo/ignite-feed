
import styles from "./Header.module.css";

import igniteLogo from "../assets/logo.svg";

export default function Header() {
  return (
   <header className={styles.header}>
    <img src={igniteLogo} alt="Ignite logo" />
   </header>
  )
}
