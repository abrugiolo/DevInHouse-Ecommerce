import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";
import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import styled from "styled-components";

import { setInputSearch, setLoading } from "../redux/actions";

const IconButtonStyled = styled(IconButton)`
  border-radius: 50%;
  background-color: #ebd7ff;
`;

const BadgeStyled = styled(Badge)`
  .MuiBadge-anchorOriginTopRightRectangle {
    top: -2px;
    right: -2px;
  }
`;

function CartButton({ size, setSearch }) {
  const history = useHistory();
  const dispatch = useDispatch()

  const handleCartClick = () => {
    history.push("/carrinho")
    dispatch(setInputSearch("", false));
    dispatch(setLoading(true));
    setSearch("")
  }

  return (
    <>
      <IconButtonStyled
        color="primary"
        onClick={handleCartClick}
      >
        <BadgeStyled badgeContent={size} color="secondary">
          <ShoppingCart />
        </BadgeStyled>
      </IconButtonStyled>
    </>
  );
}

export default CartButton;
