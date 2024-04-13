import styles from './Header.module.css';
import igniteLogo from '../assets/ignitLogo.svg';
export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
      <h1>Ignite Feed</h1>
      
    </header>
  );
}
