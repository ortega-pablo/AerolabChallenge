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
  ProductSection,
  ProductSectionContent,
  ProductsList,
  ProductsHead,
  ProductsEnd,
  WalkthroughCards,
  WalkthroughCardsBG,
  WalkthroughSection,
  WavePattern,
  ProductsNav,
  ProductsMenu,
  ProductsFilter,
  ProductsSort,
  FilterSelect,
  Pager,
  FooterSection
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
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import ProductCard from '@/components/productCard';
import Footer from '@/components/footer';

const Home: React.FC = () => {
  const products = [
    {
      img: {
        url: 'https://coding-challenge-api.aerolab.co/images/MacbookPro-x1.png',
        hdUrl:
          'https://coding-challenge-api.aerolab.co/images/MacbookPro-x2.png'
      },
      _id: '5a0b35df734d1d08bf7084cb',
      name: 'Macbook Pro',
      cost: 1300,
      category: 'Laptops',
      state: 'processing'
    },
    {
      img: {
        url: 'https://coding-challenge-api.aerolab.co/images/CanonEOS5D-x1.png',
        hdUrl:
          'https://coding-challenge-api.aerolab.co/images/CanonEOS5D-x2.png'
      },
      _id: '5a0b3600734d1d08bf7084e5',
      name: 'Canon EOS 5D',
      cost: 2200,
      category: 'Cameras',
      state: 'default'
    },
    {
      img: {
        url: 'https://coding-challenge-api.aerolab.co/images/AmazonEcho-x1.png',
        hdUrl:
          'https://coding-challenge-api.aerolab.co/images/AmazonEcho-x2.png'
      },
      _id: '5a0b3658734d1d08bf70850f',
      name: 'Amazon Echo',
      cost: 150,
      category: 'Smart Home',
      state: 'disabled'
    },
    {
      img: {
        url: 'https://coding-challenge-api.aerolab.co/images/MarshallMajorll-x1.png',
        hdUrl:
          'https://coding-challenge-api.aerolab.co/images/MarshallMajorll-x2.png'
      },
      _id: '5a0b35f0734d1d08bf7084df',
      name: 'Marshall Major ll',
      cost: 300,
      category: 'Audio',
      state: 'default'
    },
    {
      img: {
        url: 'https://coding-challenge-api.aerolab.co/images/MacbookPro-x1.png',
        hdUrl:
          'https://coding-challenge-api.aerolab.co/images/MacbookPro-x2.png'
      },
      _id: '5a0b35df734d1d08bf7084cb',
      name: 'Macbook Pro',
      cost: 1300,
      category: 'Laptops',
      state: 'processing'
    },
    {
      img: {
        url: 'https://coding-challenge-api.aerolab.co/images/CanonEOS5D-x1.png',
        hdUrl:
          'https://coding-challenge-api.aerolab.co/images/CanonEOS5D-x2.png'
      },
      _id: '5a0b3600734d1d08bf7084e5',
      name: 'Canon EOS 5D',
      cost: 2200,
      category: 'Cameras',
      state: 'default'
    },
    {
      img: {
        url: 'https://coding-challenge-api.aerolab.co/images/AmazonEcho-x1.png',
        hdUrl:
          'https://coding-challenge-api.aerolab.co/images/AmazonEcho-x2.png'
      },
      _id: '5a0b3658734d1d08bf70850f',
      name: 'Amazon Echo',
      cost: 150,
      category: 'Smart Home',
      state: 'disabled'
    },
    {
      img: {
        url: 'https://coding-challenge-api.aerolab.co/images/MarshallMajorll-x1.png',
        hdUrl:
          'https://coding-challenge-api.aerolab.co/images/MarshallMajorll-x2.png'
      },
      _id: '5a0b35f0734d1d08bf7084df',
      name: 'Marshall Major ll',
      cost: 300,
      category: 'Audio',
      state: 'default'
    },
    {
      img: {
        url: 'https://coding-challenge-api.aerolab.co/images/MacbookPro-x1.png',
        hdUrl:
          'https://coding-challenge-api.aerolab.co/images/MacbookPro-x2.png'
      },
      _id: '5a0b35df734d1d08bf7084cb',
      name: 'Macbook Pro',
      cost: 1300,
      category: 'Laptops',
      state: 'processing'
    },
    {
      img: {
        url: 'https://coding-challenge-api.aerolab.co/images/CanonEOS5D-x1.png',
        hdUrl:
          'https://coding-challenge-api.aerolab.co/images/CanonEOS5D-x2.png'
      },
      _id: '5a0b3600734d1d08bf7084e5',
      name: 'Canon EOS 5D',
      cost: 2200,
      category: 'Cameras',
      state: 'default'
    },
    {
      img: {
        url: 'https://coding-challenge-api.aerolab.co/images/AmazonEcho-x1.png',
        hdUrl:
          'https://coding-challenge-api.aerolab.co/images/AmazonEcho-x2.png'
      },
      _id: '5a0b3658734d1d08bf70850f',
      name: 'Amazon Echo',
      cost: 150,
      category: 'Smart Home',
      state: 'disabled'
    },
    {
      img: {
        url: 'https://coding-challenge-api.aerolab.co/images/MarshallMajorll-x1.png',
        hdUrl:
          'https://coding-challenge-api.aerolab.co/images/MarshallMajorll-x2.png'
      },
      _id: '5a0b35f0734d1d08bf7084df',
      name: 'Marshall Major ll',
      cost: 300,
      category: 'Audio',
      state: 'default'
    },
    {
      img: {
        url: 'https://coding-challenge-api.aerolab.co/images/MacbookPro-x1.png',
        hdUrl:
          'https://coding-challenge-api.aerolab.co/images/MacbookPro-x2.png'
      },
      _id: '5a0b35df734d1d08bf7084cb',
      name: 'Macbook Pro',
      cost: 1300,
      category: 'Laptops',
      state: 'processing'
    },
    {
      img: {
        url: 'https://coding-challenge-api.aerolab.co/images/CanonEOS5D-x1.png',
        hdUrl:
          'https://coding-challenge-api.aerolab.co/images/CanonEOS5D-x2.png'
      },
      _id: '5a0b3600734d1d08bf7084e5',
      name: 'Canon EOS 5D',
      cost: 2200,
      category: 'Cameras',
      state: 'default'
    },
    {
      img: {
        url: 'https://coding-challenge-api.aerolab.co/images/AmazonEcho-x1.png',
        hdUrl:
          'https://coding-challenge-api.aerolab.co/images/AmazonEcho-x2.png'
      },
      _id: '5a0b3658734d1d08bf70850f',
      name: 'Amazon Echo',
      cost: 150,
      category: 'Smart Home',
      state: 'disabled'
    },
    {
      img: {
        url: 'https://coding-challenge-api.aerolab.co/images/MarshallMajorll-x1.png',
        hdUrl:
          'https://coding-challenge-api.aerolab.co/images/MarshallMajorll-x2.png'
      },
      _id: '5a0b35f0734d1d08bf7084df',
      name: 'Marshall Major ll',
      cost: 300,
      category: 'Audio',
      state: 'default'
    }
  ];
  let distance: string;

  if (products.length < 5) {
    distance = '2720px';
  } else if (products.length < 9) {
    distance = '3306px';
  } else if (products.length < 13) {
    distance = '3900px';
  } else if (products.length <= 16) {
    distance = '4478px';
  } else {
    distance = '2720px';
  }
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

      <ProductSection>
        <ProductSectionContent>
          <ProductsHead>
            <div className="title">
              {' '}
              <p>
                tech <span>products</span>
              </p>
            </div>
            <ProductsNav>
              <ProductsMenu>
                <ProductsFilter>
                  <p>Filter by:</p>
                  <FilterSelect>
                    <div className="select-btn">
                      <span className="btn-text">All Products</span>
                      <i>
                        <IoIosArrowDown style={{ verticalAlign: 'middle' }} />
                      </i>
                    </div>
                    <ul className="options close">
                      <li className="option">All Products</li>
                      <li className="option">Audio</li>
                      <li className="option">Cameras</li>
                      <li className="option">Drones</li>
                      <li className="option">Gaming</li>
                      <li className="option">Laptops</li>
                      <li className="option">Monitors & TV</li>
                      <li className="option">PC Accessories</li>
                      <li className="option">Phone Accessories</li>
                      <li className="option">Phones</li>
                      <li className="option">Smart Home</li>
                      <li className="option">Tablets & E-readers</li>
                    </ul>
                  </FilterSelect>
                </ProductsFilter>

                <div className="bar" />

                <ProductsSort>
                  <p>Sort by:</p>
                  <div className="sort-buttons">
                    <button className="selected">
                      {' '}
                      <span>Most Recent</span>{' '}
                    </button>
                    <button className="not-selected">
                      <span>Lowest Price</span>
                    </button>
                    <button className="not-selected">
                      <span>Highest Price</span>
                    </button>
                  </div>
                </ProductsSort>
              </ProductsMenu>
              <div className="pager">
                <Pager>
                  <div className="prev disabled">
                    <IoIosArrowBack />
                  </div>
                  <div className="text">
                    Page <span>1 de 2</span>
                  </div>
                  <div className="next enabled">
                    <IoIosArrowForward />
                  </div>
                </Pager>
              </div>
            </ProductsNav>
          </ProductsHead>

          <ProductsList>
            {products.map((product, index) => {
              return (
                <>
                  <ProductCard
                    img={product.img}
                    _id={product._id}
                    name={product.name}
                    cost={product.cost}
                    category={product.category}
                    state={product.state}
                  />
                </>
              );
            })}
          </ProductsList>

          <ProductsEnd>
            <div className="empty"></div>
            <div className="text">
              <span>16 of 32</span> products
            </div>
            <Pager>
              <div className="prev disabled">
                <IoIosArrowBack />
              </div>
              <div className="text">
                Page <span>1 de 2</span>
              </div>
              <div className="next enabled">
                <IoIosArrowForward />
              </div>
            </Pager>
          </ProductsEnd>
        </ProductSectionContent>
      </ProductSection>

      <FooterSection distance={distance}>
        <Footer></Footer>
      </FooterSection>
    </HomeContainer>
  );
};

export default Home;
