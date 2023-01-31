import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { Typography, Box } from "@mui/material";

function ExamScoreAlertDialog({ openDialog, setOpenDialog, totalScore }) {
  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <Dialog
      open={openDialog}
      onClose={handleClose}
      fullWidth={true}
      maxWidth={"sm"}
    >
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "", md: "center" },
        }}
      >
        <Typography
          sx={{
            fontSize: "1.2rem",
            fontWeight: 600,
            width: "265px",
            textAlign: "center",
          }}
        >
          {totalScore}
        </Typography>
      </DialogContent>
    </Dialog>
  );
}

export default ExamScoreAlertDialog;
