  
import { Snackbar } from "@material-ui/core";
import {Alert as MuiAlert} from "@material-ui/lab";
import styled from "styled-components";

const SnackbarStyled = styled(Snackbar)`
  .MuiIconButton-root {
    background-color: transparent;
  }
`

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function MessageAlert({ alert, setAlert, message, severity}) {
  return (
    <SnackbarStyled
      open={alert}
      autoHideDuration={4000}
      onClose={() => setAlert(false)}
    >
      <Alert onClose={() => setAlert(false)} severity={severity ? severity : "success"}>
        {message}
      </Alert>
    </SnackbarStyled>
  );
}

export default MessageAlert;
