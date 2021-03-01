import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import styled from "styled-components";
import { InputSearch, CartButton } from "./";
import logo from "../assets/Shopee.png";
import { getProductsListInCart } from "../redux/selectors";
import { setInputSearch, setLoading } from "../redux/actions";

const ToolbarStyled = styled(Toolbar)`
  padding: 12px 64px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    padding: 6px 18px;
  }
`;

const Logo = styled.img`
  cursor: pointer;
  @media screen and (max-width: 850px) {
    height: 3vh;
  }
`;

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [search, setSearch] = useState("");
  const productList = useSelector(getProductsListInCart);

  const handleLogoClick = () => {
    if(window.location.pathname !== "/") {
      dispatch(setLoading(true));
    }
    setSearch("")
    history.push("/");
    dispatch(setInputSearch("", false));
  };

  return (
    <AppBar color="inherit">
      <ToolbarStyled>
        <Logo alt="logo" src={logo} onClick={handleLogoClick} />
        <InputSearch search={search} setSearch={setSearch}/>
        <CartButton size={productList?.length} setSearch={setSearch} />
      </ToolbarStyled>
    </AppBar>
  );
}

export default Header;
