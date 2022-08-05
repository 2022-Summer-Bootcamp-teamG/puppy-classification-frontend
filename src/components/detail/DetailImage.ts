import styled from 'styled-components';

const DetailImage = styled.img`
  width: 30rem;
  height: auto;
  display: flex;
  border-radius: 5%;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 18rem;
    height: 14rem;
  }
  @media all and (max-width: 767px) {
    width: 18rem;
    height: 14rem;
    margin-top: 2rem;
  }
`;

export { DetailImage };
