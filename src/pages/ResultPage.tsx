import React from 'react';
import { Title } from '../components/common/Title';
import styled from 'styled-components';
import Carousel from '../components/Carousel';
import Header from '../components/common/Header';
import { Common } from '../components/common/Common';

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
      <ResultCommon>
        <Title>결과</Title>
        <Carousel />
      </ResultCommon>
    </React.Fragment>
  );
}

const ResultCommon = styled(Common)`
  margin-top: 7em;
  @media all and (max-width: 767px) {
    margin-top: 4em;
  }
`;

export default ResultPage;
