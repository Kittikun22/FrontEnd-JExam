import React, { useState, useEffect } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Box, Typography, Button, Paper, Stack } from "@mui/material";
import BluePrint from "./BluePrint";
import SnackbarAlert from "../SnackbarAlert";
import Login from "../Login-Dialog";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Axios from 'axios'


const CryptoJS = require("crypto-js");
const EncryptSecret = "Jknow2022";


function Introduction({
  user,
  examDetail,
  myExamList,
  cartItem,
  setCartItem,
}) {

  const [myFavExam, setMyFavExam] = useState([])
  const bluePrint = JSON.parse(examDetail.blueprint);

  const [openLogin, setOpenLogin] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [message, setMessage] = useState("");
  const [snackBarColor, setSnackBarColor] = useState();

  const onAddToCart = (exam) => {
    if (!user) {
      setOpenLogin(true);
    } else {
      const check_index = cartItem.findIndex(
        (item) => item.exam_id === exam.exam_id
      );
      if (check_index !== -1) {
        setMessage(exam.name + " มีในตะกร้าอยู่แล้ว");
        setSnackBarColor("error");
        setOpenSnackBar(true);
      } else {
        setCartItem(JSON.parse(CryptoJS.AES.decrypt(localStorage.getItem('cart'), EncryptSecret).toString(CryptoJS.enc.Utf8)));
        setCartItem((cartItem) => [...cartItem, exam]);
        setMessage(exam.name + " ถูกเพิ่มเข้าตะกร้าแล้ว");
        setSnackBarColor("success");
        setOpenSnackBar(true);
      }
    }
  };

  useEffect(() => {
    if (user) {
      Axios.post("http://localhost:8000/getFavExams", {
        user_id: user.user_id
      }).then((res) => {
        if (res.data[0].fav_exam === null) {
          //
        } else {
          setMyFavExam(JSON.parse(res.data[0].fav_exam))
        }
      })
    }
  }, [user])

  useEffect(() => {
    if (user) {
      Axios.put("http://localhost:8000/updateFavExams", {
        user_id: user.user_id,
        myFavExam: JSON.stringify(myFavExam)
      })
    }
  }, [myFavExam])

  const onClickFavExam = (exam_id) => {
    const check_index = myFavExam.findIndex(item => item.exam_id === exam_id);
    if (check_index !== -1) {
      //
    } else {
      setMyFavExam(myFavExam => [...myFavExam, { exam_id: exam_id }])
      Axios.put("http://localhost:8000/increaseFavExams", {
        exam_id: exam_id,
      })
    }
  }


  const onUnFavExam = (exam_id) => {
    setMyFavExam((favExams) => favExams.filter((favExam) => favExam.exam_id !== exam_id));
    Axios.put("http://localhost:8000/decreaseFavExams", {
      exam_id: exam_id,
    })
  };


  return (
    <>
      <SnackbarAlert
        open={openSnackBar}
        setOpen={setOpenSnackBar}
        message={message}
        color={snackBarColor}
      />
      <Login openLogin={openLogin} setOpenLogin={setOpenLogin} />

      <Box
        sx={{
          py: 5,
          mx: { xs: 2, md: 15 },
          pb: 10,
        }}
      >
        <Stack spacing={2}>
          <Paper
            elevation={2}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              borderRadius: 5,
              p: 2,
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box
              component="img"
              src={`/${examDetail.pic}`}
              sx={{
                width: "225px",
                borderRadius: 3,
              }}
            />

            <Stack spacing={2}>
              <Box>
                <Typography
                  sx={{
                    display: "inline",
                    borderBottom: "4px solid #a0d64b",
                    fontSize: "1.3rem",
                    fontWeight: 600,
                    textAlign: "center",
                  }}
                >
                  {examDetail.name}
                </Typography>
              </Box>

              <Box>
                <Typography sx={{ fontSize: "1.1rem" }}>
                  ชื่อวิชา : {examDetail.name}
                  <br />
                  วิชา : {examDetail.subject_name}
                  <br />
                  สนามสอบ : {examDetail.category_name}
                  <br />
                  รายละเอียด : {examDetail.detail}
                  <br />
                  {myExamList?.findIndex(
                    (item) => item.exam_id === examDetail.exam_id
                  ) === -1
                    ? `ราคา : ${examDetail.amount} บาท`
                    : null}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: { xs: "center", md: "flex-start" } }}>
                  {myFavExam?.findIndex(fav => fav.exam_id === examDetail.exam_id) === -1 ?
                    <Tooltip title="ชื่นชอบ">
                      <IconButton onClick={() => onClickFavExam(examDetail.exam_id)}>
                        <FavoriteIcon sx={{
                          color: myFavExam?.findIndex(fav => fav.exam_id === examDetail.exam_id) === -1 ? 'grey' : '#E90064'
                        }} />
                      </IconButton>
                    </Tooltip>
                    :
                    <Tooltip title="ยกเลิกการชื่นชอบ">
                      <IconButton onClick={() => onUnFavExam(examDetail.exam_id)}>
                        <FavoriteIcon sx={{
                          color: myFavExam?.findIndex(fav => fav.exam_id === examDetail.exam_id) === -1 ? 'grey' : '#E90064'
                        }} />
                      </IconButton>
                    </Tooltip>
                  }

                  <Tooltip title="จำนวนคนชื่นชอบ">
                    <Typography alignSelf="center" variant='body2'>{examDetail.favorite} ครั้ง</Typography>
                  </Tooltip>
                </Box>
              </Box>

              {myExamList?.findIndex(
                (item) => item.exam_id === examDetail.exam_id
              ) === -1 ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<AddShoppingCartIcon />}
                    sx={{ borderRadius: 5, width: "200px" }}
                    onClick={() => onAddToCart(examDetail)}
                  >
                    <Typography sx={{ fontSize: "1.1rem", fontWeight: 600 }}>
                      เพิ่มลงรถเข็น
                    </Typography>
                  </Button>
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  <Button
                    variant="contained"
                    color="warning"
                    sx={{ borderRadius: 5, width: "200px" }}
                    href={`/exam/${examDetail.exam_id}`}
                  >
                    <Typography sx={{ fontSize: "1rem", fontWeight: 600 }}>
                      เริ่มทำข้อสอบ
                    </Typography>
                  </Button>
                </Box>
              )}
            </Stack>
          </Paper>

          {bluePrint ? (
            <>
              <Box>
                <Typography
                  sx={{
                    display: "inline",
                    borderBottom: "4px solid #a0d64b",
                    fontSize: "1.5rem",
                    fontWeight: 600,
                  }}
                >
                  โครงสร้างข้อสอบ (EXAM BLUEPRINT)
                </Typography>
              </Box>
              <Paper
                elevation={2}
                sx={{
                  borderRadius: 5,
                  p: 2,
                }}
              >
                <Box px={{ xs: 0, md: 2 }}>
                  <Typography
                    sx={{
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      color: "#019267",
                      mb: 2,
                    }}
                  >
                    {examDetail.name}
                  </Typography>
                  <BluePrint bluePrint={bluePrint} />
                </Box>
              </Paper>
            </>
          ) : (
            <>
              <Box>
                <Typography
                  sx={{
                    display: "inline",
                    borderBottom: "4px solid #a0d64b",
                    fontSize: "1.5rem",
                    fontWeight: 600,
                  }}
                >
                  โครงสร้างข้อสอบ (EXAM BLUEPRINT)
                </Typography>
              </Box>
              <Paper
                elevation={2}
                sx={{
                  borderRadius: 5,
                  p: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1.3rem",
                    fontWeight: 600,
                    color: "#019267",
                    mb: 2,
                  }}
                >
                  ยังไม่มีโครงสร้างข้อสอบ
                </Typography>
              </Paper>
            </>
          )}
        </Stack>
      </Box>
    </>
  );
}

export default Introduction;
