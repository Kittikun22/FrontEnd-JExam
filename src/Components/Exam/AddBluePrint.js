import React, { useState } from "react";
import Axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import {
  Stack,
  Typography,
  Box,
  Tooltip,
  IconButton,
  Divider,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const initialState = {
  topic: "",
  subtopics: [],
};

function AddBluePrint({
  openAddBluePrint,
  setOpenAddBluePrint,
  selectExam,
  setSelectExam,
}) {
  const [newBluePrint, setNewBluePrint] = useState([]);

  const [newTopics, setNewTopics] = useState(initialState);

  const [openConfirmAddBluePrint, setOpenConfirmAddBluePrint] = useState(false);

  const handleCloseAddBluePrint = () => {
    setOpenAddBluePrint(false);
  };

  const handleCloseConfirmAddBluePrint = () => {
    setOpenConfirmAddBluePrint(false);
  };

  const handleOnSubmitAddBluePrint = () => {
    //
  };

  const handleTopicChange = (event) => {
    setNewTopics({ ...newTopics, topic: event.target.value });
  };

  const handleSubtopicChange = (event, index) => {
    const newSubtopics = [...newTopics.subtopics];
    newSubtopics[index].subtopic = event.target.value;
    setNewTopics({ ...newTopics, subtopics: newSubtopics });
  };

  const handleExplanationChange = (event, index) => {
    const newSubtopics = [...newTopics.subtopics];
    newSubtopics[index].explanation = event.target.value;
    setNewTopics({ ...newTopics, subtopics: newSubtopics });
  };

  const handleDetailChange = (event, subIndex, detailIndex) => {
    const newSubtopics = [...newTopics.subtopics];
    newSubtopics[subIndex].details[detailIndex].detail = event.target.value;
    setNewTopics({ ...newTopics, subtopics: newSubtopics });
  };

  const handleAddSubtopic = () => {
    const newSubtopics = [...newTopics.subtopics];
    newSubtopics.push({
      subtopic: "",
      explanation: "",
      details: [{ detail: "" }],
    });
    setNewTopics({ ...newTopics, subtopics: newSubtopics });
  };

  const handleAddDetail = (subIndex) => {
    const newSubtopics = [...newTopics.subtopics];
    newSubtopics[subIndex].details.push({ detail: "" });
    setNewTopics({ ...newTopics, subtopics: newSubtopics });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewBluePrint((prevItems) => [...prevItems, newTopics]);
    console.log(newTopics);
    setNewTopics(initialState);
  };

  console.log(newTopics);
  console.log("BLuePrint = > ", newBluePrint);

  return (
    <>
      <Dialog open={openAddBluePrint} fullWidth="true" maxWidth="lg">
        <DialogTitle>
          <Typography variant="h5" align="center">
            เพิ่มโครงสร้างข้อสอบ (Blue Print)
          </Typography>
        </DialogTitle>
        <DialogContent sx={{ minHeight: "250px" }} dividers>
          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                label="หัวข้อ"
                value={newTopics.topic}
                onChange={handleTopicChange}
                size="small"
              />

              <Divider />

              {newTopics.subtopics.map((subtopic, subIndex) => (
                <Box key={subIndex}>
                  <Stack spacing={2}>
                    <TextField
                      label="หัวข้อย่อย"
                      value={subtopic.subtopic}
                      onChange={(event) =>
                        handleSubtopicChange(event, subIndex)
                      }
                      size="small"
                    />
                    <TextField
                      label="คำอธิบาย"
                      value={subtopic.explanation}
                      onChange={(event) =>
                        handleExplanationChange(event, subIndex)
                      }
                      size="small"
                    />
                  </Stack>

                  <Stack mt={2} spacing={2}>
                    {subtopic.details.map((detail, detailIndex) => (
                      <TextField
                        key={detailIndex}
                        label="รายละเอียด"
                        value={detail.detail}
                        onChange={(event) =>
                          handleDetailChange(event, subIndex, detailIndex)
                        }
                        size="small"
                      />
                    ))}

                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Tooltip title="เพิ่มรายละเอียด">
                        <IconButton
                          color="success"
                          onClick={() => handleAddDetail(subIndex)}
                          sx={{
                            transition: "all 0.25s ease",
                            "&:hover": {
                              scale: "1.3",
                            },
                          }}
                        >
                          <AddCircleIcon sx={{ fontSize: 32 }} />
                        </IconButton>
                      </Tooltip>
                    </Box>
                    <Divider />
                  </Stack>
                </Box>
              ))}
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={handleAddSubtopic}
                >
                  เพิ่มหัวข้อย่อย
                </Button>
              </Box>
              <Button type="submit" variant="contained" color="success">
                เพิ่มหัวข้อ
              </Button>
            </Stack>
          </Box>
        </DialogContent>
      </Dialog>

      <Dialog
        open={openConfirmAddBluePrint}
        onClose={handleCloseConfirmAddBluePrint}
        fullWidth="true"
        maxWidth="sm"
      >
        <DialogTitle>
          <Typography align="center" variant="h5">
            ยืนยันการเพิ่มโครงสร้างข้อสอบ (Blue Print)
          </Typography>
        </DialogTitle>
        <DialogContent align="center"></DialogContent>

        <DialogActions
          sx={{ display: "flex", justifyContent: "space-between", p: 2 }}
        >
          <Button
            variant="contained"
            sx={{ width: "20%" }}
            onClick={handleCloseConfirmAddBluePrint}
          >
            กลับ
          </Button>
          <Button
            variant="contained"
            sx={{ width: "20%" }}
            color="success"
            onClick={handleOnSubmitAddBluePrint}
            autoFocus
          >
            ยืนยัน
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddBluePrint;
