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
interface Response {
  data: Data;
}
interface Data {
  id: number;
  size: number;
  name: string;
  feature: string;
  img_url: string;
  easyToTrain: number;
  highEnergy: number;
  intelligence: number;
  kidFriendly: number;
  lowBarking: number;
}

function DetailPage() {
  let { id } = useParams();
  const [data, setData] = useState<Data>();
  const getData = async () => {
    let res = await customAxios.get<Response>(`/puppies/${id}`);
    let { data } = res.data;
    console.log(res.data.data.intelligence);
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <React.Fragment>
      <Header />
      <DetailCommon>
        <Title>{data?.name}</Title>
        <ItemBox>
          <DetailImage src={data?.img_url} />
          <ChartBox
            easyToTrain={data?.easyToTrain}
            highEnergy={data?.highEnergy}
            intelligence={data?.intelligence}
            kidFriendly={data?.kidFriendly}
            lowBarking={data?.lowBarking}
          />
        </ItemBox>
        <FeatureBox content={data?.feature} />
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
