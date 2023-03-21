import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { Typography, Box, Button, Divider, Slide } from "@mui/material";
import ScoreBadge from "../../asset/badge.png";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ExamScoreAlertDialog({
  openDialog,
  setOpenDialog,
  exam_id,
  examName,
  totalScore,
  timeSpend,
  examFullScore,
  productId
}) {
  const timeSpending = new Date(timeSpend * 1000)
    .toISOString()
    .substring(14, 19);

  return (
    <Dialog
      open={openDialog}
      fullWidth={true}
      maxWidth={"md"}
      TransitionComponent={Transition}
    >
      <DialogContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box component="img" src={ScoreBadge} sx={{ width: "200px" }} />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
            }}
          >

            <TableContainer sx={{ borderRadius: 3 }}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell align="center" sx={{ background: '#008306', color: '#fff' }}>
                      ข้อสอบ
                    </TableCell>
                    <TableCell align="center" sx={{ background: '#E9E8E8' }}>{examName}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center" sx={{ display: 'flex', alignItems: 'center', gap: .5, background: '#008306', color: '#fff' }}>
                      <StarIcon sx={{ color: "#F2921D" }} />
                      คะแนนที่ได้
                    </TableCell>
                    <TableCell align="center" sx={{ background: '#E9E8E8' }}>{totalScore} / {examFullScore} คะแนน</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center" sx={{ display: 'flex', alignItems: 'center', gap: .5, background: '#008306', color: '#fff' }}>
                      <AccessTimeFilledIcon sx={{ color: "#A2B5BB" }} />
                      เวลาที่ใช้
                    </TableCell>
                    <TableCell align="center" sx={{ background: '#E9E8E8' }}>{timeSpending} นาที</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            {/* <Box mb={2}>
              <Typography
                sx={{
                  display: "inline",
                  borderBottom: "4px solid #a3cc53",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                {examName}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 1 }}>
              <StarIcon sx={{ alignSelf: "center", color: "#F2921D" }} />
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                คะแนนที่ได้ : {totalScore} / {examFullScore} คะแนน
              </Typography>
            </Box>

            <Divider />

            <Box sx={{ display: "flex", gap: 1 }}>
              <AccessTimeFilledIcon
                sx={{ alignSelf: "center", color: "#A2B5BB" }}
              />
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                เวลาที่ใช้ : {timeSpending} นาที
              </Typography>
            </Box> */}


          </Box>
        </Box>

        <Box
          my={2}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            gap: 1,
          }}
        >
          <Button
            variant="contained"
            color="success"
            sx={{ borderRadius: 3 }}
            onClick={() => {
              window.location = `/answer/${productId}`;
            }}
          >
            <Typography sx={{ color: "#fff" }}>ดูเฉลย</Typography>
          </Button>
          <Button
            variant="contained"
            color="warningOrange"
            sx={{ borderRadius: 3 }}
            onClick={() => {
              localStorage.setItem("ActiveContent", "profile-analysis");
              window.location = "/profile";
            }}
          >
            <Typography sx={{ color: "#fff" }}>
              ดูผลการวิเคราะห์คะแนน
            </Typography>
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              localStorage.setItem("ActiveContent", "profile-homepage");
              window.location = "/profile";
            }}
            sx={{ borderRadius: 3 }}
          >
            <Typography>กลับหน้าโปรไฟล์</Typography>
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default ExamScoreAlertDialog;
