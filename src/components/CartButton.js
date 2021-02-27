import { useHistory } from "react-router-dom";
import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import styled from "styled-components";

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

function CartButton({ size }) {
  const history = useHistory();
  //   console.log(size);

  return (
    <>
      <IconButtonStyled
        color="primary"
        onClick={() => history.push("/carrinho")}
      >
        <BadgeStyled badgeContent={size} color="secondary">
          <ShoppingCart />
        </BadgeStyled>
      </IconButtonStyled>
    </>
  );
}

export default CartButton;
