import styled from 'styled-components';

const Title = styled.div`
  font-size: 2.5rem;
  font-family: Pretendard;
  font-weight: 700;
  color: #585858;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    font-size: 2.5rem;
  }
  @media all and (max-width: 767px) {
    font-size: 1.6rem;
  }
`;

export { Title };
