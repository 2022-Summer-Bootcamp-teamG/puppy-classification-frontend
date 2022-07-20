import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Header from '../components/common/Header';
import Categories from '../components/list/Categories';
import CardList from '../components/list/CardList';

const ListPage = () => {
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback(category => setCategory(category), []);

  return (
    <React.Fragment>
      <Header />
      <Categories />
      <CardList />
      <CardList />
      <CardList />
      <CardList />
    </React.Fragment>
  );
};

export default ListPage;
