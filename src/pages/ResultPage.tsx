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
    customAxios
      .post<Props[]>('/predict', fileData)
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(err => {
        alert('문제가 발생했습니다. 다시 시도해주세요.');
        window.location.href = '/';
      });
  };
  useEffect(() => {
    getData();
  }, []);
  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <ResultCommon>
          <Title>결과</Title>
          <Carousel props={data} />
        </ResultCommon>
      </>
    );
  }
}

const ResultCommon = styled(Common)`
  margin-top: 7em;
  @media all and (max-width: 767px) {
    margin-top: 4em;
  }
`;

export default ResultPage;
