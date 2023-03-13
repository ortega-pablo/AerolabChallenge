import React, { useEffect } from 'react';
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
import ProductCard from '@/components/productCard';
import Footer from '@/components/footer';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { getProducts } from '@/store/slices/products.slice';
import { RootState } from '@/store/store';
import Spinner from '@/components/spinner';
import Pagination from '@/components/pagination';
import ProductsNav from '@/components/productsNav';

const Home: React.FC = () => {
  const products = useAppSelector(
    (state: RootState) => state.products.orderedProducts
  );
  const productsQuantity = useAppSelector(
    (state: RootState) => state.products.productsQuantity
  );
  const statusProducts = useAppSelector(
    (state: RootState) => state.products.status
  );
  const dispatch = useAppDispatch();

  let distance: string;

  switch (true) {
    case products.length > 0 && products.length < 5:
      distance = '2720px';
      break;
    case products.length >= 5 && products.length < 9:
      distance = '3306px';
      break;
    case products.length >= 9 && products.length < 13:
      distance = '3900px';
      break;
    case products.length >= 13 && products.length <= 16:
      distance = '4478px';
      break;
    default:
      distance = '2220px';
      break;
  }

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

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
          <a href="#products-section">
            <CTAButton >
              <p>vew all products</p>
              <CgArrowDown size={'24px'} />
            </CTAButton>
          </a>
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

      <ProductSection id="products-section">
        <ProductSectionContent>
          <ProductsHead>
            <div className="title">
              {' '}
              <p>
                tech <span>products</span>
              </p>
            </div>
            <ProductsNav />
          </ProductsHead>

          <ProductsList>
            {statusProducts === 'resolved' ? (
              products.map((product) => {
                return (
                  <>
                    <ProductCard
                      key={product._id}
                      img={product.img}
                      _id={product._id}
                      name={product.name}
                      cost={Number(product.cost)}
                      category={product.category}
                    />
                  </>
                );
              })
            ) : (
              <Spinner />
            )}
          </ProductsList>

          <ProductsEnd>
            <div className="empty"></div>
            <div className="text">
              <span>{products.length} of {productsQuantity}</span> products
            </div>
            <Pagination />
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
