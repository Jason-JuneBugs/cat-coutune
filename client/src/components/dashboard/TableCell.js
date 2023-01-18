import styled from "styled-components";

const StyledTableCell = styled.td`
  padding: 0.5em;
  border: 1px solid lightgrey;
`;
const TableCell = ({ children, className }) => {
  return <StyledTableCell className={className}>{children}</StyledTableCell>;
};

export default TableCell;
