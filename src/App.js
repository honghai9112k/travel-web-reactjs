import { NavBar } from './features/NavBar/NavBar';
import GlobalStyle from './globalStyles';
import MainTravel from './features/MainTravel/MainTravel';
import Proposals from './features/Proposals/Proposals';
import Promotions from './features/Promotions/Promotions';
import ContentMiddle from './features/ContentMiddle/ContentMiddle';
import ContentMiddle2 from './features/ContentMiddle2/ContentMiddle2';
import ContentBestChoose from './features/ContentBestChoose/ContentBestChoose';
import Footer from './features/Footer/Footer';
import ScrollToTop from './features/ScrollToTop/ScrollToTop';
import './App.css'





function App() {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <GlobalStyle />
      <NavBar />
      <MainTravel />
      {/* <Proposals/>
      <ContentMiddle />
      <ContentBestChoose/>
      <ContentMiddle2 />
      <Promotions /> */}
      <Footer/>

    </>
  );
}

export default App;
