import React from "react";
import {
  Typography,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  Slide
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import ExamTimerPic from '../../asset/timer-exam.png'


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ExamStartDialog({
  openStartDialog,
  setOpenStartDialog,
  setTimeControl,
  setLoading,
  examName,
  examContent,
  duration,
  examFullScore,
  answers
}) {
  const handleClose = () => {
    setTimeControl(true);
    setOpenStartDialog(false);
    setLoading(false);
  };

  return (
    <Dialog open={openStartDialog} fullWidth={true} maxWidth={"md"} TransitionComponent={Transition}>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box component="img" src={ExamTimerPic} width='200px' />

        <TableContainer sx={{ borderRadius: 3, maxWidth: { xs: '90%', md: '60%' } }}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align="center" sx={{ background: '#008306', color: '#fff' }}>
                  ข้อสอบ
                </TableCell>
                <TableCell align="center" sx={{ background: '#E9E8E8' }}>
                  {examName}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" sx={{ background: '#008306', color: '#fff' }}>
                  มีข้อสอบ
                </TableCell>
                <TableCell align="center" sx={{ background: '#E9E8E8' }}>
                  {answers.length} ข้อ
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" sx={{ background: '#008306', color: '#fff' }}>
                  คะแนนเต็ม
                </TableCell>
                <TableCell align="center" sx={{ background: '#E9E8E8' }}>
                  {examFullScore} คะแนน
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" sx={{ background: '#008306', color: '#fff' }}>
                  เวลา
                </TableCell>
                <TableCell align="center" sx={{ background: '#E9E8E8' }}>
                  {duration} นาที
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>


        <Typography
          mt={2}
          align="center"
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
