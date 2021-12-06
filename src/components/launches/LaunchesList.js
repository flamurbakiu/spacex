import { Fragment } from 'react';

import LaunchItem from './LaunchItem';
import classes from './LaunchesList.module.css';

const defaultImage =
  'https://live.staticflickr.com/65535/50630802488_8cc373728e_o.jpg';

const defaultArticleLink =
  'https://spaceflightnow.com/2020/11/21/international-satellite-launches-to-extend-measurements-of-sea-level-rise/';

const defaultVideoLink = 'https://youtu.be/J442-ti-Dhg';

const LaunchesList = (props) => {
  const loadMoreHandler = () => {
    props.fetchMore({
      variables: {
        offset: props.launches.length,
      },
    });
  };

  return (
    <Fragment>
      <div className={classes.list}>
        {props.launches.map((launch) => (
          <LaunchItem
            key={launch.id}
            id={launch.id}
            missionName={launch['mission_name']}
            image={
              launch.links['flickr_images'][1]
                ? launch.links['flickr_images'][1]
                : defaultImage
            }
            articleLink={
              launch.links['article_link']
                ? launch.links['article_link']
                : defaultArticleLink
            }
            videoLink={
              launch.links['video_link']
                ? launch.links['video_link']
                : defaultVideoLink
            }
            rockets={launch.rocket.rocket}
          />
        ))}
        <button onClick={loadMoreHandler} className='btn'>
          Load more
        </button>
      </div>
    </Fragment>
  );
};

export default LaunchesList;
