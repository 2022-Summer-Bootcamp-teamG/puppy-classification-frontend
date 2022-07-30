import React from 'react';
import { Radar } from 'react-chartjs-2';
import styled from 'styled-components';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

/*  
  그래프 박스
  이후 차트와 연결
*/

interface ChartBoxProps {
  easyToTrain: number;
  highEnergy: number;
  intelligence: number;
  kidFriendly: number;
  lowBarking: number;
}

function ChartBox({
  easyToTrain,
  highEnergy,
  intelligence,
  kidFriendly,
  lowBarking,
}: ChartBoxProps) {
  const data = {
    labels: ['아이 친화력', '지능', '에너지', '훈련 난이도', '짖는 정도'],
    datasets: [
      {
        label: '# of Votes',
        data: [
          `${kidFriendly}`,
          `${intelligence}`,
          `${highEnergy}`,
          `${easyToTrain}`,
          `${lowBarking}`,
        ],
        backgroundColor: 'rgba(73, 163, 58, 0.2)',
        borderColor: '#49a33a',
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 5,
        ticks: {
          stepSize: 1,
          beginAtZero: true,
          showLabelBackdrop: false,
        },
        grid: {
          color: 'rgb(63,63,63,0.2)',
        },
      },
    },
  };
  return (
    <Common>
      <Text>역량</Text>
      <Container>
        <Radar data={data} options={options} />
      </Container>
    </Common>
  );
}

const Common = styled.div`
  width: 30rem;
  height: 27rem;
  margin: 4rem;
  border-radius: 50px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background-color: #dae8d9;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 22rem;
    height: 22rem;
    margin: 2.5em;
  }
  @media all and (max-width: 767px) {
    margin: 2.5rem 0;
    width: 20rem;
    height: 21rem;
  }
`;

const Text = styled.div`
  font-size: 1.5rem;
  font-family: Pretendard;
  color: #49a33a;
  font-weight: 1000;
  margin: 1.5rem 1.5rem 0 1.5rem;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    font-size: 1.2rem;
  }
  @media all and (max-width: 767px) {
    font-size: 1.1rem;
  }
`;

const Container = styled.div`
  width: 23rem;
  margin-left: 3rem;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 19rem;
    margin-left: 1rem;
  }
  @media all and (max-width: 767px) {
    width: 18rem;
    margin-left: 0.6rem;
  }
`;
export default ChartBox;
