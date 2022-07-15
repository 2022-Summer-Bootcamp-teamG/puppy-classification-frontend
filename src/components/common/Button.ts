import styled from 'styled-components';

const Button = styled.button<{ isNone: boolean }>`
  background: none;
  border: none;
  @media all and (max-width: 767px) {
    ${({ isNone }) => {
      return isNone ? `display: none` : null;
    }}
`;

export { Button };
