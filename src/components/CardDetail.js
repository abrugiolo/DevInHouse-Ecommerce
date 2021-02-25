import { useHistory } from "react-router-dom";
import {
  Typography,
  Box,
  Card as CardWrapper,
  CardContent,
} from "@material-ui/core";
import styled from "styled-components";
import ShoppingButton from "./ShoppingButton";
import { installmentsPayment } from "../utils/constsUtils";

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

function CardDetail({ product }) {
  const history = useHistory();

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
            {product.description}
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
        <ShoppingButton />
      </CardContentStyled>
    </BoxWrapper>
  );
}

export default CardDetail;
