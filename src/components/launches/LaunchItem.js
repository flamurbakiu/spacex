import { Link } from 'react-router-dom';

import classes from './LaunchItem.module.css';

const LaunchItem = (props) => {
  return (
    <div className={classes.item}>
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
        <Link className='btn' to={'/launches/details/' + props.id}>
          View Details
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
    </div>
  );
};

export default LaunchItem;
