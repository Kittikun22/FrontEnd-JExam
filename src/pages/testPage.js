import React, { useState, useEffect } from 'react';
import Axios from 'axios'

const MyComponent = () => {

    const [exam, setExam] = useState([])
    const [info, setInfo] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:8000/getTest').then((res) => {
            setExam(JSON.parse(res.data.exam));
            setInfo(JSON.parse(res.data.info));
        })
    }, [])

    console.log(exam);

    try {
        console.log(info[0].Category['SentenceCompletion']);

        if (exam && info) {
            console.log(info[0].Category);
            return (
                <div style={{ margin: 25 }}>
                    {info.map((val, key) => {
                        return (
                            <div key={key}>
                                <h2>{val.Title}</h2>
                                <p>{val.Description_line_i}</p>
                                <p>{val.Description_line_ii}</p>
                                <p>{val.Description_line_iii}</p>
                                <p>{val.Description_line_iv}</p>
                                <p>{val.Description_line_v}</p>
                                <p>เวลา : {val.Duration} นาที</p>
                                <p>จำนวนข้อ : {val.NumberofQuestions} ข้อ</p>
                            </div>
                        )
                    })}

                    {exam.map((val, key) => {
                        return (
                            <div key={key}>
                                <h3>{val.id}. {val.question}</h3>
                                {val.choice.map((val, key) => {
                                    return <>
                                        <p key={key}>
                                            {val.choicevalue} )
                                            {val.choicetext}
                                        </p>
                                    </>
                                })}
                                <h3 >Answer is : {val.Answer}</h3>
                                <h3 >Category is : {val.Category}</h3>
                            </div>
                        )
                    })}

                </div>
            );
        }
    } catch (error) {

    }
};

export default MyComponent;