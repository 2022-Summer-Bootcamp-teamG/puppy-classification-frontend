import React, { useState, useEffect } from 'react';
import { Title } from '../components/common/Title';
import styled from 'styled-components';
import Carousel from '../components/result/Carousel';
import Header from '../components/common/Header';
import { Common } from '../components/common/Common';
import Loading from '../components/common/Loading';
import { customAxios } from '../components/common/CustomAxios';
import { AxiosResponse } from 'axios';
import { useLocation } from 'react-router-dom';

/* 
  결과 페이지
  결과 데이터 API 연동 & 이미지 캐러셀
*/

type LocationState = {
  file: File;
};
interface Props {
  breed: string;
  breed_id: number;
  img: string;
  percent: number;
}

function ResultPage() {
  const location = useLocation();
  const [data, setData] = useState<Props[]>();
  const [file, setFile] = useState(location.state as LocationState);
  const [loading, setLoading] = useState(true);
  const getData = () => {
    setLoading(true);
    const fileData = new FormData();
    fileData.append('file', file.file);
    customAxios.post<Props[]>('/predict', fileData).then(res => {
      setData(res.data);
      setLoading(false);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <React.Fragment>
      {loading ? <Loading /> : null}
      <Header />
      <ResultCommon>
        <Title>결과</Title>
        <Carousel props={data} />
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
