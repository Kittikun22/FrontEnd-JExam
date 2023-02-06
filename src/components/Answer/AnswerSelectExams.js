import React from "react";
import { Button, Box, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AnswerSelectExams({
  openSelectDialog,
  setOpenSelectDialog,
  exam,
  setSelectExam,
  setLoading,
}) {
  const handleClose = (key) => {
    setSelectExam(key);
    setLoading(true);
    setOpenSelectDialog(false);
  };

  return (
    <Dialog
      open={openSelectDialog}
      TransitionComponent={Transition}
      fullWidth={true}
      keepMounted
    >
      <DialogTitle sx={{ textAlign: "center", fontSize: "2rem" }}>
        เลือกชุดข้อสอบ
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            {exam?.map((val, key) => {
              return (
                <Button
                  variant="text"
                  key={key}
                  onClick={() => handleClose(key)}
                  sx={{ display: "block" }}
                >
                  <Box
                    component="img"
                    src={`/${val.pic}`}
                    sx={{
                      width: "50%",
                      borderRadius: 3,
                    }}
                  />
                  <Typography>เฉลย {val.exam_name}</Typography>
                </Button>
              );
            })}
          </Box>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

export default AnswerSelectExams;
