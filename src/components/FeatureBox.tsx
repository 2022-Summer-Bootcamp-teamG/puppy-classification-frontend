import React from 'react';
import styled from 'styled-components';

interface FeatureBoxProps {
	content: string;
}

function FeatureBox({ content }: FeatureBoxProps) {
	return (
		<Common>
			<Content>{content}</Content>
		</Common>
	);
}

const Common = styled.div`
	display: flex;
	width: 70rem;
	height: 15rem;
	margin: 2rem;
	padding: 1rem;
	border-radius: 10px;
	align-items: center;
	box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
	background-color: #f1f1f1;

	@media all and (min-width: 768px) and (max-width: 1023px) {
		width: 45rem;
		height: 12rem;
		margin: 0;
		align-items: center;

	}
	@media all and (max-width: 767px) {
		width: 20rem;
		height: 15rem;
		margin-top: 0rem;
		align-items: center;
	}
`;

const Content = styled.div`
	font-size: 1rem;
	font-family: Pretendard;
`;

export default FeatureBox;
