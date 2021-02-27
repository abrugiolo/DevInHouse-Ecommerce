import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { InputBase, IconButton } from "@material-ui/core";
import styled from "styled-components";

import { getInputSearch } from "../redux/selectors";
import { setInputSearch } from "../redux/actions";

const InputWrapper = styled.form`
  background-color: #f4f4f4;
  border-radius: 54px;
  padding: 10px 32px;
  height: 44px;
  width: 424px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .iconButton {
    padding: 0;
    background-color: transparent;
  }
`;

function InputSearch() {
  const dispatch = useDispatch();
  const history = useHistory();
  const inputSearch = useSelector(getInputSearch);

  const handleIconClick = (e) => {
    e.preventDefault();
    if (inputSearch === "" || inputSearch === undefined) {
      history.push("/");
      // TODO: colocar uma mensagem de alerta para que o usuário preencha o campo buscar
    } else {
      history.push("/busca");
    }
  };

  return (
    <InputWrapper>
      <InputBase
        className="inputBase"
        placeholder="Buscar..."
        value={inputSearch || ""}
        onChange={(e) => dispatch(setInputSearch(e.target.value))}
      />

      <IconButton
        type="submit"
        className="iconButton"
        onClick={handleIconClick}
        color="primary"
      >
        <SearchIcon onClick={handleIconClick} color="primary" />
      </IconButton>
    </InputWrapper>
  );
}

export default InputSearch;
