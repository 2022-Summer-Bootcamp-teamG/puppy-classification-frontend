import React from 'react';
import styled from 'styled-components';

/**
 * Todo : db에 견종 분류(large, medium, small) 추가
 * Todo: category 상태 useState로 관리 /
 *
 */

const Categories = () => {
  return (
    <CategoryListBlock>
      {categories.map(c => (
        <Category key={c.name}>{c.text}</Category>
      ))}
    </CategoryListBlock>
  );
};

const categories = [
  {
    name: 'all',
    text: '전체',
  },
  {
    name: 'large',
    text: '대형견',
  },
  {
    name: 'medium',
    text: '중형견',
  },
  {
    name: 'small',
    text: '소형견',
  },
];

const CategoryListBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  margin: 0rem auto;
  width: 50rem;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 20rem;
  }
  @media all and (max-width: 767px) {
    width: 100%;
    margin: 0;
    border: none;
    background: #dae8d9;
  }
`;

const Category = styled.div`
  font-size: 1.3rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: #5c5c5c;

  &:hover {
    color: green;
  }
`;

export default Categories;
