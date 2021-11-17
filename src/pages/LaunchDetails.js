import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import RocketDetails from '../components/rockets/RocketDetails';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import ReactPlayer from 'react-player';

import classes from './LaunchDetails.module.css';

const defaultImage =
  'https://live.staticflickr.com/65535/50630802488_8cc373728e_o.jpg';

const defaultVideoLink = 'https://www.youtube.com/watch?v=J442-ti-Dhg';

function LaunchDetails() {
  const launchesData = useSelector((state) => state.launches.launchesData);
  const loading = useSelector((state) => state.launches.loading);
  const params = useParams();

  let launch = launchesData.find((launch) => launch.id === params.id);

  if (loading) return <LoadingSpinner />;
  return (
    <Fragment>
      <div className={classes.details}>
        <div className={classes.left}>
          <h1>{launch['mission_name']}</h1>

          <RocketDetails
            name={launch.rocket.rocket.name}
            country={launch.rocket.rocket.country}
            company={launch.rocket.rocket.company}
            description={launch.rocket.rocket.description}
            firstFlight={launch.rocket.rocket['first_flight']}
            mass={launch.rocket.rocket.mass.kg}
            height={launch.rocket.rocket.height.meters}
          />
        </div>

        <div className={classes.right}>
          <img
            src={
              launch.links['flickr_images'][1]
                ? launch.links['flickr_images'][1]
                : defaultImage
            }
            alt={launch['mission_name']}
            className={classes.image}
          />
        </div>
      </div>
      <ReactPlayer
        url={
          launch.links['video_link']
            ? launch.links['video_link']
            : defaultVideoLink
        }
        width='100%'
        height='600px'
        style={{ marginTop: '50px' }}
      />
    </Fragment>
  );
}

export default LaunchDetails;
