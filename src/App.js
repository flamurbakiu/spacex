import { gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { Route, Switch } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/layout/Layout';

import AllLaunches from './pages/AllLaunches';
import NotFound from './pages/NotFound';
import LoadingSpinner from './components/UI/LoadingSpinner';

import { launchesActions } from './store/launches-slice';
import { companyActions } from './store/company-slice';
import AboutCompany from './pages/AboutCompany';

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
          country
          description
          company
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
  const { data, loading, error } = useQuery(API_DATA);
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
            element={loading ? <LoadingSpinner /> : <AllLaunches />}
          />
          <Route
            exact
            path='/launches'
            element={loading ? <LoadingSpinner /> : <AllLaunches />}
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
