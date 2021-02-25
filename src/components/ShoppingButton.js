import { Button } from "@material-ui/core";
import styled from "styled-components";

const ButtonStyled = styled(Button)`
  height: 44px;
  width: 226px;
`;

function ShoppingButton() {
  return (
    <ButtonStyled color="primary" variant="contained">
      Comprar
    </ButtonStyled>
  );
}

export default ShoppingButton;
