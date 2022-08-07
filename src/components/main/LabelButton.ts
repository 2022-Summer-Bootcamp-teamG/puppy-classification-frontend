import styled from 'styled-components';

const LabelButton = styled.label`
  width: 8rem;
  height: 2rem;
  border-radius: 50px;
  margin-top: 0.5rem;
  text-align: center;
  line-height: 2rem;
  font-family: Pretendard;
  font-size: 1.1rem;
  font-weight: 400;
  color: white;
  background-color: #75b96a;
  cursor: pointer;
  @media all and (max-width: 767px) {
    width: 7rem;
    height: 2rem;
    line-height: 2rem;
    font-size: 1rem;
    margin-top: 1rem;
  }
`;

export { LabelButton };
