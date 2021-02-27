import { useHistory } from "react-router-dom";
import {
  Typography,
  Box,
  Card as CardWrapper,
  CardContent,
} from "@material-ui/core";
import styled, { css } from "styled-components";
import { installmentsPayment } from "../utils/constsUtils";
import ButtonShop from "./ButtonShop";

//mudar
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

//mudar
const CardImageContent = styled(Box)`
  text-align: center;
  ${(props) =>
    props.detail &&
    css`
      text-align: left;
    `}
`;

// mudar
const CardImg = styled.img`
  width: 226px;
  height: 226px;
  padding-top: 16px;
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

function Card({ product, detail }) {
  const history = useHistory();

  return (
    <BoxWrapper key={product.id} detail={detail}>
      <CardImageContent detail={detail}>
        <CardImg
          detail={detail}
          src={product.image}
          alt="imagem"
          onClick={() => !detail && history.push("/detalhes")}
        />
      </CardImageContent>
      <CardContentStyled>
        <Box mb={2}>
          {detail ? (
            <Typography variant="h4">{product.description}</Typography>
          ) : (
            <Typography
              noWrap
              variant="h4"
              onClick={() => history.push("/detalhes")}
            >
              {product.name}
            </Typography>
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
