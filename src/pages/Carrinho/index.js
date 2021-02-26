import { PageWrapper } from "../../components";
import { getProductsListInCart } from "../../redux/selectors"
import { useSelector } from "react-redux";


export default function Carrinho() {
  const productListInCart = useSelector(getProductsListInCart);
  console.log(productListInCart)
  return <PageWrapper>Carrinho</PageWrapper>;
}
