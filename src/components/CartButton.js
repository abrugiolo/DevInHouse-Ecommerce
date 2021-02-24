import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import styled from "styled-components";

const IconButtonStyled = styled(IconButton)`
  background-color: #ebd7ff;
`;

const BadgeStyled = styled(Badge)`
  .MuiBadge-anchorOriginTopRightRectangle {
    top: -2px;
    right: -2px;
  }
`;

function CartButton({ size }) {
  //   console.log(size);
  return (
    <>
      <IconButtonStyled color="primary">
        <BadgeStyled badgeContent={size} color="secondary">
          <ShoppingCart />
        </BadgeStyled>
      </IconButtonStyled>
    </>
  );
}

export default CartButton;
