import React from 'react';
import { Title } from '../components/common/Title';
import styled from 'styled-components';
import { DetailImage } from '../components/common/DetailImage';
import Header from '../components/common/Header';
import sample1 from '../assets/images/sample1.jpg';
import FeatureBox from '../components/FeatureBox';
import ChartBox from '../components/common/ChartBox';

/*
    결과 상세 페이지
    결과 특정 데이터 API 연동 
    (DB내 검색어 자동완성 기능) 예정
*/

// interface Props {
//     title: string
// }

function DetailPage() {
  return (
    <React.Fragment>
      <Header />
      <Common>
        <Title2>골든리트리버</Title2>
        <Box>
          <DetailImage src={sample1} />
          <ChartBox />
        </Box>
        <FeatureBox content="활발하고 거칠며, 외로움을 잘 타고 어리광을 부린다. 집단 생활에 익숙해져 있어 사교적이고 낯가리지 않는다. 비글의 수명은 15년 정도이고, 주요 질병은 허리디스크, 백내장, 망막 위축 등 눈 질환에 걸리기 쉬운 견종이다." />
      </Common>
    </React.Fragment>
  );
}

const Common = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    font-size: 0.9rem;
  }
  @media all and (max-width: 767px) {
    font-size: 0.9rem;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    align-items: center;
  }
  @media all and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Title2 = styled(Title)`
  @media all and (min-width: 768px) and (max-width: 1023px) {
    font-size: 1.5rem;
  }
  @media all and (max-width: 767px) {
    font-size: 1.5rem;
  }
`;

export default DetailPage;
