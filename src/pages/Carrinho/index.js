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

import { ButtonShop, PageWrapper, MessageAlert, Price } from "../../components";

import {
  getProductsListInCart,
  getTotalProductsListInCart,
} from "../../redux/selectors";
import {
  calculateTotalProductsListInCart,
  resetCart,
  addProductDetail,
} from "../../redux/actions";

const ItemName = styled(ListItemText)`
  width: 40%;
  cursor: pointer;
`;

const Item = styled(ListItemText)`
  display: flex;
  justify-content: center;
  width: 20%;
  margin: 0 5px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 20%;
  @media screen and (max-width: 800px) {
    width: 30%;
    margin: 0 5px;
  }
`;

const ButtonStyled = styled(Button)`
  height: 44px;
  width: 226px;
  text-transform: none;
  @media screen and (max-width: 800px) {
    width: 180px;
  }
`;

const ListStyled = styled(List)`
  width: 1128px;
  min-height: 446px;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.13);
  border-radius: 7px;
  padding: 20px;
  @media screen and (max-width: 1200px) {
    width: 800px;
  }
  @media screen and (max-width: 800px) {
    width: 500px;
  }

  @media screen and (max-width: 450px) {
    width: 350px;
    padding: 5px;
  }
`;

const CartEmpty = styled.p`
  display: flex;
  height: 446px;
  justify-content: center;
  align-items: center;
`;

const ListStyled2 = styled(List)`
  width: 1128px;
  @media screen and (max-width: 1200px) {
    width: 800px;
    .itemName {
      width: 10%;
    }
    .item1, .item2, .item3 {
      width: 30%;
    }
  }
  @media screen and (max-width: 800px) {
    width: 500px;
    .itemName {
      width: 0;
    }
    .item1 {
      width: 10%;
    }
    .item2, .item3 {
      width: 40%;
    }
  }
  @media screen and (max-width: 450px) {
    width: 350px;
    .itemName, .item1 {
      width: 0;
    }
    .item2, .item3 {
      width: 50%;
    }
  }
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

const Total = styled.div`
  display: flex;
  align-items: baseline;
  span {
    font-size: 24px;
    font-style: normal;
    font-weight: normal;
    line-height: 24px;
    color: #000000;
  }
`;

export default function Carrinho() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [alert, setAlert] = useState(false);
  const productListInCart = useSelector(getProductsListInCart);
  const totalCart = useSelector(getTotalProductsListInCart);
  dispatch(calculateTotalProductsListInCart());

  const endShop = () => {
    setAlert(true);
    dispatch(resetCart());
    setTimeout(() => {
      history.push("/");
    }, 4500);
  };

  const clickedToDetails = (product) => {
    dispatch(addProductDetail(product));
    history.push("/detalhes");
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
              <Item>
                <Typography variant="body1">Preço UN.</Typography>
              </Item>
              <Item>
                <Typography variant="body1">Quantidade</Typography>
              </Item>
              <Item>
                <Typography variant="body1">Subtotal</Typography>
              </Item>
            </ListItem>
          </ListStyled2>
          <ListStyled>
            {productListInCart.length > 0 ? (
              productListInCart?.map((product) => {
                const total = product.price * product.quantity;
                return (
                  <ListItem key={product.id}>
                    <ItemName>
                      <Typography
                        variant="h5"
                        onClick={() => clickedToDetails(product)}
                      >
                        {product.name}
                      </Typography>
                    </ItemName>

                    <Item>
                      <Price value={product.price} />
                    </Item>
                    <ButtonsWrapper>
                      <ButtonShop product={product} />
                    </ButtonsWrapper>
                    <Item>
                      <Price value={total} />
                    </Item>
                  </ListItem>
                );
              })
            ) : (
              <CartEmpty>Sem produtos no carrinho...</CartEmpty>
            )}
          </ListStyled>
          {productListInCart.length > 0 && (
            <ListStyled2>
              <ListItem>
                <ItemName className="itemName" primary="" />
                <Item className="item1" primary="" />
                <Item className="item2">
                  <Total>
                    <Typography variant="h2">
                      <span>R$ </span>
                      {totalCart?.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                        currency: "BRL",
                      })}
                    </Typography>
                  </Total>
                </Item>
                <Item className="item3">
                  <ButtonStyled
                    color="primary"
                    variant="contained"
                    onClick={endShop}
                  >
                    Finalizar Compra
                  </ButtonStyled>
                </Item>
              </ListItem>
            </ListStyled2>
          )}
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
