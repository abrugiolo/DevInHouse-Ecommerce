import { Button } from "@material-ui/core";
import styled from "styled-components";

const ButtonStyled = styled(Button)`
  height: 44px;
  width: 226px;
`;
// Caso o produto não esteja no carrinho, deve ser exibido o botão "Comprar"
//  Ao clicar em comprar, o produto é adicionado ao carrinho em quantidade 1.
//  SE quantidade=1 botão esquerdo deve ser uma lixeira, e a direita o "+", contendo ao centro,
// um número (somente leitura) com a quantidade atual
//  SE quantidade > 1, o botão de esquerdo será de subtração "-".
//  A quantidade NUNCA poderá ser negativa.
function ShoppingButton() {
  const quantity = 0;
  //  if qtdd 0 === botãComprar
  //  else comprar vira +(função add igual do simples) e
  //  decrescimo(botão lixeira se === 1, botão "-" se > 1) se qtdade retorna a 0, volta botão simples

  return (
    <ButtonStyled color="primary" variant="contained">
      Comprar
    </ButtonStyled>
  );
}

export default ShoppingButton;
