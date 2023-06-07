import {
  HeaderRow,
  Logo,
  Menu,
  MenuItens,
  Icons,
  NavbarIcons,
} from "./HeaderStyles";
import logoSrc from "../../imagens/logo.png";
import bell from "../../imagens/bell.png";
import cart from "../../imagens/cart.png";

function Header() {
  return (
    <HeaderRow>
      <Logo src={logoSrc} />
      <Menu>
        <MenuItens>Destinos</MenuItens>
        <MenuItens>Classes</MenuItens>
        <MenuItens>Pacotes</MenuItens>
        <MenuItens>Milhas</MenuItens>
        <MenuItens>Cruzeiro Via Láctea</MenuItens>
      </Menu>
      <NavbarIcons>
        <Icons src={bell} />
        <Icons src={cart} />
      </NavbarIcons>
    </HeaderRow>
  );
}
export default Header;
