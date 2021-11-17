import { Link, NavLink } from 'react-router-dom';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
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
            <NavLink
              to='/launches'
              activeClassName={classes.active}
              className={classes['li-item']}
            >
              <FlightTakeoffIcon />
              <span>All Launches</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              activeClassName={classes.active}
              className={classes['li-item']}
            >
              <HomeWorkIcon />
              <span>About Company</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
