import styled from 'styled-components';

const Dropzone = styled.label<{ isUpload: boolean }>`
  position: absolute;
  ${props => (props.isUpload ? 'display:  none' : '')};
  width: 18.5rem;
  height: 14.7rem;
  right: -0.4rem;
  border: 2px dashed #aac5bf;
  border-radius: 2rem;
  @media all and (max-width: 767px) {
    width: 16.5rem;
    height: 14rem;
    right: 0.1rem;
  }
`;

export { Dropzone };
