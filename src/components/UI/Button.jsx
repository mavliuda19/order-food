import styled from 'styled-components'

const Button = ({ children }) => {
	return <StyledButton>{children}</StyledButton>
}

export default Button

const StyledButton = styled.button`
	background: #8a2b06;
	border-radius: 20px;
	padding: 10px 32px;
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	color: #ffffff;
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	:hover {
		background: #7e2a0a;
	}
	:active {
		background: #993108;
	}
`
