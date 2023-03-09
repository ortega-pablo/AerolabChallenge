import {
  Card,
  CardContainer,
  CTAButton
} from '@/styles/components/productCard.style';
import React, { useState } from 'react';
import coinWhite from '../../assets/icons/aerolabIcon-white-gradient.svg';
import coinGrey from '../../assets/icons/aerolabIcon-grey.svg';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { RootState } from '@/store/store';
import { userAddProduct } from '@/store/slices/user.slice';
import {
  postAddPoints,
  postRedeem,
  responsePostAddPoints,
  responsePostRedeem,
  UserApi
} from '@/types/types';

interface Props {
  img: {
    url: string;
    hdUrl: string;
  };
  _id: string;
  name: string;
  cost: number;
  category: string;
}

const ProductCard: React.FC<Props> = ({
  img,
  _id,
  name,
  cost,
  category
}: Props) => {
  const userPoints = useAppSelector(
    (state: RootState) => state.user.user.points
  );
  const dispatch = useAppDispatch();

  const [stateButton, setStateButton] = useState<'default' | 'processing'>(
    'default'
  );

  const handleAddProduct = (_id: string) => {
    setStateButton('processing');
    dispatch(
      userAddProduct({
        productId: _id
      })
    ).then(() => setStateButton('default'));
  };

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
        {stateButton === 'default' ? (
          <button className="default" onClick={() => handleAddProduct(_id)}>
            Redeem for{' '}
            <span>
              <img src={coinWhite} alt="Coin Icon" />
            </span>{' '}
            {cost}
          </button>
        ) : stateButton === 'processing' ? (
          <button className="processing">Processing...</button>
        ) : (
          <button className="disabled">
            You need{' '}
            <span>
              <img src={coinGrey} alt="Coin Icon" />
            </span>{' '}
            {cost}
          </button>
        )}
      </CTAButton>
    </CardContainer>
  );
};

export default ProductCard;

/* {
  userPoints === "default" ? (
      <button className='default'>Redeem for <span><img src={coinWhite} alt="Coin Icon" /></span> {cost}</button>
  ) : (
      state === "processing" ? (
          <button className='processing'>Processing...</button>
      ) : (
          <button className='disabled'>You need <span><img src={coinGrey} alt="Coin Icon" /></span> {cost}</button>
      )
  )
} */
