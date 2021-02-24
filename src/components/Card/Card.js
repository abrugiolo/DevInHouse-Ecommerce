import {
  Typography,
  Box,
  Card as CardWrapper,
  CardContent,
} from "@material-ui/core";
import "./Card.css";
import { useHistory } from "react-router-dom";
import ShoppingButton from "../ShoppingButton";

function Card({ product }) {
  const installmentsPayment = 10;
  const history = useHistory();
  /*const product = {
    id: 43900,
    name: "Duracell - AAA Batteries (4-Pack)",
    price: 5.49,
    description:
      "Compatible with select electronic devices; AAA size; DURALOCK Power Preserve technology; 4-pack",
    url:
      "http://www.bestbuy.com/site/duracell-aaa-batteries-4-pack/43900.p?id=1051384074145&skuId=43900&cmp=RMXCC",
    image:
      "http://img.bbystatic.com/BestBuy_US/images/products/4390/43900_sa.jpg",
  }*/

  return (
    <Box key={product.id} className="Card">
      <CardWrapper>
        <Box className="Card-img-content">
          <img
            className="Card-img"
            src={product.image}
            alt="imagem"
            onClick={() => history.push("/detalhes")}
          ></img>
        </Box>
        <CardContent className="Card-content">
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
          <ShoppingButton />
        </CardContent>
      </CardWrapper>
    </Box>
  );
}

export default Card;
