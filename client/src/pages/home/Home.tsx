import React from 'react';
import Navbar from '@components/navbar';
import {
  CallToAction,
  CTAButton,
  HomeContainer,
  Illustration,
  IllustrationBG,
  IllustrationContainer,
  LabelAndTitle,
  LandingCopy,
  LandingResume,
  LandingSection,
  WalkthroughCards,
  WalkthroughCardsBG,
  WalkthroughSection,
  WavePattern
} from '@/styles/pages/home.style';
import WalkthroughCard from '@/components/walkthrough-card';
import walkthrough1 from '../../assets/walkthrough-1-desktop.svg';
import walkthrough2 from '../../assets/walkthrough-2-desktop.svg';
import walkthrough3 from '../../assets/walkthrough-3-desktop.svg';
import coinIcon from '../../assets/icons/coinIcon.svg';
import arrowIcon from '../../assets/icons/arrowIcon.svg';
import starsIcon from '../../assets/icons/starsIcon.svg';
import bannerImage from '../../assets/hero-desktop.svg';
import { CgArrowDown } from 'react-icons/cg';

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <WavePattern />
      <LandingSection>
        <Navbar />

        <CallToAction>
          <LandingCopy>
            <LabelAndTitle>
              <div className="explore">
                <p>explore the</p>
              </div>
              <div className="tech-zone">
                <p className="color">tech</p>
                <p className="black">zone</p>
              </div>
            </LabelAndTitle>
            <LandingResume>
              <p>
                Here you’ll be able to exchange all of your hard-earned
                Aeropoints and exchange them for cool tech.
              </p>
            </LandingResume>
          </LandingCopy>
          <CTAButton>
            <p>vew all products</p>
            <CgArrowDown size={'24px'} />
          </CTAButton>
        </CallToAction>

        <IllustrationContainer>
          <Illustration>
            <img src={bannerImage} alt="Hero image" />

            <IllustrationBG />
          </Illustration>
        </IllustrationContainer>
      </LandingSection>
      <WalkthroughSection>
        <WalkthroughCards>
          <div className="left">
            <WalkthroughCard
              imgUrl={walkthrough1}
              imgAlt="Walkthrough 1 image"
              iconUrl={coinIcon}
              iconAlt="Coin Icon"
              title="1—browse"
              resume="Browse our tech catalog with more than 20 top tech products"
            />
          </div>
          <div className="center">
            <WalkthroughCard
              imgUrl={walkthrough2}
              imgAlt="Walkthrough 2 image"
              iconUrl={arrowIcon}
              iconAlt="Arrow Icon"
              title="2—choose"
              resume="Exchange your hard earned AeroPoints for the item you want"
            />
          </div>
          <div className="right">
            <WalkthroughCard
              imgUrl={walkthrough3}
              imgAlt="Walkthrough 3 image"
              iconUrl={starsIcon}
              iconAlt="Coin Icon"
              title="3—enjoy"
              resume="All done, you can relax! We’ll take care of delivery of your tech item!"
            />
          </div>
        </WalkthroughCards>
        <WalkthroughCardsBG />
      </WalkthroughSection>
    </HomeContainer>
  );
};

export default Home;
