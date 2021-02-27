import { ButtonShop, PageWrapper } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
} from "@material-ui/core";
import styled from "styled-components";
import {
  getProductsListInCart,
  getTotalProductsListInCart,
} from "../../redux/selectors";
import { calculateTotalProductsListInCart } from "../../redux/actions";

const ItemName = styled(ListItemText)`
  width: 40%;
`;

const Item = styled(ListItemText)`
  display: flex;
  justify-content: center;
  width: 20%;
`;

const ButtonStyled = styled(Button)`
  height: 44px;
  width: 226px;
  text-transform: none;
`;

const ListStyled = styled(List)`
  width: 1128px;
  min-height: 446px;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.13);
  border-radius: 7px;
`;

const ListStyled2 = styled(List)`
  width: 1128px;
`;

const BoxStyled = styled(Box)`
  margin-top: 32px;
`;

export default function Carrinho() {
  const dispatch = useDispatch();
  const productListInCart = useSelector(getProductsListInCart);
  console.log(productListInCart);
  const totalCart = useSelector(getTotalProductsListInCart);
  dispatch(calculateTotalProductsListInCart());
  console.log(totalCart);
  // const totalQuantity = productListInCart.reduce(
  //   (prevValue, eachProduct) =>
  //     prevValue + eachProduct.quantity * eachProduct.price,
  //   0
  // );

  return (
    <PageWrapper>
      <BoxStyled>
        <Typography variant="h2">Carrinho</Typography>
      </BoxStyled>
      <ListStyled2>
        <ListItem>
          <ItemName primary="" />
          <Item primary="Preço UN." />
          <Item primary="Quantidade" />
          <Item primary="Subtotal" />
        </ListItem>
      </ListStyled2>
      <ListStyled>
        {productListInCart?.map((product) => {
          const total = product.price * product.quantity;
          return (
            <ListItem>
              <ItemName primary={product.name} />

              <Item primary={product.price} />

              <Item>
                <ButtonShop product={product} />
              </Item>

              <Item primary={total} />
            </ListItem>
          );
        })}
      </ListStyled>
      <ListStyled2>
        <ListItem>
          <ItemName primary="" />
          <Item primary="" />
          <Item
            primary={totalCart?.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}
          />
          <Item>
            <ButtonStyled color="primary" variant="contained">
              Finalizar Compra
            </ButtonStyled>
          </Item>
        </ListItem>
      </ListStyled2>
    </PageWrapper>
  );
}
