import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { customAxios } from '../common/CustomAxios';
import { Title } from '../common/Title';
import CardItem from '../list/CardItem';
import { Pagination } from '../list/Pagination';

/* 검색 결과 카드 리스트 */
interface Response {
  data: Search[];
  meta: Meta;
}

interface Search {
  id: number;
  img_url: string;
  name: string;
}

export interface Meta {
  has_next: boolean;
  has_prev: boolean;
  next_page: number;
  page: number;
  pages: number;
  prev_page: number;
  total_count: number;
}

function SearchCardList({ keyword }: { keyword: string }) {
  const [data, setData] = useState<Search[]>();
  const [zero, setZero] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const handlePages = (updatePage: number) => setPage(updatePage);
  const getData = async () => {
    setZero(false);
    let res = await customAxios.get<Response>(`/search?kw=${keyword}&page=${page}`);
    setData(res.data.data);
    setTotalPages(res.data.meta.pages);
    if (res.data.data.length === 0) {
      setZero(true);
    }
  };
  useEffect(() => {
    getData();
  }, [keyword, page]);
  return (
    <React.Fragment>
      <SearchTitle>{keyword}: 검색 결과</SearchTitle>
      {zero ? <Zero>해당하는 견종을 찾을 수 없습니다.</Zero> : null}
      <Common>{data && data.map(data => <CardItem key={data.id} data={data} />)}</Common>
      {zero ? null : (
        <Pagination page={page} totalPages={totalPages} handlePagination={handlePages} />
      )}
    </React.Fragment>
  );
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
    width: 20rem;
  }
`;

const SearchTitle = styled(Title)`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  margin: 4rem;
  font-weight: 450;
  color: #176f08;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    font-size: 1.7rem;
  }
  @media all and (max-width: 767px) {
    font-size: 1.7rem;
  }
`;

const Zero = styled.div`
  display: flex;
  justify-content: center;
  font-family: Pretendard;
`;

export default SearchCardList;
