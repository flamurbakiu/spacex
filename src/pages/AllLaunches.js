import React from 'react';
import { useSelector } from 'react-redux';
import LaunchesList from '../components/launches/LaunchesList';

function AllLaunches(props) {
  const launchesData = useSelector((state) => state.launches.launchesData);

  return <LaunchesList launches={launchesData} fetchMore={props.fetchMore} />;
}

export default AllLaunches;
