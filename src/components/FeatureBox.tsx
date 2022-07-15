import React from 'react';
import styled from 'styled-components';

interface FeatureBoxProps {
	content: string;
}

function FeatureBox({ content }: FeatureBoxProps) {
	return (
		<Common>
			<Text>특징</Text>
			<Content>{content}</Content>
		</Common>
	);
}

const Common = styled.div`
	width: 70rem;
	height: 15rem;
	margin: 0rem;
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
	font-size: 1.2rem;
	margin: 2rem;
	font-family: Pretendard;
	align-items: center;
	justify-content: center;
	font-weight: 400;
	@media all and (max-width: 767px) {
		font-size: 1.1rem;
	}
`;

const Text = styled.div`
	font-size: 1.5rem;
	font-family: Pretendard;
	color: #3c4d39;
	font-weight: 1000;
	margin: 0.5rem;
	@media all and (min-width: 768px) and (max-width: 1023px) {
		font-size: 1.2rem;
	}
	@media all and (max-width: 767px) {
		font-size: 1.2rem;
	}
`;
export default FeatureBox;
