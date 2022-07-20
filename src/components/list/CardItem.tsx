import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Image } from '../result/ResultImage';

interface CardItemProps {
  img: string;
  breedName: string;
}

function CardItem({ img, breedName }: CardItemProps) {
  return (
    <Common>
      <Link to="/detail/:id">
        <Image src={img} alt={breedName} />
      </Link>
      <BreedName>{breedName}</BreedName>
    </Common>
  );
}

const Common = styled.div`
  display: flex;
  flex-direction: column;
`;

const BreedName = styled.div`
  margin-left: 0.3rem;
  font-size: 1.75rem;
  font-family: Pretendard;
  font-weight: 700;
  color: #000;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    font-size: 1.5rem;
  }
  @media all and (max-width: 767px) {
    font-size: 1.3rem;
  }
`;

export default CardItem;
