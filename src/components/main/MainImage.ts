import styled from 'styled-components';

const MainImage = styled.img`
  width: 17rem;
  height: 13rem;
  padding: 0.3rem 0.5rem;
  @media all and (max-width: 767px) {
    width: 14rem;
    height: 12rem;
    margin: 1rem;
  }
`;

export { MainImage };
