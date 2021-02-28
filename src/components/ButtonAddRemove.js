import {
  Delete as DeleteIcon,
  Add as AddIcon,
  Remove as RemoveIcon,
} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import { Typography, Box } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  removeProductsListInCart,
  changeQuantityOfProductsListInCart,
} from "../redux/actions";
import { getProductQuantity } from "../redux/selectors";

const BoxStyled = styled(Box)`
  display: flex;
  align-items: center;
  height: 44px;
  width: 226px;
  justify-content: space-between;
`;

function ButtonAddRemove({ product }) {
  const quantity = useSelector(getProductQuantity(product.id));

  const dispatch = useDispatch();

  const buttonDeleteClicked = () => {
    dispatch(removeProductsListInCart(product?.id));
  };

  const buttonAddClicked = () => {
    dispatch(changeQuantityOfProductsListInCart(product?.id, "add"));
  };

  const buttonRemoveClicked = () => {
    dispatch(changeQuantityOfProductsListInCart(product?.id, "remove"));
  };

  return (
    <BoxStyled>
      {quantity === 1 ? (
        <IconButton aria-label="delete" onClick={buttonDeleteClicked}>
          <DeleteIcon />
        </IconButton>
      ) : (
        <IconButton aria-label="remove" onClick={buttonRemoveClicked}>
          <RemoveIcon />
        </IconButton>
      )}

      <Typography variant="h4">{quantity}</Typography>

      <IconButton onClick={buttonAddClicked} aria-label="add">
        <AddIcon />
      </IconButton>
    </BoxStyled>
  );
}

export default ButtonAddRemove;
