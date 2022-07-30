import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import footprintImage from '../../assets/images/footprint.svg';
import dragImage from '../../assets/images/dragNdrop.svg';
import { Common } from '../common/Common';
import { LabelButton } from './LabelButton';
import { MainImage } from './MainImage';
import { FaTimes } from 'react-icons/fa';
import { Dropzone } from './Dropzone';

/* 
    메인페이지 이미지 업로드 창
    이미지 미리보기, 업로드 버튼, 이미지 업로드 시 취소 버튼
*/

function ImageUploader() {
  const [fileImage, setFileImage] = useState('');
  const [isUpload, setIsUpload] = useState(false);
  const [isDrag, setIsDrag] = useState(false);
  const uploadBoxRef = useRef<any>(null);
  const saveFileImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setFileImage(URL.createObjectURL(event.target.files[0]));
    setIsUpload(true);
    setIsDrag(false);
  };
  const cancelUpload = () => {
    setFileImage('');
    setIsUpload(false);
    setIsDrag(false);
  };
  useEffect(() => {
    const changeHandler = (file: File) => {
      setFileImage(URL.createObjectURL(file));
      setIsUpload(true);
    };
    const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
      const files = event.dataTransfer.files[0];
      changeHandler(files);
    };
    const dragOverHandler = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
      setIsDrag(true);
    };
    const dragLeaveHandler = () => {
      setIsDrag(false);
    };
    uploadBoxRef.current.addEventListener('drop', dropHandler);
    uploadBoxRef.current.addEventListener('dragover', dragOverHandler);
    uploadBoxRef.current.addEventListener('dragleave', dragLeaveHandler);
    return () => {
      uploadBoxRef.current.removeEventListener('drop', dropHandler);
      uploadBoxRef.current.removeEventListener('dragover', dragOverHandler);
      uploadBoxRef.current.removeEventListener('dragleave', dragLeaveHandler);
    };
  }, []);
  return (
    <UploaderCommon>
      <div style={{ position: 'relative', marginTop: '1rem' }}>
        <BackgroundImage src={footprintImage} />
        <DragImage src={dragImage} />
        <div style={{ position: 'absolute', top: '0', marginTop: '0.5rem' }}>
          {fileImage && <SelectImage alt="uploadImage" src={fileImage} />}
        </div>
        <Icon isUpload={isUpload} onClick={cancelUpload}>
          <FaTimes />
        </Icon>
        <Dropzone isUpload={isUpload} isDrag={isDrag} htmlFor="image" ref={uploadBoxRef} />
      </div>
      <input
        id="image"
        name="image"
        type="file"
        accept=".gif, .jpg, ,jpeg, .png"
        onChange={saveFileImage}
        style={{ display: 'none' }}
      />
      <LabelButton htmlFor="image-search">검색</LabelButton>
      {/* 이미지 비었을 시 alert 추가 예정 */}
      <input id="image-search" name="image-search" type="submit" style={{ display: 'none' }} />
    </UploaderCommon>
  );
}

const UploaderCommon = styled(Common)`
  align-items: center;
  width: 23rem;
  height: 20rem;
  margin-top: 3rem;
  background-color: #dae8d9;
  border-radius: 2.5rem;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.12);
  @media all and (max-width: 767px) {
    width: 20rem;
    height: 19.5rem;
  }
`;

const DragImage = styled.img`
  width: 4rem;
  position: absolute;
  bottom: 3rem;
  left: 7rem;
  @media all and (max-width: 767px) {
    left: 6.5rem;
  }
`;

const BackgroundImage = styled(MainImage)`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

const SelectImage = styled(MainImage)`
  width: 17rem;
  height: 14rem;
  margin: auto;
  @media all and (max-width: 767px) {
    width: 16rem;
    height: 13rem;
  }
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
