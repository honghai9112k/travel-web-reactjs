import React, { lazy, Suspense } from 'react';
import { NavBar } from './features/NavBar/NavBar';
import ScrollToTop from './features/ScrollToTop/ScrollToTop';
import HLoading from './componets/HLoading/HLoading';
import GlobalStyle from './globalStyles'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
const Home = lazy(() => import('./pages/Home/Home'));
const Search1 = lazy(() => import('./pages/Search1/Search1'));

function App() {
  return (

    <Router>

      <GlobalStyle />
      <ScrollToTop />
      <NavBar />
      {/* <HLoading/> */}
      <Suspense fallback={<HLoading />}>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route exact path="/">
            <Redirect
              to={{
                pathname: '/home',
              }}
            />
          </Route>

          <Route exact path="/packages/search1">
            <Search1 />
          </Route>

        </Switch>
      </Suspense>

    </Router>
  );
}



export default App;
