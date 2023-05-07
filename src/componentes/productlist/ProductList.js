import Cards from "../cards/Cards";
import { ProductListContainer } from "./ProductListStyles";

function ProductList() {
  return (
    <ProductListContainer>
      <h1>Lista de Produtos</h1>
      <Cards></Cards>
    </ProductListContainer>
  );
}

export default ProductList;
