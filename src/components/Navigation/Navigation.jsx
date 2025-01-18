import { NavLink, useLocation } from 'react-router-dom';
import navCss from './Navigation.module.css';
import clsx from 'clsx';
import Logo from '../Logo/Logo';
import Container from '../Container/Container';

const buildLinkClass = ({ isActive, isCatalog }) => {
  return clsx(
    navCss.link,
    isActive && navCss.isActive,
    isCatalog && navCss.item
  );
};

const Navigation = () => {
  const location = useLocation();
  const isCatalogPage = /^\/catalog\/\d+(\/(reviews|feature))?$/.test(
    location.pathname
  );

  return (
    <Container className="navContainer">
      <NavLink to="/">
        <Logo />
      </NavLink>
      <nav className={navCss.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) =>
            buildLinkClass({ isActive, isCatalog: isCatalogPage })
          }
        >
          Catalog
        </NavLink>
      </nav>
    </Container>
  );
};

export default Navigation;
