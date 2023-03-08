import { Card, CardContainer, CTAButton } from '@/styles/components/productCard.style';
import React from 'react';
import coinWhite from '../../assets/icons/aerolabIcon-white-gradient.svg'
import coinGrey from '../../assets/icons/aerolabIcon-grey.svg'

interface Props {
  img: {
    url: string;
    hdUrl: string;
  };
  _id: string;
  name: string;
  cost: number;
  category: string;
  state: string;
}

const ProductCard: React.FC<Props> = ({
  img,
  _id,
  name,
  cost,
  category,
  state
}: Props) => {
  return (
    <CardContainer>
      <Card>
        <div className="product-image">
          <img src={img.url} alt={name} />
        </div>
        <div className="product-detail">
          <span className="product-name">{name}</span>
          <span className="product-category">{category}</span>
        </div>
      </Card>
      <CTAButton>
        {
            state === "default" ? (
                <button className='default'>Redeem for <span><img src={coinWhite} alt="Coin Icon" /></span> {cost}</button>
            ) : (
                state === "processing" ? (
                    <button className='processing'>Processing...</button>
                ) : (
                    <button className='disabled'>You need <span><img src={coinGrey} alt="Coin Icon" /></span> {cost}</button>
                )
            )
        }
      </CTAButton>
    </CardContainer>
  );
};

export default ProductCard;
