import { FooterContainer } from '@/styles/components/footer.style';
import React from 'react';
import githubIcon from '../../assets/icons/GithubIcon.svg'
const Footer: React.FC = () => {
  return (
    <FooterContainer>
        <div>
            <img src={githubIcon} alt="Github Icon" />
            <span>View this repository</span>
        </div>
    </FooterContainer>
  );
};

export default Footer;