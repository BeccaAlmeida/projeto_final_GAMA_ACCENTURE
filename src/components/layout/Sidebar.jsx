import styled from "styled-components";

export default styled.div.attrs({
	className: "sidebar",
})`
	width: 100%;
	max-width: ${({ size }) => size};
	position: fixed;
	height: 100vh;
	background-color: #333131;
	color: white;
	display: flex;
	flex-direction: column;
`;
