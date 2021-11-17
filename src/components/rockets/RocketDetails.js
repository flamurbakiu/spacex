import React from 'react';

function RocketDetails(props) {
  return (
    <div>
      <p>
        {props.name} is a partially reusable medium-lift launch vehicle,
        designed and manufactured by {props.company} in the {props.country}.
        <br />
        <br />
        The first test flight of {props.name} was on {props.firstFlight}, from
        Cape Canaveral, Florida. The Rocket is massive with a height of{' '}
        {props.height} meters, with a weight up to 55 tons ({props.height}kg)
        and with a diameter 3.7 meters.
        <br />
        <br />
        To watch the rocket in action, make sure to see this footage provided by
        {props.company}:
      </p>
    </div>
  );
}

export default RocketDetails;
