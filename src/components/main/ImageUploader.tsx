import React, { useState } from 'react';
import styled from 'styled-components';
import footprintImage from '../../assets/images/footprint.svg';
import { Common } from '../common/Common';
import { LabelButton } from './LabelButton';
import { MainImage } from './MainImage';
import { FaTimes } from 'react-icons/fa';

/* 
    메인페이지 이미지 업로드 창
    이미지 미리보기, 업로드 버튼, 이미지 업로드 시 취소 버튼
*/

function ImageUploader() {
  const [fileImage, setFileImage] = useState('');
  const [isUpload, setIsUpload] = useState(false);
  const saveFileImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setFileImage(URL.createObjectURL(event.target.files[0]));
    setIsUpload(true);
  };
  const cancelUpload = () => {
    setFileImage('');
    setIsUpload(false);
  };
  return (
    <UploaderCommon>
      <div style={{ position: 'relative', marginTop: '1rem' }}>
        <BackgroundImage src={footprintImage} />
        <div style={{ position: 'absolute', top: '0', marginTop: '0.5rem' }}>
          {fileImage && <SelectImage alt="uploadImage" src={fileImage} />}
        </div>
        <Icon isUpload={isUpload} onClick={cancelUpload}>
          <FaTimes />
        </Icon>
      </div>
      <ButtonBox>
        <LabelButton htmlFor="image">파일 선택</LabelButton>
        <input
          id="image"
          name="image"
          type="file"
          accept=".gif, .jpg, ,jpeg, .png"
          onChange={saveFileImage}
          style={{ display: 'none' }}
        />
        <LabelButton htmlFor="image-search">검색</LabelButton>
        <input id="image-search" name="image-search" type="submit" style={{ display: 'none' }} />
      </ButtonBox>
    </UploaderCommon>
  );
}

const UploaderCommon = styled(Common)`
  align-items: center;
  width: 23rem;
  height: 20.5rem;
  margin-top: 3rem;
  background-color: #dae8d9;
  border-radius: 2.5rem;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.12);
  @media all and (max-width: 767px) {
    width: 20rem;
  }
`;

const BackgroundImage = styled(MainImage)`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

const SelectImage = styled(MainImage)`
  margin: auto;
`;

const ButtonBox = styled.div`
  display: flex;
`;

const Icon = styled.div<{ isUpload: boolean }>`
  display:  ${props => (props.isUpload ? 'block;' : 'none;')}
  position: absolute;
  top: 0;
  right: -0.5rem;
  color: white;
  width: 1.3rem;
  padding: 0.2rem;
  text-align: center;
  border-radius: 50%;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.3);
  background: #8c8c8c;
  cursor: pointer;
`;

export default ImageUploader;
