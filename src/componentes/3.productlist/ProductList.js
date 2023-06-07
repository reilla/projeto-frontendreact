import Cards from "./cards/Cards";
import { ProductListCards, ProductListContainer } from "./ProductListStyles";
import { ProductRow, ProductQuantity, ProductSort } from "./ProductListStyles";
// import { FilterProductList } from "../3.productlist/filter product list (ordenação)/FilterProductList";

function ProductList(props) {
  // console.log(props.produtos.map);
  return (
    <ProductListContainer>
      <ProductRow>
        <ProductQuantity>
          <p>Quantidade de produtos: {props.produtos.length}</p>
        </ProductQuantity>
        <ProductSort>
          <p>
            Ordenar por:{" "}
            <select
              onChange={(event) => props.sortProdutcList(event.target.value)}
            >
              <option value="reset">Selecionar</option>
              <option value="biggerPrice">Maior preço</option>
              <option value="smallerPrice">Menor preço</option>
            </select>
          </p>
        </ProductSort>
      </ProductRow>
      <ProductListCards>
        {props.produtos.map((produto) => (
          <Cards
            key={produto.id}
            id={produto.id}
            title={produto.name}
            price={produto.price}
            image={produto.image}
            addCart={props.addCart}
          ></Cards>
        ))}
      </ProductListCards>
    </ProductListContainer>
  );
}

export default ProductList;
