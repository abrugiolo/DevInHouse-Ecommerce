import { Box, Typography, CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Card, PageWrapper } from "../../components";
import { fetchProducts, queryProducts } from "../../utils/api";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import {
  getInputSearch,
  getClickSearch,
  getLoading,
} from "../../redux/selectors";
import { setLoading } from "../../redux/actions";

const BoxStyled = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  max-width: 1160px;
  margin: 64px auto;

  @media screen and (max-width: 600px) {
    margin: 32px auto;
  }
`;

const BoxTitle = styled(Box)`
  margin-top: 32px;
`;

const DivWrapper = styled.div`
  display: flex;
  height: 70vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export default function ListagemDeProdutos() {
  const dispatch = useDispatch();
  const [productList, setProductList] = useState([]);
  const loading = useSelector(getLoading);
  const inputSearch = useSelector(getInputSearch);
  const clicked = useSelector(getClickSearch);
  console.log("productList", productList);

  useEffect(() => {
    //fetchProducts().then((response) => setProductList(response));
    getProducts();
  }, [inputSearch, clicked]);

  const getProducts = async () => {
    const allProducts = await fetchProducts();
    const filteredProducts = await queryProducts(inputSearch);
    const response = !inputSearch ? allProducts : filteredProducts;
    setProductList(response);
    dispatch(setLoading(false));
  };

  return (
    <PageWrapper>
      <BoxTitle>
        <Typography variant="h2">
          {!clicked || inputSearch === ""
            ? "Bem Vindo!"
            : `Resultados para: ${inputSearch}`}
        </Typography>
      </BoxTitle>
      {loading && <DivWrapper>
          <CircularProgress />
        </DivWrapper>}

      { productList?.length === 0 ? (
        <DivWrapper>Nenhum resultado encontrado para esta busca.</DivWrapper>
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
