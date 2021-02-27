import { Box, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Card, PageWrapper } from "../../components";
import { fetchProducts } from "../../utils/api";
import styled from "styled-components";

const BoxStyled = styled(Box)`
  display: flex;
  flex-wrap: wrap;
`;

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
      <Box>
        <Typography variant="h2">Bem Vindo!</Typography>
      </Box>
      <BoxStyled>
        {productList?.map((product) => (
          <Card product={product} />
        ))}
      </BoxStyled>
    </PageWrapper>
  );
}
