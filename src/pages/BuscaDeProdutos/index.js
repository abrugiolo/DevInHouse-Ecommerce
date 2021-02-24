import { useSelector } from "react-redux";
import { PageWrapper } from "../../components";

import { getInputSearch } from "../../redux/selectors";

export default function BuscaDeProdutos() {
  const inputSearch = useSelector(getInputSearch);
  console.log(inputSearch);

  return <PageWrapper>BuscaDeProdutos</PageWrapper>;
}
