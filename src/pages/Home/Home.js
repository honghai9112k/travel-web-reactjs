import React from 'react';
import MainTravel from '../../features/MainTravel/MainTravel';
import Proposals from '../../features/Proposals/Proposals';
import Promotions from '../../features/Promotions/Promotions';
import ContentMiddle from '../../features/ContentMiddle/ContentMiddle';
import ContentMiddle2 from '../../features/ContentMiddle2/ContentMiddle2';
import ContentBestChoose from '../../features/ContentBestChoose/ContentBestChoose';
import Footer from '../../features/Footer/Footer';

const Home = () => {
    return (
        <>
      <MainTravel />
      <Proposals/>
      <ContentMiddle />
      <ContentBestChoose/>
      <ContentMiddle2 />
      <Promotions />
      <Footer/>
    </>
    );
}

export default Home;
