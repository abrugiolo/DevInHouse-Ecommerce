import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
} from "@material-ui/core";
import styled from "styled-components";

import { ButtonShop, PageWrapper } from "../../components";
import { MessageAlert } from "../../components";

import {
  getProductsListInCart,
  getTotalProductsListInCart,
} from "../../redux/selectors";
import {
  calculateTotalProductsListInCart,
  resetCart,
} from "../../redux/actions";

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
  padding: 20px;
`;

const CartEmpty = styled.p`
  display: flex;
  height: 446px;
  justify-content: center;
  align-items: center;
`

const ListStyled2 = styled(List)`
  width: 1128px;
`;

const BoxStyled = styled(Box)`
  margin-top: 32px;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Carrinho() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [alert, setAlert] = useState(false);
  const productListInCart = useSelector(getProductsListInCart);
  const totalCart = useSelector(getTotalProductsListInCart);
  dispatch(calculateTotalProductsListInCart());

  // const totalQuantity = productListInCart.reduce(
  //   (prevValue, eachProduct) =>
  //     prevValue + eachProduct.quantity * eachProduct.price,
  //   0
  // );

  const exibirAlerta = () => {
    setAlert(true);
    dispatch(resetCart());
    setTimeout(() => {
      history.push("/");
    }, 4500) 
    
  };

  return (
    <>
      <PageWrapper>
        <BoxStyled>
          <Typography variant="h2">Carrinho</Typography>
        </BoxStyled>

        <ListWrapper>
          <ListStyled2>
            <ListItem>
              <ItemName primary="" />
              <Item primary="Preço UN." />
              <Item primary="Quantidade" />
              <Item primary="Subtotal" />
            </ListItem>
          </ListStyled2>
          <ListStyled>
            {productListInCart.length > 0 ? (
              productListInCart?.map((product) => {
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
              })
            ) : (
              <CartEmpty>Sem produtos no carrinho...</CartEmpty>
            )}
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
                <ButtonStyled
                  color="primary"
                  variant="contained"
                  onClick={exibirAlerta}
                >
                  Finalizar Compra
                </ButtonStyled>
              </Item>
            </ListItem>
          </ListStyled2>
        </ListWrapper>
      </PageWrapper>

      <MessageAlert
        alert={alert}
        setAlert={setAlert}
        message="A compra foi processada com sucesso. Obrigado!"
      />
    </>
  );
}
