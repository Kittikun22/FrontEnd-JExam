import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Stack, Typography } from "@mui/material";
import Axios from "axios";
import { useAuthState } from "../context/AuthContext";

export default function DialogDreamFac({ open, setOpen }) {
  const { user } = useAuthState();

  const [faculty, setFaculty] = useState([]);

  const [dreamFacOne, setDreamFacOne] = useState(null);
  const [dreamFacTwo, setDreamFacTwo] = useState(null);

  const [majorOne, setMajorOne] = useState([]);
  const [majorTwo, setMajorTwo] = useState([]);

  const [majorFacOne, setMajorFacOne] = useState(null);
  const [majorFacTwo, setMajorFacTwo] = useState(null);

  const [valueFacOne, setValueFacOne] = useState();
  const [valueFacTwo, setValueFacTwo] = useState();

  const [valueMajorOne, setValueMajorOne] = useState();
  const [valueMajorTwo, setValueMajorTwo] = useState();

  useEffect(() => {
    Axios.get("http://localhost:8000/getFaculty").then((res) => {
      setFaculty(res.data);
    });

    if (dreamFacOne) {
      Axios.post("http://localhost:8000/getMajor", {
        faculty_id: dreamFacOne.faculty_id,
      }).then((res) => {
        setMajorOne(res.data);
      });
    }
    if (dreamFacTwo) {
      Axios.post("http://localhost:8000/getMajor", {
        faculty_id: dreamFacTwo.faculty_id,
      }).then((res) => {
        setMajorTwo(res.data);
      });
    }
  }, [dreamFacOne, dreamFacTwo]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    Axios.put("http://localhost:8000/updateDreamFac", {
      dream1: dreamFacOne.faculty_id,
      dream2: dreamFacTwo.faculty_id,
      major1: majorFacOne.major_id,
      major2: majorFacTwo.major_id,
      user_id: user.user_id,
    }).then(() => {
      localStorage.setItem("popup", false);
      handleClose();
    });
  };

  return (
    <>
      <Dialog open={open} fullWidth="true" maxWidth="sm">
        <DialogContent>

          <Typography mb={2} sx={{ fontSize: "1.5rem", textAlign: "center" }}>
            เลือกคณะในฝัน
          </Typography>

          <Stack spacing={2} sx={{ pl: 1, borderLeft: '5px solid #a3cc53' }}>
            <Autocomplete
              size="small"
              fullWidth
              value={dreamFacOne}
              onChange={(event, newValue) => {
                setDreamFacOne(newValue);
                setMajorFacOne(null);
              }}
              inputValue={valueFacOne}
              onInputChange={(event, newInputValue) => {
                setValueFacOne(newInputValue);
              }}
              options={faculty}
              getOptionLabel={(faculty) => faculty.faculty_name}
              renderInput={(params) => (
                <TextField {...params} label="เลือคณะในฝันอันดับที่ 1" />
              )}
            />

            <Autocomplete
              size="small"
              fullWidth
              value={majorFacOne}
              onChange={(event, newValue) => {
                setMajorFacOne(newValue);
              }}
              inputValue={valueMajorOne}
              onInputChange={(event, newInputValue) => {
                setValueMajorOne(newInputValue);
              }}
              options={majorOne}
              getOptionLabel={(majorOne) => majorOne.major_name}
              renderInput={(params) => <TextField {...params} label="สาขา" />}
            />

            <Autocomplete
              size="small"
              fullWidth
              value={dreamFacTwo}
              onChange={(event, newValue) => {
                setDreamFacTwo(newValue);
                setMajorFacTwo(null);
              }}
              inputValue={valueFacTwo}
              onInputChange={(event, newInputValue) => {
                setValueFacTwo(newInputValue);
              }}
              options={faculty}
              getOptionLabel={(faculty) => faculty.faculty_name}
              renderInput={(params) => (
                <TextField {...params} label="เลือกคณะในฝันอันดับที่ 2" />
              )}
            />

            <Autocomplete
              size="small"
              fullWidth
              value={majorFacTwo}
              onChange={(event, newValue) => {
                setMajorFacTwo(newValue);
              }}
              inputValue={valueMajorTwo}
              onInputChange={(event, newInputValue) => {
                setValueMajorTwo(newInputValue);
              }}
              options={majorTwo}
              getOptionLabel={(majorTwo) => majorTwo.major_name}
              renderInput={(params) => <TextField {...params} label="สาขา" />}
            />
          </Stack>

        </DialogContent>
        <DialogActions
          sx={{ display: "flex", justifyContent: "space-between", mx: 2 }}
        >
          <Button onClick={handleClose}>ภายหลัง</Button>
          <Button variant="contained" color="success" onClick={handleSubmit}>ยืนยัน</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
