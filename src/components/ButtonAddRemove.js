import {
  Delete as DeleteIcon,
  Add as AddIcon,
  Remove as RemoveIcon,
} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import { Typography, Box } from "@material-ui/core";
import styled from "styled-components";
import { useState } from "react";

const BoxStyled = styled(Box)`
  display: flex;
  align-items: center;
  height: 44px;
  width: 226px;
  justify-content: space-between;
`;

function ButtonAddRemove({ setClicked }) {
  const [number, setNumber] = useState(1);
  return (
    <BoxStyled>
      {number === 1 ? (
        <IconButton aria-label="delete" onClick={() => setClicked(false)}>
          <DeleteIcon />
        </IconButton>
      ) : (
        <IconButton aria-label="delete" onClick={() => setNumber(number - 1)}>
          <RemoveIcon />
        </IconButton>
      )}

      <Typography variant="body3">{number}</Typography>

      <IconButton onClick={() => setNumber(number + 1)} aria-label="add">
        <AddIcon />
      </IconButton>
    </BoxStyled>
  );
}

export default ButtonAddRemove;
