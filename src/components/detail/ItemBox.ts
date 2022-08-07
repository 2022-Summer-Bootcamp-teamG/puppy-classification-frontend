import styled from 'styled-components';

const ItemBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    align-items: center;
  }
  @media all and (max-width: 767px) {
    flex-direction: column;
  }
`;

export default ItemBox;
