import React from 'react';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';

/* 견종 전체 보러가기 버튼 */

function PuppyButton() {
  return (
    <Button>
      <Text>견종 전체 보러가기</Text>
      <FaArrowRight style={faStyle} />
    </Button>
  );
}

const Button = styled.div`
  position: absolute;
  display: flex;
  right: 2rem;
  top: -2rem;
  width: 11rem;
  height: 2rem;
  border-radius: 15px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
  border: solid 1px rgba(86, 156, 77, 0.8);
  cursor: pointer;
  @media all and (max-width: 767px) {
    width: 9.5rem;
  }
`;

const Text = styled.div`
  font-family: Pretendard;
  font-weight: 500;
  color: #569c4d;
  line-height: 2rem;
  margin: 0 1rem;
  @media all and (max-width: 767px) {
    font-size: 0.9rem;
    margin: 0 0.7rem;
  }
`;

const faStyle = {
  marginTop: '0.5rem',
  lineHeight: '2rem',
  color: '#569c4d',
};

export default PuppyButton;
