import React from "react";
import {
  Drawer,
  Box,
  Button,
  Typography,
  LinearProgress,
} from "@mui/material";

function ExamDrawer({
  openDrawer,
  setOpenDrawer,
  examContent,
  answers,
  examName,
  handleExamSubmit,
  setOpenSubmitDialog,
  handleGoToQuestion
}) {
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const progresses = (answers.filter(ans => ans.choose !== "").length / examContent.length) * 100;

  return (
    <>
      <Drawer anchor={"left"} open={openDrawer} onClose={handleDrawerClose}>
        <Box
          sx={{
            width: 275,
            background: "#0e3746",
            borderRight: 5,
            borderColor: "#a3cc53",
            height: '100%'
          }}
          onClick={handleDrawerOpen}
          onKeyDown={handleDrawerClose}
        >
          <Box my={5}>
            <Typography
              sx={{ fontSize: "1.5rem", color: "#fff", textAlign: "center" }}
            >
              {examName}
            </Typography>
          </Box>

          <Box my={2} sx={{ display: "flex" }}>
            <Box sx={{ width: "200px", mx: 2 }}>
              <LinearProgress
                variant="determinate"
                color={progresses === 100 ? "success" : "warning"}
                sx={{ height: 15 }}
                value={progresses}
              />
            </Box>
            <Box sx={{ minWidth: 35, alignSelf: "center" }}>
              <Typography variant="body2" color="#fff">
                {`${Math.round(progresses)}%`}
              </Typography>
            </Box>
          </Box>

          <Box my={2}>
            {examContent?.map((val, key) => {
              return (
                <Button
                  key={key}
                  variant="contained"
                  onClick={() => handleGoToQuestion(val.id)}
                  color={
                    answers.findIndex((answer) => answer.id === val.id && answer.choose === '') === -1
                      ? "success"
                      : "warning"
                  }
                  sx={{
                    borderRadius: 3,
                    minWidth: "50px",
                    minHeight: "50px",
                    mx: 1,
                    my: 0.5
                  }}
                >
                  <Typography sx={{ fontSize: "1rem", fontWeight: 700 }}>
                    {val.id}
                  </Typography>
                </Button>
              );
            })}
          </Box>

          <Box mt={2} sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              color="error"
              sx={{ borderRadius: 3, width: "125px" }}
              onClick={
                () => answers.filter(ans => ans.choose !== "").length === examContent.length ? handleExamSubmit() : setOpenSubmitDialog(true)
              }
            >
              <Typography sx={{ fontSize: "1.2rem" }}>ส่งคำตอบ</Typography>
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default ExamDrawer;
