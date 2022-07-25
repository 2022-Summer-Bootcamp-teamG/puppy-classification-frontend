import React, { useState, useCallback } from 'react';
import Header from '../components/common/Header';
import Categories from '../components/list/Categories';
import CardList from '../components/list/CardList';

function ListPage() {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category: string) => setCategory(category), []);

  return (
    <React.Fragment>
      <Header />
      <Categories category={category} onSelect={onSelect} />
      <CardList category={category} />
    </React.Fragment>
  );
}

export default ListPage;
