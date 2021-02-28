import { Button } from "@material-ui/core";
import styled from "styled-components";
import ButtonAddRemove from "./ButtonAddRemove";
import { addProductsListInCart } from "../redux/actions";
import { getProductQuantity } from "../redux/selectors";
import { useDispatch, useSelector } from "react-redux";

const ButtonStyled = styled(Button)`
  height: 44px;
  width: 226px;
  text-transform: none;
`;

function ButtonShop({ product }) {
  const dispatch = useDispatch();

  const quantity = useSelector(getProductQuantity(product?.id));

  const buttonShopClicked = () => {
    dispatch(addProductsListInCart(product));
  };

  return quantity >= 1 ? (
    <ButtonAddRemove product={product} />
  ) : (
    <ButtonStyled
      color="primary"
      variant="contained"
      onClick={buttonShopClicked}
    >
      Comprar
    </ButtonStyled>
  );
}

export default ButtonShop;
