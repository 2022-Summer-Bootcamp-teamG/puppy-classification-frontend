import styled from 'styled-components';

const DetailImage = styled.img`
	width: 30rem;
	height: 20rem;
	margin-top: 3rem;
	display: flex;
	border-radius: 5%;
	@media all and (min-width: 768px) and (max-width: 1023px) {
		margin-left: 4rem;
		width: 17rem;
		height: 13rem;
		align-items: center;
		justify-content: center;
	}
	@media all and (max-width: 767px) {
    width: 20rem;
    height: 13rem;
		justify-content: center;
		align-items: center;
	}
`;

export { DetailImage };
