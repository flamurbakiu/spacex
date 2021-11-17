import { Link } from 'react-router-dom';

import classes from './LaunchItem.module.css';

const LaunchItem = (props) => {
  // console.log(props.rockets);

  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.missionName}</p>
          <a
            href={props.articleLink}
            target='_blank;'
            className={classes.article}
          >
            Read the article
          </a>
        </blockquote>
        <Link className='btn' to='/'>
          View Rockets
        </Link>
      </figure>

      <a
        href={props.videoLink}
        className={classes.image}
        target='_blank'
        rel='noreferrer'
      >
        <img src={props.image} alt={props.missionName} />
      </a>
    </li>
  );
};

export default LaunchItem;
