import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { Typography, Box, Button, DialogActions, Slide } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ExamSubmitAlert({
  openSubmitDialog,
  setOpenSubmitDialog,
  handleExamSubmit,
  examContent,
  answers,
  handleGoToQuestion,
}) {
  const handleClose = () => {
    setOpenSubmitDialog(false);
  };

  const handleSubmit = () => {
    setOpenSubmitDialog(false);
    handleExamSubmit();
  };

  return (
    <Dialog
      open={openSubmitDialog}
      fullWidth={true}
      maxWidth={"md"}
      TransitionComponent={Transition}
    >
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ErrorOutlineIcon color="warning" sx={{ fontSize: "75px" }} />

        <Typography
          sx={{
            fontSize: "1.2rem",
            textAlign: "center",
          }}
        >
          ยังตอบคำถามไม่ครบทุกข้อ โดยข้อที่ยังไม่ตอบมีดังนี้
        </Typography>

        <Box sx={{ width: { xs: "80 %", sm: "50%" } }}>
          {examContent.map((val, key) => {
            return (
              <>
                {answers?.findIndex(
                  (answer) => answer.id === val.id && answer.choose === ""
                ) === -1 ? null : (
                  <Button
                    variant="contained"
                    key={key}
                    color="warning"
                    onClick={() => {
                      handleGoToQuestion(val.id);
                      setOpenSubmitDialog(false);
                    }}
                    sx={{
                      borderRadius: 3,
                      minWidth: "50px",
                      minHeight: "50px",
                      m: 1,
                    }}
                  >
                    <Typography sx={{ fontSize: "1rem", fontWeight: 700 }}>
                      {val.id}
                    </Typography>
                  </Button>
                )}
              </>
            );
          })}
        </Box>

        <Typography
          sx={{
            fontSize: "1rem",
            textAlign: "center",
            color: "#F55050",
          }}
        >
          *หากต้องการยืนยันการส่งคำตอบให้กดปุ่ม "ยันยัน"
        </Typography>
      </DialogContent>

      <DialogActions
        sx={{ display: "flex", justifyContent: "space-evenly", my: 2 }}
      >
        <Button
          variant="contained"
          onClick={handleClose}
          sx={{ borderRadius: 3, width: "125px" }}
        >
          <Typography sx={{ fontSize: "1rem" }}>ทำข้อสอบต่อ</Typography>
        </Button>

        <Button
          variant="contained"
          onClick={handleSubmit}
          color="success"
          sx={{ borderRadius: 3, width: "125px" }}
        >
          <Typography sx={{ fontSize: "1rem" }}>ยืนยัน</Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ExamSubmitAlert;
