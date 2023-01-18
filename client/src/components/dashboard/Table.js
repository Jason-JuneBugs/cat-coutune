import styled from "styled-components";

const StyledTable = styled.div`
  width: auto;
  overflow: scroll;
  & > table {
    color: #333333;
    background: #ffffff;
    border: 1px solid grey;
    border-collapse: collapse;
    width: 100%;
  }
`;
const Table = ({ children, className }) => {
  return (
    <StyledTable className={className}>
      <table>{children}</table>
    </StyledTable>
  );
};

export default Table;
