import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {
  CardActionArea,
  CardActions,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { motion } from 'framer-motion'
import AnalysisDialog from "./AnalysisDialog";

function ProfileAnalysis({ user }) {

  const [openAnalysis, setOpenAnalysis] = useState(false)
  const [selectExamId, setSelectExamId] = useState()
  const [ProductName, setProductName] = useState()

  const [myExamList, setMyExamList] = useState([]);

  useEffect(() => {
    Axios.post("http://localhost:8000/getUserExams", {
      user_id: user.user_id,
    }).then((res) => {
      setMyExamList(res.data);
    });
  }, []);

  const handleAnalysis = (exam_id, Product_Name) => {
    setSelectExamId(exam_id)
    setProductName(Product_Name)
    setOpenAnalysis(true)
  }

  console.log(myExamList);

  return (
    <>

      <AnalysisDialog user_id={user.user_id} exam_id={selectExamId} ProductName={ProductName} setSelectExamId={setSelectExamId} openAnalysis={openAnalysis} setOpenAnalysis={setOpenAnalysis} />

      <Box m={2}>
        <Typography
          sx={{
            display: "inline",
            fontSize: "2rem",
            borderBottom: "4px solid #a0d64b",
          }}
        >
          วิเคราะห์คะแนน
        </Typography>
      </Box>

      <Box
        p={{ xs: 1, md: 2 }}
        m={{ xs: 1, md: 2 }}
        sx={{ borderRadius: 3, bgcolor: "white", boxShadow: 1 }}
      >
        <Box
          sx={{
            display: myExamList?.length === 0 ? "block" : "none",
          }}
        >
          <Typography sx={{ textAlign: "center", fontSize: "1.2rem" }}>
            ยังไม่มีผลการทำข้อสอบ
          </Typography>
          <Typography sx={{ textAlign: "center" }}>
            <Typography
              component={Link}
              href="/profile"
              onClick={() =>
                localStorage.setItem("ActiveContent", "profile-myexam")
              }
            >
              ทำข้อสอบ
            </Typography>
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 1, md: 2 },
            marginBottom: "80px",
            marginTop: 2
          }}
        >
          {myExamList?.map((val, key) => {
            return (
              <Box
                component={motion.div}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}>
                <Card
                  sx={{ width: { xs: 175, md: 225 }, borderRadius: 7 }}
                  key={key}
                >
                  <CardActionArea href={`/introduction/${val.exam_id}`}>
                    <CardMedia
                      component="img"
                      height="150px"
                      image={val.pic}
                      alt={val.name}
                    />
                    <CardContent>
                      <Typography
                        noWrap
                        sx={{ fontSize: "1.2rem", fontWeight: 600 }}
                      >
                        {val.name}
                      </Typography>
                      <Typography
                        color="text.secondary"
                        sx={{
                          height: "50px",
                          fontSize: ".85rem",
                        }}
                      >
                        {val.detail}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Stack spacing={1}>
                      <Button
                        variant="contained"
                        color="success"
                        href={`/answer/${val.exam_id}`}
                        sx={{
                          borderRadius: 3,
                          fontSize: { xs: ".8rem", md: "" },
                        }}
                      >
                        ดูเฉลย
                      </Button>

                      <Button
                        variant="contained"
                        color="warning"
                        sx={{
                          borderRadius: 3,
                          fontSize: { xs: ".8rem", md: "" },
                        }}
                        onClick={() => handleAnalysis(val.exam_id, val.name)}
                      >
                        ดูผลการวิเคราะห์คะแนน
                      </Button>
                    </Stack>
                  </CardActions>
                </Card>
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
}

export default ProfileAnalysis;
