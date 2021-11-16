import React from 'react';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';

function Launches() {
  const data = useSelector((state) => state.data);
  const loading = useSelector((state) => state.loading);

  console.log(loading);

  let imgSrc = '';

  if (!loading) {
    console.log(data[0].ships[0].image);
    imgSrc = data[0].ships[0].image;
  }

  return (
    <div>
      {!loading && (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {data.map((launch) => (
            <Grid key={launch['mission_name']} item xs={6}>
              <p>{launch['mission_name']}</p>

              <img src={imgSrc} alt='Ships' style={{ width: '100px' }} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default Launches;
