import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/images/earthLogo.svg';
import { Common } from '../components/common/Common';
import SearchBar from '../components/common/SearchBar';
import ImageUploader from '../components/main/ImageUploader';
import PuppyButton from '../components/main/PuppyButton';

/* 
  메인 페이지 
  이미지 검색과 키워드 검색
*/

function MainPage() {
  return (
    <MainCommon>
      <Link to="/list">
        <PuppyButton />
      </Link>
      <MainLogo src={logo} />
      <SearchBar isTransition={false} />
      <ImageUploader />
    </MainCommon>
  );
}

const MainCommon = styled(Common)`
  position: relative;
  margin-top: 3.5rem;
  @media all and (max-width: 767px) {
    margin-top: 3rem;
  }
`;

const MainLogo = styled.img`
  width: 5rem;
  height: 11rem;
  margin-bottom: 2rem;
`;

export default MainPage;
