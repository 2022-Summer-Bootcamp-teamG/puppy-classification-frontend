import styled from 'styled-components';

const ItemImage = styled.img`
  width: 14rem;
  display: flex;

  margin: 1rem;
  border-radius: 5%;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 12rem;
  }
  @media all and (max-width: 767px) {
    width: 23rem;
  }
`;

export { ItemImage };
