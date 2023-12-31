import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import { useState } from "react";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {

  // ......................................
  // const [note, setNote] = useState({
  //   title: "",
  // });

  // const InputEventbtn = (event) => {

  //   const { name, value } = event.target;

  //   setNote((prevData) => {
  //     return {
  //       ...prevData,
  //       [name]: value,
  //     };
  //   });
  //   console.log(note)
  // };

  // const addEvent = () => {
  //   props.passNote(note)
  // }
// ....................................


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="error" onClick={handleClickOpen}>
        Create new board
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          sx={{ px: 4, fontWeight: "bold" }}
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Add a name for your board
        </BootstrapDialogTitle>
        <Box
          sx={{
            width: 400,
            maxWidth: "100%",
            px: 4,
          }}
        >
          <TextField
            name="title"
            // value={note.title}
            // onChange={InputEventbtn}
            fullWidth
            // label="Create a new board"
            id="fullWidth"
          />

          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "20px",
              textAlign: "start",
              pt: "45px",
              pb: 1,
            }}
            variant="h4"
            component="div"
          >
            Select post colour
          </Typography>
          <Typography sx={{ pb: "50px" }}>
            Here are some templates to help you get started
          </Typography>
          <DialogActions>
            <Button onClick={handleClose} variant="contained" color="error">
              Create board
            </Button>
          </DialogActions>
        </Box>
      </BootstrapDialog>
    </div>
  );
}
