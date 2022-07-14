import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { Mobile } from './MediaQuery';

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

const Input = styled.input<SearchBarProps>`
  width: 17.638rem;
  border-radius: 2rem;
  border: none;
  padding: 0.5rem 0.8rem;
  &:focus {
    outline: none;
  }
  @media all and (max-width: 767px) {
    width: ${props => (props.isTransition ? '0.1rem' : '20rem')};
    transition: ${props => (props.isTransition ? 'all 0.3s ease' : 'no')};
  }
`;

const Label = styled.label<SearchBarProps>`
  position: absolute;
  width: 2.1rem;
  height: 2.1rem;
  right: -3px;
  bottom: -0.6px;
  color: #585858;
  background: #dae8d9;
  border-radius: 0 2rem 2rem 0;
  font-size: 0.9rem;
  text-align: center;
  line-height: 38px;
  cursor: pointer;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    height: 2.2rem;
    bottom: -1px;
  }
  @media all and (max-width: 767px) {
    font-size: 1rem;
    border-radius: ${props => (props.isTransition ? '2rem' : 'border-radius: 0 2rem 2rem 0;')};
    height: 2.1rem;
    bottom: 0px;
    background: white;
  }
`;

export default SearchBar;
