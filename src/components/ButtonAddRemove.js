import { Delete as DeleteIcon, Add as AddIcon } from "@material-ui/icons"
import IconButton from "@material-ui/core/IconButton";
import { Typography, Box } from "@material-ui/core";
import styled from "styled-components";

const BoxStyled = styled(Box)`
display: flex;
align-items: center;
height: 44px;
width: 226px;
justify-content: space-between;
`

function ButtonAddRemove({setClicked}) {
  return (
    <BoxStyled>
      <IconButton aria-label="delete" onClick={() => setClicked(false)}>
        <DeleteIcon />
      </IconButton>
      <Typography>1</Typography>
      <IconButton aria-label="add">
        <AddIcon />
      </IconButton>
    </BoxStyled>
  );
}

export default ButtonAddRemove;
