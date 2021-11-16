import { gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Launches from './components/Launches';
import { launchesActions } from './store/launches-slice';

const GET_LAUNCHES = gql`
  {
    launchesPast(limit: 10) {
      mission_name
      rocket {
        rocket_name
      }
      ships {
        name
        home_port
        image
      }
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(GET_LAUNCHES);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loading) {
      dispatch(launchesActions.setData(data.launchesPast));
      dispatch(launchesActions.setLoading(loading));
      dispatch(launchesActions.setError(error));
    }
  });

  return <Launches />;
}

export default App;
