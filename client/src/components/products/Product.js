import styled from "styled-components";
import DiscountBadge from "./DiscountBadge";

const StyledProduct = styled.li`
  height: 100%;
  .card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: gray;
    border-radius: 15px;
    padding: 1rem;
    max-width: 325px;
    height: 100%;
  }

  .product-image {
    width: 100%;
  }

  @media screen and (min-width: 800px) {
    display: grid;
    justify-content: center;
    .card {
      max-width: 390px;
    }
  }
  @media screen and (min-width: 1280px) {
    .card {
      max-width: 400px;
    }
  }
`;

const StyledDiscountBadge = styled(DiscountBadge)`
  font-size: 1.5rem;
  color: orange;
`;

const StyledButton = styled.button`
  background-color: black;
  color: white;
  border-radius: 15px;
`;

const Product = ({
  name,
  description,
  price,
  imageName,
  imageDescription,
  discountType,
  discountValue,
}) => {
  return (
    <StyledProduct>
      <div className="card">
        <div>
          {imageName ? (
            <img
              src={`./img/${imageName}`}
              alt={imageDescription}
              className="product-image"
            />
          ) : (
            <img
              src="./img/cat-photo-default.jpg"
              alt="Default product cat"
              className="product-image"
            />
          )}
          {/* {discountValue && discountType && (
            <StyledDiscountBadge
              discountValue={discountValue}
              discountType={discountType}
            />
          )} */}
        </div>
        <h3>{name}</h3>
        <p>Price {price}</p>
        {discountValue && discountType && (
          <StyledDiscountBadge
            discountValue={discountValue}
            discountType={discountType}
          />
        )}
        <p data-testid="product-description">{description}</p>
        <StyledButton>Add to Cart</StyledButton>
      </div>
    </StyledProduct>
  );
};

export default Product;
