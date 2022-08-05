import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/images/earthLogo.svg';
import { Common } from '../components/common/Common';
import SearchBar from '../components/common/SearchBar';
import ImageUploader from '../components/main/ImageUploader';
import PuppyButton from '../components/main/PuppyButton';
import Background from '../assets/images/Background.png';

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
  height: 100vh;
  background-image: url(${Background});
  background-position: center;
  background-rapeat: no-repeat;
  background-size: cover;
  @media all and (max-width: 767px) {
    margin-top: 3rem;
    background-image: none;
  }
`;

const MainLogo = styled.img`
  width: 8rem;
  height: auto;
  margin: 2rem 0;
`;

export default MainPage;
