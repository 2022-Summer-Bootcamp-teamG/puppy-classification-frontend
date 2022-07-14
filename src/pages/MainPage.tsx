import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/earthLogo.svg';
import SearchBar from '../components/common/SearchBar';
import ImageUploader from '../components/ImageUploader';

/* 
  메인 페이지 
  이미지 검색과 키워드 검색
*/

function MainPage() {
  return (
    <Common>
      <Logo src={logo} />
      <SearchBar isTransition={false} />
      <ImageUploader />
    </Common>
  );
}

const Common = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.5rem;
  @media all and (max-width: 767px) {
    margin-top: 3rem;
  }
`;

const Logo = styled.img`
  width: 5rem;
  height: 11rem;
  margin-bottom: 2rem;
`;

export default MainPage;
