import React from 'react';
import styled from 'styled-components';


//  이후 차트와 연결
interface ChartBoxProps {}

function ChartBox() {
	return <Common>
		<Text>역량</Text>
	</Common>;
}

const Common = styled.div`
	width: 30rem;
	height: 25rem;
	margin: 4rem;
	border-radius: 50px;
	box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
	background-color: #dae8d9;
	
	@media all and (min-width: 768px) and (max-width: 1023px) {
		width: 22rem;
		height: 18rem;
		margin: 2.5em;
		align-items: center;
	}
	@media all and (max-width: 767px) {
		width: 20rem;
		height: 15rem;
		align-items: center;
	}
`;

const Text = styled.div`
	font-size: 1.5rem;
	font-family: Pretendard;
	color:#49a33a;
	font-weight:1000;
	margin: 1.5rem;

	@media all and (min-width: 768px) and (max-width: 1023px) {
		font-size: 1.2rem;
	}
	@media all and (max-width: 767px) {
		font-size: 1.2rem;
	}
`;


export default ChartBox;
