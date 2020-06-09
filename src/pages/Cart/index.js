import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { Container, ProductTable, Total } from './estyles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="https://images.lojanike.com.br/320x320/produto/217943_1996808_20200303171118.jpg" alt="produto"/>
            </td>
            <td>
              <strong>Tênis Nike Revolution 5 Masculino</strong>
              <span>R$180,00</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#1919FF"/>
                </button> 
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#1919FF"/>
                </button>
              </div>  
            </td>
            <td>
              <strong>R$360,00</strong>
            </td>
             <td>
               <button type="button">
                 <MdDelete size={20} color="#1919FF" />
               </button>
             </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$180,23</strong>
        </Total>
      </footer>
    </Container>
  );
}

