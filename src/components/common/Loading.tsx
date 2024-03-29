import React from 'react';
import styled from 'styled-components';
import spinner from '../../assets/images/spinner.gif';
import Background from '../../assets/images/Background.png';

/* 로딩창 */

function Loading() {
  return (
    <Common>
      <Text>견종을 찾고있어요!</Text>
      <img src={spinner} width="10%" />
    </Common>
  );
}

const Common = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-image: url(${Background});
  background-position: center;
  background-rapeat: no-repeat;
  background-size: cover;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.div`
  font: 1.3rem Pretendard;
  font-weight: 500;
`;

export default Loading;
