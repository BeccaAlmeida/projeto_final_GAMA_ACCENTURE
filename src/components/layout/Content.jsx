import styled from "styled-components";

export default styled.div.attrs({
	className: "content",
})`
	width: 100%;
	margin-left: ${({ size }) => size};
`;
