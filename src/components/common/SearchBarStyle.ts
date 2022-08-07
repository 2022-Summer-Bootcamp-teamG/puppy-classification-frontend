import styled from 'styled-components';

const SearchContainer = styled.div`
  margin-right: 0.5rem;
`;

const CheckBox = styled.input`
  display: none;
  &:checked ~ div {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
  }
  &:checked ~ div > input {
    width: 14rem;
  }
  &:checked ~ div > label {
    border-radius: 0 2rem 2rem 0;
    background: #dae8d9;
  }
`;

const SearchBox = styled.div`
  position: relative;
  border: solid 2px #dae8d9;
  border-radius: 2rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
  @media all and (max-width: 767px) {
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);
  }
`;

export { SearchBox, SearchContainer, CheckBox };
