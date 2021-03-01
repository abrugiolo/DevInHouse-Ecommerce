import { Box, Typography, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { Card, PageWrapper } from "../../components";
import { getProductDetail } from "../../redux/selectors";
import { setLoading } from "../../redux/actions";

const ButtonStyled = styled(Button)`
  height: 44px;
  width: 150px;
  margin-top: 32px;
  text-transform: none;
  @media screen and (max-width: 800px) {
    margin-top: 8px;
  }
`;

const BoxStyled = styled(Box)`
  margin-top: 32px;
`;

export default function DetalhesDoProduto() {
  const history = useHistory();
  const dispatch = useDispatch();
  const productDetail = useSelector(getProductDetail);

  const buttonBackClicked = () => {
    history.goBack();
    dispatch(setLoading(true));
  };

  return (
    <>
      <PageWrapper>
        <BoxStyled>
          <Typography variant="h2">{productDetail?.name}</Typography>
        </BoxStyled>
        <Card product={productDetail} detail />
        <ButtonStyled variant="contained" onClick={buttonBackClicked}>
          Voltar
        </ButtonStyled>
      </PageWrapper>
    </>
  );
}
