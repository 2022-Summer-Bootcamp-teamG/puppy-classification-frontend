import React, { useEffect, useState } from 'react';
import { customAxios } from '../common/CustomAxios';
import { CardItem } from './CardItem';
import styled from 'styled-components';

interface Response {
  data: Data[];
}
export interface Data {
  id: number;
  size: number;
  name: string;
  img_url: string;
}

function CardList() {
  const [data, setData] = useState<Data[]>();

  const getData = async () => {
    let res = await customAxios.get<Response>(`/puppies`);
    let { data } = res.data;
    console.log(data);
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return <Common>{data && data.map(data => <CardItem key={data.id} data={data} />)}</Common>;
}
const Common = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70rem;
  gap: 3rem 1.3rem;
  flex-grow: 0;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  padding-bottom: 3rem;
  margin: 3rem auto;
  flex-direction: row;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 45rem;
    gap: 2rem 1rem;
  }
  @media all and (max-width: 767px) {
    width: 35rem;
  }
`;
export default CardList;
