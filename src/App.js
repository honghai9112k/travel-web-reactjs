import {NavBar} from './componets/NavBar/NavBar';
import GlobalStyle from './globalStyles';
import MainTravelBackground from './componets/MainTravelBackground/MainTravelBackground';
function App() {
  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <MainTravelBackground></MainTravelBackground>
      {/* <HButton></HButton>
      <HCard></HCard> */}
    </>
  );
}

export default App;
