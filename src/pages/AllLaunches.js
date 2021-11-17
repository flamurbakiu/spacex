import React from 'react';
import { useSelector } from 'react-redux';
import LaunchesList from '../components/launches/LaunchesList';

function AllLaunches() {
  const launchesData = useSelector((state) => state.launches.launchesData);

  return <LaunchesList launches={launchesData} />;
}

export default AllLaunches;
