import styled from "styled-components";

const StyledDiscountDiv = styled.div`
  padding: 0.5rem;
  
`;

const DiscountBadge = ({ discountType, discountValue, className }) => {
  return (
    <StyledDiscountDiv className={className} data-testid="badge">
      {discountType === "percentage off" && <>{discountValue} % off</>}
      {discountType === "fixed amount off" && <>$ {discountValue} off</>}
    </StyledDiscountDiv>
  );
};

export default DiscountBadge;
