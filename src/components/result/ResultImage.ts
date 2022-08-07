import styled from 'styled-components';

const Image = styled.img`
  width: 19rem;
  height: 12.5rem;
  flex-grow: 0;
  margin-bottom: 0.5rem;
  border-radius: 12px;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 13rem;
    height: 9rem;
  }
  @media all and (max-width: 767px) {
    width: 16rem;
    height: 11rem;
    margin-bottom: 0.3rem;
  }
`;

export { Image };
