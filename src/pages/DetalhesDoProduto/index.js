import { Box, Typography, Button } from "@material-ui/core";
// import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useSelector } from "react-redux";
import { Card, PageWrapper } from "../../components";
import { getProductDetail } from "../../redux/selectors";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

// const ArrowBackIconStyled = styled(ArrowBackIcon)`
//   margin-top: 32px;
// `;
const ButtonStyled = styled(Button)`
  height: 44px;
  width: 150px;
  margin-top: 32px;
`;

export default function DetalhesDoProduto() {
  const history = useHistory();
  const productDetail = useSelector(getProductDetail);

  const buttonBackClicked = () => {
    history.goBack();
  };

  return (
    <>
      <PageWrapper>
        {/* <div>DetalhesDeProdutos</div> */}
        <Box>
          <Typography variant="h2">{productDetail.name}</Typography>
        </Box>
        <Card product={productDetail} detail />
        {/* <ArrowBackIconStyled color="primary" /> */}
        <ButtonStyled
          color="rgba(235, 215, 255, 1)"
          variant="contained"
          onClick={buttonBackClicked}
        >
          Voltar
        </ButtonStyled>
      </PageWrapper>
    </>
  );
}
