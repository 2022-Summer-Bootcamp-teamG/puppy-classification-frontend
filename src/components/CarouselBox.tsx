import React from 'react';
import styled from 'styled-components';
import { Image } from './common/Image';

/* 
캐러샐 내부 개별 콘텐츠
   강아지 이름, 정확도, 이미지 포함
*/

interface CarouselBoxProps {
  breedName: string;
  img: string;
  percent: number;
}

function CarouselBox({ img, percent, breedName }: CarouselBoxProps) {
  return (
    <Common>
      <Image src={img} />
      <BreedName>{breedName}</BreedName>
      <Percent>정확도: {percent}%</Percent>
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
`;

const Percent = styled.div`
  margin-left: 0.3rem;
  font-size: 1rem;
  font-family: Pretendard;
  ont-weight: 500;
  color: #454545;
`;

export default CarouselBox;
