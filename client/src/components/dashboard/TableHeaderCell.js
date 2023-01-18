import styled from "styled-components";

const StyledTableHeaderCell = styled.th`
  padding: 0.5em;
  border: 1px solid lightgrey;
  color: #000000;
  background: rgba(0, 0, 0, 0.1);
`;
const TableHeaderCell = ({ children, className }) => {
  return (
    <StyledTableHeaderCell className={className}>
      {children}
    </StyledTableHeaderCell>
  );
};

export default TableHeaderCell;
