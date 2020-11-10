import styled, { keyframes } from "styled-components";
import React from "react";

const rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

const Spinner = styled.div`
	animation: ${rotate360} 1s linear infinite;
	transform: translateZ(0);

	border-top: 4px solid #efefef;
	border-right: 4px solid #efefef;
	border-bottom: 4px solid #efefef;
	border-left: 4px solid #906cda;
	background: transparent;
	width: 48px;
	height: 48px;
	border-radius: 50%;
`;

const LoadingWrapper = styled.div`
	width: 100%;
	height: 75vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export function Loading() {
	return (
		<LoadingWrapper>
			<Spinner />
		</LoadingWrapper>
	);
}
