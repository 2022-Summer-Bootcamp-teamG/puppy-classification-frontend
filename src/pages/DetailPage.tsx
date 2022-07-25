import React, { useEffect, useState } from 'react';
import { Title } from '../components/common/Title';
import styled from 'styled-components';
import { DetailImage } from '../components/detail/DetailImage';
import Header from '../components/common/Header';
import sample1 from '../assets/images/sample1.jpg';
import FeatureBox from '../components/detail/FeatureBox';
import ChartBox from '../components/detail/ChartBox';
import ItemBox from '../components/detail/ItemBox';
import { Common } from '../components/common/Common';
import { useParams } from 'react-router-dom';
import { customAxios } from '../components/common/CustomAxios';

/*
    결과 상세 페이지
    결과 특정 데이터 API 연동 
    (DB내 검색어 자동완성 기능) 예정
    견종 크기 추가 필요
*/

// interface DetailPageProps {
//   breedId: number;
// }

function DetailPage() {
  let { id } = useParams();
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const { data } = await customAxios.get(`/puppies/${id}`);
    } catch (error) {
      console.log(error);
    }
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <React.Fragment>
      <Header />
      <DetailCommon>
        <Title>{data}</Title>
        <ItemBox>
          <DetailImage src={sample1} />
          <ChartBox />
        </ItemBox>
        <FeatureBox content="ㄴㅇㄹㄴㅇㄹ" />
      </DetailCommon>
    </React.Fragment>
  );
}

const DetailCommon = styled(Common)`
  margin-top: 3rem;
  margin-bottom: 2rem;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    font-size: 0.9rem;
  }
`;

export default DetailPage;
