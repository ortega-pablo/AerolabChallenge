import {
  BottomCard,
  CardContainer,
  CardParagraph,
  IconWrapper,
  IllustrationIMG,
  Title,
  TitleAndIcon,
  TopCard
} from '@/styles/components/WalkthroughCard.style';
import React from 'react';

interface Props {
  imgUrl: string;
  imgAlt: string;
  iconUrl: string;
  iconAlt: string;
  title: string;
  resume: string;
}

const WalkthroughCard: React.FC<Props> = ({
  imgUrl,
  imgAlt,
  iconUrl,
  iconAlt,
  title,
  resume
}: Props) => {
  return (
    <CardContainer>
      <TopCard>
        <IllustrationIMG>
          <img src={imgUrl} alt={imgAlt} />
        </IllustrationIMG>
      </TopCard>
      <BottomCard>
        <TitleAndIcon>
          <IconWrapper>
          <img src={iconUrl} alt={iconAlt} />
          </IconWrapper>
          <Title>
          {title}
          </Title>
        </TitleAndIcon>
        <CardParagraph>
            <p>{resume}</p>
        </CardParagraph>
      </BottomCard>
    </CardContainer>
  );
};
export default WalkthroughCard;
