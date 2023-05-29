import {
  CartContainer,
  CardProductCart,
  RemoveButton,
  FinishPurchaseButton,
} from "./ShoppingCartStyles";

function ShoppingCart(props) {
  function total() {
    let soma = 0;
    for (let indice = 0; indice < props.carrinho.length; indice++) {
      if (props.carrinho[indice]) {
        soma += props.carrinho[indice].preco;
      }
    }
    return soma;
  }
  return (
    <CartContainer>
      <p>Carrinho</p>
      {props.carrinho.length > 0
        ? props.carrinho.map((itemCarrinho) => (
            <CardProductCart>
              <p>1x</p>
              <p>{itemCarrinho.nome}</p>
              <p>R${itemCarrinho.preco}</p>
              <RemoveButton
                onClick={() => props.removeCartItem(itemCarrinho.id)}
              >
                Remover
              </RemoveButton>
            </CardProductCart>
          ))
        : "Carrinho vazio :( "}
      <div>
        <p>Valor total: R${total()},00</p>
        {props.carrinho.length > 0 ? (
          <FinishPurchaseButton>Finalizar compra</FinishPurchaseButton>
        ) : null}
      </div>
    </CartContainer>
  );
}

export default ShoppingCart;
