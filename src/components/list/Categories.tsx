import React from 'react';
import styled, { css } from 'styled-components';
/**
 * Todo: category 상태 useState로 관리
 * Todo: Category 선택 시 색 유지
 */

interface CategoriesProps {
  active: boolean;
}

const categories = [
  {
    size: null,
    text: '전체',
  },
  {
    size: 1,
    text: '소형견',
  },
  {
    size: 2,
    text: '중형견',
  },
  {
    size: 3,
    text: '대형견',
  },
];

const Categories = ({ onSelect, size }: any) => {
  return (
    <CategoryListBlock>
      {categories.map(c => (
        <Category key={c.text} active={size === c.size} onClick={() => onSelect(c.size)}>
          {c.text}
        </Category>
      ))}
    </CategoryListBlock>
  );
};

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
    margin-top: 1rem;
    border: none;
    background: #ffffff;
  }
`;

const Category = styled.div<CategoriesProps>`
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
  ${props =>
    props.active &&
    css`
      font-weight: 600;
      border-bottom: 2px solid green;
      color: green;
      &:hover {
        color: green;
      }
    `}
  @media all and (max-width: 767px) {
  }
`;

export default Categories;
