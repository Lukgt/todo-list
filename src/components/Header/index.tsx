import './styles.css';
import rocketLogo from '../../assets/rocket.svg';

export function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src={rocketLogo} alt="Logotipo do Rocket" />
          <h1>
            <span className="to">to</span>
            <span className="do">do</span>
          </h1>
        </div>
      </div>
    </header>
  );
}
