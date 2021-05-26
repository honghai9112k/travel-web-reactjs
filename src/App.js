import {NavBar} from './features/NavBar/NavBar';
import GlobalStyle from './globalStyles';
import MainTravel from './features/MainTravel/MainTravel';
import Packages from './features/Packages/Packages';
import './App.css'


function App() {
  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <MainTravel/>
      <Packages></Packages>

    </>
  );
}

export default App;
