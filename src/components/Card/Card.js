import {
  Typography,
  Box,
  Card as CardWrapper,
  CardContent,
} from "@material-ui/core";
import "./Card.css";
import image1 from "../../assets/image1.png";
import { useHistory } from "react-router-dom";
import ShoppingButton from "../ShoppingButton";

function Card() {
  const history = useHistory();
  const preco = 249;

  return (
    <Box className="Card">
      <CardWrapper>
        <Box className="Card-img-content">
          <img
            className="Card-img"
            src={image1}
            alt="imagem"
            onClick={() => history.push("/detalhes")}
          ></img>
        </Box>
        <CardContent className="Card-content">
          <Box mb={2}>
            <Typography variant="h4" onClick={() => history.push("/detalhes")}>
              Parafusadeira Automática Bri-tania
            </Typography>
          </Box>
          <Typography variant="h3" gutterBottom>
            {preco.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              //style: "currency",
              currency: "BRL",
            })}
          </Typography>
          <Typography variant="body1">ou 10x de 24,90</Typography>
          <Box mb={2}></Box>
          <ShoppingButton />
        </CardContent>
      </CardWrapper>
    </Box>
  );
}

export default Card;
