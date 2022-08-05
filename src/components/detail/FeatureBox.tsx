import React from 'react';
import styled from 'styled-components';

interface FeatureBoxProps {
  content: string;
}

function FeatureBox({ content }: FeatureBoxProps) {
  return (
    <Common>
      <Text>특징</Text>
      <Content>{content}</Content>
    </Common>
  );
}

const Common = styled.div`
  width: 70rem;
  height: 17rem;
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 10px;
  align-items: center;
  border-radius: 50px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background-color: #f1f1f1;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 45rem;
    height: 20rem;
  }
  @media all and (max-width: 767px) {
    width: 20rem;
    height: 27rem;
  }
`;

const Content = styled.div`
  font-size: 1.3rem;
  margin: 2rem;
  font-family: Pretendard;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  white-space: pre-wrap;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    margin: 1.5rem;
    font-size: 1.2rem;
  }
  @media all and (max-width: 767px) {
    font-size: 1.1rem;
    margin: 1.34rem;
  }
`;

const Text = styled.div`
  font-size: 1.5rem;
  font-family: Pretendard;
  color: #3c4d39;
  font-weight: 1000;
  margin: 0.5rem;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    font-size: 1.2rem;
  }
  @media all and (max-width: 767px) {
    margin: ;
    font-size: 1.1rem;
  }
`;
export default FeatureBox;
