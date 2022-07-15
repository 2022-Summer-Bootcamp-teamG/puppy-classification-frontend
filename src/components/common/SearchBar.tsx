import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { Mobile } from './MediaQuery';
import { SearchContainer, CheckBox, SearchBox } from './SearchBarStyle';

/* 
    검색창
    isTransition값이 true이면 모바일 화면일 때 돋보기 클릭 시 검색창 펼쳐짐
    flase이면 항상 돋보기가 펼쳐진 상태
*/
interface SearchBarProps {
  isTransition: boolean;
}

function SearchBar({ isTransition }: SearchBarProps) {
  if (isTransition) {
    return (
      <SearchContainer>
        <Mobile>
          <CheckBox id="check" type="checkbox" />
        </Mobile>
        <SearchBox>
          <Input type="text" placeholder="견종 이름으로 검색하기" isTransition={true} />
          <Label htmlFor="check" isTransition={true}>
            <FaSearch />
          </Label>
        </SearchBox>
      </SearchContainer>
    );
  } else {
    return (
      <SearchContainer>
        <SearchBox>
          <Input type="text" placeholder="견종 이름으로 검색하기" isTransition={false} />
          <Label isTransition={false}>
            <FaSearch />
          </Label>
        </SearchBox>
      </SearchContainer>
    );
  }
}

const Input = styled.input<SearchBarProps>`
  width: ${props => (props.isTransition ? '17.638rem' : '34rem')};
  height: ${props => (props.isTransition ? '1rem' : '1.8rem')};
  border-radius: 2rem;
  border: none;
  padding: 0.5rem 0.8rem;
  &:focus {
    outline: none;
  }
  @media all and (max-width: 767px) {
    width: ${props => (props.isTransition ? '0.1rem' : '18rem')};
    height: ${props => (props.isTransition ? '1rem' : '1.5rem')};
    transition: ${props => (props.isTransition ? 'all 0.3s ease' : 'no')};
  }
`;

const Label = styled.label<SearchBarProps>`
  position: absolute;
  width: ${props => (props.isTransition ? '2.1rem' : '3.5rem')};
  height: ${props => (props.isTransition ? '2.1rem' : '2.9rem')};
  right: -3px;
  bottom: -0.6px;
  color: #585858;
  background: #dae8d9;
  border-radius: 0 2rem 2rem 0;
  font-size: ${props => (props.isTransition ? '0.9rem' : '1.2rem')};
  text-align: center;
  line-height: ${props => (props.isTransition ? '38px' : '50px')};
  cursor: pointer;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    height: ${props => (props.isTransition ? '2.2rem;' : '3rem')};
    bottom: -1px;
  }
  @media all and (max-width: 767px) {
    font-size: 1rem;
    border-radius: ${props => (props.isTransition ? '2rem' : 'border-radius: 0 2rem 2rem 0;')};
    height: ${props => (props.isTransition ? '2.1rem;' : '2.7rem')};
    bottom: -1px;
    background: ${props => (props.isTransition ? 'white' : '#dae8d9')};
    line-height: ${props => (props.isTransition ? '38px' : '45px')};
  }
`;

export default SearchBar;
