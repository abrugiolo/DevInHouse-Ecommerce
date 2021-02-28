import { Box, Typography, CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Card, PageWrapper } from "../../components";
import { fetchProducts, queryProducts } from "../../utils/api";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getInputSearch, getClickSearch } from "../../redux/selectors";

const BoxStyled = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  max-width: 1160px;
  margin: 64px auto;
`;

const BoxTitle = styled(Box)`
  margin-top: 32px;
`;

const LoadingWrapper = styled.div`
  display: flex;
  height: 70vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export default function ListagemDeProdutos() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const inputSearch = useSelector(getInputSearch);
  const clicked = useSelector(getClickSearch);
  useEffect(() => {
    //fetchProducts().then((response) => setProductList(response));
    getProducts();
  }, []);

  const getProducts = async () => {
    console.log(inputSearch);

    const response = await (!inputSearch
      ? fetchProducts()
      : queryProducts(inputSearch));
    setProductList(response);
    setLoading(false);
  };

  return (
    <PageWrapper>
      <BoxTitle>
        <Typography variant="h2">
          {!inputSearch ? "Bem Vindo!" : `Resultados para: ${inputSearch}`}
        </Typography>
      </BoxTitle>
      {loading ? (
        <LoadingWrapper>
          <CircularProgress />
        </LoadingWrapper>
      ) : (
        <BoxStyled>
          {productList?.map((product) => (
            <Card product={product} />
          ))}
        </BoxStyled>
      )}
    </PageWrapper>
  );
}
