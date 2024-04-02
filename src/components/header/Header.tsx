import {HeaderLogo} from './HeaderLogo';
import {HeaderUserInfo} from './HeaderUserInfo';

export function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <HeaderLogo />
          <HeaderUserInfo />
        </div>
      </div>
    </header>
  );
}
