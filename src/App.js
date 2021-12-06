import { gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/layout/Layout';

import AllLaunches from './pages/AllLaunches';
import NotFound from './pages/NotFound';
import LoadingSpinner from './components/UI/LoadingSpinner';

import { launchesActions } from './store/launches-slice';
import { companyActions } from './store/company-slice';
import AboutCompany from './pages/AboutCompany';
import LaunchDetails from './pages/LaunchDetails';

const API_DATA = gql`
  {
    launchesPast(limit: 10) {
      id
      mission_name
      links {
        article_link
        video_link
        flickr_images
      }
      rocket {
        rocket {
          name
          company
          description
          country
          first_flight
          mass {
            kg
          }
          height {
            meters
          }
        }
      }
    }
    company {
      name
      ceo
      summary
    }
  }
`;

function App() {
  // const { data, loading, error } = useQuery(API_DATA);
  const { loading, error, data, fetchMore } = useQuery(API_DATA, {
    variables: {
      offset: 0,
      limit: 10,
    },
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loading) {
      dispatch(launchesActions.setLaunchesData(data.launchesPast));
      dispatch(companyActions.setCompanyData(data.company));
      dispatch(launchesActions.setLoading(loading));
      dispatch(launchesActions.setError(error));
    }
  }, [data, loading, error, dispatch]);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            exact
            path='/'
            element={
              loading ? (
                <LoadingSpinner />
              ) : (
                <AllLaunches fetchMore={fetchMore} />
              )
            }
          />
          <Route
            exact
            path='/launches'
            element={
              loading ? (
                <LoadingSpinner />
              ) : (
                <AllLaunches fetchMore={fetchMore} />
              )
            }
          />

          <Route
            path='/launches/details/:id'
            element={loading ? <LoadingSpinner /> : <LaunchDetails />}
          />

          <Route
            exact
            path='/about'
            element={loading ? <LoadingSpinner /> : <AboutCompany />}
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
