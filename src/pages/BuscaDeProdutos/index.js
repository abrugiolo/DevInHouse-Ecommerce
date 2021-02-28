import { useSelector } from "react-redux";
import { getInputSearch } from "../../redux/selectors";
import { PageWrapper } from "../../components";

export default function BuscaDeProdutos() {
  const inputSearch = useSelector(getInputSearch);
  console.log(inputSearch);

  return <PageWrapper>BuscaDeProdutos</PageWrapper>;
}
