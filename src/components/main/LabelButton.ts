import styled from 'styled-components';

const LabelButton = styled.label`
  width: 8rem;
  height: 2.3rem;
  border-radius: 50px;
  margin: 0 1rem;
  text-align: center;
  line-height: 2.3rem;
  font-family: Pretendard;
  font-size: 1.1rem;
  font-weight: 400;
  color: white;
  background-color: #75b96a;
  cursor: pointer;
  @media all and (max-width: 767px) {
    width: 7rem;
    height: 2rem;
    margin: 0 0.5rem;
    line-height: 2rem;
    font-size: 1rem;
  }
`;

export { LabelButton };
