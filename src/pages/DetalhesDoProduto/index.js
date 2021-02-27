import { Box, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Card, PageWrapper } from "../../components";
import { getProductDetail } from "../../redux/selectors";

export default function DetalhesDoProduto() {
  const productDetail = useSelector(getProductDetail);

  return (
    <>
      <PageWrapper>
        {/* <div>DetalhesDeProdutos</div> */}
        <Box>
          <Typography variant="h2">{productDetail.name}</Typography>
        </Box>
        <Card product={productDetail} detail />
      </PageWrapper>
    </>
  );
}
