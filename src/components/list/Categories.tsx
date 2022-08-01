import React from 'react';
import styled from 'styled-components';

/**
 * Todo: category 상태 useState로 관리
 * Todo: Category 선택 시 색 유지
 */

// const categories = [
//   {
//     size: 0,
//     text: '전체',
//     url: '/puppies',
//   },
//   {
//     size: 1,
//     text: '소형견',
//     url: '/puppies?size=1',
//   },
//   {
//     size: 2,
//     text: '중형견',
//     url: '/puppies?size=2',
//   },
//   {
//     size: 3,
//     text: '대형견',
//     url: '/puppie?size=3',
//   },
//   {
//     size: 4,
//     text: '대형견',
//     url: '/puppies?size=4',
//   },
//   {
//     size: 5,
//     text: '대형견',
//     url: '/puppies?size=5',
//   },
// ];

const CategoryListBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  margin: 0rem auto;
  width: 50rem;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 50rem;
  }
  @media all and (max-width: 767px) {
    width: 100%;
    margin: 0;
    border: none;
    background: #dae8d9;
  }
`;

const Category = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: #5c5c5c;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    font-size: 1rem;
  }

  &:hover {
    color: green;
  }
  @media all and (max-width: 767px) {
  }
`;

const Categories = () => {
  return (
    <CategoryListBlock>
      {/* {categories.map(c => (
        <Category key={c.text} onClick={() => onSelect(c.text)}>
          {c.text}
        </Category>
      ))} */}
      <Category>전체</Category>
      <Category>소형견</Category>
      <Category>중형견</Category>
      <Category>대형견</Category>
    </CategoryListBlock>
  );
};

export default Categories;
