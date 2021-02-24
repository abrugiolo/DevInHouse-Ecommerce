import { useSelector } from "react-redux";
import { Header } from "../../components";

import { getInputSearch } from "../../redux/selectors";
export default function BuscaDeProdutos() {
  const inputSearch = useSelector(getInputSearch);
  console.log(inputSearch);

  return <>BuscaDeProdutos</>;
}
