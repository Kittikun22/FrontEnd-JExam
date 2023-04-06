// import { useState, useEffect } from "react";
// import Axios from "axios";
// import Button from "@mui/material/Button";
// import * as React from "react";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import LinearProgress, {
//   linearProgressClasses,
// } from "@mui/material/LinearProgress";
// import { pink, green, grey } from "@mui/material/colors";
// import SwipeableDrawer from "@mui/material/SwipeableDrawer";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
// import { thaiexam } from "./questiondatanetsatthai";
// import { englishexam } from "./questiondatanetsatenglish";
// import { mathematicsexam } from "./questiondatanetsatmathematics";
// import { scienceandtechnologyexam } from "./questiondatanetsatscienceandtechnology";
// import { chemistryexam } from "./questiondatanetsatchemistry";
// import { biologyexam } from "./questiondatanetsatbiology";
// import { physicsexam } from "./questiondatanetsatphysics";

// import ExamAlertDialog from "../Exams/ExamAlertDialog";

// let examing;
// let score;
// const Modalstyle = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 300,
//   bgcolor: "background.paper",
//   boxShadow: 24,
//   borderRadius: 2,
//   pt: 1.5,
//   px: 4,
//   pb: 1.5,
// };
// function System({ subject, productId, user }) {

//   const [userAuth, setUserAuth] = useState();
//   if (!userAuth) {
//     setUserAuth(JSON.parse(localStorage.getItem("users")));
//   }
//   const [exam_id, setExamid] = useState();
//   const initailExam = () => {
//     switch (subject) {
//       case "thai":
//         examing = thaiexam;
//         setExamid(0);
//         break;
//       case "english":
//         examing = englishexam;
//         setExamid(1);
//         break;
//       case "mathematics":
//         examing = mathematicsexam;
//         setExamid(2);
//         break;
//       case "scienceandtechnology":
//         examing = scienceandtechnologyexam;
//         setExamid(3);
//         break;
//       case "chemistry":
//         examing = chemistryexam;
//         setExamid(4);
//         break;
//       case "biology":
//         examing = biologyexam;
//         setExamid(5);
//         break;
//       case "physics":
//         examing = physicsexam;
//         setExamid(6);
//         break;
//       default:
//         break;
//     }
//   };
//   if (!examing) {
//     initailExam(subject);
//   }
//   const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
//     height: 10,
//     borderRadius: 5,
//     [`&.${linearProgressClasses.colorPrimary}`]: {
//       backgroundColor:
//         theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
//     },
//     [`& .${linearProgressClasses.bar}`]: {
//       borderRadius: 5,
//       backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
//     },
//   }));

//   //Modal Submit
//   const [openModal, setOpenModal] = React.useState(false);
//   const handleOpen = () => {
//     setOpenModal(true);
//   };
//   const handleClose = () => {
//     setOpenModal(false);
//   };

//   //Modalinfo Before Take an exam
//   const [openModalinfo, setOpenModalinfo] = React.useState(false);
//   const handleOpeninfo = () => {
//     setOpenModalinfo(true);
//   };
//   const handleCloseinfo = () => {
//     setOpenModalinfo(false);
//   };

//   //ModalinfoRetake
//   const [openModalinfoRetake, setOpenModalinfoRetake] = React.useState(false);
//   const handleOpeninfoRetake = () => {
//     setOpenModalinfoRetake(true);
//   };
//   const handleCloseinfoRetake = () => {
//     setOpenModalinfoRetake(false);
//   };

//   //Modalfinish
//   const [openModalfinish, setOpenModalfinish] = React.useState(false);
//   const handleOpenfinish = () => {
//     setOpenModalfinish(true);
//   };
//   const handleClosefinish = () => {
//     setOpenModalfinish(false);
//   };

//   //Modalfinishconfirm
//   const [openModalfinishconfirm, setOpenModalfinishconfirm] =
//     React.useState(false);
//   const handleOpenfinishconfirm = () => {
//     setOpenModalfinishconfirm(true);
//   };
//   const handleClosefinishconfirm = () => {
//     setOpenModalfinishconfirm(false);
//   };

//   const [datapost, setDatapost] = useState([]);
//   const GenerateDataPost = () => {
//     datapost.user_id = userAuth.user_id;
//     datapost.exam_id = exam_id;
//     datapost.score = score;
//     datapost.answer = JSON.stringify(newdata);
//     datapost.point = JSON.stringify(categorydata);
//     datapost.catpoint = JSON.stringify(categorypoint);
//   };

//   const SaveAnswerUser = (data) => {
//     Axios.post("http://localhost:8000/saveAnswer", {
//       user_id: data.user_id,
//       exam_id: data.exam_id,
//       answer: data.answer,
//       point: data.point,
//       catpoint: data.catpoint,
//       score: data.score,
//     }).then((res) => {
//       if (res.status === 200) {
//       }
//     });
//   };

//   const [Retake, setRetake] = React.useState(false);
//   const getTakingAnswer = () => {
//     Axios.post("http://localhost:8000/getTakingAnswer", {
//       user_id: userAuth.user_id,
//       exam_id: exam_id,
//     }).then((res) => {
//       if (res.status === 200) {
//         if (!res.data[0]) {
//           handleOpeninfo();
//         } else {
//           handleOpeninfoRetake();
//           setRetake(true);
//         }
//       }
//     });
//   };

//   const newexam = examing.questions;
//   const actionshuffle = () => {
//     let k = 0;
//     const linkedquestionid = examing.questioninfo[0].Linkedquestionid;

//     for (var j = 0; j < examing.questions.length; j++) {
//       if (j != linkedquestionid[k]) {
//         const getarr = examing.questions[j].choice;
//         shuffle(getarr);
//       } else {
//         for (var l = 0; l < examing.questions[j].numberoflinkedquestion; l++) {
//           const getarr = examing.questions[j].linkedquestion[l].choice;
//           shuffle(getarr);
//         }
//         if (examing.questions[j].shufflequestion == true) {
//           shuffle(examing.questions[j].linkedquestion);
//         }
//         k++;
//       }
//     }
//     shuffle(newexam);
//     generateexamarr();
//   };

//   const [generateexam, setGenerateexam] = useState(false);
//   const generateexamarr = () => {
//     for (let i = 0; i < newexam.length; i++) {
//       let linkedquestion = newexam[i].numberoflinkedquestion;
//       if (!linkedquestion) {
//       } else {
//         let j = 0;
//         let l = i;
//         if (j < linkedquestion) {
//           if (j == 0) {
//             newexam[i].id = examing.questions[l].linkedquestion[j].id;
//             newexam[i].question =
//               examing.questions[l].linkedquestion[j].question;
//             newexam[i].Answer = examing.questions[l].linkedquestion[j].Answer;
//             newexam[i].AnswerDescription =
//               examing.questions[l].linkedquestion[j].AnswerDescription;
//             newexam[i].attachimglink =
//               examing.questions[l].linkedquestion[j].attachimglink;
//             newexam[i].AnswerDescriptionAttachImg =
//               examing.questions[l].linkedquestion[j].AnswerDescriptionAttachImg;
//             newexam[i].Category =
//               examing.questions[l].linkedquestion[j].Category;
//             newexam[i].choice = examing.questions[l].linkedquestion[j].choice;
//             newexam[i].linkedquestionboolean = true;
//             newexam[i].linkedquestionindex = j;
//             j++;
//             i++;
//           }
//           for (let k = 1; k < linkedquestion; k++) {
//             const temparr = {};
//             temparr.question = examing.questions[l].linkedquestion[j].question;
//             temparr.id = examing.questions[l].linkedquestion[j].id;
//             temparr.choice = examing.questions[l].linkedquestion[j].choice;
//             temparr.Answer = examing.questions[l].linkedquestion[j].Answer;
//             temparr.AnswerDescription =
//               examing.questions[l].linkedquestion[j].AnswerDescription;
//             temparr.attachimglink =
//               examing.questions[l].linkedquestion[j].attachimglink;
//             temparr.AnswerDescriptionAttachImg =
//               examing.questions[l].linkedquestion[j].AnswerDescriptionAttachImg;
//             temparr.linkedquestionboolean = true;
//             temparr.linkedquestionindex = j;

//             let m = false;
//             if (!m) {
//               const position = l + k;
//               newexam.splice(position, 0, temparr);
//               m = true;
//             }
//             j++;
//             i++;
//             if (linkedquestion - k == 1) {
//               i--;
//             }
//           }
//         }
//       }
//     }
//     setGenerateexam(true);
//   };
//   const ContentAlign = (questionStr) => {
//     let images = [];
//     let src = [];
//     let height = [];
//     let booleanheight = [];
//     let booleanpx = [];
//     let i = 0;
//     while ((i = questionStr.indexOf("<img", i)) !== -1) {
//       const start = i + 5;
//       const end = questionStr.indexOf("</img>", start) - 1;
//       const attributes = questionStr.slice(start, end); //.trim()
//       images.push(attributes);

//       let ordersubstringsrcfirst = attributes.indexOf("src=") + 5;
//       let ordersubstringsrcsecond = attributes.indexOf('"', 10);
//       var substringsrc = attributes.substring(
//         ordersubstringsrcfirst,
//         ordersubstringsrcsecond
//       );
//       src.push(substringsrc);
//       let middlepositionheight = attributes.indexOf("height=");
//       let middlepositionwidth = attributes.indexOf("width=");

//       let ordersubstringheightfirst;
//       let attributessliced;
//       if (middlepositionheight !== -1) {
//         booleanheight.push(true);
//         attributessliced = attributes.slice(
//           middlepositionheight,
//           questionStr.length
//         );
//         ordersubstringheightfirst = attributessliced.indexOf("height=") + 8;
//       } else if (middlepositionwidth !== -1) {
//         booleanheight.push(false);
//         attributessliced = attributes.slice(
//           middlepositionwidth,
//           questionStr.length
//         );
//         ordersubstringheightfirst = attributessliced.indexOf("width=") + 7;
//       }
//       let attributespx = attributessliced.indexOf("px");
//       let attributespercent = attributessliced.indexOf("%");

//       let ordersubstringheightsecond;
//       if (attributespx !== -1) {
//         booleanpx.push(true);
//         ordersubstringheightsecond = attributessliced.indexOf("px");
//       } else if (attributespercent !== -1) {
//         booleanpx.push(false);
//         ordersubstringheightsecond = attributessliced.indexOf("%");
//       }

//       let substringheight = attributessliced.substring(
//         ordersubstringheightfirst,
//         ordersubstringheightsecond
//       );
//       height.push(substringheight);
//       i = end + 6;
//     }

//     const parts = questionStr.split(/<img.*?<\/img>/);
//     const partslength = parts.length;
//     const checkpartlastindex = (i) => {
//       if (i != partslength - 1) {
//         if (booleanheight[i] === true) {
//           if (booleanpx[i] === true) {
//             return (
//               <>
//                 {" "}
//                 <img src={src[i]} height={height[i] + "px"} key={i} />{" "}
//               </>
//             );
//           } else {
//             return (
//               <>
//                 {" "}
//                 <img src={src[i]} height={height[i] + "%"} key={i} />{" "}
//               </>
//             );
//           }
//         } else {
//           if (booleanpx[i] === true) {
//             return (
//               <>
//                 {" "}
//                 <img src={src[i]} width={height[i] + "px"} key={i} />{" "}
//               </>
//             );
//           } else {
//             return (
//               <>
//                 {" "}
//                 <img src={src[i]} width={height[i] + "%"} key={i} />{" "}
//               </>
//             );
//           }
//         }
//       } else {
//         return <> </>;
//       }
//     };

//     return (
//       <>
//         {parts.map((part, i) => (
//           <>
//             {strfindtag(part)}
//             {checkpartlastindex(i)}
//           </>
//         ))}
//       </>
//     );
//   };

//   const getChoiceText = (indexofchoiceinlinkedquestion, indexofquestion) => {
//     if (generateexam != false) {
//       if (
//         examing.questions[indexofquestion].choice[indexofchoiceinlinkedquestion]
//           .choiceimg == true
//       ) {
//         let imgSrc =
//           examing.questions[indexofquestion].choice[
//             indexofchoiceinlinkedquestion
//           ].choicetext;
//         let imgHeight =
//           examing.questions[indexofquestion].choice[
//             indexofchoiceinlinkedquestion
//           ].imgheight;
//         return <img src={imgSrc} height={imgHeight} />;
//       } else {
//         const choiceStr =
//           examing.questions[indexofquestion].choice[
//             indexofchoiceinlinkedquestion
//           ].choicetext;
//         return <>{ContentAlign(choiceStr)}</>;
//       }
//     }
//   };

//   const getChoiceValue = (indexofchoiceinlinkedquestion, indexofquestion) => {
//     if (generateexam != false) {
//       return examing.questions[indexofquestion].choice[
//         indexofchoiceinlinkedquestion
//       ].choicevalue;
//     }
//   };

//   const getQuestion = (indexofquestion) => {
//     if (generateexam != false) {
//       let Str = examing.questions[indexofquestion].question;
//       return <>{ContentAlign(Str)}</>;
//     }
//   };

//   const strfindtag = (Str) => {
//     const parts = Str.split(
//       /(<(?:sub|sup|fraction|overline|br|tab|2tab|3tab|space|2space|3space|4space|5space|6space)>.*?<\/(?:sub|sup|fraction|overline|br|tab|2tab|3tab|space|2space|3space|4space|5space|6space)>)/
//     );
//     return parts.map((part) => {
//       if (part.startsWith("<sub>") && part.endsWith("</sub>")) {
//         return <sub>{part.slice(5, -6)}</sub>;
//       } else if (part.startsWith("<sup>") && part.endsWith("</sup>")) {
//         return <sup>{part.slice(5, -6)}</sup>;
//       } else if (
//         part.startsWith("<fraction>") &&
//         part.endsWith("</fraction>")
//       ) {
//         const fractionStr = part.slice(10, -11);
//         const fractionArr = fractionStr.split("|");
//         return (
//           <>
//             <div className="inline-block">
//               <div className="inline-grid">
//                 <div className="top">{fractionArr[0]}</div>
//                 <div className="bottom">{fractionArr[1]}</div>
//               </div>
//             </div>
//           </>
//         );
//       } else if (
//         part.startsWith("<overline>") &&
//         part.endsWith("</overline>")
//       ) {
//         return (
//           <>
//             <div className="overline">{part.slice(10, -11)}</div>{" "}
//           </>
//         );
//       } else if (part.startsWith("<br>") && part.endsWith("</br>")) {
//         return (
//           <>
//             <br></br>
//             {part.slice(4, -5)}
//           </>
//         );
//       } else if (part.startsWith("<tab>") && part.endsWith("</tab>")) {
//         return (
//           <> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{part.slice(5, -6)}</>
//         );
//       } else if (part.startsWith("<2tab>") && part.endsWith("</2tab>")) {
//         return (
//           <>
//             {" "}
//             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//             {part.slice(6, -7)}
//           </>
//         );
//       } else if (part.startsWith("<3tab>") && part.endsWith("</3tab>")) {
//         return (
//           <>
//             {" "}
//             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//             {part.slice(6, -7)}
//           </>
//         );
//       } else if (part.startsWith("<space>") && part.endsWith("</space>")) {
//         return <>&nbsp;{part.slice(7, -8)}</>;
//       } else if (part.startsWith("<2space>") && part.endsWith("</2space>")) {
//         return <>&nbsp;&nbsp;{part.slice(8, -9)}</>;
//       } else if (part.startsWith("<3space>") && part.endsWith("</3space>")) {
//         return <>&nbsp;&nbsp;&nbsp;{part.slice(8, -9)}</>;
//       } else if (part.startsWith("<4space>") && part.endsWith("</4space>")) {
//         return <>&nbsp;&nbsp;&nbsp;&nbsp;{part.slice(8, -9)}</>;
//       } else if (part.startsWith("<5space>") && part.endsWith("</5space>")) {
//         return <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{part.slice(8, -9)}</>;
//       } else if (part.startsWith("<6space>") && part.endsWith("</6space>")) {
//         return <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{part.slice(8, -9)}</>;
//       }
//       return <>{part}</>;
//     });
//   };

//   const getParagraph = (Str) => {
//     if (Str) {
//       return <>{ContentAlign(Str)}</>;
//     }
//   };

//   const [newarrarranged, setArrarrange] = React.useState(null);
//   const [checkanswer, setCheckanswer] = useState([]);
//   const [newcheckanswer, setNewcheckanswer] = useState([]);
//   const arrangearr = (i, order) => { };
//   const [newdata, setNewdata] = useState({});
//   const [data, setData] = useState({});
//   const runloop = () => {
//     for (let i = 0; i < examing.questions.length; i++) {
//       const no = "no." + newexam[i].id;

//       data[no] = null;
//       setCheckanswer(checkanswer.push(false));
//     }
//     setNewdata(data);
//     setNewcheckanswer(checkanswer);

//     for (
//       let c = 0;
//       c < Object.keys(examing.questioninfo[0].Category).length;
//       c++
//     ) {
//       const no = Object.keys(examing.questioninfo[0].Category)[c];
//       categorydata[no] = 0;
//     }

//     for (
//       let d = 0;
//       d < Object.keys(examing.questioninfo[0].Category).length;
//       d++
//     ) {
//       const no = Object.keys(examing.questioninfo[0].Category)[d];
//       categorypoint[no] = 0;
//     }
//   };

//   const Answered = styled("div")(({ theme }) => ({
//     ...theme.typography.button,
//     backgroundColor: green[400],
//     padding: theme.spacing(1),
//     width: 35,
//     borderRadius: 10,
//     margin: 5,
//     display: "inline-block",
//   }));
//   const Notanswer = styled("div")(({ theme }) => ({
//     ...theme.typography.button,
//     backgroundColor: pink[400],
//     padding: theme.spacing(1),
//     width: 35,
//     borderRadius: 10,
//     margin: 5,
//     display: "inline-block",
//   }));
//   const answercheck = (i) => {
//     if (newcheckanswer[i] === true) {
//       return (
//         <Answered>
//           <Typography align="center" color="white" fontSize="20px">
//             {i + 1}
//           </Typography>
//         </Answered>
//       );
//     } else {
//       return (
//         <Notanswer>
//           <Typography align="center" color="white" fontSize="20px">
//             {i + 1}
//           </Typography>
//         </Notanswer>
//       );
//     }
//   };
//   const [stateopen, setOpen] = React.useState({
//     left: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (
//       event &&
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }
//     setOpen({ ...stateopen, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <Box
//       sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 260 }}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//         <ListItem>
//           <ListItemText
//             primaryTypographyProps={{ fontSize: "0.9em", fontWeight: "400" }}
//             primary="Question"
//           />
//           <a style={{ fontSize: "1.4em" }}>
//             {countcheckanswerdata}/{examing.questioninfo[0].NumberofQuestions}
//           </a>
//         </ListItem>
//         <ListItem>
//           <ListItemText
//             primaryTypographyProps={{ fontSize: "0.9em", fontWeight: "400" }}
//             primary="Exam Timing"
//           />
//           <a style={{ fontSize: "1.4em", textAlign: "center" }}>{time}</a>
//         </ListItem>
//       </List>
//       <Divider />
//       <List>
//         <div className="Anchor">
//           {newcheckanswer.map((data, i) => (
//             <Button
//               key={i}
//               onClick={() => {
//                 forward(i);
//               }}
//               style={{
//                 backgroundColor: "unset",
//                 border: "unset",
//                 borderColor: "unset",
//                 color: "unset",
//                 padding: "0",
//               }}
//             >
//               <div key={i} style={{ display: "inline-block" }}>
//                 {answercheck(i)}
//               </div>
//             </Button>
//           ))}
//         </div>
//       </List>
//       <Divider />
//       <List>
//         <ListItem>
//           <ListItemText
//             primaryTypographyProps={{ fontSize: "1.2em", fontWeight: "400" }}
//             primary="จำนวนข้อสอบ"
//           />
//         </ListItem>
//         <ListItem>
//           <ListItemText
//             sx={{ mt: "-30px" }}
//             primaryTypographyProps={{ fontSize: "0.9em", fontWeight: "400" }}
//             primary="แบบปรนัยเลือกคำตอบ"
//           />
//           <a
//             style={{
//               fontSize: "0.9em",
//               textAlign: "center",
//               marginTop: "-35px",
//               marginLeft: "-25px",
//             }}
//           >
//             {examing.questioninfo[0].NumberofQuestions}
//           </a>
//           <ListItemText
//             sx={{ mt: "-30px" }}
//             primaryTypographyProps={{
//               fontSize: "0.9em",
//               fontWeight: "400",
//               marginLeft: "15px",
//             }}
//             primary=" ข้อ"
//           />
//         </ListItem>
//         <ListItem>
//           <ListItemText
//             primaryTypographyProps={{ fontSize: "1.2em", fontWeight: "400" }}
//             primary="เวลาทดสอบ"
//           />
//         </ListItem>
//         <ListItem>
//           <a style={{ marginTop: "-30px" }}>
//             {examing.questioninfo[0].Duration} นาที
//           </a>
//         </ListItem>
//         <Button
//           sx={{ mt: 1, mr: 1, my: 3, ml: 2 }}
//           onClick={() => {
//             forward(examing.questioninfo[0].NumberofQuestions);
//           }}
//           variant="contained"
//           color="error"
//         >
//           ไปหน้าสุดท้ายเพื่อส่งคำตอบ
//         </Button>
//       </List>
//     </Box>
//   );

//   const forward = (i) => {
//     const no = i + 1;
//     const directpage = Math.ceil(no / records_per_page);
//     changePage(directpage);
//   };
//   const [progressvalue, setProgress] = useState(0);
//   const [notNull, setNotnull] = useState(0);
//   const [helperText, setHelperText] = React.useState(null);
//   const [countcheckanswerdata, setCountcheckanswer] = useState(0);
//   const Result = (e, no, questionid) => {
//     const questionno = no;
//     const arrkey = "no." + questionid;
//     newdata[arrkey] = e.target.value;
//     setCheckanswer(newcheckanswer.splice(no, 1, true));
//     const notNullArr = newcheckanswer.filter((e) => e !== false);
//     setCountcheckanswer(notNullArr.length);
//     setNotnull(notNullArr.length);
//     let progressoutcome = parseInt(
//       (notNullArr.length / examing.questions.length) * 100
//     );
//     setProgress(progressoutcome);
//   };

//   const [error, setError] = React.useState(false);
//   const [inputdisable, setInputdisable] = React.useState(false);
//   const [category, setCategory] = React.useState(
//     examing.questioninfo[0].Category
//   );
//   const [categorydata, setCategorydata] = useState({});
//   const [categorypoint, setCategorypoint] = useState({});

//   const handleSubmitConfirm = () => {
//     handleClosefinishconfirm();
//     setInputdisable(true);
//     handleSetActiveContent();
//     //Cal Point
//     let point = 0;
//     for (let i = 0; i < examing.questions.length;) {
//       const answerkey = newexam[i].Answer;
//       const categorytemp = newexam[i].Category;
//       const categoryname = newexam[i].Category;
//       const number = "no." + newexam[i].id;
//       if (newdata[number] == answerkey) {
//         categorydata[categorytemp] =
//           categorydata[categorytemp] +
//           parseInt((1 / examing.questioninfo[0].Category[categoryname]) * 100);
//         categorypoint[categorytemp] = categorypoint[categorytemp] + 1;
//         if (categorydata[categorytemp] == 99) {
//           categorydata[categorytemp] = 100;
//         }
//         point++;
//       } else {
//       }
//       i++;
//     }
//     score = point;
//     document.getElementById("sumitans").style.display = "none";
//     document.getElementById("helperText").style.display = "none";
//     setSent(true);
//     if (Retake != true) {
//       handleOpenfinish();
//       GenerateDataPost();
//       SaveAnswerUser(datapost);
//     } else {
//       handleClosefinishconfirm();
//       let pointTempscore = categorydata;
//       let categorypointTempscore = categorypoint;
//       handleSetTempscore(exam_id, pointTempscore, categorypointTempscore);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (notNull == examing.questions.length) {
//       setInputdisable(true);
//       document.getElementById("timeelement").style.display = "none";
//       handleSetActiveContent();

//       if (sendanswer !== true) {
//         let point = 0;
//         for (let i = 0; i < examing.questions.length;) {
//           const answerkey = newexam[i].Answer;
//           const categorytemp = newexam[i].Category;
//           const categoryname = newexam[i].Category;
//           const number = "no." + newexam[i].id;
//           if (newdata[number] == answerkey) {
//             categorydata[categorytemp] =
//               categorydata[categorytemp] +
//               parseInt(
//                 (1 / examing.questioninfo[0].Category[categoryname]) * 100
//               );
//             categorypoint[categorytemp] = categorypoint[categorytemp] + 1;
//             if (categorydata[categorytemp] == 99) {
//               categorydata[categorytemp] = 100;
//             }
//             point++;
//           } else {
//           }
//           i++;
//         }
//         score = point;
//         setSent(true);
//       }
//       if (Retake != true) {
//         handleOpenfinish();
//         GenerateDataPost();
//         SaveAnswerUser(datapost);
//       } else {
//         let pointTempscore = categorydata;
//         let categorypointTempscore = categorypoint;
//         handleSetTempscore(exam_id, pointTempscore, categorypointTempscore);
//       }
//     } else {
//       handleOpenfinishconfirm();
//     }
//   };
//   const [time, setTime] = React.useState();

//   const startFnTimer = (timeLeft) => {
//     handleClose();
//     let timeLeftsec = timeLeft * 60;
//     let timeCounter = 0;

//     const updateTimer = () => {
//       let left = timeLeftsec - timeCounter;
//       if (left < 0) {
//         if (sendanswer !== true) {
//           setInputdisable(true);
//           handleSetActiveContent();
//           let point = 0;
//           for (let i = 0; i < examing.questions.length;) {
//             const answerkey = newexam[i].Answer;
//             const categorytemp = newexam[i].Category;
//             const categoryname = newexam[i].Category;
//             const number = "no." + newexam[i].id;
//             if (newdata[number] == answerkey) {
//               categorydata[categorytemp] =
//                 categorydata[categorytemp] +
//                 parseInt(
//                   (1 / examing.questioninfo[0].Category[categoryname]) * 100
//                 );
//               categorypoint[categorytemp] = categorypoint[categorytemp] + 1;
//               if (categorydata[categorytemp] == 99) {
//                 categorydata[categorytemp] = 100;
//               }
//               point++;
//             } else {
//             }
//             i++;
//           }
//           score = point;
//           document.getElementById("sumitans").style.display = "none";
//           document.getElementById("helperText").style.display = "none";
//           if (Retake != true) {
//             handleOpenfinish();
//             setSent(true);
//             GenerateDataPost();
//             SaveAnswerUser(datapost);
//           } else {
//             handleClosefinish();
//             let pointTempscore = categorydata;
//             let categorypointTempscore = categorypoint;
//             handleSetTempscore(exam_id, pointTempscore, categorypointTempscore);
//           }
//         }
//         return clearInterval(timeStart);
//       }
//       const hours = Math.floor(left / 3600);
//       left = left % 3600;
//       const minutes = Math.floor(left / 60);
//       left = left % 60;

//       const time = `
//               ${hours < 10 ? "0" + hours : hours}
//                : ${minutes < 10 ? "0" + minutes : minutes}
//                : ${left < 10 ? "0" + left : left}
//           `;
//       setTime(time);
//       timeCounter++;
//     };
//     let timeStart = setInterval(updateTimer, 1000);
//     setStart("Started");
//     document.getElementById("start").style.display = "none";
//     document.getElementById("initialsection").style.display = "none";
//     document.getElementById("header").style.display = "block";
//     document.getElementById("pagesection").style.display = "block";
//     document.getElementById("buttoncheckans").style.display = "block";
//     document.getElementById("swipeabledrawer").style.display = "block";
//     var btn_next = document.getElementById("btn_next");
//     btn_next.style.visibility = "visible";
//     for (let i = 0; i < records_per_page; i++) {
//       document.getElementById(i).style.display = "block";
//     }
//     document.getElementById("btn_next").style.display = "inline-block";
//     document.getElementById("btn_prev").style.display = "inline-block";
//   };
//   const getquestionid = (i) => {
//     return "question:" + (i + 1);
//   };
//   const [current_page, setPage] = React.useState(1);
//   const records_per_page = 5;
//   const [start, setStart] = React.useState(null);
//   const [sendanswer, setSent] = React.useState(false);
//   const prevPage = (current_page) => {
//     if (current_page > 1) {
//       setPage(current_page - 1);
//       changePage(current_page - 1);
//       window.scroll({
//         top: 0,
//         left: 0,
//         behavior: "smooth",
//       });
//     }
//   };
//   const nextPage = (current_page) => {
//     if (current_page < numPages()) {
//       setPage(current_page + 1);
//       changePage(current_page + 1);
//       window.scroll({
//         top: 0,
//         left: 0,
//         behavior: "smooth",
//       });
//     }
//   };
//   const changePage = (page) => {
//     var btn_next = document.getElementById("btn_next");
//     var btn_prev = document.getElementById("btn_prev");
//     var page_span = document.getElementById("page");
//     var sumitans = document.getElementById("sumitans");
//     var helperText = document.getElementById("helperText");

//     if (page < 1) page = 1;
//     if (page > numPages()) page = numPages();

//     for (var i = 0; i < examing.questions.length; i++) {
//       document.getElementById(i).style.display = "none";
//     }
//     for (
//       var i = (page - 1) * records_per_page;
//       i < page * records_per_page && i < examing.questions.length;
//       i++
//     ) {
//       if (start !== null) {
//         document.getElementById(i).style.display = "block";
//       }
//     }
//     page_span.innerHTML = page + "/" + numPages();
//     if (page == 1) {
//       btn_prev.style.visibility = "hidden";
//     } else {
//       btn_prev.style.visibility = "visible";
//     }
//     if (page == numPages()) {
//       btn_next.style.visibility = "hidden";
//       sumitans.style.display = "block";
//       helperText.style.display = "block";
//     } else {
//       btn_next.style.visibility = "visible";
//       sumitans.style.display = "none";
//       helperText.style.display = "none";
//     }
//   };
//   const numPages = () => {
//     {
//       return Math.ceil(examing.questions.length / records_per_page);
//     }
//   };
//   const [info] = examing.questioninfo;
//   const shuffle = (array) => {
//     let currentIndex = array.length,
//       randomIndex;
//     while (currentIndex != 0) {
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;
//       [array[currentIndex], array[randomIndex]] = [
//         array[randomIndex],
//         array[currentIndex],
//       ];
//     }
//     return array;
//   };

//   const categorydatachart = [];
//   for (var n = 0; n < Object.keys(categorydata).length; n++) {
//     const subject = Object.keys(categorydata)[n];
//     const subjectvalue = categorydata[subject];
//     categorydatachart.push({ subject: subject, A: subjectvalue, fullMark: 10 });
//   }
//   const handleSetActiveContent = () => {
//     localStorage.setItem("ActiveContent", "profile-analysis");
//   };
//   const handleSetTempscore = (exam_id, point, categorypoint) => {
//     let tempScore = {
//       exam_id: exam_id,
//       point: JSON.stringify(point),
//       categorypoint: JSON.stringify(categorypoint),
//     };
//     localStorage.setItem("Temp_score", JSON.stringify(tempScore));
//     window.location.pathname = "radarchart/temp";
//   };


//   const [openDialog, setOpenDialog] = useState(false)
//   const [message, setMessage] = useState('')


//   useEffect(() => {

//     if (user) {
//       Axios.post('http://localhost:8000/UserProduct', {
//         user_id: user.user_id,
//         product_id: productId
//       }).then((res) => {
//         if (res.data.message === 'ok') {
//           console.log(user.user_id);
//           initailExam(subject);
//           actionshuffle();
//           runloop();
//           getTakingAnswer();
//         } else {
//           window.location = '/'
//         }
//       })
//     }

//   }, []);

//   return (
//     <>

//       <ExamAlertDialog openDialog={openDialog} setOpenDialog={setOpenDialog} message={message} productId={productId} />

//       <div className="System-Question-Haeder" >
//         <div
//           id="header"
//           style={{ display: "none", padding: "0.5vh 3vh 0vh 3vh" }}
//         >
//           <div className="" >
//             {examing.questioninfo.map((info, key) => (
//               <div
//                 className="text-left my-1"
//                 key={key}
//                 sx={{ my: 2 }}
//                 style={{ marginTop: 10 }}
//               >
//                 <a style={{ fontSize: 20, fontWeight: 800, marginTop: 10 }}>
//                   {info.Title}
//                 </a>
//               </div>
//             ))}
//             <div>
//               <div
//                 className="text-center"
//                 id="barprogress"
//                 style={{ display: "flex", marginTop: -20 }}
//               >
//                 <div style={{ display: "inline-block" }}>
//                   {["left"].map((anchor, i) => (
//                     <React.Fragment key={anchor}>
//                       <Button
//                         key={i}
//                         variant="outlined"
//                         id="buttoncheckans"
//                         onClick={toggleDrawer(anchor, true)}
//                         style={{
//                           backgroundColor: "unset",
//                           border: "unset",
//                           display: "none",
//                           borderColor: "unset",
//                           color: "unset",
//                           left: "0px",
//                           zIndex: "10",
//                           marginLeft: "-1.5rem",
//                         }}
//                       >
//                         <ListItemIcon
//                           style={{
//                             minWidth: "5px",
//                             width: "10px",
//                             marginTop: "20px",
//                             marginBottom: "0px",
//                             color: "rgba(0, 0, 0, 0.3)",
//                           }}
//                         >
//                           <ArrowForwardIosIcon />
//                         </ListItemIcon>
//                       </Button>
//                       <SwipeableDrawer
//                         id="swipeabledrawer"
//                         anchor={anchor}
//                         open={stateopen[anchor]}
//                         onClose={toggleDrawer(anchor, false)}
//                         onOpen={toggleDrawer(anchor, true)}
//                         style={{ display: "none" }}
//                       >
//                         {list(anchor)}
//                       </SwipeableDrawer>
//                     </React.Fragment>
//                   ))}
//                 </div>

//                 <div
//                   id="timeelement"
//                   style={{ display: "inline-block", lineHeight: "4.5rem" }}
//                 >
//                   {time}
//                 </div>
//                 <Box
//                   sx={{ flexGrow: 1 }}
//                   style={{ display: "inline", lineHeight: "4.5rem" }}
//                 >
//                   <BorderLinearProgress
//                     className="w-75 mx-3"
//                     variant="determinate"
//                     style={{ display: "inline-block" }}
//                     value={progressvalue}
//                   />
//                   <div style={{ display: "inline-block" }} sx={{ m: 1 }}>
//                     {progressvalue}%
//                   </div>
//                 </Box>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="System container">
//         <div className="System-Question-Body">
//           <div
//             className="text-right mr-3"
//             id="pagesection"
//             style={{ display: "none", paddinRight: "5%" }}
//           >
//             <a>
//               <span id="page"></span>
//             </a>
//           </div>
//           <div id="initialsection" >
//             {examing.questioninfo.map((info, key) => (
//               <div className="text-center my-1" key={key}>
//                 <h1>{info.Title}</h1>
//                 <p className="text-left">
//                   <a className="font-weight-bold text-dark">รายละเอียด: </a>
//                   <br></br>
//                   {info.Description_line_i}
//                 </p>
//                 <p className="text-left">
//                   <a className="font-weight-bold text-dark"></a>
//                   {info.Description_line_ii}
//                 </p>
//                 <p className="text-left">
//                   <a className="font-weight-bold text-dark"></a>
//                   {info.Description_line_iii}
//                 </p>
//                 <p className="text-left">
//                   <a className="font-weight-bold text-dark"></a>
//                   {info.Description_line_iv}
//                 </p>
//                 <p className="text-left">
//                   <a className="font-weight-bold text-dark"></a>
//                   {info.Description_line_v}
//                 </p>
//                 <p className="text-left">
//                   <a className="font-weight-bold text-dark"></a>
//                   {info.Description_line_vi}
//                 </p>
//                 <p className="text-left">
//                   <a className="font-weight-bold text-dark">จำนวนข้อสอบ </a>{" "}
//                   แบบปรนัยเลือกคําตอบ {info.NumberofQuestions} ข้อ
//                 </p>
//                 <p className="text-left">
//                   <a className="font-weight-bold text-dark">เวลาทดสอบ </a>
//                   {info.Duration} นาที
//                 </p>
//                 <p className="text-left">
//                   <a className="font-weight-bold text-dark">
//                     การเข้าทําข้อสอบ{" "}
//                   </a>
//                   <br></br>
//                   <a>
//                     1. คลิกเข้าแบบทดสอบ (Quiz) ที่ต้องสอบ <br></br>
//                   </a>
//                   <a>
//                     2. แสดงหน้ารายละเอียดการสอบ เช่น วันที่เปิด-ปิดข้อสอบ
//                     และระยะเวลาในการทําข้อสอบ<br></br>
//                   </a>
//                   <a>
//                     3. คลิกปุ่ม Start เพื่อเริ่มเข้าทําข้อสอบ<br></br>
//                   </a>
//                   <a>
//                     4. เริ่มทําข้อสอบตามเวลาที่กําหนด<br></br>
//                   </a>
//                   <a>
//                     5. เมื่อทําข้อสอบถึงข้อสุดท้าย และจะบันทึกการทําข้อสอบ
//                     คลิกปุ่ม Finish และ Submit all and finish<br></br>
//                   </a>
//                   <a>
//                     6. หากหมดเวลาในการทำแบบทดสอบ ระบบจะบันทึกคำตอบโดยอัตโนมัติ
//                     ถือว่าส่งและบันทึกข้อสอบเรียบร้อยแล้ว<br></br>
//                   </a>
//                 </p>
//                 <p className="text-left">
//                   <a className="font-weight-bold" style={{ color: "#2e7d32" }}>
//                     {" "}
//                     ระบบจะเปิดให้เริ่มสอบ ในวัน ที่ เดือน 2566
//                   </a>
//                 </p>
//               </div>
//             ))}
//           </div>
//           <Button
//             variant="contained"
//             id="start"
//             color="success"
//             onClick={handleOpen}
//             style={{
//               padding: "0.4rem 2.4rem",
//               fontSize: "1rem",
//               boxShadow: "unset",
//             }}
//           >
//             {" "}
//             เริ่มสอบ{" "}
//           </Button>
//           <Modal
//             open={openModal}
//             onClose={handleClose}
//             aria-labelledby="parent-modal-title"
//             aria-describedby="parent-modal-description"
//           >
//             <Box sx={{ ...Modalstyle, width: 300 }}>
//               <h2 id="parent-modal-title">ก่อนเริ่มทดสอบ</h2>
//               <p id="parent-modal-description">
//                 คุณมีเวลาในการทำแบบทดสอบ 60 นาที เมื่อเริ่มทำข้อสอบแล้ว
//                 เวลาจะนับถอยหลังทันทีโดยไม่สามารถหยุดชั่วคราวได้
//                 คุณจะต้องดำเนินการทดสอบให้แล้วเสร็จภายในเวลาที่กำหนด
//                 หากพร้อมที่จะทดสอบ ให้คลิกปุ่ม "เริ่มสอบ"
//               </p>
//               <div style={{ textAlign: "center" }}>
//                 <Button
//                   variant="contained"
//                   sx={{ my: 3 }}
//                   onClick={() => {
//                     startFnTimer(info.Duration);
//                   }}
//                   color="error"
//                   style={{
//                     marginRight: 15,
//                     padding: "0.5rem 2.5rem",
//                     fontSize: "1rem",
//                   }}
//                 >
//                   เริ่มสอบ
//                 </Button>
//                 <Button
//                   variant="outlined"
//                   onClick={handleClose}
//                   style={{
//                     padding: "0.42rem 2.3rem",
//                     borderColor: "#000",
//                     color: "#000",
//                   }}
//                 >
//                   Cancle
//                 </Button>
//               </div>
//             </Box>
//           </Modal>

//           <Modal
//             open={openModalinfo}
//             onClose={handleCloseinfo}
//             aria-labelledby="parent-modal-title"
//             aria-describedby="parent-modal-description"
//           >
//             <Box sx={{ ...Modalstyle, width: 300 }}>
//               <h2 id="parent-modal-title">คำชี้แจง</h2>
//               <p id="parent-modal-description">
//                 คุณสามารถทำการทดสอบได้ไม่จำกัดจำนวนครั้ง
//                 ระบบจะบันทึกคำตอบของคุณเฉพาะในครั้งแรกของการทดสอบ
//               </p>
//               <div style={{ textAlign: "center" }}>
//                 <Button
//                   variant="outlined"
//                   onClick={handleCloseinfo}
//                   style={{
//                     padding: "0.42rem 2.3rem",
//                     borderColor: "#000",
//                     color: "#000",
//                     marginBottom: "2em",
//                   }}
//                 >
//                   ฉันเข้าใจแล้ว
//                 </Button>
//               </div>
//             </Box>
//           </Modal>

//           <Modal
//             open={openModalinfoRetake}
//             onClose={handleCloseinfoRetake}
//             aria-labelledby="parent-modal-title"
//             aria-describedby="parent-modal-description"
//           >
//             <Box sx={{ ...Modalstyle, width: 300 }}>
//               <h2 id="parent-modal-title">คำชี้แจง</h2>
//               <p id="parent-modal-description">
//                 ระบบได้บันทึกคำตอบของคุณในครั้งแรกของการทดสอบเรียบร้อยแล้ว
//                 การทดสอบในครั้งนี้ระบบจะไม่ได้ทำการบันทึกคำตอบ
//                 คุณสามารถดูผลคะแนนการทำสอบในครั้งนี้ทันทีหลังจากกดส่งคำตอบ
//               </p>
//               <div style={{ textAlign: "center" }}>
//                 <Button
//                   variant="outlined"
//                   onClick={handleCloseinfoRetake}
//                   style={{
//                     padding: "0.42rem 2.3rem",
//                     borderColor: "#000",
//                     color: "#000",
//                     marginBottom: "2em",
//                   }}
//                 >
//                   ฉันเข้าใจแล้ว
//                 </Button>
//               </div>
//             </Box>
//           </Modal>

//           <Modal
//             open={openModalfinishconfirm}
//             onClose={handleClosefinishconfirm}
//             aria-labelledby="parent-modal-title"
//             aria-describedby="parent-modal-description"
//           >
//             <Box sx={{ ...Modalstyle, width: 300 }}>
//               <h2 id="parent-modal-title">ยืนยันการส่งคำตอบ</h2>
//               <p id="parent-modal-description">
//                 คุณตอบคำถามยังไม่ครบทุกข้อ หากต้องการส่ง ให้คลิกปุ่ม "ส่งคำตอบ"
//               </p>
//               <div style={{ textAlign: "center" }}>
//                 <Button
//                   variant="contained"
//                   sx={{ my: 3 }}
//                   onClick={handleSubmitConfirm}
//                   color="error"
//                   style={{
//                     marginRight: 15,
//                     padding: "0.5rem 2.5rem",
//                     fontSize: "1rem",
//                   }}
//                 >
//                   ส่งคำตอบ
//                 </Button>
//                 <Button
//                   variant="outlined"
//                   onClick={handleClosefinishconfirm}
//                   style={{
//                     padding: "0.42rem 2.3rem",
//                     borderColor: "#000",
//                     color: "#000",
//                   }}
//                 >
//                   Cancle
//                 </Button>
//               </div>
//             </Box>
//           </Modal>
//           <Modal
//             open={openModalfinish}
//             aria-labelledby="parent-modal-title-finish"
//             aria-describedby="parent-modal-description-finish"
//           >
//             <Box sx={{ ...Modalstyle, width: 300 }}>
//               <h2 id="parent-modal-title-finish">บันทึกคำตอบเรียบร้อยแล้ว</h2>
//               <p id="parent-modal-description-finish">
//                 ระบบบันทึกคำตอบของคุณเรียบร้อยแล้ว สามารถดูผลคะแนนสอบ คลิกปุ่ม
//                 "ดูผลคะแนน"
//               </p>
//               <div style={{ textAlign: "center" }}>
//                 <Button
//                   variant="outlined"
//                   sx={{ my: 3 }}
//                   href="/profile"
//                   style={{
//                     marginRight: 15,
//                     padding: "0.42rem 2.3rem",
//                     borderColor: "#000",
//                     color: "#000",
//                     fontSize: "1rem",
//                   }}
//                 >
//                   ดูผลคะแนน
//                 </Button>
//               </div>
//             </Box>
//           </Modal>
//           <form onSubmit={handleSubmit} >
//             {examing.questions.map((question, i) => (
//               <div
//                 className="question"
//                 style={{ display: "none" }}
//                 key={i}
//                 id={i}

//               >
//                 <FormControl>
//                   <a className="fw-5 fz-09">
//                     {getParagraph(question.description_line_i)}
//                   </a>
//                   <a className="fw-5 fz-09">
//                     {getParagraph(question.description_line_ii)}
//                   </a>
//                   <a className="fw-5 fz-09">
//                     {getParagraph(question.description_line_iii)}
//                   </a>
//                   <a className="fw-5 fz-09">
//                     {getParagraph(question.description_line_iv)}
//                   </a>
//                   <a className="fw-5 fz-09">
//                     {getParagraph(question.description_line_v)}
//                   </a>
//                   <img className="w-100" src={question.attachimglink}></img>
//                   <a
//                     style={{ fontSize: 12, fontStyle: "italic" }}
//                     className="fw-5 fz-09"
//                   >
//                     {question.attachref}
//                   </a>
//                   <FormLabel className="text-dark">
//                     <a className="FormLabel fw-5 fz-09">
//                       {i + 1}.{getQuestion(i)}
//                     </a>
//                   </FormLabel>
//                   <div className="question-info">
//                     <a className="text-danger"> {newcheckanswer.at(i)} </a>
//                   </div>
//                   <RadioGroup
//                     aria-labelledby="demo-controlled-radio-buttons-group"
//                     name="controlled-radio-buttons-group"
//                     onChange={(e) => {
//                       Result(e, i, question.id);
//                     }}
//                   >
//                     <FormControlLabel
//                       style={{ marginLeft: "5px" }}
//                       className="fw-5 "
//                       value={getChoiceValue(0, i)}
//                       disabled={inputdisable}
//                       control={
//                         <Radio
//                           sx={() => {
//                             arrangearr(i, "0");
//                           }}
//                         />
//                       }
//                       label={<>{getChoiceText(0, i)}</>}
//                     />
//                     <FormControlLabel
//                       style={{ marginLeft: "5px" }}
//                       className="fw-5 "
//                       value={getChoiceValue(1, i)}
//                       disabled={inputdisable}
//                       control={
//                         <Radio
//                           sx={() => {
//                             arrangearr(i, "0");
//                           }}
//                         />
//                       }
//                       label={<>{getChoiceText(1, i)}</>}
//                     />
//                     <FormControlLabel
//                       style={{ marginLeft: "5px" }}
//                       className="fw-5 "
//                       value={getChoiceValue(2, i)}
//                       disabled={inputdisable}
//                       control={
//                         <Radio
//                           sx={() => {
//                             arrangearr(i, "0");
//                           }}
//                         />
//                       }
//                       label={<>{getChoiceText(2, i)}</>}
//                     />
//                     <FormControlLabel
//                       style={{ marginLeft: "5px" }}
//                       className="fw-5 "
//                       value={getChoiceValue(3, i)}
//                       disabled={inputdisable}
//                       control={
//                         <Radio
//                           sx={() => {
//                             arrangearr(i, "0");
//                           }}
//                         />
//                       }
//                       label={<>{getChoiceText(3, i)}</>}
//                     />
//                   </RadioGroup>
//                 </FormControl>
//               </div>
//             ))}

//             <div
//               className="text-center"
//               style={{ display: "grid", justifyItems: "center" }}
//             >
//               <Button
//                 sx={{ mt: 3, mr: 1, mb: 0, px: 6, py: 1.4 }}
//                 id="sumitans"
//                 type="submit"
//                 style={{ display: "none" }}
//                 variant="contained"
//                 color="error"
//               >
//                 Finish
//               </Button>
//               <p
//                 className="text-danger"
//                 id="helperText"
//                 style={{ display: "none" }}
//               >
//                 {helperText}
//               </p>
//             </div>
//           </form>
//           <Button
//             variant="outlined"
//             id="btn_prev"
//             style={{
//               visibility: "hidden",
//               marginRight: "3em",
//               padding: "0.42rem 2.3rem",
//               borderColor: "#000",
//               color: "#000",
//             }}
//             sx={{
//               display: "flex",
//               position: "absolute",
//               left: { xs: "2%", sm: "2%", md: "5%", lg: "10%" },
//             }}
//             onClick={() => {
//               prevPage(current_page);
//             }}
//           >
//             ย้อนกลับ
//           </Button>
//           <Button
//             variant="contained"
//             id="btn_next"
//             color="success"
//             style={{
//               visibility: "hidden",
//               padding: "0.4rem 2.4rem",
//               fontSize: "1rem",
//               boxShadow: "unset",
//             }}
//             sx={{
//               display: "flex",
//               position: "absolute",
//               right: { xs: "2%", sm: "3%", md: "5%", lg: "10%" },
//             }}
//             onClick={() => {
//               nextPage(current_page);
//             }}
//           >
//             ข้อถัดไป
//           </Button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default System;
