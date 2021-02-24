import { Box, Typography } from "@material-ui/core";
import { Card, PageWrapper } from "../../components";

export default function ListagemDeProdutos() {
  return (
    <PageWrapper>
      <div>ListagemDeProdutos</div>
      <Box>
        <Typography variant="h1">Bem Vindo!</Typography>
      </Box>
      <Card />
    </PageWrapper>
  );
}
