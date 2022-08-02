import React from 'react';
import Header from '../components/common/Header';
import SearchCardList from '../components/search/SearchCardList';
import { useLocation } from 'react-router-dom';

/* 검색 결과 페이지 */

function SearchPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const keyword = params.get('kw');
  return (
    <React.Fragment>
      <Header />
      <SearchCardList keyword={keyword} />
    </React.Fragment>
  );
}

export default SearchPage;
