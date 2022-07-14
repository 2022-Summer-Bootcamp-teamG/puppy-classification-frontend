import React, { useState } from 'react';
import styled from 'styled-components';
import footprintImage from '../assets/images/footprint.svg';

/* 
    메인페이지 이미지 업로드 창
    이미지 미리보기, 업로드 버튼
*/

const fileTypes = ['jpg', 'jpeg', 'png', 'gif'];

function ImageUploader() {
  const [fileImage, setFileImage] = useState('');
  const saveFileImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setFileImage(URL.createObjectURL(event.target.files[0]));
  };
  return (
    <Common>
      <div style={{ position: 'relative', marginTop: '0.5rem' }}>
        <BackgroundImage src={footprintImage} />
        <div style={{ position: 'absolute', top: '0' }}>
          {fileImage && (
            <SelectImage alt="uploadImage" src={fileImage} style={{ margin: 'auto' }} />
          )}
        </div>
      </div>
      <ButtonBox>
        <Label htmlFor="image">파일 선택</Label>
        <input
          id="image"
          name="image"
          type="file"
          accept=".gif, .jpg, ,jpeg, .png"
          onChange={saveFileImage}
          style={{ display: 'none' }}
        />
        <Label htmlFor="image-search">검색</Label>
        <input id="image-search" name="image-search" type="submit" style={{ display: 'none' }} />
      </ButtonBox>
    </Common>
  );
}

const Common = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 23rem;
  height: 20rem;
  margin-top: 3rem;
  background-color: #dae8d9;
  border-radius: 2.5rem;
  @media all and (max-width: 767px) {
    width: 20rem;
  }
`;

const BackgroundImage = styled.img`
  width: 18rem;
  height: 14rem;
  margin-bottom: 1rem;
  @media all and (max-width: 767px) {
    width: 15rem;
    height: 13rem;
  }
`;

const SelectImage = styled.img`
  width: 18rem;
  height: 14rem;
  @media all and (max-width: 767px) {
    width: 15rem;
    height: 13rem;
  }
`;

const Label = styled.label`
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

const ButtonBox = styled.div`
  display: flex;
`;

export default ImageUploader;
