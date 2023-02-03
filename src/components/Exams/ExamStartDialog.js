import React from "react";
import {
  Typography,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
} from "@mui/material";
import ExamTimerPic from '../../asset/timer-exam.png'



function ExamStartDialog({
  openStartDialog,
  setOpenStartDialog,
  setTimeControl,
  setLoading,
  examName,
  examContent,
  duration,
  examFullScore
}) {
  const handleClose = () => {
    setTimeControl(true);
    setOpenStartDialog(false);
    setLoading(false);
  };

  return (
    <Dialog open={openStartDialog} fullWidth={true} maxWidth={"sm"}>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box component="img" src={ExamTimerPic} width='200px' />
        <Typography
          sx={{
            fontSize: "1.2rem",
            fontWeight: 600,
            width: "265px",
            textAlign: "center",
          }}
        >
          ข้อสอบ : {examName}
        </Typography>

        <Typography
          sx={{
            fontSize: "1.2rem",
            fontWeight: 600,
            width: "265px",
            textAlign: "center",
          }}
        >
          มีข้อสอบ : {examContent.length} ข้อ
        </Typography>

        <Typography
          sx={{
            fontSize: "1.2rem",
            fontWeight: 600,
            width: "265px",
            textAlign: "center",
          }}
        >
          คะแนนเต็ม : {examFullScore} คะแนน
        </Typography>

        <Box mb={2}>
          <Typography
            sx={{
              fontSize: "1.2rem",
              fontWeight: 600,
              width: "265px",
              textAlign: "center",
            }}
          >
            มีเวลาในการทำ : {duration} นาที
          </Typography>
        </Box>

        <Typography
          sx={{
            fontSize: "1.2rem",
            textAlign: "center",
          }}
        >
          เมื่อกดตกลงจะแสดงข้อสอบและเริ่มจับเวลาทันที
        </Typography>
        <Typography
          sx={{
            fontSize: ".9rem",
            textAlign: "center",
            color: "#F55050",
          }}
        >
          *หากหมดเวลาจะไม่สามารถทำข้อสอบได้และส่งคำตอบอัตโนมัติ
        </Typography>
      </DialogContent>

      <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          onClick={handleClose}
          color="success"
          sx={{ borderRadius: 3, width: "125px" }}
        >
          <Typography sx={{ fontSize: "1rem" }}>ตกลง</Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ExamStartDialog;
