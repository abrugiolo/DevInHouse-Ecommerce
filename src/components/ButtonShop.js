import { Button } from "@material-ui/core";

import styled from "styled-components";
import ButtonAddRemove from "./ButtonAddRemove";

const ButtonStyled = styled(Button)`
  height: 44px;
  width: 226px;
`;

function ButtonShop({clicked, setClicked}) {

  
  return clicked ? <ButtonAddRemove setClicked={setClicked} /> :
    <ButtonStyled color="primary" variant="contained" onClick={() => setClicked(true)}>
      Comprar
    </ButtonStyled>
}

export default ButtonShop;
