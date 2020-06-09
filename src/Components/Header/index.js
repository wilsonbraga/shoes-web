import React from 'react';
import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './estyles';
import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container >
      <Link to="/">
        <img src={logo} alt="shoes web" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>3 itens</span>
        </div>
        <MdShoppingBasket size="36" color="#FFF" />

      </Cart>
    </Container>
  );
}
