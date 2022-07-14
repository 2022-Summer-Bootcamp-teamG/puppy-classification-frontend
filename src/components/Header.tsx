import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import defaultLogo from '../../assets/images/textLogo.svg';
import mobileLogo from '../../assets/images/mobileLogo.svg';
import SearchBar from './common/SearchBar';
import { Default, Mobile } from './common/MediaQuery';

/* 
    결과페이지와 결과상세페이지 상단 헤더
    로고, 검색창
*/

function Header() {
  return (
    <Common>
      <Link to="/">
        <Default>
          <Logo src={defaultLogo} alt="TextLogo" />
        </Default>
        <Mobile>
          <Logo src={mobileLogo} alt="MobileLogo" />
        </Mobile>
      </Link>
      <SearchBarContainer>
        <SearchBar />
      </SearchBarContainer>
    </Common>
  );
}

const Common = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.5rem auto;
  width: 70rem;
  border-bottom: 0.25rem solid #49a33a;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 50rem;
  }
  @media all and (max-width: 767px) {
    width: 100%;
    margin: 0;
    border: none;
    background: #dae8d9;
  }
`;

const Logo = styled.img`
  display: flex;
  width: 8rem;
  margin-bottom: 1rem;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 7rem;
  }
  @media all and (max-width: 767px) {
    width: 2.6rem;
    margin: 0.8rem;
  }
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: end;
  margin-bottom: 1rem;
  @media all and (max-width: 767px) {
    align-items: center;
    margin: 0 1rem 0 0;
  }
`;

export default Header;
