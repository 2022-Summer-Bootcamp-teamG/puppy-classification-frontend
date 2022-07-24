import React from 'react';
import styled from 'styled-components';
import CardItem from './CardItem';
import sample1 from '../../assets/images/sample1.jpg';
/**
 * Todo: axios, useEffect, useState
 * Todo: map
 */
const CardList = () => {
  return (
    <Common>
      <CardItem img={sample1} breedName="웰시코기" />
      <CardItem img={sample1} breedName="웰시코기" />
      <CardItem img={sample1} breedName="웰시코기" />
      <CardItem img={sample1} breedName="웰시코기" />
      <CardItem img={sample1} breedName="웰시코기" />
      <CardItem img={sample1} breedName="웰시코기" />
      <CardItem img={sample1} breedName="웰시코기" />
      <CardItem img={sample1} breedName="웰시코기" />
      <CardItem img={sample1} breedName="웰시코기" />
      <CardItem img={sample1} breedName="웰시코기" />
      <CardItem img={sample1} breedName="웰시코기" />
      <CardItem img={sample1} breedName="웰시코기" />
      <CardItem img={sample1} breedName="웰시코기" />
      <CardItem img={sample1} breedName="웰시코기" />
      <CardItem img={sample1} breedName="웰시코기" />
      <CardItem img={sample1} breedName="웰시코기" />
      <CardItem img={sample1} breedName="웰시코기" />
    </Common>
  );
};

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
    width: 35rem;
  }
`;
export default CardList;
