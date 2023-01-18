import styled from "styled-components";

const StyledErrorMessage = styled.div`
  padding: 0.5rem;
  color: #ffffff;
  background-color: #a60e0e;
`;

const ErrorMessage = ({ message }) => {
  return <StyledErrorMessage>Error: {message}</StyledErrorMessage>;
};

export default ErrorMessage;
