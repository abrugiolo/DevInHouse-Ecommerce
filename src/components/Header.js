import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import styled from "styled-components";
import { InputSearch, CartButton } from "./";
import logo from "../assets/Shopee.png";
import { getProductsListInCart } from "../redux/selectors";
import { setInputSearch } from "../redux/actions";

const ToolbarStyled = styled(Toolbar)`
  padding: 12px 64px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    padding: 6px 18px;
  }
`;

const Logo = styled.img`
  @media screen and (max-width: 800px) {
    height: 3vh;
  }
`;

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const productList = useSelector(getProductsListInCart);

  const handleLogoClick = () => {
    dispatch(setInputSearch("", false));
    history.push("/");
  };

  return (
    <AppBar color="inherit">
      <ToolbarStyled>
        <Logo alt="logo" src={logo} onClick={handleLogoClick} />
        <InputSearch />
        <CartButton size={productList?.length} />
      </ToolbarStyled>
    </AppBar>
  );
}

export default Header;
