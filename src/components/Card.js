import { useHistory } from "react-router-dom";
import { useState } from "react";
import {
  Typography,
  Box,
  Card as CardWrapper,
  CardContent,
} from "@material-ui/core";
import styled from "styled-components";
import { installmentsPayment } from "../utils/constsUtils";
import ButtonShop from "./ButtonShop";

const BoxWrapper = styled(CardWrapper)`
  width: 258px;
  height: 448px;
`;

const CardImageContent = styled(Box)`
  text-align: center;
`;
const CardImg = styled.img`
  width: 226px;
  height: 226px;
  padding-top: 16px;
`;
const CardContentStyled = styled(CardContent)`
  display: flex;
  flex-direction: column;
`;

function Card({ product }) {
  const history = useHistory();

  const [clicked, setClicked] = useState(false)

  return (
    <BoxWrapper key={product.id}>
      <CardImageContent>
        <CardImg
          src={product.image}
          alt="imagem"
          onClick={() => history.push("/detalhes")}
        />
      </CardImageContent>
      <CardContentStyled>
        <Box mb={2}>
          <Typography variant="h4" onClick={() => history.push("/detalhes")}>
            {product.name}
          </Typography>
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
        <ButtonShop clicked={clicked} setClicked={setClicked} />
      </CardContentStyled>
    </BoxWrapper>
  );
}

export default Card;
