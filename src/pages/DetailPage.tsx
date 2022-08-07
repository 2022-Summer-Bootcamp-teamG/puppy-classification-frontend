import React, { useEffect, useState } from 'react';
import { Title } from '../components/common/Title';
import styled from 'styled-components';
import { DetailImage } from '../components/detail/DetailImage';
import Header from '../components/common/Header';
import FeatureBox from '../components/detail/FeatureBox';
import ChartBox from '../components/detail/ChartBox';
import ItemBox from '../components/detail/ItemBox';
import { Common } from '../components/common/Common';
import { useParams } from 'react-router-dom';
import { customAxios } from '../components/common/CustomAxios';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const [data, setData] = useState<Data>();
  const getData = async () => {
    let res = await customAxios.get<Response>(`/puppies/${id}`);
    let { data } = res.data;
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <React.Fragment>
      <Header />
      <DetailCommon>
        <Button onClick={() => navigate(-1)}>
          <Text>뒤로 가기</Text>
        </Button>
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
  position: relative;
  margin-top: 3rem;
  margin-bottom: 2rem;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    font-size: 0.9rem;
  }
`;

const Button = styled.div`
  position: absolute;
  right: 18rem;
  top: -2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 2rem;
  border-radius: 15px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
  border: solid 1px rgba(86, 156, 77, 0.8);
  font-family: Pretendard;
  font-size: 1rem;
  cursor: pointer;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    right: 5rem;
  }
  @media all and (max-width: 767px) {
    right: 1rem;
    margin-bottom: 0.5rem;
  }
`;

const Text = styled.div`
  font-family: Pretendard;
  font-weight: 500;
  color: #569c4d;
  @media all and (max-width: 767px) {
    font-size: 0.9rem;
  }
`;

export default DetailPage;
