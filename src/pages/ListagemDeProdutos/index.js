import { Box, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Card, PageWrapper } from "../../components";
import { fetchProducts } from "../../utils/api";

export default function ListagemDeProdutos() {
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
        <Card product={product} />
      ))}
    </PageWrapper>
  );
}
