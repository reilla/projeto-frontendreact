import Header from "./componentes/1.header/Header";
import ProductList from "./componentes/3.productlist/ProductList";
import GlobalStyle from "./GlobalStyles/GlobalStyles";
import Filter from "./componentes/2.filter/Filter";
import ShoppingCart from "./componentes/4.shoppingcart/ShoppingCart";
import { HomeStyled, HomeContainer } from "./GlobalStyles/homeStyles";
import Footer from "./componentes/5.footer/Footer";
import database from "./database";
import { useState } from "react";

function App() {
  const [produtos, setProdutos] = useState(database);
  const [carrinho, setCarrinho] = useState([]);

  function addCart(item) {
    setCarrinho([...carrinho, item]);
    console.log(item);
  }

  function removeCartItem(id) {
    const filteredCart = carrinho.filter(
      (itemCarrinho) => itemCarrinho.id !== id
    );
    setCarrinho(filteredCart);
    console.log(id);
  }

  function sortProdutcList(sortType) {
    if (sortType === "biggerPrice") {
      const sortedProducts = produtos.toSorted((a, b) => b.price - a.price);
      setProdutos(sortedProducts);
    }

    if (sortType === "smallerPrice") {
      const sortedProducts = produtos.toSorted((a, b) => a.price - b.price);
      setProdutos(sortedProducts);
    }

    if (sortType === "reset") {
      setProdutos(database);
    }
  }

  function search(searchValue) {
    const searchProduts = database.filter((item) =>
      item.name.toLowerCase().match(searchValue.toLowerCase())
    );
    setProdutos(searchProduts);
  }

  function filters(valueMin, valueMax) {
    const filteredItems = database.filter((item) => {
      return item.price >= Number(valueMin) && item.price <= Number(valueMax);
    });
    setProdutos(filteredItems);
    console.log(valueMin, valueMax);
    console.log(filteredItems);
    console.log(database);
  }

  return (
    <>
      <Header></Header>
      <HomeStyled>
        <Filter search={search} filters={filters}></Filter>
        <HomeContainer>
          <ProductList
            produtos={produtos}
            addCart={addCart}
            sortProdutcList={sortProdutcList}
          />
          <ShoppingCart
            carrinho={carrinho}
            removeCartItem={removeCartItem}
          ></ShoppingCart>
        </HomeContainer>
      </HomeStyled>
      <Footer></Footer>

      <GlobalStyle />
    </>
  );
}

export default App;
