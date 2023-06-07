import styled from "styled-components";

export const HeaderRow = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  height: 100px;
  background-color: #e5e5ff;
  border-radius: 10px;
  border: 5px solid black;
`;

export const Logo = styled.img`
  width: 90px;
  object-fit: contain;
  margin-left: 0px;
  border-radius: 10px;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuItens = styled.p`
  margin: 40px;
`;

export const MenuButton = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 6px;
  margin-bottom: 10px;
  border: 2px solid #d9d5cc;
  background-color: #d9d5cc;
`;

export const NavbarIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Icons = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 30px;
`;
