
import { fetchProducts, queryProducts } from "../../utils/api";
import { PageWrapper } from "../../components";

async function teste() {
  const produtos = await fetchProducts();
  console.log(produtos);
}
teste();


export default function DetalhesDoProduto() {
  return <PageWrapper>DetalhesDoProduto</PageWrapper>;
}
