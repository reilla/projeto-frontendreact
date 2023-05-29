import { CardsContainer, Image, BuyButton } from "./CardsStyles";

function Cards(props) {
  return (
    <div>
      <CardsContainer>
        <Image src={props.image} />
        <p>{props.title}</p>
        <p>R${props.price}</p>
        <BuyButton
          onClick={() =>
            props.addCart({
              nome: props.title,
              preco: props.price,
              id: props.id,
            })
          }
        >
          Adicionar ao carrinho
        </BuyButton>
      </CardsContainer>
    </div>
  );
}

export default Cards;
