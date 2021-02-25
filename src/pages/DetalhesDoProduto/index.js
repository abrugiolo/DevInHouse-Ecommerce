import { Box, Typography } from "@material-ui/core";
//import { useEffect, useState } from "react";
import { CardDetail, PageWrapper } from "../../components";
//import { fetchProducts } from "../../utils/api";

export default function DetalhesDoProduto() {
  /*const [productList, setProductList] = useState([]);
  useEffect(() => {
    //fetchProducts().then((response) => setProductList(response));
    getProducts();
  }, []);
  const getProducts = async () => {
    const response = await fetchProducts();
    setProductList(response);
  };*/

  const product = {
    id: 43900,
    name: "Duracell - AAA Batteries (4-Pack)",
    price: 5.49,
    description:
      "Compatible with select electronic devices; AAA size; DURALOCK Power Preserve technology; 4-pack",
    url:
      "http://www.bestbuy.com/site/duracell-aaa-batteries-4-pack/43900.p?id=1051384074145&skuId=43900&cmp=RMXCC",
    image:
      "http://img.bbystatic.com/BestBuy_US/images/products/4390/43900_sa.jpg",
  };

  return (
    <PageWrapper>
      {/* <div>DetalhesDeProdutos</div> */}
      <Box>
        <Typography variant="h2">{product.name}</Typography>
      </Box>
      <CardDetail product={product} />
    </PageWrapper>
  );
}
