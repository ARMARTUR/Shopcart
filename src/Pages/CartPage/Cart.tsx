import * as React from "react";
import Button from "@mui/joy/Button";
import Snackbar from "@mui/joy/Snackbar";
import PlaylistAddCheckCircleRoundedIcon from "@mui/icons-material/PlaylistAddCheckCircleRounded";

export default function SnackbarWithDecorators() {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Show Snackbar
      </Button>
      <Snackbar
        variant="soft"
        color="success"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        animationDuration={500}
        autoHideDuration={2200}
        startDecorator={<PlaylistAddCheckCircleRoundedIcon />}
      >
        Your message was sent successfully.
      </Snackbar>
    </React.Fragment>
  );
}
