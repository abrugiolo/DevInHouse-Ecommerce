import { Box, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card, PageWrapper } from "../../components";
import { getProductDetail, getProductName } from "../../redux/selectors";
//import { fetchProducts } from "../../utils/api";

export default function DetalhesDoProduto() {
  const productName = useSelector(getProductName);
  //const productDetail = useSelector(getProductDetail);
  console.log(productName);

  // const [productDetail] = useState();
  // useEffect(() => {
  //   getProductDetail();
  //   console.log(productDetail);
  // }, []);
  // const getProductDetail = useSelector(getProductDetail);
  return (
    <></>
    // <PageWrapper>
    //   {/* <div>DetalhesDeProdutos</div> */}
    //   <Box>
    //     <Typography variant="h2">{productDetail.name}</Typography>
    //   </Box>
    //   <Card product={productDetail} detail />
    // </PageWrapper>
  );
}
