import { FooterContainer } from '@/styles/components/footer.style';
import React from 'react';
import githubIcon from '../../assets/icons/GithubIcon.svg'
const Footer: React.FC = () => {
  return (
    <FooterContainer>
        <div>
            <img src={githubIcon} alt="Github Icon" />
            <a href='https://github.com/ortega-pablo/AerolabChallenge' target='_blank'>View this repository</a>
        </div>
    </FooterContainer>
  );
};

export default Footer;