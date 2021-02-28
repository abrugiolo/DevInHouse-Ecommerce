import { useHistory } from "react-router-dom";
import {
  Typography,
  Box,
  Card as CardWrapper,
  CardContent,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";

import { addProductDetail } from "../redux/actions";
import { installmentsPayment } from "../utils/constsUtils";

import ButtonShop from "./ButtonShop";

const BoxWrapper = styled(CardWrapper)`
  width: 258px;
  height: 448px;
  margin: 0 32px 32px 0;
  ${(props) =>
    props.detail &&
    css`
      width: 1128px;
      height: 260px;
      display: flex;
      align-items: center;
      margin: 0;
      margin-top: 64px;
    `}
`;

const CardImageContent = styled(Box)`
  text-align: center;
  ${(props) =>
    props.detail &&
    css`
      text-align: left;
    `}
`;

const CardImg = styled.img`
  width: 226px;
  height: 226px;
  padding-top: 16px;
  cursor: pointer;
  ${(props) =>
    props.detail &&
    css`
      width: 226px;
      height: 226px;
      padding: 32px;
    `}
`;
const CardContentStyled = styled(CardContent)`
  display: flex;
  flex-direction: column;
`;

const TypographyStyled = styled(Typography)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  cursor: pointer;
`;

function Card({ product, detail }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const clickedToDetails = () => {
    dispatch(addProductDetail(product));
    history.push("/detalhes");
  };

  return (
    <BoxWrapper key={product.id} detail={detail}>
      <CardImageContent detail={detail}>
        <CardImg
          detail={detail}
          src={product.image}
          alt="imagem"
          onClick={clickedToDetails}
        />
      </CardImageContent>
      <CardContentStyled>
        <Box mb={2}>
          {detail ? (
            <Typography variant="h4">{product.description}</Typography>
          ) : (
            <TypographyStyled
              //noWrap
              variant="h4"
              onClick={clickedToDetails}
            >
              {product.name}
            </TypographyStyled>
          )}
        </Box>
        <Typography variant="h3" gutterBottom>
          {product.price.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            //style: "currency",
            currency: "BRL",
          })}
        </Typography>
        <Typography variant="body1">
          ou {installmentsPayment}x de{" "}
          {(product.price / installmentsPayment).toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            //style: "currency",
            currency: "BRL",
          })}
        </Typography>
        <Box mb={2}></Box>
        <ButtonShop product={product} />
      </CardContentStyled>
    </BoxWrapper>
  );
}

export default Card;
