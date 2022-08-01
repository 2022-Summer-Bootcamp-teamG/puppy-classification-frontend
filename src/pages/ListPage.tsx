import React, { useState, useCallback } from 'react';
import Header from '../components/common/Header';
import styled from 'styled-components';
import Categories from '../components/list/Categories';
import CardList from '../components/list/CardList';
import { Common } from '../components/common/Common';

function ListPage() {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category: string) => setCategory(category), []);

  return (
    <React.Fragment>
      <Header />
      <Categories category={category} onSelect={onSelect} />
      <ListCommon>
        <Title>견종에 대해 찾아보세요!</Title>
        <p>100여종이 넘는 반려견 품종의 고유한 특징을 그래프로 확인해 보세요.</p>
      </ListCommon>
      <CardList />
    </React.Fragment>
  );
}

const Title = styled.div`
  font-size: 2.5rem;
  font-family: Pretendard;
  font-weight: 450;
  color: #176f08;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    font-size: 1.7rem;
  }
  @media all and (max-width: 767px) {
    margin: 0;
    font-size: 1.7rem;
  }
`;

const ListCommon = styled(Common)`
  margin: 6rem;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    margin: 3.5rem;
  }
  @media all and (max-width: 767px) {
    margin: 4rem;
    font-size: 1.5rem;
  }
  p {
    margin-top: 1.5rem;
    color: #404b46;
    @media all and (min-width: 768px) and (max-width: 1023px) {
      margin-top: 1rem;
      font-size: 0.8rem;
    }
    @media all and (max-width: 767px) {
      font-size: 0.9rem;
    }
  }
`;
export default ListPage;
