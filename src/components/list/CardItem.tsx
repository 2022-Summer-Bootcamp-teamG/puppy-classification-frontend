import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ItemImage } from './ItemImage';
import { Data } from './CardList';

interface CardProps {
  data: Data;
}

export const CardItem: React.FC<CardProps> = ({ data }) => {
  return (
    <Common>
      <Link to="/ detail/$`{data.id}`">
        <ItemImage src={data.img_url} alt={data.name} />
      </Link>
      <BreedName>{data.name}</BreedName>
    </Common>
  );
};

const Common = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px,
    rgba(17, 17, 26, 0.1) 0px 16px 48px;
`;

const BreedName = styled.div`
  margin: 1rem auto;
  font-size: 1.2rem;
  font-family: Pretendard;
  font-weight: 500;
  color: #002411;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    font-size: 1rem;
  }
  @media all and (max-width: 767px) {
    margin-top: 0.4rem;
    font-size: 1.2rem;
  }
`;

export default CardItem;
