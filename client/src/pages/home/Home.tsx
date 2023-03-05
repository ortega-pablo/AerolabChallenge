import React from 'react';
import Navbar from '@components/navbar';
import { HomeContainer } from '@/styles/pages/home.style';

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Navbar />
    </HomeContainer>
  );
};

export default Home;
