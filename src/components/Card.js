import {
  Typography,
  Box,
  Card as CardWrapper,
  CardContent,
  Button,
} from "@material-ui/core";

function Card() {
  return (
    <Box>
      <Box>
        <Typography variant="h1">Bem Vindo!</Typography>
      </Box>
      <Box className="Card">
        <CardWrapper>
          <Box className="Card-img-content">
            <img className="Card-img" src="#" alt="imagem"></img>
          </Box>
          <CardContent className="Card-content">
            <Box mb={2}>
              <Typography variant="h3">
                {" "}
                Parafusadeira Automática Bri-tania{" "}
              </Typography>
            </Box>
            <Typography variant="h2">
              249<span className="Span-price">,00</span>
            </Typography>
            <Typography variant="h4">ou 10x de 24,90</Typography>
            <Box mb={2}></Box>
            <Button color="primary" variant="contained">
              Comprar
            </Button>
          </CardContent>
        </CardWrapper>
      </Box>
    </Box>
  );
}

export default Card;
