import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { Typography, Box, Button, Divider, Slide } from "@mui/material";
import ScoreBadge from "../../asset/badge.png";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

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
            <Box mb={2}>
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
                ????????????????????????????????? : {totalScore} / {examFullScore} ???????????????
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
                ?????????????????????????????? : {timeSpending} ????????????
              </Typography>
            </Box>
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
            <Typography sx={{ color: "#fff" }}>??????????????????</Typography>
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
              ???????????????????????????????????????????????????????????????
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
            <Typography>?????????????????????????????????????????????</Typography>
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default ExamScoreAlertDialog;
