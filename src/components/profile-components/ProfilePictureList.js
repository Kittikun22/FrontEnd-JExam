import React, { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Axios from "axios";

export default function ProfilePictureList({ setNewPic, newPic }) {
  const [open, setOpen] = useState(false);
  const [pictureList, setPictureList] = useState();

  useEffect(() => {
    Axios.get("http://localhost:8000/getProfilePicture").then((res) => {
      setPictureList(res.data);
    });
  }, []);

  console.log(pictureList);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        เลือกรูปโปรไฟล์
      </Button>
      <Dialog
        open={open}
        fullWidth={true}
        maxWidth={"xs"}
        onClose={handleClose}
      >
        <DialogTitle>
          <Typography sx={{ fontSize: "1.5rem", textAlign: "center" }}>
            เลือกรูปโปรไฟล์
          </Typography>
        </DialogTitle>
        <DialogContent>
          <ImageList cols={3} m={2}>
            {pictureList?.map((val, key) => {
              return (
                <ImageListItem key={key}>
                  <Button>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        component="img"
                        src={val.picture_path}
                        sx={{
                          width: "75px",
                          height: "75px",
                        }}
                        onClick={() => {
                          setNewPic(val.picture_path);
                        }}
                      />
                      <CheckCircleIcon
                        sx={{
                          color: "#a0d64b",
                          display:
                            newPic === val.picture_path
                              ? "flex"
                              : "none",
                        }}
                      />
                    </Box>
                  </Button>
                </ImageListItem>
              )
            })}
          </ImageList>
        </DialogContent>
        <DialogActions sx={{ display: "flex", justifyContent: "space-around" }}>
          <Button onClick={handleClose} sx={{ fontSize: "1.1rem" }}>
            กลับ
          </Button>
          <Button onClick={handleClose} sx={{ fontSize: "1.1rem" }}>
            ยืนยัน
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
