import styled from 'styled-components';

const ItemImage = styled.img`
  width: 14rem;
  height: 10.5em;
  display: flex;
  margin: 1rem;
  border-radius: 5%;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 14rem;
    height: 9rem;
  }
  @media all and (max-width: 767px) {
    width: 19rem;
    height: 13rem;
    margin: 1.2rem;
    margin-bottom: 0.6rem;
  }
`;

export { ItemImage };
