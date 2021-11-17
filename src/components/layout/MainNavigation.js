import { Link, NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link to='/launches' className={classes.logo}>
        SpaceX
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/launches'>All Launches</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About Company</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
