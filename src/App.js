import {NavBar} from './features/NavBar/NavBar';
import GlobalStyle from './globalStyles';
import MainTravel from './features/MainTravel/MainTravel';
import './App.css'
function App() {
  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <MainTravel/>
      {/* <HButton></HButton>
      <HCard></HCard> */}
    </>
  );
}

export default App;
