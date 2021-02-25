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
const BoxIconStyled = styled(Box)`
height: 44px;
width: 44px;
background: #8000FF;
border-radius: 4px;
padding: 10px;
`
const DeleteIconStyled = styled(DeleteIcon)`
color: white;
`
const AddIconStyled = styled(AddIcon)`
color: white;
`

function ButtonAddRemove({setClicked}) {
  return (
    <BoxStyled>
      
      <BoxIconStyled aria-label="delete" onClick={() => setClicked(false)}  >
        <DeleteIconStyled />
      </BoxIconStyled>
      <Typography variant="body3">1</Typography>
      <BoxIconStyled aria-label="add">
        <AddIconStyled />
      </BoxIconStyled>
    </BoxStyled>
  );
}

export default ButtonAddRemove;
