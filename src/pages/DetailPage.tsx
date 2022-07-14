import React from 'react';
import { Title } from '../components/common/Title';
import styled from 'styled-components';
import { DetailImage } from '../components/common/DetailImage';

/*
    결과 상세 페이지
    결과 특정 데이터 API 연동 
    (DB내 검색어 자동완성 기능) 예정
*/

// interface Props {
//     title: string
// }

function DetailPage() {
	return (
		<Common>
			<Title>골든리트리버</Title>
			<DetailImage></DetailImage>
		</Common>
	);
}

const Common = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 7em;
	@media all and (max-width: 767px) {
		margin-top: 4em;
	}
`;

export default DetailPage;
