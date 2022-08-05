import styled from 'styled-components';

const DetailImage = styled.img`
  width: 30rem;
  height: auto;
  display: flex;
  border-radius: 5%;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 17rem;
    height: 13rem;
  }
  @media all and (max-width: 767px) {
    width: 20rem;
    height: 15rem;
    margin-top: 2rem;
  }
`;

export { DetailImage };
