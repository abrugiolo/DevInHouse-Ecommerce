import { Box, Typography } from "@material-ui/core";
import { Card, PageWrapper } from "../../components";
import { PRODUCTS_MOCK } from "../../utils/api"

export default function ListagemDeProdutos() {
  const productList = PRODUCTS_MOCK 
  return (
    <PageWrapper>
      <div>ListagemDeProdutos</div>
      <Box>
        <Typography variant="h1">Bem Vindo!</Typography>
      </Box>
        {productList.map(product => (
          <Card product={product} />  
        ))}
    </PageWrapper>
  );
}
