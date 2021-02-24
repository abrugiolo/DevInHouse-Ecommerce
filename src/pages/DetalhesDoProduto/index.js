import { fetchProducts, queryProducts } from "../../utils/api";

async function teste() {
  const produtos = await fetchProducts();
  console.log(produtos);
}
teste();

export default function DetalhesDoProduto() {
  return <div>DetalhesDoProduto</div>;
}
