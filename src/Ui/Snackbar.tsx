import * as React from "react";
import Button from "@mui/joy/Button";
import Snackbar from "@mui/joy/Snackbar";
import PlaylistAddCheckCircleRoundedIcon from "@mui/icons-material/PlaylistAddCheckCircleRounded";
import { typeSnackbar } from "../Redux/SnackbarReducer";
import { ContentPasteSearchOutlined } from "@mui/icons-material";
export default function SnackbarUi(props: typeSnackbar) {
  console.log(props);
  return (
    <React.Fragment>
      <Snackbar
        variant="soft"
        open={props.open}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        startDecorator={<PlaylistAddCheckCircleRoundedIcon />}
        autoHideDuration={200}
        color={props.color === true ? "success" : "danger"}
        animationDuration={2000}
      >
        {props.message}
      </Snackbar>
    </React.Fragment>
  );
}
