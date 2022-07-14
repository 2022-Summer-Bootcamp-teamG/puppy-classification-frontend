import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/earthLogo.svg';
import SearchBar from '../components/common/SearchBar';

/* 
  메인 페이지 
  이미지 검색과 키워드 검색
*/

function MainPage() {
  return (
    <Common>
      <Logo src={logo} />
      <SearchBar isTransition={false} />
    </Common>
  );
}

const Common = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4em;
  @media all and (max-width: 767px) {
    margin-top: 3em;
  }
`;

const Logo = styled.img`
  width: 6rem;
  margin-bottom: 4rem;
`;

export default MainPage;
