import { Box, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { CardDetail, PageWrapper } from "../../components";
import { fetchProducts } from "../../utils/api";

export default function DetalhesDoProduto() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    //fetchProducts().then((response) => setProductList(response));
    getProducts();
  }, []);
  const getProducts = async () => {
    const response = await fetchProducts();
    setProductList(response);
  };

  return (
    <PageWrapper>
      <div>ListagemDeProdutos</div>
      <Box>
        <Typography variant="h1">Bem Vindo!</Typography>
      </Box>
      {productList?.map((product) => (
        <CardDetail product={product} />
      ))}
    </PageWrapper>
  );
}
