import {NavBar} from './features/NavBar/NavBar';
import GlobalStyle from './globalStyles';
import MainTravel from './features/MainTravel/MainTravel';
import Proposals from './features/Proposals/Proposals';
import Promotions from './features/Promotions/Promotions';
import './App.css'


function App() {
  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <MainTravel/>
      <Proposals/>
      <Promotions/>

    </>
  );
}

export default App;
