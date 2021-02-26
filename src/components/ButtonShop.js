import { Button } from "@material-ui/core";
import styled from "styled-components";
import ButtonAddRemove from "./ButtonAddRemove";
import { addProductsListInCart } from "../redux/actions";
import { useDispatch } from "react-redux";


const ButtonStyled = styled(Button)`
  height: 44px;
  width: 226px;
`;

function ButtonShop({clicked, setClicked, product}) {
    const dispatch = useDispatch()

    const buttonShopClicked = () => {
      setClicked(true)
      dispatch(addProductsListInCart(product))
    }
  
  return clicked ? <ButtonAddRemove setClicked={setClicked} /> :
    <ButtonStyled color="primary" variant="contained" onClick={buttonShopClicked}>
      Comprar
    </ButtonStyled>
}

export default ButtonShop;
