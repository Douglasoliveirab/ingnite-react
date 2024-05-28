import headerStyle from './Header.module.css';
import ignitLogo from '../../assets/logo.svg';

export function Header() {
  return (

    <header className={headerStyle.header}>
      <img src={ignitLogo} alt="logo tipo ignitLogo" />
      <h2>Ignite Feed</h2>
    </header>
  );
}
