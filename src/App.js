import Header from "./componentes/header/Header";
import ProductList from "./componentes/productlist/ProductList";
import GlobalStyle from "./styles/GlobalStyles";
import Filter from "./componentes/filter/Filter";
import ShoppingCart from "./componentes/shoppingcart/ShoppingCart";
import { HomeStyled } from "./styles/styles";

function App() {
  return (
    <>
      <Header></Header>
      <Filter></Filter>
      <HomeStyled>
        <ProductList></ProductList>
        <ShoppingCart></ShoppingCart>
      </HomeStyled>

      <GlobalStyle />
    </>
  );
}

export default App;
