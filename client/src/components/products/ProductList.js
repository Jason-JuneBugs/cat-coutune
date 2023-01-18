import Product from "./Product";
import styled from "styled-components";

const StyledProductList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  height: fit-content;
  height: auto;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 3px;

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const ProductList = ({ products, className }) => {
  return (
    <StyledProductList>
      {products.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          imageName={product.imageName}
          imageDescription={product.imageDescription}
          discountValue={product.discountValue}
          discountType={product.discountType}
        />
      ))}
    </StyledProductList>
  );
};

export default ProductList;
