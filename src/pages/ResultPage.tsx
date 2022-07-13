import React from 'react';
import { Title } from '../components/common/Title';
import styled from 'styled-components';
import Carousel from '../components/Carousel';
import Header from '../components/Header';

/* 
  결과 페이지
  결과 데이터 API 연동 & 이미지 캐러셀
*/

// interface ResultPageProps {

// };

function ResultPage() {
  return (
    <React.Fragment>
      <Header />
      <Common>
        <Title>결과</Title>
        <Carousel />
      </Common>
    </React.Fragment>
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

export default ResultPage;
