import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ItemImage } from './ItemImage';

interface CardProps {
  id: number;
  img_url: string;
  name: string;
}

export const CardItem = ({ data }: { data: CardProps }) => {
  return (
    <Common>
      <Link to={`/detail/${data.id}`}>
        <ItemImage src={data.img_url} alt={data.name} />
      </Link>
      <BreedName>{data.name}</BreedName>
    </Common>
  );
};

const Common = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5%;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px,
    rgba(17, 17, 26, 0.1) 0px 16px 48px;
`;

const BreedName = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 1rem;
  font-size: 1.1rem;
  font-family: Pretendard;
  font-weight: 500;
  color: #002411;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    font-size: 1rem;
  }
  @media all and (max-width: 767px) {
    margin-top: 0.4rem;
    font-size: 1.1rem;
  }
`;

export default CardItem;
