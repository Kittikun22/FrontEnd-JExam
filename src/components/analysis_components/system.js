import "./system.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { pink,green, grey} from '@mui/material/colors';
import Button from '@mui/material/Button';
import { thaiexam } from '../takeanexam_components/questiondatanetsatthai';
import { englishexam } from '../takeanexam_components/questiondatanetsatenglish';
import { mathematicsexam } from '../takeanexam_components/questiondatanetsatmathematics';
import { scienceandtechnologyexam } from '../takeanexam_components/questiondatanetsatscienceandtechnology';
import { chemistryexam } from '../takeanexam_components/questiondatanetsatchemistry';
import { biologyexam } from '../takeanexam_components/questiondatanetsatbiology';
import { physicsexam } from '../takeanexam_components/questiondatanetsatphysics';
let examing; 

function System(subject) {
    const [userAuth, setUserAuth] = useState();
    if(!userAuth){
      setUserAuth(JSON.parse(localStorage.getItem("users")))
    }
    const [exam_id, setExamid] = useState();
    const initailExam =()=>{
    switch (subject.subject) {
        case 'thai':
          examing = thaiexam;
          setExamid(0);
            break;
        case 'english':
          examing = englishexam;
          setExamid(1);
            break;
        case 'mathematics':
          examing = mathematicsexam;
          setExamid(2);
            break;
        case 'scienceandtechnology':
          examing = scienceandtechnologyexam;
          setExamid(3);
            break;
        case 'chemistry':
          examing = chemistryexam;
          setExamid(4);
            break;
        case 'biology':
          examing = biologyexam;
          setExamid(5);
            break;
        default: 
        examing = physicsexam;
        setExamid(6);
    }
  }
  
  if(!examing){
  initailExam(subject);
  }    
  const [useranswer, setUseranswer] = React.useState([]);
  const updateAnswer = (userAnswer) => {
    setUseranswer(userAnswer);
    
  }
  const newexam = examing.questions;
  const [examarr, setExamarr] = React.useState([]);
  const [generateexam, setGenerateexam] = useState(false);
    const generateexamarr =() =>{
      for (let i = 0; i < newexam.length; i++) {
         let linkedquestion =newexam[i].numberoflinkedquestion;
         if (!linkedquestion){ 
         }else{  
            let j = 0;
            let l = i;
            if (j < linkedquestion) {
              if(j == 0){
                newexam[i].id              = examing.questions[l].linkedquestion[j].id;
                newexam[i].question        = examing.questions[l].linkedquestion[j].question;
                newexam[i].Answer          = examing.questions[l].linkedquestion[j].Answer;
                newexam[i].AnswerDescription          = examing.questions[l].linkedquestion[j].AnswerDescription;
                newexam[i].attachimglink        = examing.questions[l].linkedquestion[j].attachimglink;   
                newexam[i].AnswerDescriptionAttachImg        = examing.questions[l].linkedquestion[j].AnswerDescriptionAttachImg;              
                newexam[i].Category        = examing.questions[l].linkedquestion[j].Category;
                newexam[i].choice          = examing.questions[l].linkedquestion[j].choice;
                newexam[i].linkedquestionboolean     = true;
                newexam[i].linkedquestionindex       = j;
                j++
                i++
              }
              for (let k=1;k<linkedquestion;k++){
                const temparr = {};
                temparr.question        = examing.questions[l].linkedquestion[j].question;
                temparr.id              = examing.questions[l].linkedquestion[j].id;
                temparr.choice          = examing.questions[l].linkedquestion[j].choice;
                temparr.Answer          = examing.questions[l].linkedquestion[j].Answer;
                temparr.AnswerDescription          = examing.questions[l].linkedquestion[j].AnswerDescription;
                temparr.attachimglink          = examing.questions[l].linkedquestion[j].attachimglink;
                temparr.AnswerDescriptionAttachImg          = examing.questions[l].linkedquestion[j].AnswerDescriptionAttachImg;
                temparr.linkedquestionboolean     = true;
                temparr.linkedquestionindex       = j;

                let m = false; 
                if(!m){
                const position = l+k;
                newexam.splice(position,0,temparr);
                    m = true;
                }                                              
                j++
                i++
                if((linkedquestion-k)==1){
                  i--
                }
          }                                         
          }
        }    
       }
      setExamarr(newexam);
      setGenerateexam(true)
     }

     const ContentAlign = (questionStr) => {
      let images =[];
          let src =[];
          let height=[];
          let booleanheight=[];
          let booleanpx=[];
          let i = 0;
          while ((i = questionStr.indexOf("<img", i)) !== -1) {
            const start = i + 5;
            const end = questionStr.indexOf("</img>", start)-1;
            const attributes = questionStr.slice(start, end);  //.trim()
            images.push(attributes);
            
            let ordersubstringsrcfirst = attributes.indexOf('src=')+5 ;
            let ordersubstringsrcsecond = attributes.indexOf('"',10) ;
            var substringsrc = attributes.substring(
                ordersubstringsrcfirst ,
                ordersubstringsrcsecond
                        );
            src.push(substringsrc); 
            let middlepositionheight = attributes.indexOf('height=');
            let middlepositionwidth = attributes.indexOf('width=');

            let ordersubstringheightfirst;
            let attributessliced;
            if (middlepositionheight!== -1) {
                booleanheight.push(true);
                attributessliced = attributes.slice(middlepositionheight, questionStr.length);
                ordersubstringheightfirst = attributessliced.indexOf('height=') +8 ;
            }else if(middlepositionwidth!== -1){
                booleanheight.push(false);
                attributessliced = attributes.slice(middlepositionwidth, questionStr.length);
                ordersubstringheightfirst = attributessliced.indexOf('width=') +7 ;
            }

            let ordersubstringheightsecond
            if (attributessliced.indexOf('px')!== -1) {
              booleanpx.push(true);
              ordersubstringheightsecond = attributessliced.indexOf('px') ;
            }else if(attributessliced.indexOf('%')!== -1){
              booleanpx.push(false);
              ordersubstringheightsecond = attributessliced.indexOf('%') ;
            }

            let substringheight = attributessliced.substring(
                ordersubstringheightfirst,
                ordersubstringheightsecond
                        );
            height.push(substringheight); 
            i = end + 6;
          }
  
          const parts = questionStr.split(/<img.*?<\/img>/);
          const partslength = parts.length;
          const checkpartlastindex =(i)=>{
            if (i!=(partslength-1)) {
                if(booleanheight[i] === true){
                    if (booleanpx[i] === true) {
                      return (<> <img src={src[i]} height={height[i]+'px'} key={i}/> </>);
                    } else {
                      return (<> <img src={src[i]} height={height[i]+'%'} key={i}/> </>);
                    }
                } else {
                  if (booleanpx[i] === true) {
                  return (<> <img src={src[i]} width={height[i]+'px'} key={i}/> </>);
                  } else {
                    return (<> <img src={src[i]} width={height[i]+'%'} key={i}/> </>);
                  }
                }

            } else {
              return (<> </>);
            }
          }
          
          return (
            <>
              {parts.map((part, i) => (
                <>
                  {strfindtag(part)}
                  {checkpartlastindex(i)}
                </>
              ))} 
            </>
          );
    }
  
    const strfindtag = (Str) =>{
      const parts = Str.split(/(<(?:sub|sup|fraction|overline|br|tab|2tab|3tab|space|2space|3space|4space|5space|6space)>.*?<\/(?:sub|sup|fraction|overline|br|tab|2tab|3tab|space|2space|3space|4space|5space|6space)>)/);
        return parts.map((part) => {
        if (part.startsWith('<sub>') && part.endsWith('</sub>')){
          return <sub>{part.slice(5, -6)}</sub>;
        } else if (part.startsWith('<sup>') && part.endsWith('</sup>')){
          return <sup>{part.slice(5, -6)}</sup>;
        } else if (part.startsWith('<fraction>') && part.endsWith('</fraction>')){
                  const fractionStr = part.slice(10, -11);
                  const fractionArr =  fractionStr.split("|");
                  return <>
                  <div className="inline-block">
                    <div className="inline-grid">
                      <div className="top">{fractionArr[0]}</div>
                      <div className="bottom">{fractionArr[1]}</div>
                    </div> 
                </div>
              </>;       
        }  else if (part.startsWith('<overline>') && part.endsWith('</overline>')){
          return <><div className="overline">{part.slice(10, -11)}</div> </>;
        } else if (part.startsWith('<br>') && part.endsWith('</br>')) {
          return <><br></br>{part.slice(4, -5)}</>;
        } else if (part.startsWith('<tab>') && part.endsWith('</tab>')) {
          return <> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{part.slice(5, -6)}</>;
        } else if (part.startsWith('<2tab>') && part.endsWith('</2tab>')) {
          return <> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{part.slice(6, -7)}</>;
        } else if (part.startsWith('<3tab>') && part.endsWith('</3tab>')) {
          return <> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{part.slice(6, -7)}</>;
        } else if (part.startsWith('<space>') && part.endsWith('</space>')){
          return <>&nbsp;{part.slice(7, -8)}</>;
        } else if (part.startsWith('<2space>') && part.endsWith('</2space>')){
          return <>&nbsp;&nbsp;{part.slice(8, -9)}</>;
        } else if (part.startsWith('<3space>') && part.endsWith('</3space>')){
          return <>&nbsp;&nbsp;&nbsp;{part.slice(8, -9)}</>;
        } else if (part.startsWith('<4space>') && part.endsWith('</4space>')){
          return <>&nbsp;&nbsp;&nbsp;&nbsp;{part.slice(8, -9)}</>;
        } else if (part.startsWith('<5space>') && part.endsWith('</5space>')){
          return <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{part.slice(8, -9)}</>;
        } else if (part.startsWith('<6space>') && part.endsWith('</6space>')){
          return <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{part.slice(8, -9)}</>;
        } 
        return <>{part}</>;
      });
    }
  
    const getChoiceText = (indexofchoiceinlinkedquestion,indexofquestion) => {
      if(generateexam != false){      
        if (examing.questions[indexofquestion].choice[indexofchoiceinlinkedquestion].choiceimg == true) {
          let imgSrc = examing.questions[indexofquestion].choice[indexofchoiceinlinkedquestion].choicetext ;
          let imgHeight = examing.questions[indexofquestion].choice[indexofchoiceinlinkedquestion].imgheight ;
          return (<img src={imgSrc} height={imgHeight}/>); 
        }else{
          const choiceStr = examing.questions[indexofquestion].choice[indexofchoiceinlinkedquestion].choicetext;
          return (<>{ContentAlign(choiceStr)}</>);
        }
      }
    }

    const getChoiceValue = (indexofchoiceinlinkedquestion,indexofquestion) => {
      if(generateexam != false){
        return (examing.questions[indexofquestion].choice[indexofchoiceinlinkedquestion].choicevalue);
      }
    }

    const getQuestion = (indexofquestion) => {
      if(generateexam != false){
        let Str = examing.questions[indexofquestion].question;
        return (<>{ContentAlign(Str)}</>);
      }
    }

  const answercheck = (i,value) => {
    const useranswereachquestion = useranswer['no.'+(i+1)]
        const error = "error";
        const success = "success"
         if (useranswereachquestion == newexam.at(i).Answer) {
          return (success);
        } else if(value == newexam.at(i).Answer) {
          return (success);
        }else{
          return (error);
        }
  }
  const answerchoice = (i,value) => {
    const useranswereachquestion = useranswer['no.'+(i+1)]
        const defaultcolor = {color:grey[700]};
        const error = {color:pink[800]};
        const success = {color: green[800]};
      if(value == newexam.at(i).Answer){
        return (success);
      }else if(useranswereachquestion == value){
        return (error);
      }else{
        return (defaultcolor);
      }  
  }
  const checkuseranswer = (i,value) => {
    const useranswereachquestion = useranswer["no."+(i+1)];
    if(value == useranswereachquestion){
      return value;
    }else{
      return (useranswer['no.'+(i+1)]);
    }
  }
  const styletext = (i,value) => {
    const useranswereachquestion = useranswer['no.'+(i+1)]
    if(value == newexam.at(i).Answer){
      return { marginLeft: "5px",color:green[800]};
    }else if(useranswereachquestion == value){
      return { marginLeft: "5px",color:pink[800]};
    }else{
      return { marginLeft: "5px",color:grey[800]};
    }    
  }
  const [current_page, setPage] = React.useState(1);
  const records_per_page = 5;   
  const [sendanswer, setSent] = React.useState(false);
  
  const prevPage = (current_page) => {
    if (current_page > 1) {
      setPage(current_page-1);
      changePage(current_page-1);
      //window.scroll(x-coord, y-coord)
      window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
       });
    }
  }
  const nextPage = (current_page) => {
    document.getElementById('initialsection').style.display = "none";
    if (current_page < numPages()) {
      setPage(current_page+1);
      changePage(current_page+1);
      //window.scroll(x-coord, y-coord)
      window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
       });
    }
  }
  const displayquestion = (i) => {
    if(i <records_per_page){
      return { display: "block"};
    }else{
      return { display: "none"};
    }  
  }
  const changePage = (page) =>{
      var btn_next = document.getElementById("btn_next");
      var btn_prev = document.getElementById("btn_prev");
      var page_span = document.getElementById("page");
      var sumitans = document.getElementById("sumitans");
      if (page < 1) page = 1; 
      if (page > numPages()) page = numPages();
  
      for(var i =0; i<examarr.length ;i++){
        document.getElementById(i).style.display = "none";
      }
      for (var i = (page-1) * records_per_page; i < (page * records_per_page) && i < examarr.length; i++) {
          document.getElementById(i).style.display = "block";
      }          
      if (page == 1) {
          btn_prev.style.visibility = "hidden";
          document.getElementById('initialsection').style.display = "block";
      } else {
          btn_prev.style.visibility = "visible";
      }
  
      if (page == numPages()) {
          btn_next.style.visibility = "hidden";
      } else {
          btn_next.style.visibility = "visible";
      }
  }
  const numPages = () => {
    {
      return Math.ceil(examarr.length / records_per_page);
    }
  }
  const getParagraph = (Str) => {
    if (Str) {
      return (<>{ContentAlign(Str)}</>);
    }
  }

  const getParagraphAnswer = (Str) => {
    return (<>{ContentAlign(Str)}</>);
  }
/*
  const getSupSubfraction = (fractionArr) => {
    if (fractionArr) {
      const parts = fractionArr.split(/(<(?:sub|sup)>.*?<\/(?:sub|sup)>)/);
      return parts.map((part) => {
      if (part.startsWith('<sub>') && part.endsWith('<sub>')) {
        return <sub>{part.slice(5, -6)}</sub>;
      } else if (part.startsWith('<sup>') && part.endsWith('<sup>')) {
        return <sup>{part.slice(5, -6)}</sup>;
      }
      return <>{part}</>;
    });
    }
  }
*/
  useEffect(() => {
      Axios.post('http://localhost:3001/getAnswer', {
        user_id:userAuth.user_id,
        exam_id:exam_id,
      }).then((res) => {
            if (res.status === 200) {
              setUseranswer(JSON.parse(res.data[0].answer));
            }
           generateexamarr();
      })
    
    
    },[])
  return (
    <div className="System container">
      <div className="System-Question-Haeder">
      
      </div>
      <div className="System-Question-Body">
      
        {examing.questioninfo.map((info,key) => 
                  <div className="text-center my-1" key={key}>
                  <h2>{info.Title}</h2>
                    <div id="initialsection">
                      <h4 className="text-left margin-block-05" style={{fontWeight:'300'}}><a className="font-weight-bold text-dark">รายละเอียด:</a>{info.Description_line_i}</h4>
                      <h4 className="text-left margin-block-05" style={{fontWeight:'300'}}>{info.Description_line_ii}</h4>
                      <h4 className="text-left margin-block-05" style={{fontWeight:'300'}}>{info.Description_line_iii}</h4>
                      <h4 className="text-left margin-block-05" style={{fontWeight:'300'}}><a className="font-weight-bold text-dark">จำนวนข้อสอบ แบบปรนัยเลือกคําตอบ </a>{info.NumberofQuestions} ข้อ</h4>
                      <h4 className="text-left margin-block-05" style={{fontWeight:'300'}}><a className="font-weight-bold text-dark">เวลาทดสอบ</a> {info.Duration} นาที</h4>
                      <br></br>
                    </div>
                </div>
        )}
      
      {
            examarr.map((question, i) =>  //style={displayquestion(i,'b')}
                  <div className="question" style={displayquestion(i)} key={i} id={i} >
                      <FormControl>
                      <a className="fw-5 fz-09">{getParagraph(question.description_line_i)}</a>
                        <a className="fw-5 fz-09">{getParagraph(question.description_line_ii)}</a>
                        <a className="fw-5 fz-09">{getParagraph(question.description_line_iii)}</a>
                        <a className="fw-5 fz-09">{getParagraph(question.description_line_iv)}</a>
                        <a className="fw-5 fz-09">{getParagraph(question.description_line_v)}</a>
                        <img className="w-100 px-5" src={question.attachimglink}></img>
                        <a style={{fontSize:12,fontStyle: 'italic'}} className="fw-5 fz-09" >{question.attachref}</a>
                        <FormLabel className="text-dark"><a className="FormLabel fw-5 fz-09">{i+1}.{getQuestion(i)}</a></FormLabel>
                        <div className="question-info">  
                        
                        </div>

                        <RadioGroup
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          name="controlled-radio-buttons-group"
                          value={checkuseranswer(i,'a')}
                          
                        >  
                          <FormControlLabel style={styletext(i,'a')} className="fw-5 " value={getChoiceValue(0,i)} control={<Radio color={answercheck(i,'a')} sx={answerchoice(i,'a')}/>} label={<>{getChoiceText(0,i)}</>}/>
                        </RadioGroup>
                        <RadioGroup
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          name="controlled-radio-buttons-group"
                          value={checkuseranswer(i,'b')}
                        >           
                          <FormControlLabel style={styletext(i,'b')} className="fw-5 " value={getChoiceValue(1,i)}  control={<Radio color={answercheck(i,'b')} sx={answerchoice(i,'b')}/>} label={<>{getChoiceText(1,i)}</>}/>
                        </RadioGroup>
                        <RadioGroup
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          name="controlled-radio-buttons-group"
                          value={checkuseranswer(i,'c')}
                          
                        > 
                          <FormControlLabel style={styletext(i,'c')} className="fw-5 " value={getChoiceValue(2,i)} control={<Radio color={answercheck(i,'c')} sx={answerchoice(i,'c')}/>} label={<>{getChoiceText(2,i)}</>}/>
                        </RadioGroup>
                        <RadioGroup
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          name="controlled-radio-buttons-group"
                          value={checkuseranswer(i,'d')}
                          
                        >      
                          <FormControlLabel style={styletext(i,'d')} className="fw-5 " value={getChoiceValue(3,i)} control={<Radio color={answercheck(i,'d')} sx={answerchoice(i,'d')}/>} label={<>{getChoiceText(3,i)}</>}/>
                        </RadioGroup>
                        <RadioGroup
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          name="controlled-radio-buttons-group"
                          value={checkuseranswer(i,'e')}
                        > 
                        </RadioGroup>
                      </FormControl>
                      <br></br>
                      <a className="fw-7 fz-09">เฉลยอย่างละเอียด</a>
                      <br></br>
                      <a className="fw-5 fz-09">{getParagraphAnswer(question.AnswerDescription)}</a>
                      <img className="w-100 px-5" src={question.AnswerDescriptionAttachImg}></img>
                      <br></br><br></br>
                  </div>    
            )
          }
      </div>
      <Button variant="outlined" id="btn_prev" 
      style={{visibility :"hidden", marginRight:'3em', padding:'0.42rem 2.3rem',borderColor:'#000',color:'#000'}} 
      sx={{
            display: 'flex',
            position: 'absolute',
            left: { xs:'2%',sm:'2%',md:'5%',lg:'10%' }
            }} 
      onClick={() => {prevPage(current_page)}}>ย้อนกลับ</Button>
      <Button variant="contained"  id="btn_next" color="success" style={{visibility :"visible",padding:'0.4rem 2.4rem',fontSize: '1rem',boxShadow:'unset'}}
      sx={{
        display: 'flex',
        position: 'absolute',
        right: { xs:'2%',sm:'3%',md:'5%',lg:'10%' }
        }} 
      onClick={() => {nextPage(current_page)}}>ข้อถัดไป</Button>
</div>
  )
}

export default System;
