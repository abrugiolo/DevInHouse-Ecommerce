import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { InputBase, IconButton } from "@material-ui/core";
import styled from "styled-components";

import { setInputSearch, setLoading } from "../redux/actions";

const InputWrapper = styled.div`
  background-color: #f4f4f4;
  border-radius: 54px;
  padding: 10px 32px;
  height: 44px;
  width: 424px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 850px) {
    width: 300px;
  }
  @media screen and (max-width: 600px) {
    width: 220px;
  }

  .iconButton {
    padding: 0;
    background-color: transparent;
  }
`;

function InputSearch({ search, setSearch }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleIconClick = () => {
    history.push("/");
    dispatch(setInputSearch(search.trim(), true));
    dispatch(setLoading(true));
  };

  return (
    <InputWrapper>
      <InputBase
        className="inputBase"
        placeholder="Buscar..."
        value={search || ""}
        onChange={(e) => setSearch(e.target.value)}
      />

      <IconButton
        type="submit"
        className="iconButton"
        onClick={handleIconClick}
        color="primary"
      >
        <SearchIcon color="primary" />
      </IconButton>
    </InputWrapper>
  );
}

export default InputSearch;
