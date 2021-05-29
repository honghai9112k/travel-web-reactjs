import {NavBar} from './features/NavBar/NavBar';
import GlobalStyle from './globalStyles';
import MainTravel from './features/MainTravel/MainTravel';
import Proposals from './features/Proposals/Proposals';
import Promotions from './features/Promotions/Promotions';
import ContentMiddle from './features/ContentMiddle/ContentMiddle';
import ContentMiddle2 from './features/ContentMiddle2/ContentMiddle2';

import './App.css'


function App() {
  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <MainTravel/>
      <Proposals/>
      <ContentMiddle/>
      <Promotions/>
      <ContentMiddle2/>

    </>
  );
}

export default App;
