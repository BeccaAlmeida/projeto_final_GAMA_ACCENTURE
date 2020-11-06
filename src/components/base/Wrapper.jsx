import styled from "styled-components";

export default styled.div.attrs({
	className: "wrapper",
})`
	transition: ${({ transition }) => transition};
	display: flex;
	position: relative;

	&.open {
		.sidebar {
			transition: ${({ transition }) => transition};
			transform: translateX(0);
		}

		.content {
			transition: ${({ transition }) => transition};
			margin-left: ${({ size }) => size};
			overflow-x: hidden;
		}
	}

	.menu {
		display: none;
	}

	@media only screen and (max-width: 600px) {
		.sidebar {
			transform: translateX(-${({ size }) => size});
			transition: ${({ transition }) => transition};
		}

		.content {
			margin-left: 0;
			transition: ${({ transition }) => transition};
		}

		.menu {
			display: flex;
		}
	}
`;
