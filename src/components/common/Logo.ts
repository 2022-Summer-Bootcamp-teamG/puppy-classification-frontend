import styled from 'styled-components';

const Logo = styled.img`
  display: flex;
  width: 8rem;
  margin-bottom: 1rem;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 7rem;
  }
  @media all and (max-width: 767px) {
    width: 2.6rem;
    margin: 0.8rem;
  }
`;

export { Logo };
